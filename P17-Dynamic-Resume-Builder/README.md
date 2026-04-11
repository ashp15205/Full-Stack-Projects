# Problem 17 – Dynamic Resume Builder

## 🎯 Objective
Build a form where user inputs update a live preview section in real-time. Supports multiple experience and education entries with full CRUD.

## 🛠 Tech Stack
`HTML` · `CSS` · `JavaScript (DOM)`

## 📁 Files
| File | Purpose |
|------|---------|
| `index.html` | Split layout: form panel + live resume preview |
| `style.css` | Dark theme, entry list styles, form styles |
| `script.js` | Live DOM updates + Experience/Education CRUD |

---

## ✨ Features

### Live Preview
- Every input field updates the resume preview in real-time
- Avatar auto-generates initials from name (e.g. "John Doe" → "JD")
- Skills rendered as pill tags (comma-separated input)

### CRUD: Experience
- Click **+ Add** → form slides open
- Fill Role, Company, Duration, Description → **💾 Save**
- Each entry shows in a list with **✏ Edit** and **🗑 Delete**
- All entries render in the resume preview instantly

### CRUD: Education
- Same pattern as Experience: Add / Edit / Delete
- Multiple degrees shown in resume

### Download
- **📥 Download Resume** → triggers `window.print()` (form panel hidden)

---

## 🔑 Key Concepts

### Live DOM Update
```javascript
input.addEventListener('input', () => {
  preview.textContent = input.value.trim();
});
```

### Skills as Tags
```javascript
document.getElementById('skills').addEventListener('input', function () {
  const skills = this.value.split(',').map(s => s.trim()).filter(Boolean);
  container.innerHTML = skills.map(s => `<span class="tag">${s}</span>`).join('');
});
```

### Multi-Entry CRUD Pattern
```javascript
let experiences = [];
let editExpIdx  = null;

// Add
experiences.push({ role, company, duration, desc });

// Edit (prefill form)
function editExp(i) { editExpIdx = i; openExpForm(i); }

// Save edit
if (editExpIdx !== null) experiences[editExpIdx] = entry;
else experiences.push(entry);

// Delete
experiences.splice(i, 1);

// Always re-render after change
renderExperiences();
```

---

## 🚀 How to Run
Open `index.html` in browser — no dependencies needed.

---

## 🎓 Exam Demo Checklist
- [ ] Type name → avatar initials + resume name update live
- [ ] Type job title → preview title updates
- [ ] Type skills with commas → pill tags appear in resume
- [ ] Click **+ Add** in Experience → form appears
- [ ] Fill and save → entry card appears + shows in resume preview
- [ ] Click ✏ Edit → form prefills → change something → Save → updates
- [ ] Click 🗑 Delete → entry removed from list and preview
- [ ] Add 2 education entries → both show in resume
- [ ] Click Download → print dialog opens (form hidden)
