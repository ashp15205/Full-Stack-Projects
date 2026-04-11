# Problem 25 – Multi-Step Form

## 🎯 Objective
A 4-step form wizard with per-step validation, progress bar, step indicators, and a review + success screen.

## 🛠 Tech Stack
`HTML` · `CSS` · `JavaScript`

## 📁 Files
| File | Purpose |
|------|---------|
| `index.html` | Single card with all steps (hidden/shown) + nav buttons |
| `style.css` | Progress bar + step dots + review grid |
| `script.js` | Step navigation + per-step validation + review render |

---

## ✨ Features
- **Step 1**: Personal Info (First Name, Last Name, DOB)
- **Step 2**: Contact (Email, Phone, City)
- **Step 3**: Account (Username, Password, Role)
- **Step 4**: Review all entries before submitting
- **Step 5**: Success screen with restart button
- Progress bar fills as you advance
- Step dots: grey → active (purple) → done (green ✓)
- Per-step validation — **cannot advance with errors**
- All data collected and shown in a review grid

---

## 🔑 Key Concepts

### Show/Hide Steps
```javascript
let currentStep = 1;

function showStep(n) {
  document.querySelectorAll('.step').forEach(s => s.classList.add('hidden'));
  document.getElementById('step' + n).classList.remove('hidden');
}
```

### Progress Bar
```javascript
function updateProgress() {
  const pct = ((currentStep - 1) / TOTAL_STEPS) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
}
```

### Per-Step Validation
```javascript
function validateStep() {
  let valid = true;
  if (currentStep === 1) {
    if (!firstName.value.trim()) { showError('firstNameErr', 'Required'); valid = false; }
    if (!dob.value)               { showError('dobErr', 'Required');      valid = false; }
  }
  // ... step 2, 3
  return valid;
}

function nextStep() {
  if (!validateStep()) return;   // BLOCK if invalid
  currentStep++;
  if (currentStep === TOTAL_STEPS) renderReview();
  showStep(currentStep);
}
```

---

## 🚀 How to Run
Open `index.html` in browser.

---

## 🎓 Exam Demo Checklist
- [ ] Click Next without filling → error messages appear
- [ ] Fill Step 1 → Next → progress bar advances + Step 1 dot turns green ✓
- [ ] Complete Steps 2 and 3
- [ ] Step 4 Review: all entered data shown in a grid
- [ ] Click Submit → success screen with "🎉 Account Created!"
- [ ] Click "Start Over" → form resets to Step 1
