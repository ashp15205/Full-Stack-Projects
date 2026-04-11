let products = [
{id:1, name:'Wireless Earbuds', category:'electronics', price:2499, emoji:'🎧', rating:5},
{id:2, name:'Smart Watch', category:'electronics', price:8999, emoji:'⌚', rating:4},
{id:3, name:'Laptop Stand', category:'electronics', price:1299, emoji:'💻', rating:5}
];
let nextId = 13;
let currentCat = 'all';
let searchQuery = '';
let isAdmin = false;
let editingId = null;
document.getElementById('adminToggle').addEventListener('click', () => {
  isAdmin = !isAdmin;
  document.getElementById('adminToggle').textContent = isAdmin ? '🔓 Admin Logout' : '🔐 Admin Login';
  document.getElementById('addProductBtn').classList.toggle('hidden', !isAdmin);
  render();
});
document.getElementById('addProductBtn').addEventListener('click', () => openAdminForm(null));
function openAdminForm(id) {
  editingId = id;
  document.getElementById('adminForm').classList.remove('hidden');
  document.getElementById('adminFormTitle').textContent = id ? 'Edit Product' : 'Add Product';
  if (id) {
    const p = products.find(p => p.id === id);
    document.getElementById('fEmoji').value  = p.emoji;
    document.getElementById('fName').value   = p.name;
    document.getElementById('fCat').value    = p.category;
    document.getElementById('fPrice').value  = p.price;
    document.getElementById('fRating').value = p.rating;
  } else {
    ['fEmoji','fName','fPrice','fRating'].forEach(id => document.getElementById(id).value = '');
  }
}
function closeAdminForm() {
  document.getElementById('adminForm').classList.add('hidden');
  editingId = null;
}
window.closeAdminForm = closeAdminForm;
document.getElementById('saveProductBtn').addEventListener('click', () => {
  const emoji    = document.getElementById('fEmoji').value.trim() || '📦';
  const name     = document.getElementById('fName').value.trim();
  const category = document.getElementById('fCat').value;
  const price    = parseInt(document.getElementById('fPrice').value);
  const rating   = Math.min(5, Math.max(1, parseInt(document.getElementById('fRating').value) || 3));
  if (!name || !price) { alert('Name and Price are required'); return; }
  if (editingId) {
    const p = products.find(p => p.id === editingId);
    Object.assign(p, { emoji, name, category, price, rating });
  } else {
    products.push({ id: nextId++, emoji, name, category, price, rating });
  }
  closeAdminForm();
  render();
});
function deleteProduct(id) {
  if (!confirm('Delete this product?')) return;
  products = products.filter(p => p.id !== id);
  render();
}
window.deleteProduct = deleteProduct;
window.openAdminForm = openAdminForm;
function starsHtml(n) { return '⭐'.repeat(n) + '☆'.repeat(5 - n); }
function render() {
  const filtered = products.filter(p => {
    const matchCat    = currentCat === 'all' || p.category === currentCat;
    const matchSearch = p.name.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });
  const grid      = document.getElementById('grid');
  const noResults = document.getElementById('noResults');
  countMsg.textContent = `Showing ${filtered.length} of ${products.length} products`;
  if (filtered.length === 0) { grid.innerHTML = ''; noResults.classList.remove('hidden'); return; }
  noResults.classList.add('hidden');
  grid.innerHTML = filtered.map(p => `
    <div class="product-card">
      <div class="card-img">${p.emoji}</div>
      <div class="card-body">
        <div class="card-cat">${p.category}</div>
        <div class="card-name">${p.name}</div>
        <div class="card-price">₹${p.price.toLocaleString()}</div>
        <div class="card-rating">${starsHtml(p.rating)}</div>
        ${isAdmin ? `
          <div class="admin-card-actions">
            <button class="card-btn edit-btn" onclick="openAdminForm(${p.id})">✏ Edit</button>
            <button class="card-btn del-btn" onclick="deleteProduct(${p.id})">🗑 Del</button>
          </div>` : ''}
      </div>
    </div>
  `).join('');
}
const countMsg = document.getElementById('countMsg');
document.getElementById('filterBtns').addEventListener('click', e => {
  if (!e.target.classList.contains('filter-btn')) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  currentCat = e.target.dataset.cat;
  render();
});
document.getElementById('searchInput').addEventListener('input', e => {
  searchQuery = e.target.value.trim().toLowerCase();
  render();
});
render();