const prods = [{n:"Laptop", p:45000}, {n:"Mouse", p:800}, {n:"Keyboard", p:1500}];
let qty = [1,1,1]; let disc = 0;

function render() {
  let sub = prods.reduce((s,x,i) => s + x.p*qty[i], 0);
  document.getElementById("items").innerHTML = '<div class="card">' + prods.map((x,i) => `
    <div class="item"><span>${x.n} @₹${x.p}</span>
    <div><button onclick="ch(${i},-1)">−</button><b>${qty[i]}</b><button onclick="ch(${i},1)">+</button></div>
    <b>₹${x.p*qty[i]}</b></div>`).join('') + '</div>';
  document.getElementById("sub").innerText = sub;
  document.getElementById("tot").innerText = sub - disc;
}
function ch(i,d) { qty[i] = Math.max(1, qty[i]+d); render(); }
function applyC() {
  let c = document.getElementById("coup").value;
  let sub = prods.reduce((s,x,i) => s + x.p*qty[i], 0);
  if(c === "SAVE10") { disc = Math.round(sub*0.1); document.getElementById("disc").innerText = "10% off — saved ₹"+disc; }
  else { disc = 0; document.getElementById("disc").innerText = "Invalid coupon"; }
  render();
}
render();
