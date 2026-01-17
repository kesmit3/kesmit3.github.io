# Purpose Engine — Corrections Checklist & Quick Reference

## 🔴 Critical Issues to Fix

### 1. Emoji Encoding (URGENT)
**Problem:** All emojis display as garbled characters (e.g., `ðŸŽ¯` instead of 🎯)
**Cause:** Character encoding issue during file save/transfer
**Fix:** 
- Ensure file is saved as UTF-8 with BOM
- Add `<meta charset="UTF-8">` (already present, but verify)
- Replace all garbled sequences with actual emoji characters

**Emoji Reference for this project:**
| Garbled | Should Be | Usage |
|---------|-----------|-------|
| ðŸ'‹ | 👋 | Greeting |
| ðŸŽ¯ | 🎯 | Goals, Schoolinks |
| ðŸ"Š | 📊 | PowerSchool, Analytics |
| ðŸ"š | 📚 | Schoology/LMS |
| ðŸ§  | 🧠 | YouScience, AI |
| ðŸŽ¨ | 🎨 | Creative Technology theme |
| ðŸŒ± | 🌱 | Environmental theme |
| ðŸ'¡ | 💡 | Entrepreneurship theme |
| ðŸŽ‰ | 🎉 | Celebrations |
| âš ï¸ | ⚠️ | Warnings |
| ðŸ" | 📍 | Events, location |
| ðŸ­ | 🏭 | Factory/site visits |
| ðŸ¤– | 🤖 | AI features |
| ðŸ'¤ | 👤 | Profile |
| ðŸ™‹ | 🙋 | Student |
| ðŸ'©â€ðŸ'¼ | 👩‍💼 | Counselor |
| ðŸ'¥ | 👥 | Multiple people |
| âœ¨ | ✨ | Highlight, special |
| ðŸ† | 🏆 | Achievement |
| ðŸ"ˆ | 📈 | Growth, trend up |
| ðŸ'­ | 💭 | Thought, observation |
| ðŸ§ª | 🧪 | Chemistry, lab |
| ðŸ—ï¸ | 🏗️ | Building, construction |
| ðŸŽ" | 🎓 | Education, CTE |
| ðŸ"® | 🔮 | Future Self |

---

### 2. Single File → Multi-Page Architecture
**Problem:** Current HTML is 1400+ lines in single file
**Fix:** Split into separate pages with shared resources

**New File Structure:**
```
purpose-engine/
├── index.html                 # Landing
├── educator-dashboard.html    # Main teacher view
├── student-dashboard.html     # Student view
├── css/
│   └── variables.css          # Design tokens
│   └── styles.css             # All styles (or split)
└── js/
    └── app.js                 # Shared functionality
```

---

### 3. Navigation Not Functional
**Problem:** Only "Educator View" button exists, other views not accessible
**Fix:** Add full navigation bar with all page links

**Navigation Items:**
1. System Architecture
2. The Problem
3. Student Dashboard
4. Purpose Engine (Bridge)
5. Future Self
6. Educator View ← (current)

---

### 4. Missing Features from JSX Prototype

| Feature | In JSX | In HTML | Status |
|---------|--------|---------|--------|
| Architecture View | ✅ | ❌ | MISSING |
| Problem/Concept View | ✅ | ❌ | MISSING |
| Student Dashboard | ✅ | ❌ | MISSING |
| Purpose Bridge | ✅ | ❌ | MISSING |
| Future Self Chat | ✅ | ❌ | MISSING |
| Teacher Dashboard | ✅ | ✅ | Present |
| Integration Status Bar | ✅ | ❌ | MISSING |
| Journey Chart | ✅ | ❌ | MISSING |
| Animated Architecture Diagram | ✅ | ❌ | MISSING |

---

### 5. Accessibility Issues
**Problems:**
- No ARIA labels
- No keyboard navigation
- No focus indicators
- Color contrast may be insufficient in some areas

**Fixes needed:**
- Add `aria-label` to buttons
- Add `role` attributes to interactive elements
- Add `:focus-visible` styles
- Test with screen reader

---

### 6. Mobile Responsiveness
**Problem:** No responsive styles, will break on mobile
**Fix:** Add media queries

```css
/* Breakpoints */
@media (max-width: 1280px) { /* xl */ }
@media (max-width: 1024px) { /* lg */ }
@media (max-width: 768px) { /* md */ }
@media (max-width: 640px) { /* sm */ }
```

---

## 📋 Page-by-Page Build Checklist

### ☐ `educator-dashboard.html` (Priority 1)
- [ ] Fix emoji encoding
- [ ] Add full navigation
- [ ] Add integration status bar
- [ ] Fix roster filters functionality
- [ ] Complete modal interactions
- [ ] Add loading states
- [ ] Add empty states
- [ ] Mobile responsive
- [ ] Accessibility audit

### ☐ `student-dashboard.html` (Priority 2)
- [ ] Create from JSX reference
- [ ] Purpose Points display
- [ ] Purpose Card with themes
- [ ] Alert banner for missing work
- [ ] Quick stats cards
- [ ] Recent Wins feed
- [ ] Future Self CTA
- [ ] Journey bar chart
- [ ] Quick actions

### ☐ `future-self.html` (Priority 3)
- [ ] Chat interface
- [ ] Message bubbles (user vs assistant)
- [ ] Sample question buttons
- [ ] Input field + send button
- [ ] Avatar/header
- [ ] Connection status message

### ☐ `purpose-bridge.html` (Priority 4)
- [ ] Student context card
- [ ] Side-by-side comparison
- [ ] Transform toggle button
- [ ] Animation on transform
- [ ] Learning objectives badge

### ☐ `architecture.html` (Priority 5)
- [ ] Integration diagram
- [ ] Animated data flow
- [ ] Source cards (left)
- [ ] AI Engine (center)
- [ ] Output features (right)
- [ ] "What AI Sees" example

### ☐ `problem.html` (Priority 6)
- [ ] Hero section
- [ ] Before/After cards
- [ ] Statistics
- [ ] Three pillars cards

### ☐ `index.html` (Priority 7)
- [ ] Marketing hero
- [ ] Value proposition
- [ ] CTA buttons
- [ ] Integration preview

---

## 🎨 Design Specifications Quick Reference

### Colors
```css
Primary:    #00838F (teal)
Accent:     #FF6F00 (orange)
Success:    #10B981 (green)
Warning:    #F59E0B (amber)
Danger:     #EF4444 (red)
AI:         #8B5CF6 (purple)
Navy:       #0D1421 (dark bg)
```

### Typography
```css
Font:       Plus Jakarta Sans
Heading:    600-800 weight
Body:       400-500 weight
Small:      11-13px
Base:       14px
Large:      16-20px
Hero:       40-52px
```

### Spacing
```css
Card padding:     20-24px
Section gap:      24px
Item gap:         12-16px
Icon size:        36-48px
Avatar size:      38-64px
Border radius:    10-16px (cards), 8-10px (buttons)
```

### Shadows
```css
Card:   0 4px 6px -1px rgba(0,0,0,0.1)
Hover:  0 10px 15px -3px rgba(0,0,0,0.1)
Glow:   0 4px 14px rgba(0,131,143,0.25)
```

---

## 📊 Data Model Quick Reference

### Student Object
```javascript
{
  id, name, grade, campus,
  totalPoints,
  attendance: { present, absent, tardy, rate },
  assignments: { completed, missing, upcoming },
  purposeThemes: [{ name, icon, color, strength }],
  goal: "string",
  aiInsights: [{ type, text, confidence, validated }],
  events: [{ title, date, feedbackStatus, feedback }]
}
```

### Integration Sources
```javascript
{
  powerschool: { icon: "📊", color: "#1976D2" },
  schoology:   { icon: "📚", color: "#7B1FA2" },
  schoolinks:  { icon: "🎯", color: "#388E3C" },
  youscience:  { icon: "🧠", color: "#F57C00" }
}
```

---

## ⚡ Quick Wins (Do First)

1. **Create `variables.css`** — Extract all CSS custom properties ✅
2. **Fix emoji encoding** — Find/replace all garbled sequences
3. **Add navigation links** — Even as placeholders
4. **Add integration status bar** — Copy from JSX
5. **Test modal close** — Ensure ESC and backdrop click work

---

## 🔗 File Dependencies

```
educator-dashboard.html
├── css/variables.css
├── css/components.css
├── css/layouts.css
└── js/app.js
    ├── data.js (student data)
    └── modals.js (modal management)
```

---

## 📝 Notes

- Current HTML focuses ONLY on Teacher View
- JSX has 6 views, HTML has 1
- Need to decide: Single-page app OR multi-page site?
- Recommendation: Multi-page for simplicity, shared CSS/JS
- Consider adding a simple router later if needed

---

*Last Updated: January 17, 2025*
