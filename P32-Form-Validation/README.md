# Problem 32 – Form Validation

## 🎯 Objective
Registration form with real-time validation, field-level error messages, password strength meter, and success state.

## 🛠 Tech Stack
`HTML` · `CSS` · `JavaScript`

## 📁 Files
| File | Purpose |
|------|---------|
| `index.html` | Form with 6 fields + strength bar + terms checkbox |
| `style.css` | Dark form card + valid/invalid borders + strength bar |
| `script.js` | Validators object + real-time + submit validation |

---

## ✨ Features
- **Real-time validation** on every keystroke (input event)
- Fields turn green (valid) or red (invalid) with border color
- Error messages appear below each invalid field
- **Password strength meter** (Weak → Fair → Good → Strong)
- **Password visibility toggle** (👁 button)
- **Confirm password** match check
- **Age validation** from DOB (must be 13+)
- **Terms checkbox** required to submit
- Full validation on submit button click
- **Success message** shown when everything passes

---

## 🔑 Key Concepts

### Validator Object Pattern
```javascript
const validators = {
  name: {
    el:    document.getElementById('name'),
    errEl: document.getElementById('nameErr'),
    fn:    v => v.trim().length >= 2 ? '' : 'Min 2 characters'
  },
  email: {
    el: document.getElementById('email'),
    errEl: document.getElementById('emailErr'),
    fn: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Invalid email'
  },
  // ...
};

// Attach to all fields
Object.values(validators).forEach(v => {
  v.el.addEventListener('input', () => validateField(v));
});

function validateField(vld) {
  const msg = vld.fn(vld.el.value);
  vld.errEl.textContent = msg;
  vld.el.classList.toggle('valid',   !msg);
  vld.el.classList.toggle('invalid', !!msg);
  return !msg;
}
```

### Password Strength
```javascript
let score = 0;
if (v.length >= 8)          score++;  // length
if (/[A-Z]/.test(v))        score++;  // uppercase
if (/[0-9]/.test(v))        score++;  // number
if (/[^A-Za-z0-9]/.test(v)) score++;  // special char

// 0=none, 1=Weak, 2=Fair, 3=Good, 4=Strong
```

### Key Regex Patterns
```javascript
/^[^\s@]+@[^\s@]+\.[^\s@]+$/   // email
/^\d{10}$/                      // 10-digit phone
```

---

## 🚀 How to Run
Open `index.html` in browser.

---

## 🎓 Exam Demo Checklist
- [ ] Type 1 char in Name → red border + "Min 2 characters" error
- [ ] Type valid email → green border, error clears
- [ ] Type 9-digit phone → error shown
- [ ] Type password "abc" → Weak meter
- [ ] Type "Abc@1234" → Strong meter + green
- [ ] Toggle 👁 button → password shows/hides
- [ ] Confirm password doesn't match → error
- [ ] Type same password in confirm → error clears
- [ ] Uncheck terms + Submit → terms error shown
- [ ] All valid + Submit → "🎉 Account created!" message + form resets
