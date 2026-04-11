const skills = [
{icon:'⚛️', name:'React', pct:85},
{icon:'🌐', name:'HTML5', pct:95},
{icon:'🎨', name:'CSS3', pct:90}
];
const projects = [
  {icon:'🛒', name:'E-Commerce Platform', desc:'Full-stack MERN shopping platform with cart, auth, and payment integration.', tags:['React','Node.js','MongoDB','Express']},
  {icon:'📊', name:'Sales Dashboard', desc:'Real-time analytics dashboard with Chart.js visualizations and KPI tracking.', tags:['JavaScript','Chart.js','CSS']},
  {icon:'🤖', name:'AI Chat Interface', desc:'GPT-powered chatbot with streaming responses and conversation history.', tags:['Next.js','OpenAI API','Tailwind']},
  {icon:'📝', name:'Resume Builder', desc:'Drag-and-drop resume builder with live preview and PDF export.', tags:['React','DOM API','CSS Grid']},
  {icon:'🎮', name:'Quiz Game App', desc:'Multiplayer quiz with real-time scoring, leaderboard, and timer.', tags:['JavaScript','Socket.io','CSS']},
  {icon:'🗂', name:'Task Manager', desc:'Kanban-style task manager with drag & drop, labels, and due dates.', tags:['React','localStorage','DnD API']},
];
document.getElementById('skillsGrid').innerHTML = skills.map(s => `
  <div class="skill-card">
    <span class="skill-icon">${s.icon}</span>
    <div class="skill-name">${s.name}</div>
    <div class="skill-bar"><div class="skill-fill" style="width:${s.pct}%"></div></div>
  </div>
`).join('');
document.getElementById('projectsGrid').innerHTML = projects.map(p => `
  <div class="project-card">
    <div class="project-icon">${p.icon}</div>
    <div class="project-name">${p.name}</div>
    <div class="project-desc">${p.desc}</div>
    <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
  </div>
`).join('');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
const roles = ['Frontend Developer', 'UI/UX Enthusiast', 'React Engineer', 'Full Stack Developer'];
let roleIdx = 0;
const roleEl = document.getElementById('roleText');
setInterval(() => {
  roleIdx = (roleIdx + 1) % roles.length;
  roleEl.style.opacity = '0';
  setTimeout(() => { roleEl.textContent = roles[roleIdx]; roleEl.style.opacity = '1'; }, 300);
}, 2500);
roleEl.style.transition = 'opacity 0.3s';
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 80) current = s.id; });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? '#fff' : '';
  });
});
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formMsg').textContent = '🎉 Message sent! I\'ll get back to you soon.';
  e.target.reset();
});
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.boxShadow =
    window.scrollY > 20 ? '0 4px 24px rgba(0,0,0,0.4)' : '';
});