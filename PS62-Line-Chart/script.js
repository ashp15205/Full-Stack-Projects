new Chart(document.getElementById("chart"), {
  type: "line",
  data: {
    labels: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
    ],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [22, 28, 25, 32, 30, 27, 24],
        borderColor: "#6c63ff",
        backgroundColor: "rgba(108,99,255,.15)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#f72585",
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
