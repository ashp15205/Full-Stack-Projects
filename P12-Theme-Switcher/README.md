# Problem 12 – Theme Switcher

## 🎯 Objective
Dark/Light mode toggle using CSS class switching, with localStorage persistence so the chosen theme survives page reloads.

## 🛠 Tech Stack
`HTML` · `CSS` · `JavaScript` · `localStorage`

## 📁 Files
| File | Purpose |
|------|---------|
| `index.html` | Demo UI with cards, forms, buttons to showcase themes |
| `style.css` | CSS variables for both themes under `:root` and `body.light` |
| `script.js` | Toggle class + save/load from localStorage |

---

## ✨ Features
- Toggle button: 🌙 / ☀️ with smooth transition
- Theme persists after refresh via `localStorage`
- Smooth CSS transitions on all color changes
- Demo content: cards, form fields, code snippets, buttons

---

## 🔑 Key Concepts

### CSS Variables for Theming
```css
/* Default = Dark */
:root {
  --bg:      #0f0f18;
  --surface: #1a1a2e;
  --text:    #e0e0f0;
  --accent:  #6c63ff;
}

/* Light mode overrides */
body.light {
  --bg:      #f0f0f8;
  --surface: #ffffff;
  --text:    #1a1a2e;
  --accent:  #6c63ff;
}

/* All elements automatically adapt: */
body    { background: var(--bg); color: var(--text); }
.card   { background: var(--surface); }
```

### JavaScript Toggle + Persist
```javascript
const btn   = document.getElementById('themeToggle');
const body  = document.body;

// Load saved theme
const saved = localStorage.getItem('theme') || 'dark';
if (saved === 'light') body.classList.add('light');
updateBtn();

// Toggle on click
btn.addEventListener('click', () => {
  body.classList.toggle('light');
  localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
  updateBtn();
});

function updateBtn() {
  btn.textContent = body.classList.contains('light') ? '🌙 Dark Mode' : '☀️ Light Mode';
}
```

---

## 🚀 How to Run
Open `index.html` in browser.

---

## 🎓 Exam Demo Checklist
- [ ] Page loads in Dark mode
- [ ] Click toggle → switches to Light mode (all colors change smoothly)
- [ ] Click again → back to Dark
- [ ] Refresh page → theme is remembered (localStorage)
- [ ] Open DevTools → Application → localStorage → see `theme` key
