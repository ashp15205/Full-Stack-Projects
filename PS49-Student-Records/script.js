function get() {
  return JSON.parse(
    localStorage.getItem("students") || "[]",
  );
}
function save() {
  let nm = document.getElementById("nm").value.trim(),
    roll = document.getElementById("roll").value.trim();
  if (!nm || !roll) return;
  let r = get();
  r.push({ nm, roll });
  localStorage.setItem("students", JSON.stringify(r));
  document.getElementById("nm").value = "";
  document.getElementById("roll").value = "";
  ren();
}
function del(i) {
  let r = get();
  r.splice(i, 1);
  localStorage.setItem("students", JSON.stringify(r));
  ren();
}
function edit(i) {
  let r = get();
  let n = prompt("Edit Name:", r[i].nm);
  if (n == null) return;
  let ro = prompt("Edit Roll:", r[i].roll);
  if (ro == null) return;
  r[i] = { nm: n, roll: ro };
  localStorage.setItem("students", JSON.stringify(r));
  ren();
}
function ren() {
  document.getElementById("list").innerHTML = get()
    .map(
      (s, i) =>
        `<div class="row"><span>👤 ${s.nm}</span><span>🎓 ${s.roll}</span><div><span onclick="edit(${i})" style="cursor:pointer;color:#6c63ff;margin-right:10px">✏</span><span onclick="del(${i})" style="cursor:pointer;color:#f72585">🗑</span></div></div>`,
    )
    .join("");
}
ren();
