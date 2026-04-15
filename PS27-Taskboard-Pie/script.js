let tasks = {
  todo: ["Design UI", "Write tests"],
  doing: ["Implement API"],
  done: ["Setup project"],
};
let chart;

function move(from, to, t) {
  tasks[from] = tasks[from].filter((x) => x !== t);
  tasks[to].push(t);
  renderAll();
}
function del(col, t) {
  tasks[col] = tasks[col].filter((x) => x !== t);
  renderAll();
}

function addTask() {
  let v = document.getElementById("taskIn").value.trim();
  if (!v) return;
  tasks.todo.push(v);
  document.getElementById("taskIn").value = "";
  renderAll();
}

function renderCol(id) {
  let col = document.getElementById(id);
  let items = tasks[id].map((t) => {
    let btns =
      id === "todo"
        ? `<button onclick="move('todo','doing','${t}')">→</button>`
        : id === "doing"
          ? `<button onclick="move('doing','done','${t}')">✓</button>`
          : "";
    return `<div class="task">${t}<span>${btns}<button onclick="del('${id}','${t}')">🗑</button></span></div>`;
  });
  col.innerHTML =
    `<h3>${id === "todo" ? "📋 To-Do" : id === "doing" ? "🔄 Doing" : "✅ Done"}</h3>` +
    items.join("");
}

function renderChart() {
  if (chart) chart.destroy();
  chart = new Chart(document.getElementById("chart"), {
    type: "pie",
    data: {
      labels: ["To-Do", "Doing", "Done"],
      datasets: [
        {
          data: [
            tasks.todo.length,
            tasks.doing.length,
            tasks.done.length,
          ],
          backgroundColor: [
            "#6c63ff",
            "#f72585",
            "#4caf50",
          ],
        },
      ],
    },
    options: {
      plugins: { legend: { labels: { color: "#fff" } } },
    },
  });
}

function renderAll() {
  ["todo", "doing", "done"].forEach(renderCol);
  renderChart();
}
renderAll();
