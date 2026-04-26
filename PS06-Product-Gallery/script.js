// JSON DATA
const data = [
    {name: "Phone", price: "₹10000", img: "https://picsum.photos/200?1"},
    {name: "Laptop", price: "₹50000", img: "https://picsum.photos/200?2"},
    {name: "Headphones", price: "₹2000", img: "https://picsum.photos/200?3"},
    {name: "Watch", price: "₹3000", img: "https://picsum.photos/200?4"}
];

// DISPLAY PRODUCTS
function show() {
    let out = "";

    data.forEach((p, i) => {
        out += `
        <div class="card">
            <img src="${p.img}">
            <h4>${p.name}</h4>
            <p>${p.price}</p>
            <button onclick="buy(${i}, this)">Buy Now</button>
        </div>`;
    });

    document.getElementById("products").innerHTML = out;
}

// BUY FUNCTION (IMPROVED)
function buy(i, btn) {

    // Change button state
    btn.innerText = "Purchased";
    btn.disabled = true;
    btn.style.background = "green";

    // Show message
    let msg = document.getElementById("msg");
    msg.innerText = "✅ You purchased " + data[i].name;
}

// load
show();