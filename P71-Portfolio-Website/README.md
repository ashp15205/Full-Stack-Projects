# Problem 71 – Portfolio Website

## 🎯 Objective
Design a fully responsive portfolio website with hero, skills, projects, and contact sections — with smooth scroll, role rotator, and active nav tracking.

## 🛠 Tech Stack
`HTML` · `CSS` · `JavaScript`

## 📁 Files
| File | Purpose |
|------|---------|
| `index.html` | All sections: nav + hero + about + skills + projects + contact + footer |
| `style.css` | Dark theme + blob animation + card hover + mobile breakpoints |
| `script.js` | Skills/projects data render + role rotator + scroll + contact form |

---

## ✨ Features
- **Fixed glassmorphism navbar** with active link tracking on scroll
- **Hamburger menu** for mobile (slides down, `✕` close)
- **Hero section**: animated blob avatar + rotating job titles
- **About**: stats (15+ projects, 2+ years, 10+ clients) + info card
- **Skills grid**: 10 skills with emoji + progress bars (hard-coded %)
- **Projects grid**: 6 project cards with tech tag badges
- **Contact form**: validation + success message
- **Smooth scroll** and active section tracking
- Responsive at all breakpoints (mobile-first)

---

## 🔑 Key Concepts

### Skills/Projects from JS Array
```javascript
const skills = [
  { icon:'⚛️', name:'React', pct:85 },
  { icon:'⚡', name:'JavaScript', pct:88 },
];

document.getElementById('skillsGrid').innerHTML = skills.map(s => `
  <div class="skill-card">
    <span class="skill-icon">${s.icon}</span>
    <div class="skill-name">${s.name}</div>
    <div class="skill-bar"><div class="skill-fill" style="width:${s.pct}%"></div></div>
  </div>
`).join('');
```

### Role Rotator
```javascript
const roles = ['Frontend Developer', 'React Engineer', 'UI/UX Enthusiast'];
let idx = 0;
setInterval(() => {
  roleEl.style.opacity = '0';
  setTimeout(() => {
    roleEl.textContent = roles[idx++ % roles.length];
    roleEl.style.opacity = '1';
  }, 300);
}, 2500);
roleEl.style.transition = 'opacity 0.3s';
```

### Active Nav on Scroll
```javascript
window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('section[id]').forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? '#fff' : '';
  });
});
```

---

## 🚀 How to Run
Open `index.html` in browser. Uses Google Fonts CDN (needs internet for fonts).

---

## 🎓 Exam Demo Checklist
- [ ] Navbar is fixed at top, scrolls with page
- [ ] Hero: role text rotates every 2.5 seconds
- [ ] Scroll → active nav link highlights
- [ ] Scroll to skills → progress bars visible with different widths
- [ ] Skills and Projects rendered from JS arrays
- [ ] Click a nav link → smooth scroll to section
- [ ] Resize to mobile → hamburger appears, navbar hides
- [ ] Click hamburger → nav slides in
- [ ] Fill contact form + Submit → success message appears, form resets
