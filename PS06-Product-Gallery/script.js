const products = [
    {
        id: 1,
        name: "Minimalist Watch",
        category: "Accessories",
        price: 129,
        desc: "Timeless design with premium leather strap and sapphire glass.",
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800"
    },
    {
        id: 2,
        name: "Noise Cancelling Buds",
        category: "Electronics",
        price: 199,
        desc: "Experience pure sound with active noise cancellation tech.",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800"
    },
    {
        id: 3,
        name: "Mechanical Keyboard",
        category: "Tech",
        price: 159,
        desc: "Tactile switches with customizable RGB lighting.",
        img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800"
    },
    {
        id: 4,
        name: "Ergonomic Desk Chair",
        category: "Furniture",
        price: 349,
        desc: "Designed for comfort during long hours of deep work.",
        img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800"
    }
];

const grid = document.getElementById('productGrid');
const toast = document.getElementById('toast');

function showToast(name) {
    toast.textContent = `${name} added to cart!`;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
}

function renderProducts() {
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <div class="img-container">
                <img src="${p.img}" alt="${p.name}">
            </div>
            <div class="content">
                <span class="p-id">ID: 00${p.id}</span>
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <div class="price-row">
                    <span class="price">$${p.price}</span>
                    <button class="buy-btn" onclick="buyNow('${p.name}')">Buy Now</button>
                </div>
            </div>
        </div>
    `).join('');
}

window.buyNow = (name) => {
    showToast(name);
};

renderProducts();
