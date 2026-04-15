const plans = [
  { n: "Basic", m: 299, y: 239 },
  { n: "Pro", m: 699, y: 559, f: true },
  { n: "Team", m: 1499, y: 1199 },
];
let yr = false;
function sw() {
  yr = document.getElementById("tog").checked;
  document.getElementById("ml").className = yr
    ? ""
    : "active";
  document.getElementById("yl").className = yr
    ? "active"
    : "";
  render();
}
function render() {
  document.getElementById("cards").innerHTML = plans
    .map(
      (p) =>
        `<div class="card ${p.f ? "featured" : ""}"><h4>${p.n}</h4><div class="price">₹${yr ? p.y : p.m}<small style="font-size:.7rem;color:#888">/mo</small></div><button onclick="alert('Selected ${p.n}')">Choose</button></div>`,
    )
    .join("");
}
render();
