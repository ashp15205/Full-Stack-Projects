let products = [
{ id: 1, name: 'Mechanical Keyboard', price: 2499, emoji: '⌨️' },
{ id: 2, name: 'Wireless Mouse',       price: 899,  emoji: '🖱️' },
{ id: 3, name: 'USB-C Hub',            price: 1299, emoji: '🔌' }
];
const COUPONS = {
  SAVE10:  { type:'percent', value:10  },
  FLAT200: { type:'flat',    value:200 },
  HALF:    { type:'percent', value:50  },
};
let cart = {};
let appliedCoupon = null;
let isAdmin = false;
let editingId = null;
let nextId = 7;
document.getElementById('adminToggle').addEventListener('click', () => {
  isAdmin = !isAdmin;
  document.getElementById('adminToggle').textContent = isAdmin ? '🔓 Admin Logout' : '🔐 Admin Login';
  document.getElementById('adminBadge').textContent  = isAdmin ? '🛡 Admin' : '👤 Customer';
  document.getElementById('adminPanel').classList.toggle('hidden', !isAdmin);
  renderProducts();
});
function openProductForm(id) {
  editingId = id;
  document.getElementById('productFormBox').classList.remove('hidden');
  document.getElementById('productFormTitle').textContent = id ? 'Edit Product' : 'Add Product';
  if (id) {
    const p = products.find(p => p.id === id);
    document.getElementById('pfEmoji').value = p.emoji;
    document.getElementById('pfName').value  = p.name;
    document.getElementById('pfPrice').value = p.price;
  } else {
    ['pfEmoji','pfName','pfPrice'].forEach(i => document.getElementById(i).value = '');
  }
}
function closeProductForm() {
  document.getElementById('productFormBox').classList.add('hidden');
  editingId = null;
}
window.openProductForm = openProductForm;
window.closeProductForm = closeProductForm;
document.getElementById('saveProduct').addEventListener('click', () => {
  const emoji = document.getElementById('pfEmoji').value.trim() || '📦';
  const name  = document.getElementById('pfName').value.trim();
  const price = parseInt(document.getElementById('pfPrice').value);
  if (!name || !price) { alert('Name and price are required'); return; }
  if (editingId) {
    const p = products.find(p => p.id === editingId);
    Object.assign(p, { emoji, name, price });
  } else {
    products.push({ id: nextId++, name, price, emoji });
  }
  closeProductForm();
  renderProducts();
  renderCart();        
});
function deleteProduct(id) {
  if (!confirm('Delete this product?')) return;
  products = products.filter(p => p.id !== id);
  delete cart[id];    
  renderProducts();
  renderCart();
}
window.deleteProduct = deleteProduct;
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = products.map(p => `
    <div class="product-card">
      <span class="product-emoji">${p.emoji}</span>
      <div class="product-name">${p.name}</div>
      <div class="product-price">₹${p.price.toLocaleString()}</div>
      <button class="btn-add" onclick="addToCart(${p.id})">Add to Cart</button>
      ${isAdmin ? `
        <div class="product-admin-row">
          <button class="pa-btn edit" onclick="openProductForm(${p.id})">✏ Edit</button>
          <button class="pa-btn del"  onclick="deleteProduct(${p.id})">🗑 Del</button>
        </div>` : ''}
    </div>
  `).join('');
}
function addToCart(id) { cart[id] = (cart[id] || 0) + 1; renderCart(); }
function removeFromCart(id) { delete cart[id]; renderCart(); }
function changeQty(id, delta) {
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) delete cart[id];
  renderCart();
}
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.changeQty = changeQty;
function renderCart() {
  const container = document.getElementById('cartItems');
  const ids = Object.keys(cart).filter(id => products.find(p => p.id === +id));
  if (ids.length === 0) {
    container.innerHTML = '<p class="empty-msg">Your cart is empty</p>';
    updateSummary(0); return;
  }
  container.innerHTML = ids.map(id => {
    const p = products.find(x => x.id === +id);
    const qty = cart[id];
    return `
      <div class="cart-item">
        <span style="font-size:1.3rem">${p.emoji}</span>
        <span class="cart-item-name">${p.name}</span>
        <div class="qty-controls">
          <button class="qty-btn" onclick="changeQty(${id}, -1)">−</button>
          <span class="qty-val">${qty}</span>
          <button class="qty-btn" onclick="changeQty(${id}, 1)">+</button>
        </div>
        <span class="cart-item-total">₹${(p.price * qty).toLocaleString()}</span>
        <button class="remove-btn" onclick="removeFromCart(${id})">✕</button>
      </div>`;
  }).join('');
  const subtotal = ids.reduce((s, id) => s + products.find(x => x.id === +id).price * cart[id], 0);
  updateSummary(subtotal);
}
function updateSummary(subtotal) {
  let discount = 0;
  if (appliedCoupon) {
    const c = COUPONS[appliedCoupon];
    discount = c.type === 'percent' ? subtotal * c.value / 100 : Math.min(c.value, subtotal);
  }
  const total = subtotal - discount;
  document.getElementById('subtotal').textContent = `₹${subtotal.toLocaleString()}`;
  document.getElementById('discount').textContent = `-₹${discount.toLocaleString()}`;
  document.getElementById('total').textContent    = `₹${total.toLocaleString()}`;
}
document.getElementById('applyCoupon').addEventListener('click', () => {
  const code = document.getElementById('couponInput').value.trim().toUpperCase();
  const msg  = document.getElementById('couponMsg');
  if (COUPONS[code]) {
    appliedCoupon = code;
    const c = COUPONS[code];
    msg.textContent = `✅ "${code}" applied — ${c.type==='percent'? c.value+'% off':'₹'+c.value+' off'}`;
    msg.className = 'coupon-msg success';
  } else {
    appliedCoupon = null;
    msg.textContent = '❌ Invalid. Try SAVE10, FLAT200, HALF';
    msg.className = 'coupon-msg error';
  }
  renderCart();
});
document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (!Object.keys(cart).length) { alert('Add items to cart first!'); return; }
  alert('🎉 Order placed! Thank you.');
  cart = {}; appliedCoupon = null;
  document.getElementById('couponInput').value = '';
  document.getElementById('couponMsg').textContent = '';
  renderCart();
});
renderProducts();
renderCart();