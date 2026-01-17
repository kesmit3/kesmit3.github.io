# Purpose Engine — Architecture & File Structure Index

## 📋 Executive Summary

The Purpose Engine is an AI-powered educational platform that bridges daily schoolwork with students' personal career visions. This document outlines the complete architecture, file structure, and feature inventory for the multi-page HTML implementation.

---

## 🎨 Design System

### Brand Colors (Uplift Education)

| Token | Hex | Usage |
|-------|-----|-------|
| `--teal` | `#00838F` | Primary brand, CTAs, active states |
| `--teal-dark` | `#006064` | Gradients, hover states |
| `--teal-light` | `#4DB6AC` | Highlights, badges |
| `--teal-glow` | `rgba(0,131,143,0.3)` | Box shadows, glows |
| `--orange` | `#FF6F00` | Accent, alerts, engagement |
| `--orange-light` | `#FFB74D` | Secondary accent |
| `--navy` | `#0D1421` | Text, dark backgrounds |
| `--navy-light` | `#1a2332` | Cards on dark mode |
| `--success` | `#10B981` | Celebrations, wins, positive |
| `--warning` | `#F59E0B` | Needs attention, alerts |
| `--danger` | `#EF4444` | Errors, critical alerts |
| `--purple` | `#8B5CF6` | AI features, RTCC, events |
| `--pink` | `#EC4899` | AI accents, gradients |

### Gray Scale

| Token | Hex | Usage |
|-------|-----|-------|
| `--gray-50` | `#F8FAFC` | Page backgrounds |
| `--gray-100` | `#F1F5F9` | Card backgrounds, dividers |
| `--gray-200` | `#E2E8F0` | Borders, lines |
| `--gray-300` | `#CBD5E1` | Disabled states |
| `--gray-400` | `#94A3B8` | Placeholder text |
| `--gray-500` | `#64748B` | Secondary text |
| `--gray-600` | `#475569` | Body text |
| `--gray-700` | `#334155` | Headers (light mode) |
| `--gray-800` | `#1E293B` | Primary text |
| `--gray-900` | `#0F172A` | Strongest text |

### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Primary | Plus Jakarta Sans | 300-800 | Body |
| Display | Instrument Serif | 400, italic | Hero headings (optional) |
| Code/Data | System monospace | 500 | Stats, IDs |

### Shadows

```css
--card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
--card-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
```

### Border Radius Scale

| Size | Value | Usage |
|------|-------|-------|
| `sm` | `6px` | Small buttons, tags |
| `md` | `10px` | Buttons, inputs |
| `lg` | `12px` | Cards |
| `xl` | `16px` | Large cards |
| `2xl` | `20px` | Hero cards |
| `full` | `9999px` | Pills, avatars |

---

## 📁 Proposed File Structure

```
purpose-engine/
├── index.html                    # Landing / Marketing page
├── pages/
│   ├── architecture.html         # System integration diagram
│   ├── problem.html              # The Problem & Solution overview
│   ├── student-dashboard.html    # Student-facing dashboard
│   ├── purpose-bridge.html       # Assignment transformation demo
│   ├── future-self.html          # Future Self AI conversation
│   ├── educator-dashboard.html   # Teacher/Counselor view (MAIN)
│   ├── admin-dashboard.html      # Campus/District admin view
│   └── login.html                # Authentication (placeholder)
│
├── css/
│   ├── variables.css             # CSS custom properties
│   ├── base.css                  # Reset, typography, body
│   ├── components.css            # Buttons, cards, badges, forms
│   ├── navigation.css            # Header, sidebar, nav links
│   ├── layouts.css               # Grid systems, containers
│   └── animations.css            # Keyframes, transitions
│
├── js/
│   ├── navigation.js             # View switching, routing
│   ├── data.js                   # Sample data models
│   ├── components.js             # Reusable UI functions
│   ├── charts.js                 # Progress bars, visualizations
│   └── modals.js                 # Modal management
│
├── assets/
│   ├── images/
│   │   └── uplift-logo.svg
│   └── icons/
│       └── (emoji or SVG icons)
│
└── docs/
    ├── architecture.md           # This file
    ├── data-models.md            # Data structure specs
    └── user-flows.md             # Journey maps
```

---

## 📊 Data Models

### Student Profile (Central Scorecard)

```javascript
const studentProfile = {
  // Identity
  id: "MCH-2025-1847",
  name: "Maya Chen",
  grade: "11th Grade",
  campus: "Uplift Hampton Preparatory",
  
  // Purpose Points
  totalPoints: 67,
  
  // From PowerSchool
  attendance: {
    present: 87,
    absent: 4,
    tardy: 3,
    rate: "93%",
    lastAbsent: "Jan 10"
  },
  gpa: 3.4,
  
  // From Schoology LMS
  assignments: {
    completed: 23,
    missing: 2,
    upcoming: 5,
    completionRate: "92%",
    missingDetails: [
      { name: "Chemistry Lab Report #6", class: "Chemistry", dueDate: "Jan 14", daysLate: 3 }
    ]
  },
  
  // From Schoolinks
  careerInterests: ["Sustainable Architecture", "Environmental Engineering"],
  collegeList: ["UT Austin", "Texas A&M", "Rice University"],
  rtccCounselor: "Ms. Patterson",
  careerPathway: "Architecture & Construction → Green Building",
  
  // From YouScience
  aptitudes: [
    { name: "Spatial Reasoning", score: 94, percentile: 96 },
    { name: "Inductive Logic", score: 87, percentile: 89 }
  ],
  
  // AI-Synthesized
  purposeThemes: [
    { name: "Creative Technology", icon: "🎨", color: "#E86B6B", strength: 85 },
    { name: "Environmental Science", icon: "🌱", color: "#4CAF50", strength: 72 }
  ],
  
  goal: "I want to become a Sustainable Design Director who creates buildings that heal the planet.",
  
  // AI Insights (Soft Memory - requires validation)
  aiInsights: [
    { 
      type: "celebration", 
      text: "Connected chemistry to sustainability unprompted", 
      confidence: 0.85, 
      validated: true,
      source: "AI Observed",
      date: "Jan 15"
    },
    { 
      type: "concern", 
      text: "2 missing assignments + 2 absences this week", 
      confidence: 0.92, 
      validated: false,
      source: "PowerSchool + Schoology",
      date: "Jan 16"
    }
  ],
  
  // Events & Experiences
  events: [
    {
      id: "evt-001",
      title: "Tesla Gigafactory Tour",
      type: "site-visit",
      date: "2025-01-12",
      source: "Schoolinks",
      feedbackStatus: "partial", // none | partial | complete
      feedback: [
        { author: "Maya Chen", role: "student", text: "...", sentiment: ["engagement", "chemistry-connection"] },
        { author: "Ms. Patterson", role: "counselor", text: "...", sentiment: ["career-aligned"] }
      ]
    }
  ],
  
  // Journey History
  activityHistory: [
    { grade: "6th", points: 7.7, activities: ["Science Fair: 3rd Place"] },
    { grade: "11th", points: 18, activities: ["AP Environmental Science", "AI Co-Founder Capstone"] }
  ]
};
```

### Integration Sources

```javascript
const integrationSources = {
  powerschool: { 
    name: "PowerSchool", 
    icon: "📊", 
    color: "#1976D2", 
    status: "live",
    provides: ["attendance", "grades", "gpa", "demographics"]
  },
  schoology: { 
    name: "Schoology LMS", 
    icon: "📚", 
    color: "#7B1FA2", 
    status: "live",
    provides: ["assignments", "submissions", "coursework"]
  },
  schoolinks: { 
    name: "Schoolinks", 
    icon: "🎯", 
    color: "#388E3C", 
    status: "live",
    provides: ["careerInterests", "collegeList", "events", "siteVisits"]
  },
  youscience: { 
    name: "YouScience", 
    icon: "🧠", 
    color: "#F57C00", 
    status: "synced",
    provides: ["aptitudes", "careerMatches"]
  }
};
```

---

## 📄 Page Inventory & Features

### 1. `index.html` — Landing Page
**Audience:** Visitors, decision-makers
**Purpose:** Marketing, value proposition
**Key Sections:**
- Hero with problem statement
- Three pillars (Purpose Engine, Future Self, AI Co-Founder)
- Integration diagram preview
- Testimonials / Stats
- CTA to demo or login

---

### 2. `architecture.html` — System Integration View
**Audience:** Administrators, IT directors
**Purpose:** Show how data flows between systems
**Key Features:**
- Animated integration diagram
- Data source cards (PowerSchool, LMS, Schoolinks, YouScience)
- Central "Local AI Engine" visualization
- Output features (Purpose Engine, Future Self, Early Warning)
- "What AI Sees" example with Maya

---

### 3. `problem.html` — The Problem & Solution
**Audience:** All stakeholders
**Purpose:** Explain the motivation gap
**Key Features:**
- Hero: "Motivation Collapses When Work Feels Disconnected"
- Before/After comparison cards
- Statistics (73% feel disconnected, 2.3x engagement)
- Three Pillars explanation cards

---

### 4. `student-dashboard.html` — Student View
**Audience:** Students
**Purpose:** Personal dashboard, motivation hub
**Key Features:**
- Greeting with name
- Purpose Points total (prominent)
- Purpose Card (themes with progress bars)
- Alert banner (missing assignments)
- Quick stats (attendance, assignment completion)
- Recent Wins (celebration feed)
- "Talk to Future Self" CTA card
- Journey visualization (bar chart by grade)
- Quick Actions (Why does this matter?, Log Experience, Explore Careers)

---

### 5. `purpose-bridge.html` — Assignment Transformation
**Audience:** Students, Teachers (demo)
**Purpose:** Show how assignments get "re-skinned"
**Key Features:**
- Student context card (name, themes, interests)
- Side-by-side: Traditional vs Purpose Engine
- Transform button (interactive toggle)
- Learning objectives badge (Same TEKS, Same objectives, 2.3x engagement)
- Multiple example transformations

---

### 6. `future-self.html` — Future Self AI Chat
**Audience:** Students
**Purpose:** Mentorship simulation
**Key Features:**
- Avatar/header (Future Self persona)
- Chat interface
- System message (connection established)
- Pre-built sample questions
- Message input
- Conversation history
- Context: "10 years from now, Sustainable Design Director"

---

### 7. `educator-dashboard.html` — Teacher/Counselor View ⭐ (PRIMARY)
**Audience:** Teachers, Counselors, Staff
**Purpose:** Class overview, student insights, action center
**Key Features:**

**Header Section:**
- Class name, teacher name, student count
- AI insights pending badge
- Action buttons (Transform Assignment, Class Analytics)

**Integration Status Bar:**
- Live data indicators for each source

**Class Roster (Compact List):**
- Student rows with avatars
- Goal preview
- Mini-badges (alert, celebration, event)
- Purpose Points
- Filter buttons (All, Needs Support, Celebrate, Recent Events)
- Click to select → loads detail panel

**Student Detail Panel (3-column grid):**

*Column 1 — Profile & Goal:*
- Student hero (avatar, name, grade, points)
- Their Goal (quoted statement)
- Purpose Themes (progress bars)
- RTCC Section (counselor, pathway, college list, last meeting)

*Column 2 — Celebrations:*
- Areas for Celebration (wins, positive insights)
- Each with "Celebrate" action button
- Source tags (AI Observed, Teacher Validated, System)

*Column 3 — Support & Inquiry:*
- Areas for Inquiry (concerns, patterns)
- Each with "Check In" / "Ask About" action
- Suggested Learning Modules (AI recommendations)

**Events Section (Full Width):**
- Recent Events & Site Visits
- AI monitors Schoolinks badge
- Event cards with:
  - Icon, title, date, source
  - Feedback status (Needs Input / Complete)
  - Feedback Gestalt (collected feedback from multiple contributors)
  - Quick Feedback Form (teacher contribution)
  - "Anyone can contribute" note

**Modals:**
- Check-In Modal (conversation starters, context from goal)
- Celebrate Modal (share with student, add note)
- Feedback Submission confirmation

---

### 8. `admin-dashboard.html` — Admin View (Future)
**Audience:** Campus principals, district administrators
**Purpose:** Aggregate insights, trends, rollout status
**Key Features:**
- Campus-wide Purpose Points trends
- Integration health status
- Top performers / At-risk students
- AI insight volume metrics
- Teacher adoption rates

---

### 9. `login.html` — Authentication (Placeholder)
**Audience:** All users
**Purpose:** Role-based routing
**Key Features:**
- Uplift branding
- Email/password or SSO buttons
- Role selection (Student, Teacher, Counselor, Admin)
- "Demo Mode" bypass

---

## 🔀 User Flows

### Teacher Daily Flow
```
Login → Educator Dashboard → 
  ↳ See "3 insights pending" badge
  ↳ Click "Needs Support" filter
  ↳ Select Maya Chen
  ↳ See detail panel with concern
  ↳ Click "Check In" → Modal with conversation starters
  ↳ Mark as Checked In
  ↳ See "Recent Events" → Tesla Tour needs feedback
  ↳ Add quick feedback
  ↳ Done
```

### Student Daily Flow
```
Login → Student Dashboard →
  ↳ See Purpose Points + Recent Wins
  ↳ See alert: "2 missing assignments"
  ↳ Click "Why does this matter?" on Chemistry
  ↳ View transformed assignment (Purpose Bridge)
  ↳ Click "Talk to Future Self"
  ↳ Ask: "Why do I need stoichiometry?"
  ↳ Get personalized encouragement
  ↳ Return to dashboard, submit assignment
```

### Counselor Weekly Flow
```
Login → Educator Dashboard (Counselor mode) →
  ↳ Filter by "Recent Events"
  ↳ See site visit feedback gaps
  ↳ Add observations for multiple students
  ↳ Review RTCC section for upcoming meetings
  ↳ Click into student → See college list, pathway
  ↳ Update notes in Schoolinks (external)
```

---

## 🧩 Component Library

### Navigation
- `<nav>` — Fixed header with logo, divider, product name, nav links
- `.nav-link` — Button with icon and label, active state

### Cards
- `.detail-card` — White background, rounded, shadow
- `.card-header` — Icon + title + optional badge
- `.card-content` — Padding container

### Roster
- `.roster-row` — Flexbox row, hover state, selected state
- `.roster-avatar` — Initials, gradient background
- `.mini-badge` — Small icon indicators

### Insights
- `.insight-item` — Icon box + content + action button
- `.insight-action` — Small pill button (celebrate, address)

### Events
- `.event-card` — Large card with icon, info, status
- `.feedback-gestalt` — Collected feedback container
- `.quick-feedback` — Form for teacher input
- `.quick-option` — Toggle pill buttons

### Buttons
- `.btn.primary` — Teal gradient
- `.btn.secondary` — White with border
- `.filter-btn` — Small pill filters

### Modals
- `.modal-overlay` — Fixed backdrop
- `.modal` — Centered white card
- `.modal-actions` — Button row

### Data Display
- `.purpose-themes` — Progress bar rows
- `.rtcc-section` — Purple-tinted info card
- `.stat-card` — Number + label + trend

---

## ⚠️ Known Issues to Address

1. **Emoji Encoding** — Current HTML has garbled emoji characters (ðŸ instead of actual emoji). Need to ensure UTF-8 encoding and proper character display.

2. **Single-Page vs Multi-Page** — Current HTML is single-page with hidden views. Recommend splitting into separate HTML files with shared CSS/JS.

3. **Navigation** — Only "Educator View" is active. Need full navigation with all pages.

4. **Mobile Responsiveness** — Not addressed. Need media queries for tablet/mobile.

5. **Accessibility** — Missing ARIA labels, focus states, keyboard navigation.

6. **Dark Mode** — Not implemented. The navy theme exists in concept view but not teacher view.

7. **State Management** — JavaScript is minimal. Need proper state for selected student, filters, modals.

---

## 📝 Next Steps

1. **Create shared CSS files** — Extract variables, components, layouts
2. **Fix emoji encoding** — Replace garbled characters
3. **Build `educator-dashboard.html`** — Primary page, fully functional
4. **Build `student-dashboard.html`** — Student-facing version
5. **Build `future-self.html`** — Chat interface
6. **Build `purpose-bridge.html`** — Interactive demo
7. **Add navigation** — Consistent header across all pages
8. **Add responsive breakpoints** — Mobile-first approach
9. **Add accessibility** — ARIA, focus management
10. **Document data API** — For future backend integration

---

## 📐 Layout Specifications

### Educator Dashboard

```
┌─────────────────────────────────────────────────────────────┐
│ NAV: Logo | Divider | "Purpose Engine" | [Nav Links...]     │
├─────────────────────────────────────────────────────────────┤
│ HEADER: "Chemistry - Period 3" | [Transform] [Analytics]    │
├─────────────────────────────────────────────────────────────┤
│ INTEGRATION BAR: [PowerSchool ●] [Schoology ●] [Links ●]    │
├─────────────────────────────────────────────────────────────┤
│ ROSTER: ┌───────────────────────────────────────────────┐   │
│         │ [Filters: All | Support | Celebrate | Events] │   │
│         ├───────────────────────────────────────────────┤   │
│         │ [MC] Maya Chen | 🎯 Goal... | ⚠️📍 | 67 pts   │   │
│         │ [JW] Jordan Williams | 🎯 Goal... | 🎉 | 52   │   │
│         │ ...                                           │   │
│         └───────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│ DETAIL PANEL (3 columns):                                   │
│ ┌─────────────┬─────────────┬─────────────┐                 │
│ │ PROFILE     │ CELEBRATE   │ SUPPORT     │                 │
│ │ ─────────── │ ─────────── │ ─────────── │                 │
│ │ Avatar+Name │ ✨ Win 1    │ ⚠️ Concern  │                 │
│ │ Points      │ 🏆 Win 2    │ 💭 Pattern  │                 │
│ │ Goal        │ 📈 Trend    │ ─────────── │                 │
│ │ Themes      │             │ 💡 Modules  │                 │
│ │ RTCC Info   │             │             │                 │
│ └─────────────┴─────────────┴─────────────┘                 │
├─────────────────────────────────────────────────────────────┤
│ EVENTS (full width):                                        │
│ ┌───────────────────────────────────────────────────────┐   │
│ │ 🏭 Tesla Tour | Jan 12 | [✨ Feedback Needed]         │   │
│ │ ┌─ Feedback Gestalt ─────────────────────────────┐    │   │
│ │ │ 🙋 Maya: "Battery chemistry was amazing..."    │    │   │
│ │ │ 👩‍💼 Ms. Patterson: "Career aligned..."          │    │   │
│ │ └────────────────────────────────────────────────┘    │   │
│ │ ┌─ Quick Feedback ───────────────────────────────┐    │   │
│ │ │ [Showed excitement] [Talked about it] [...]    │    │   │
│ │ │ [Add note...                    ] [Submit]     │    │   │
│ │ └────────────────────────────────────────────────┘    │   │
│ └───────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

*Document Version: 1.0*
*Last Updated: January 17, 2025*
*Author: Purpose Engine Development Team*
