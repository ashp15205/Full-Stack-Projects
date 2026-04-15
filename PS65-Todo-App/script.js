function get() {
  return JSON.parse(localStorage.getItem("todos") || "[]");
}
function addTask() {
  let v = document.getElementById("taskInput").value.trim();
  if (!v) return;
  let t = get();
  t.push({ text: v, done: false });
  localStorage.setItem("todos", JSON.stringify(t));
  document.getElementById("taskInput").value = "";
  ren();
}
function tgl(i) {
  let t = get();
  t[i].done = !t[i].done;
  localStorage.setItem("todos", JSON.stringify(t));
  ren();
}
function del(i) {
  let t = get();
  t.splice(i, 1);
  localStorage.setItem("todos", JSON.stringify(t));
  ren();
}
function edit(i) {
  let t = get();
  let v = prompt("Edit:", t[i].text);
  if (v) {
    t[i].text = v;
    localStorage.setItem("todos", JSON.stringify(t));
    ren();
  }
}
function ren() {
  document.getElementById("list").innerHTML = get()
    .map(
      (x, i) =>
        `<li><span class="${x.done ? "done" : ""}" onclick="tgl(${i})">${x.text}</span><div><button onclick="edit(${i})">✏</button><button onclick="del(${i})">X</button></div></li>`,
    )
    .join("");
}
ren();
