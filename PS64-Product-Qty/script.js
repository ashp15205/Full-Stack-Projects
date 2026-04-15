const p = [
  { n: "Laptop", p: 45000 },
  { n: "Mouse", p: 800 },
  { n: "Keyboard", p: 1500 },
];
let q = p.map(() => 0);
function render() {
  document.getElementById("items").innerHTML = p
    .map(
      (x, i) =>
        `<div class="card"><span>${x.n} — ₹${x.p}</span><div><button onclick="ch(${i},-1)">−</button><span class="qty">${q[i]}</span><button onclick="ch(${i},1)">+</button></div><b>₹${x.p * q[i]}</b></div>`,
    )
    .join("");
  document.getElementById("tot").innerText = p.reduce(
    (s, x, i) => s + x.p * q[i],
    0,
  );
}
function ch(i, d) {
  q[i] = Math.max(0, q[i] + d);
  render();
}
render();
