const days = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];
const temps = [22, 28, 25, 32, 30, 27, 24];
new Chart(document.getElementById("chart"), {
  type: "line",
  data: {
    labels: days,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temps,
        borderColor: "#f72585",
        backgroundColor: "rgba(247,37,133,0.1)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#6c63ff",
        pointRadius: 5,
      },
    ],
  },
  options: {
    plugins: { legend: { labels: { color: "#fff" } } },
    scales: {
      x: { ticks: { color: "#aab4fc" } },
      y: {
        ticks: { color: "#aab4fc" },
        beginAtZero: false,
      },
    },
  },
});
