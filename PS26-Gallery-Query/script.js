const items = [
  { cat: "shoes", name: "Sneakers", ico: "👟" },
  { cat: "shoes", name: "Heels", ico: "👠" },
  { cat: "bags", name: "Backpack", ico: "🎒" },
  { cat: "bags", name: "Handbag", ico: "👜" },
  { cat: "watches", name: "Smart Watch", ico: "⌚" },
  { cat: "watches", name: "Classic", ico: "🕰" },
];

function go(cat) {
  const params = new URLSearchParams(
    cat !== "all" ? { cat } : {},
  );
  history.pushState({}, "", "?" + params.toString());
  document.getElementById("urlDisplay").innerText =
    window.location.href;
  render(cat);
}

function render(cat) {
  const f =
    cat === "all"
      ? items
      : items.filter((x) => x.cat === cat);
  document.getElementById("grid").innerHTML = f
    .map(
      (x) =>
        `<div class="card">${x.ico}<br><small>${x.name}</small></div>`,
    )
    .join("");
}

const init =
  new URLSearchParams(location.search).get("cat") || "all";
render(init);
document.getElementById("urlDisplay").innerText =
  window.location.href;
