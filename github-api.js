// GitHub API integration functions
const GITHUB_API_BASE = 'https://api.github.com';
const TIMELINE_PATH = 'timeline.html';

async function fetchTimelineFile() {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${process.env.GITHUB_USERNAME}/${process.env.GITHUB_REPO}/contents/${TIMELINE_PATH}`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const data = await response.json();
    // Decode content from base64
    return {
      content: atob(data.sha),
      sha: data.sha
    };
  } catch (error) {
    console.error('Error fetching timeline:', error);
    throw error;
  }
}

async function updateTimelineFile(newContent, sha, commitMessage) {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${process.env.GITHUB_USERNAME}/${process.env.GITHUB_REPO}/contents/${TIMELINE_PATH}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: commitMessage,
          content: btoa(newContent),
          sha: sha
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating timeline:', error);
    throw error;
  }
}

function insertEventIntoTimeline(currentContent, eventData) {
  // Convert event data into HTML
  const eventHtml = `
                <div class="event ${eventData.eventType}">
                    <p>${eventData.eventName}</p>
                    <p class="team">For: ${eventData.audience}</p>
                    <p class="team">Organized by: ${eventData.host}</p>
                </div>`;

  // Find the correct month section
  const monthRegex = new RegExp(`<h2>${eventData.month}</h2>`);
  const monthPosition = currentContent.search(monthRegex);
  
  if (monthPosition === -1) {
    throw new Error(`Month ${eventData.month} not found in timeline`);
  }

  // Find the end of the events div for this month
  const contentAfterMonth = currentContent.slice(monthPosition);
  const closingDivPosition = contentAfterMonth.indexOf('</div>');
  
  // Insert the new event before the closing div
  const insertPosition = monthPosition + closingDivPosition;
  
  return currentContent.slice(0, insertPosition) + eventHtml + currentContent.slice(insertPosition);
}

export { fetchTimelineFile, updateTimelineFile, insertEventIntoTimeline };
