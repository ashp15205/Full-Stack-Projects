// PS79: Dynamic Shopping Cart
// Tech Stack: Node.js, Express, MongoDB (backend) + Vanilla JS (frontend)
// The backend server (server.js) persists cart to MongoDB.
// This frontend works standalone too (state in JS arrays).

const products = [
  { id: 1, name: "Laptop Pro", price: 45999, img: "💻" },
  { id: 2, name: "Wireless Mouse", price: 899, img: "🖱️" },
  { id: 3, name: "Mechanical Keyboard", price: 2499, img: "⌨️" },
  { id: 4, name: "USB-C Hub", price: 1299, img: "🔌" },
  { id: 5, name: "Webcam HD", price: 1999, img: "📷" }
];

let quantities = products.map(() => 1);
let discountPct = 0;

function render() {
  const subtotal = products.reduce((sum, p, i) => sum + p.price * quantities[i], 0);
  const discount = Math.round(subtotal * discountPct / 100);
  const total = subtotal - discount;

  document.getElementById("cart-items").innerHTML = products.map((p, i) => `
    <div class="card">
      <div class="item-row">
        <div style="font-size:2rem">${p.img}</div>
        <div class="item-info">
          <h4>${p.name}</h4>
          <div class="item-price">₹${p.price.toLocaleString()} each</div>
        </div>
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="change(${i}, -1)">−</button>
          <span class="qty-val">${quantities[i]}</span>
          <button class="qty-btn" onclick="change(${i}, +1)">+</button>
        </div>
        <div class="line-total">₹${(p.price * quantities[i]).toLocaleString()}</div>
      </div>
    </div>`).join('');

  document.getElementById("sub").innerText = subtotal.toLocaleString();
  document.getElementById("tot").innerText = total.toLocaleString();
}

function change(i, delta) {
  quantities[i] = Math.max(0, quantities[i] + delta);
  render();
}

const COUPONS = { "SAVE10": 10, "SAVE20": 20 };

function applyCoupon() {
  const code = document.getElementById("coup").value.trim().toUpperCase();
  const el = document.getElementById("disc-msg");
  if (COUPONS[code]) {
    discountPct = COUPONS[code];
    el.innerText = `✅ Coupon ${code} applied — ${discountPct}% off!`;
  } else {
    discountPct = 0;
    el.innerText = code ? "❌ Invalid coupon code." : "";
  }
  render();
}

function checkout() {
  const total = products.reduce((s, p, i) => s + p.price * quantities[i], 0);
  const discount = Math.round(total * discountPct / 100);
  alert(`✅ Order Placed!\nTotal: ₹${(total - discount).toLocaleString()}`);
  quantities = products.map(() => 1);
  discountPct = 0;
  document.getElementById("coup").value = "";
  document.getElementById("disc-msg").innerText = "";
  render();
}

render();
