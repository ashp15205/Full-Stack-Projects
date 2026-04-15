const skills = [
  { n: "HTML", v: 8 },
  { n: "CSS", v: 7 },
  { n: "JavaScript", v: 6 },
  { n: "React", v: 5 },
  { n: "Node.js", v: 4 },
];
let chart;

function renderChart() {
  if (chart) chart.destroy();
  chart = new Chart(document.getElementById("chart"), {
    type: "radar",
    data: {
      labels: skills.map((s) => s.n),
      datasets: [
        {
          label: "Skill Level",
          data: skills.map((s) => s.v),
          backgroundColor: "rgba(108,99,255,0.3)",
          borderColor: "#6c63ff",
          pointBackgroundColor: "#f72585",
        },
      ],
    },
    options: {
      scales: {
        r: {
          min: 0,
          max: 10,
          ticks: { color: "#888" },
          grid: { color: "rgba(255,255,255,0.1)" },
          pointLabels: { color: "#aab4fc" },
        },
      },
      plugins: { legend: { labels: { color: "#fff" } } },
    },
  });
}

function renderControls() {
  document.getElementById("controls").innerHTML = skills
    .map(
      (s, i) =>
        `<button onclick="up(${i})">⬆ ${s.n} (${s.v})</button>`,
    )
    .join("");
}

function up(i) {
  skills[i].v = Math.min(10, skills[i].v + 1);
  renderChart();
  renderControls();
}
renderChart();
renderControls();
