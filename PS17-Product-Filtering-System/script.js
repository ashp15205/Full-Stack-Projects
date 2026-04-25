const products = [
    { name: "Sleek Headphones", category: "electronics", price: 199, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400" },
    { name: "Coffee Maker", category: "home", price: 89, img: "https://images.unsplash.com/photo-1520970014086-2208ecbf63c9?q=80&w=400" },
    { name: "Running Shoes", category: "sports", price: 120, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400" },
    { name: "MacBook Pro", category: "electronics", price: 1299, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400" },
    { name: "Smart Watch", category: "electronics", price: 299, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400" },
    { name: "Blender", category: "home", price: 45, img: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=400" }
];

const grid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderProducts(filtered) {
    grid.innerHTML = filtered.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>$${p.price}</p>
        </div>
    `).join('');
}

function filterItems() {
    const term = searchInput.value.toLowerCase();
    const activeCat = document.querySelector('.filter-btn.active').dataset.category;
    
    const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(term);
        const matchesCat = activeCat === 'all' || p.category === activeCat;
        return matchesSearch && matchesCat;
    });
    
    renderProducts(filtered);
}

searchInput.addEventListener('input', filterItems);

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterItems();
    });
});

renderProducts(products);
