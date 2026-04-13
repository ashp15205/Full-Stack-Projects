// PS21: Simulated simultaneous fetch for two cities (mocked for offline use)
// In a real app, replace with: Promise.all([fetch(city1url), fetch(city2url)])

const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

// Simulated data (as if fetched from weather API)
const cityA = { name: "Mumbai", temps: [30, 32, 31, 33, 29, 28, 30] };
const cityB = { name: "Delhi",  temps: [22, 25, 24, 27, 26, 23, 21] };

// Simulate Promise.all (key ES6 concept)
const mockFetch = (city) => Promise.resolve(city);
Promise.all([mockFetch(cityA), mockFetch(cityB)]).then(([a, b]) => {
  new Chart(document.getElementById("chart"), {
    type: "bar",
    data: {
      labels: days,
      datasets: [
        { label: a.name, data: a.temps, backgroundColor: "rgba(108,99,255,0.7)", borderColor: "#6c63ff", borderWidth: 1 },
        { label: b.name, data: b.temps, backgroundColor: "rgba(247,37,133,0.7)", borderColor: "#f72585", borderWidth: 1 }
      ]
    },
    options: {
      plugins: { legend: { labels: { color: "#fff" }}},
      scales: {
        x: { ticks: { color: "#aab4fc" }, grid: { color: "rgba(255,255,255,0.05)" }},
        y: { ticks: { color: "#aab4fc" }, grid: { color: "rgba(255,255,255,0.05)" }, beginAtZero: true }
      }
    }
  });

  // Stats
  const avgA = (a.temps.reduce((s,v) => s+v, 0) / a.temps.length).toFixed(1);
  const avgB = (b.temps.reduce((s,v) => s+v, 0) / b.temps.length).toFixed(1);
  const diff = Math.abs(avgA - avgB).toFixed(1);
  document.getElementById("stats").innerHTML = `
    <div class="stat"><h4>${a.name} Avg</h4><span style="color:#6c63ff">${avgA}°C</span></div>
    <div class="stat"><h4>${b.name} Avg</h4><span style="color:#f72585">${avgB}°C</span></div>
    <div class="stat"><h4>Temperature Diff</h4><span style="color:#4caf50">Δ ${diff}°C</span></div>`;
});
