# Problem 42 – Responsive Navbar

## 🎯 Objective
A responsive navigation bar with dropdown menus, hamburger menu for mobile, and scroll-based sticky effects.

## 🛠 Tech Stack
`HTML` · `CSS` · `JavaScript`

## 📁 Files
| File | Purpose |
|------|---------|
| `index.html` | Navbar + hero + feature cards + about + CTA sections |
| `style.css` | Fixed navbar + hamburger + dropdown + scroll effect |
| `script.js` | Hamburger toggle + dropdown + scroll active link |

---

## ✨ Features
- **Sticky navbar**: fixed top, blur backdrop, shadow on scroll
- **Logo** (gradient text)
- **Nav links** with active state on scroll
- **Dropdown menu** on "Services" link (hover/click)
- **Hamburger menu** for mobile (☰ → ✕ animation)
- Mobile: nav links slide down as fullscreen overlay
- **Smooth scroll** to sections
- **Hero section** with gradient background and CTA buttons
- Content sections for demo (features, stats, CTA)

---

## 🔑 Key Concepts

### Hamburger Toggle
```javascript
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');  // CSS animates ☰ → ✕
  navLinks.classList.toggle('open');   // mobile: show/hide
});
```

### Active Link on Scroll
```javascript
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});
```

### Sticky Shadow on Scroll
```javascript
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});
```
```css
.navbar.scrolled { box-shadow: 0 4px 24px rgba(0,0,0,0.4); }
```

---

## 🚀 How to Run
Open `index.html` in browser. **Resize window** to see mobile hamburger.

---

## 🎓 Exam Demo Checklist
- [ ] Scroll down → navbar shadow appears (sticky effect)
- [ ] Scroll past sections → active nav link changes
- [ ] Click "Services" → dropdown menu appears
- [ ] Resize window to mobile → hamburger (☰) appears
- [ ] Click hamburger → nav slides down, icon becomes ✕
- [ ] Click a nav link in mobile → menu closes
- [ ] Smooth scroll when clicking nav links
