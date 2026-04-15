let inv = [
  { n: "Apples", s: 120 },
  { n: "Bananas", s: 80 },
  { n: "Oranges", s: 55 },
  { n: "Grapes", s: 35 },
];
let chart;

function renderChart() {
  if (chart) chart.destroy();
  chart = new Chart(document.getElementById("chart"), {
    type: "polarArea",
    data: {
      labels: inv.map((x) => x.n),
      datasets: [
        {
          data: inv.map((x) => x.s),
          backgroundColor: [
            "#6c63ff",
            "#f72585",
            "#00d2ff",
            "#ff9800",
          ],
        },
      ],
    },
    options: {
      plugins: { legend: { labels: { color: "#fff" } } },
    },
  });
}

function renderList() {
  document.getElementById("stocks").innerHTML =
    "<h3>Stock Levels</h3>" +
    inv
      .map(
        (x, i) => `
    <div class="item"><span>${x.n}: <b>${x.s}</b></span><button onclick="sell(${i})">Sell 10</button></div>`,
      )
      .join("");
}

function sell(i) {
  inv[i].s = Math.max(0, inv[i].s - 10);
  renderChart();
  renderList();
}
renderChart();
renderList();
