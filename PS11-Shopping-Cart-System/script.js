let cart = [
    {
        id: 1,
        name: "Premium Headphones",
        price: 199.99,
        quantity: 1,
        category: "Electronics"
    },
    {
        id: 2,
        name: "Mechanical Keyboard",
        price: 129.50,
        quantity: 2,
        category: "Peripherals"
    },
    {
        id: 3,
        name: "Wireless Mouse",
        price: 59.00,
        quantity: 1,
        category: "Accessories"
    }
];

const cartTableBody = document.getElementById('cartTableBody');
const emptyMsg = document.getElementById('emptyMsg');
const subtotalVal = document.getElementById('subtotalVal');
const taxVal = document.getElementById('taxVal');
const totalVal = document.getElementById('totalVal');

function updateTotals() {
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const tax = subtotal * 0.05; // 5% tax as per HTML
    const total = subtotal + tax;

    subtotalVal.textContent = `$${subtotal.toFixed(2)}`;
    taxVal.textContent = `$${tax.toFixed(2)}`;
    totalVal.textContent = `$${total.toFixed(2)}`;
}

function renderCart() {
    if (cart.length === 0) {
        cartTableBody.innerHTML = '';
        emptyMsg.classList.remove('hidden');
        updateTotals();
        return;
    }

    emptyMsg.classList.add('hidden');
    cartTableBody.innerHTML = cart.map(item => `
        <tr>
            <td>
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <span>${item.category}</span>
                </div>
            </td>
            <td>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                </div>
            </td>
            <td><strong>$${(item.price * item.quantity).toFixed(2)}</strong></td>
            <td>
                <button class="remove-btn" onclick="removeItem(${item.id})">Remove</button>
            </td>
        </tr>
    `).join('');
    
    updateTotals();
}

window.updateQty = (id, delta) => {
    cart = cart.map(item => {
        if (item.id === id) {
            const newQty = Math.max(1, item.quantity + delta);
            return { ...item, quantity: newQty };
        }
        return item;
    });
    renderCart();
};

window.removeItem = (id) => {
    cart = cart.filter(item => item.id !== id);
    renderCart();
};

document.querySelector('.checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) return alert('Your cart is empty!');
    alert('Thank you for your purchase! Checkout complete.');
    cart = [];
    renderCart();
});

// Initial Render
renderCart();
