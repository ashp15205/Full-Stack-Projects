let prods = [
    {
      id: 1,
      em: "📺",
      nm: "TV",
      ct: "elec",
      pr: 500,
      rt: 4,
    },
    {
      id: 2,
      em: "📓",
      nm: "JS Book",
      ct: "book",
      pr: 20,
      rt: 5,
    },
    {
      id: 3,
      em: "💻",
      nm: "Laptop",
      ct: "elec",
      pr: 1000,
      rt: 5,
    },
    {
      id: 4,
      em: "👕",
      nm: "Shirt",
      ct: "cloth",
      pr: 30,
      rt: 3,
    },
    {
      id: 5,
      em: "👟",
      nm: "Shoes",
      ct: "cloth",
      pr: 50,
      rt: 4,
    },
  ],
  adm = false,
  curC = "all",
  idc = 6;

function tAdmin() {
  document.getElementById("adminPanel").hidden = !(adm =
    !adm);
  ren();
}
function setCat(c) {
  curC = c;
  ren();
}

function save() {
  let id = document.getElementById("aid").value,
    p = {
      em: document.getElementById("aem").value,
      nm: document.getElementById("anm").value,
      ct: document.getElementById("act").value,
      pr: +document.getElementById("apr").value,
      rt: +document.getElementById("art").value,
    };
  if (id)
    Object.assign(
      prods.find((x) => x.id == id),
      p,
    );
  else prods.push({ id: idc++, ...p });
  ["aid", "aem", "anm", "act", "apr", "art"].forEach(
    (k) => (document.getElementById(k).value = ""),
  );
  ren();
}
function ed(id) {
  let p = prods.find((x) => x.id == id);
  ["aid", "aem", "anm", "act", "apr", "art"].forEach(
    (k) =>
      (document.getElementById(k).value =
        p[k.slice(1)] || p.id),
  );
}
function del(id) {
  if (confirm("Del?")) {
    prods = prods.filter((x) => x.id != id);
    ren();
  }
}

function ren() {
  let s = document
    .getElementById("srch")
    .value.toLowerCase();
  let f = prods.filter(
    (p) =>
      (curC == "all" || p.ct == curC) &&
      p.nm.toLowerCase().includes(s),
  );
  document.getElementById("count").innerText =
    `Showing ${f.length} of ${prods.length} products`;
  document.getElementById("grid").innerHTML = f
    .map(
      (p) => `
    <div class="card">
      <div style="font-size:2em">${p.em}</div><b>${p.nm}</b><br>$${p.pr}<br>${"⭐".repeat(p.rt)}${"☆".repeat(5 - p.rt)}
      ${adm ? `<br><button onclick="ed(${p.id})">✏</button><button onclick="del(${p.id})">🗑</button>` : ""}
    </div>
  `,
    )
    .join("");
}
ren();
