const skills=[{n:"HTML/CSS",p:90},{n:"JavaScript",p:80},{n:"React",p:70},{n:"Node.js",p:65},{n:"MongoDB",p:60}];
const projs=[{n:"Todo App",d:"localStorage-based task manager"},{n:"Weather Dashboard",d:"Chart.js weekly temp visualization"},{n:"MERN Blog",d:"Full Stack blog with authentication"}];

document.getElementById("skills").innerHTML=skills.map(s=>`<div class="col-md-6"><div class="skill-box"><div class="skill-label"><span>${s.n}</span><span>${s.p}%</span></div><div class="progress"><div class="progress-bar" style="width:0" data-width="${s.p}"></div></div></div></div>`).join('');
document.getElementById("projects").innerHTML=projs.map(p=>`<div class="col-md-4"><div class="proj-card"><h5 style="color:#aab4fc">${p.n}</h5><p style="color:#888">${p.d}</p><span class="badge" style="background:#6c63ff">View</span></div></div>`).join('');

setTimeout(()=>document.querySelectorAll(".progress-bar").forEach(b=>{b.style.width=b.dataset.width+"%";}),200);
