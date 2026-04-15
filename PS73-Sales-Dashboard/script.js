const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const palette = [
  "#6c63ff",
  "#f72585",
  "#f59e0b",
  "#10b981",
  "#3b82f6",
];
let records = [
  {
    id: 1,
    month: "Jan",
    category: "Electronics",
    amount: 82000,
    orders: 110,
  },
  {
    id: 2,
    month: "Feb",
    category: "Clothing",
    amount: 45000,
    orders: 88,
  },
  {
    id: 3,
    month: "Mar",
    category: "Groceries",
    amount: 63000,
    orders: 200,
  },
];
let nextId = 13;
let isAdmin = false;
let editingId = null;
let barChart, lineChart, pieChart, doughnutChart;
document
  .getElementById("adminToggle")
  .addEventListener("click", () => {
    isAdmin = !isAdmin;
    const btn = document.getElementById("adminToggle");
    const badge = document.getElementById("adminBadge");
    btn.textContent = isAdmin
      ? "🔓 Admin Logout"
      : "🔐 Admin Login";
    badge.textContent = isAdmin ? "🛡 Admin" : "👤 Viewer";
    document
      .getElementById("addRecordBtn")
      .classList.toggle("hidden", !isAdmin);
    document
      .getElementById("actionHead")
      .classList.toggle("hidden", !isAdmin);
    renderTable();
  });
document
  .getElementById("addRecordBtn")
  .addEventListener("click", () => openForm(null));
function openForm(id) {
  editingId = id;
  const form = document.getElementById("recordForm");
  form.classList.remove("hidden");
  document.getElementById("formTitle").textContent = id
    ? "Edit Record"
    : "Add New Record";
  if (id) {
    const r = records.find((r) => r.id === id);
    document.getElementById("fMonth").value = r.month;
    document.getElementById("fCategory").value = r.category;
    document.getElementById("fAmount").value = r.amount;
    document.getElementById("fOrders").value = r.orders;
  } else {
    document.getElementById("fAmount").value = "";
    document.getElementById("fOrders").value = "";
  }
}
function cancelForm() {
  document
    .getElementById("recordForm")
    .classList.add("hidden");
  editingId = null;
}
window.cancelForm = cancelForm;
document
  .getElementById("saveRecord")
  .addEventListener("click", () => {
    const month = document.getElementById("fMonth").value;
    const category =
      document.getElementById("fCategory").value;
    const amount = parseInt(
      document.getElementById("fAmount").value,
    );
    const orders = parseInt(
      document.getElementById("fOrders").value,
    );
    if (
      !amount ||
      !orders ||
      isNaN(amount) ||
      isNaN(orders)
    ) {
      alert("Please enter valid Amount and Orders");
      return;
    }
    if (editingId) {
      const r = records.find((r) => r.id === editingId);
      Object.assign(r, { month, category, amount, orders });
    } else {
      records.push({
        id: nextId++,
        month,
        category,
        amount,
        orders,
      });
    }
    cancelForm();
    renderAll();
  });
function deleteRecord(id) {
  if (!confirm("Delete this record?")) return;
  records = records.filter((r) => r.id !== id);
  renderAll();
}
window.deleteRecord = deleteRecord;
window.openForm = openForm;
function renderTable() {
  const tbody = document.getElementById("salesBody");
  tbody.innerHTML = records
    .map(
      (r, i) => `
    <tr>
      <td>${i + 1}</td>
      <td><strong>${r.month}</strong></td>
      <td><span class="cat-badge">${r.category}</span></td>
      <td>₹${r.amount.toLocaleString()}</td>
      <td>${r.orders}</td>
      ${
        isAdmin
          ? `
        <td>
          <button class="tbl-btn edit" onclick="openForm(${r.id})">✏ Edit</button>
          <button class="tbl-btn del" onclick="deleteRecord(${r.id})">🗑 Del</button>
        </td>`
          : ""
      }
    </tr>
  `,
    )
    .join("");
}
function updateKPIs() {
  const total = records.reduce((s, r) => s + r.amount, 0);
  const best = records.reduce(
    (a, b) => (a.amount > b.amount ? a : b),
    records[0] || {},
  );
  const avg = records.length
    ? Math.round(total / records.length)
    : 0;
  document.getElementById("kpiRevenue").textContent =
    "₹" + (total / 100000).toFixed(1) + "L";
  document.getElementById("kpiOrders").textContent =
    records.length;
  document.getElementById("kpiBest").textContent =
    best.month || "—";
  document.getElementById("kpiAvg").textContent =
    "₹" + (avg / 1000).toFixed(0) + "K";
}
function getMonthlySales() {
  return months.map((m) =>
    records
      .filter((r) => r.month === m)
      .reduce((s, r) => s + r.amount, 0),
  );
}
function getCategoryData() {
  const cats = [
    "Electronics",
    "Clothing",
    "Groceries",
    "Books",
    "Sports",
  ];
  return {
    labels: cats,
    values: cats.map((c) =>
      records
        .filter((r) => r.category === c)
        .reduce((s, r) => s + r.amount, 0),
    ),
  };
}
function getQuarterlyData() {
  const q = [0, 0, 0, 0];
  records.forEach((r) => {
    const mi = months.indexOf(r.month);
    if (mi >= 0) q[Math.floor(mi / 3)] += r.amount;
  });
  return q;
}
const chartOpts = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      labels: {
        color: "#888aaa",
        font: { family: "Inter" },
      },
    },
  },
  scales: {
    x: {
      ticks: { color: "#888aaa" },
      grid: { color: "#2a2a4a" },
    },
    y: {
      ticks: { color: "#888aaa" },
      grid: { color: "#2a2a4a" },
    },
  },
};
function buildCharts() {
  const ms = getMonthlySales();
  const bestIdx = ms.indexOf(Math.max(...ms));
  const cd = getCategoryData();
  const qd = getQuarterlyData();
  barChart = new Chart(
    document.getElementById("barChart"),
    {
      type: "bar",
      options: chartOpts,
      data: {
        labels: months,
        datasets: [
          {
            label: "Sales (₹)",
            data: ms,
            backgroundColor: months.map((_, i) =>
              i === bestIdx ? "#f72585" : "#6c63ff",
            ),
            borderRadius: 6,
          },
        ],
      },
    },
  );
  lineChart = new Chart(
    document.getElementById("lineChart"),
    {
      type: "line",
      options: chartOpts,
      data: {
        labels: months,
        datasets: [
          {
            label: "Sales Trend",
            data: ms,
            borderColor: "#10b981",
            backgroundColor: "rgba(16,185,129,0.1)",
            fill: true,
            tension: 0.4,
            pointBackgroundColor: "#10b981",
          },
        ],
      },
    },
  );
  pieChart = new Chart(
    document.getElementById("pieChart"),
    {
      type: "pie",
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "#888aaa",
              font: { family: "Inter" },
            },
          },
        },
      },
      data: {
        labels: cd.labels,
        datasets: [
          {
            data: cd.values,
            backgroundColor: palette,
            borderWidth: 2,
            borderColor: "#1a1a2e",
          },
        ],
      },
    },
  );
  doughnutChart = new Chart(
    document.getElementById("doughnutChart"),
    {
      type: "doughnut",
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "#888aaa",
              font: { family: "Inter" },
            },
          },
        },
      },
      data: {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        datasets: [
          {
            data: qd,
            backgroundColor: [
              "#6c63ff",
              "#f72585",
              "#f59e0b",
              "#10b981",
            ],
            borderWidth: 2,
            borderColor: "#1a1a2e",
          },
        ],
      },
    },
  );
}
function updateCharts() {
  const ms = getMonthlySales();
  const bestIdx = ms.indexOf(Math.max(...ms));
  const cd = getCategoryData();
  const qd = getQuarterlyData();
  barChart.data.datasets[0].data = ms;
  barChart.data.datasets[0].backgroundColor = months.map(
    (_, i) => (i === bestIdx ? "#f72585" : "#6c63ff"),
  );
  barChart.update();
  lineChart.data.datasets[0].data = ms;
  lineChart.update();
  pieChart.data.datasets[0].data = cd.values;
  pieChart.update();
  doughnutChart.data.datasets[0].data = qd;
  doughnutChart.update();
}
function renderAll() {
  updateKPIs();
  renderTable();
  if (barChart) updateCharts();
  else buildCharts();
}
renderAll();
