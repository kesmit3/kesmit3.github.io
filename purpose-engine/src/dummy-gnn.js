// dummy-gnn.js – Simulated GNN for Purpose Engine Classroom Demo
// Maps student career dreams → today's lesson relevance

const gnnGraph = {
  careers: {
    "Sustainable Design Director": {
      keySkills: ["material ratios", "eco-innovation", "spatial reasoning", "design", "sustainability"],
      whyMatters: "creating energy-efficient buildings and fighting climate change"
    },
    "Healthcare Professional": {
      keySkills: ["biology", "analysis", "data interpretation", "patient care"],
      whyMatters: "diagnosing conditions and saving lives in hospitals"
    },
    "Engineer": {
      keySkills: ["physics", "ratios", "design", "innovation", "modeling"],
      whyMatters: "building real-world systems like rockets, bridges, or electric vehicles"
    },
    "Entrepreneur": {
      keySkills: ["economics", "risk assessment", "creative problem-solving", "modeling"],
      whyMatters: "calculating business viability for your own startup ideas"
    }
  },
  // Today's lesson – hardcode for demo; in real version would come from LMS
  currentLesson: "Chemistry Ratios",
  lessonObjectives: ["Calculate mixtures and proportions", "Understand material composition"],
  lessonTags: ["ratios", "mixtures", "proportions", "material science", "chemistry"]
};

function computeWhyItMatters(careerInput) {
  if (!careerInput.trim()) {
    return {
      reframed: "Enter a dream career to see how today's lesson connects!",
      alignment: 0,
      discussionStarters: []
    };
  }

  // Fuzzy match career (case insensitive, partial match)
  const careerKey = Object.keys(gnnGraph.careers).find(key =>
    key.toLowerCase().includes(careerInput.toLowerCase()) ||
    careerInput.toLowerCase().includes(key.toLowerCase())
  ) || "Sustainable Design Director"; // fallback to Maya example

  const career = gnnGraph.careers[careerKey];

  // Dummy "GNN propagation": count overlapping skills/tags
  const matches = career.keySkills.filter(skill =>
    gnnGraph.lessonTags.some(tag => skill.toLowerCase().includes(tag) || tag.includes(skill.toLowerCase()))
  );
  const alignment = Math.round((matches.length / career.keySkills.length) * 100) || 55;

  const reframedLesson = `For someone aiming to be a ${careerKey}, today's "${gnnGraph.currentLesson}" builds **${matches[0] || "core skills"}** needed to ${career.whyMatters}.`;

  const discussionStarters = [
    `How might calculating ratios help you design better sustainable buildings?`,
    `What part of this lesson feels most useful for your future?`,
    `If we reframed tomorrow's lesson the same way, what would you want to see?`
  ];

  return {
    reframed: reframedLesson,
    alignment,
    discussionStarters
  };
}

// Export for use in HTML
window.computeWhyItMatters = computeWhyItMatters;