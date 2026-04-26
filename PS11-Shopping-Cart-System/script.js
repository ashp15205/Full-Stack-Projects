// Product data
let products = [
    { name: "Phone", price: 10000, qty: 0, img: "https://picsum.photos/60?1" },
    { name: "Laptop", price: 50000, qty: 0, img: "https://picsum.photos/60?2" },
    { name: "Headphones", price: 2000, qty: 0, img: "https://picsum.photos/60?3" }
];

// Render cart
function show() {
    let out = "";

    products.forEach((p, i) => {
        let subtotal = p.price * p.qty;

        out += `
        <div class="item">
            <img src="${p.img}">
            <div>
                <b>${p.name}</b><br>
                ₹${p.price} × ${p.qty} = <b>₹${subtotal}</b>
            </div>

            <div>
                <button onclick="change(${i}, -1)">-</button>
                <span>${p.qty}</span>
                <button onclick="change(${i}, 1)">+</button>
            </div>
        </div>`;
    });

    document.getElementById("cart").innerHTML = out;
    total();
}

// Change quantity
function change(i, val) {
    products[i].qty += val;
    if (products[i].qty < 0) products[i].qty = 0;
    show();
}

// Total
function total() {
    let t = 0;

    products.forEach(p => {
        t += p.price * p.qty;
    });

    document.getElementById("total").innerText = t;
}

// Load
show();