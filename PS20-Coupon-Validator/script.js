let prods = [{ id: 1, emo: "🍎", name: "Apple", price: 2 }],
  cart = {},
  idCount = 2,
  isAdmin = false;
let discount = 0,
  sub = 0,
  tot = 0;

function toggleAdmin() {
  document.getElementById("adminPanel").hidden = isAdmin =
    !isAdmin;
  renderProds();
}

function saveProd() {
  let id = document.getElementById("aId").value,
    emo = document.getElementById("aEmo").value,
    name = document.getElementById("aName").value,
    price = +document.getElementById("aPrice").value;
  if (id) {
    let p = prods.find((x) => x.id == id);
    p.emo = emo;
    p.name = name;
    p.price = price;
  } else prods.push({ id: idCount++, emo, name, price });
  renderProds();
  updCart();
}

function editProd(id) {
  let p = prods.find((x) => x.id == id);
  document.getElementById("aId").value = p.id;
  document.getElementById("aEmo").value = p.emo;
  document.getElementById("aName").value = p.name;
  document.getElementById("aPrice").value = p.price;
}

function delProd(id) {
  prods = prods.filter((x) => x.id != id);
  delete cart[id];
  renderProds();
  updCart();
}

function renderProds() {
  document.getElementById("products").innerHTML = prods
    .map(
      (p) => `
    <div class="card">
      <div style="font-size:2em">${p.emo}</div> <b>${p.name}</b><br>$${p.price}<br>
      <button onclick="addCart(${p.id}, 1)">Add to Cart</button>
      ${isAdmin ? `<br><button onclick="editProd(${p.id})">✏</button><button onclick="delProd(${p.id})">🗑</button>` : ""}
    </div>`,
    )
    .join("");
}

function addCart(id, qty) {
  cart[id] = (cart[id] || 0) + qty;
  if (cart[id] <= 0) delete cart[id];
  updCart();
}

function applyCoup() {
  let c = document.getElementById("coup").value;
  if (c === "SAVE10") {
    discount = sub * 0.1;
    document.getElementById("cMsg").innerText = "10% off";
  } else if (c === "FLAT200") {
    discount = Math.min(200, sub);
    document.getElementById("cMsg").innerText =
      "FLAT200 applied";
  } else if (c === "HALF") {
    discount = sub * 0.5;
    document.getElementById("cMsg").innerText = "50% off";
  } else {
    discount = 0;
    document.getElementById("cMsg").innerText =
      "Invalid coupon";
  }
  updCart();
}

function updCart() {
  sub = 0;
  document.getElementById("cart").innerHTML =
    Object.entries(cart)
      .map(([id, q]) => {
        let p = prods.find((x) => x.id == id);
        if (!p) return "";
        sub += p.price * q;
        return `<div>${p.name} - $${p.price} x ${q} <button onclick="addCart(${id}, 1)">+</button><button onclick="addCart(${id}, -1)">-</button><button onclick="addCart(${id}, -${q})">Rm</button></div>`;
      })
      .join("");
  if (discount > sub) discount = sub;
  tot = sub - discount;
  document.getElementById("sub").innerText = sub.toFixed(2);
  document.getElementById("tot").innerText = tot.toFixed(2);
}

function checkout() {
  alert("Success!");
  cart = {};
  discount = 0;
  updCart();
}
renderProds();
