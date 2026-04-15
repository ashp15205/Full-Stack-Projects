let data = { ex: [], ed: [] },
  editId = { ex: null, ed: null };

function upd() {
  let nm =
    document.getElementById("inName").value.trim() ||
    "Your Name";
  document.getElementById("pName").innerText = nm;
  document.getElementById("pInit").innerText =
    nm
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "YN";
  document.getElementById("pTitle").innerText =
    document.getElementById("inTitle").value || "Job Title";

  let s = document
    .getElementById("inSkills")
    .value.split(",")
    .filter((x) => x.trim());
  document.getElementById("pSkills").innerHTML = s
    .map((x) => `<span class="tag">${x.trim()}</span>`)
    .join("");
}

function showForm(type, i = null) {
  editId[type] = i;
  document.getElementById(type + "Form").hidden = false;
  if (i === null) {
    if (type === "ex")
      ["exRole", "exComp", "exDur", "exDesc"].forEach(
        (id) => (document.getElementById(id).value = ""),
      );
    if (type === "ed")
      ["edDeg", "edCol", "edYr"].forEach(
        (id) => (document.getElementById(id).value = ""),
      );
  } else {
    let item = data[type][i];
    if (type === "ex") {
      document.getElementById("exRole").value = item.role;
      document.getElementById("exComp").value = item.comp;
      document.getElementById("exDur").value = item.dur;
      document.getElementById("exDesc").value = item.desc;
    } else {
      document.getElementById("edDeg").value = item.deg;
      document.getElementById("edCol").value = item.col;
      document.getElementById("edYr").value = item.yr;
    }
  }
}

function save(type) {
  let item;
  if (type === "ex")
    item = {
      role: document.getElementById("exRole").value,
      comp: document.getElementById("exComp").value,
      dur: document.getElementById("exDur").value,
      desc: document.getElementById("exDesc").value,
    };
  if (type === "ed")
    item = {
      deg: document.getElementById("edDeg").value,
      col: document.getElementById("edCol").value,
      yr: document.getElementById("edYr").value,
    };

  if (editId[type] !== null)
    data[type][editId[type]] = item;
  else data[type].push(item);
  document.getElementById(type + "Form").hidden = true;
  render(type);
}

function del(type, i) {
  data[type].splice(i, 1);
  render(type);
}

function render(type) {
  let listHtml = "",
    pHtml = "";
  data[type].forEach((x, i) => {
    let title =
      type === "ex"
        ? `${x.role} at ${x.comp}`
        : `${x.deg} at ${x.col}`;
    let desc = type === "ex" ? x.desc : x.yr;
    listHtml += `<li>${title} <button onclick="showForm('${type}', ${i})">✏</button> <button onclick="del('${type}', ${i})">🗑</button></li>`;
    pHtml += `<div><b>${title}</b><p>${desc}</p></div>`;
  });
  document.getElementById(type + "List").innerHTML =
    listHtml;
  document.getElementById(
    "p" + (type === "ex" ? "Ex" : "Ed"),
  ).innerHTML = pHtml;
}
