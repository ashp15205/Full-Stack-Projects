function get() { return JSON.parse(localStorage.getItem("notes") || "[]"); }
function add() {
  let v = document.getElementById("txt").value.trim(); if(!v) return;
  let n = get(); n.push(v); localStorage.setItem("notes", JSON.stringify(n));
  document.getElementById("txt").value = ""; ren();
}
function edit(i) {
  let n = get(); let v = prompt("Edit Note:", n[i]);
  if(v) { n[i] = v; localStorage.setItem("notes", JSON.stringify(n)); ren(); }
}
function del(i) { let n = get(); n.splice(i,1); localStorage.setItem("notes", JSON.stringify(n)); ren(); }
function ren() {
  document.getElementById("list").innerHTML = get().map((x,i) => `<div class="note"><span>${x}</span><div><button onclick="edit(${i})">✏</button> <button onclick="del(${i})">🗑 Del</button></div></div>`).join('');
}
ren();
