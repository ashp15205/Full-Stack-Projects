new Chart(document.getElementById("chart"), {
  type: "bar",
  data: {
    labels: ["Computer Sci", "Mechanical", "Civil", "Electronics", "MBA"],
    datasets: [{ label: "Students Enrolled", data: [120, 85, 60, 95, 40],
      backgroundColor: ["#6c63ff","#f72585","#00d2ff","#ff9800","#4caf50"] }]
  },
  options: { plugins: { legend: { labels: { color: "#fff" }}}, scales: { x: { ticks: { color: "#aab4fc" }}, y: { ticks: { color: "#aab4fc" }, beginAtZero: true }}}
});
