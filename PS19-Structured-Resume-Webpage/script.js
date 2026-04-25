function get() {
  let s = localStorage.getItem("resume_skills");
  return s
    ? JSON.parse(s)
    : ["HTML", "CSS", "JavaScript", "React", "Node.js"];
}
function add() {
  let val = document.getElementById("inp").value.trim();
  if (!val) return;
  let data = get();
  data.push(val);
  localStorage.setItem(
    "resume_skills",
    JSON.stringify(data),
  );
  document.getElementById("inp").value = "";
  ren();
}
function edit(i) {
  let data = get();
  let newVal = prompt("Edit Skill:", data[i]);
  if (newVal && newVal.trim()) {
    data[i] = newVal.trim();
    localStorage.setItem(
      "resume_skills",
      JSON.stringify(data),
    );
    ren();
  }
}
function del(i) {
  let data = get();
  data.splice(i, 1);
  localStorage.setItem(
    "resume_skills",
    JSON.stringify(data),
  );
  ren();
}
function ren() {
  document.getElementById("list").innerHTML = get()
    .map(
      (item, index) => `
    <span style="display:flex; align-items:center; gap:5px;">
      ${item}
      <button onclick="edit(${index})" style="background:none; border:none; cursor:pointer; font-size:12px; color:#fbbf24;" title="Edit">✏️</button>
      <button onclick="del(${index})" style="background:none; border:none; cursor:pointer; font-size:12px; color:#f72585;" title="Delete">🗑</button>
    </span>
  `,
    )
    .join("");
}
ren();
