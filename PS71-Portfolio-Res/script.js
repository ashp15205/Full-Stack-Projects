const skills = [
  { name: "HTML / CSS", pct: 92 },
  { name: "JavaScript", pct: 85 },
  { name: "React", pct: 75 },
  { name: "Node.js", pct: 68 },
  { name: "MongoDB", pct: 62 },
  { name: "Bootstrap", pct: 88 }
];

const projects = [
  { name: "MERN Blog", desc: "Full-stack blog with auth and CRUD", tag: "MERN" },
  { name: "Weather Dashboard", desc: "Chart.js weather trend visualizer", tag: "Chart.js" },
  { name: "Task Manager", desc: "Kanban board with localStorage", tag: "Vanilla JS" }
];

// Render skill bars
document.getElementById("skill-bars").innerHTML = skills.map(s => `
  <div class="skill-wrap">
    <div class="skill-label"><span>${s.name}</span><span>${s.pct}%</span></div>
    <div class="progress">
      <div class="progress-bar" data-width="${s.pct}" style="width:0"></div>
    </div>
  </div>`).join('');

// Render project cards
document.getElementById("project-cards").innerHTML = projects.map(p => `
  <div class="col-md-4">
    <div class="proj-card">
      <span class="badge mb-2" style="background:#6c63ff">${p.tag}</span>
      <h5 style="color:#aab4fc">${p.name}</h5>
      <p style="color:#888;font-size:.9rem">${p.desc}</p>
    </div>
  </div>`).join('');

// Animate skill bars after render
setTimeout(() => {
  document.querySelectorAll(".progress-bar").forEach(b => {
    b.style.width = b.dataset.width + "%";
  });
}, 300);