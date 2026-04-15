const items = [
  { n: "T-Shirt", p: 299 },
  { n: "Shoes", p: 799 },
  { n: "Watch", p: 1499 },
];
let qty = items.map(() => 0);

function render() {
  document.getElementById("products").innerHTML = items
    .map(
      (x, i) => `
    <div class="card">
      <span>${x.n} — ₹${x.p}</span>
      <div>
        <button onclick="ch(${i},-1)">−</button>
        <span class="qty">${qty[i]}</span>
        <button onclick="ch(${i},1)">+</button>
      </div>
    </div>`,
    )
    .join("");
  document.getElementById("total").innerText = items.reduce(
    (s, x, i) => s + x.p * qty[i],
    0,
  );
}

function ch(i, d) {
  qty[i] = Math.max(0, qty[i] + d);
  render();
}
render();
