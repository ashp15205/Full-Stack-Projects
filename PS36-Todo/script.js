function get() {
  return JSON.parse(
    localStorage.getItem("todos36") || "[]",
  );
}
function add() {
  let v = document.getElementById("inp").value.trim();
  if (!v) return;
  let t = get();
  t.push({ text: v, done: false });
  localStorage.setItem("todos36", JSON.stringify(t));
  document.getElementById("inp").value = "";
  ren();
}
function tgl(i) {
  let t = get();
  t[i].done = !t[i].done;
  localStorage.setItem("todos36", JSON.stringify(t));
  ren();
}
function del(i) {
  let t = get();
  t.splice(i, 1);
  localStorage.setItem("todos36", JSON.stringify(t));
  ren();
}
function edit(i) {
  let t = get();
  let v = prompt("Edit Task:", t[i].text);
  if (v !== null && v.trim() !== "") {
    t[i].text = v.trim();
    localStorage.setItem("todos36", JSON.stringify(t));
    ren();
  }
}
function ren() {
  document.getElementById("list").innerHTML = get()
    .map(
      (x, i) =>
        `<li><span style="text-decoration:${x.done ? "line-through" : "none"};cursor:pointer;" onclick="tgl(${i})">${x.text}</span><div><button onclick="edit(${i})" style="margin-right:5px">✏️</button><button onclick="del(${i})">🗑</button></div></li>`,
    )
    .join("");
}
ren();
