// PS22 - Modular UI Components (Button, Input, Card)
// Each function is a reusable "component" that renders HTML

function Button({ label, variant = "primary", onClick }) {
  return `<button class="${variant === "outline" ? "btn-outline" : ""}" onclick="${onClick}">${label}</button>`;
}

function Input({ placeholder, id }) {
  return `<input id="${id}" placeholder="${placeholder}">`;
}

function Card({ title, body, tag }) {
  return `<div class="comp-card">
    <span class="badge-tag">${tag}</span>
    <h4 style="color:#fff;margin:10px 0 5px">${title}</h4>
    <p style="color:#888;font-size:.9rem">${body}</p>
  </div>`;
}

// Assemble landing page from components
document.getElementById("hero").innerHTML = `
  <div class="landing-hero">
    <h1>Component Library</h1>
    <p style="color:#aab4fc">Modular UI built from reusable JS components</p>
    <div class="btn-row" style="justify-content:center">
      ${Button({ label: "Get Started", onClick: "alert('Starting!')" })}
      ${Button({ label: "Learn More", variant: "outline", onClick: "alert('Learning!')" })}
    </div>
  </div>`;

document.getElementById("inputs-demo").innerHTML = `
  <div class="field-group">
    ${Input({ placeholder: "Your Name", id: "inp1" })}
    ${Input({ placeholder: "Your Email", id: "inp2" })}
    ${Button({ label: "Submit", onClick: "alert('Submitted: '+document.getElementById(\\'inp1\\').value)" })}
  </div>`;

const cards = [
  {
    title: "Web Dev",
    body: "Build fast, responsive web apps.",
    tag: "HTML/CSS/JS",
  },
  {
    title: "Data Science",
    body: "Analyze and visualize big data.",
    tag: "Python",
  },
  {
    title: "Mobile Apps",
    body: "Cross-platform React Native apps.",
    tag: "React Native",
  },
];
document.getElementById("cards-demo").innerHTML =
  `<div class="comp-row">${cards.map((c) => Card(c)).join("")}</div>`;
