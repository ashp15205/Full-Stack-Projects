// Product data with images
const data = [
    {name: "Phone", category: "electronics", img: "https://picsum.photos/150?1"},
    {name: "Laptop", category: "electronics", img: "https://picsum.photos/150?2"},
    {name: "Headphones", category: "electronics", img: "https://picsum.photos/150?3"},
    {name: "Shirt", category: "clothing", img: "https://picsum.photos/150?4"},
    {name: "Jeans", category: "clothing", img: "https://picsum.photos/150?5"},
    {name: "Jacket", category: "clothing", img: "https://picsum.photos/150?6"}
];

// Show products
function show(list) {
    let out = "";

    list.forEach(p => {
        out += `
        <div class="card">
            <img src="${p.img}">
            <h4>${p.name}</h4>
            <p>${p.category}</p>
        </div>`;
    });

    document.getElementById("products").innerHTML = out;
}

// Filter
function filter(cat) {
    if (cat === "all") show(data);
    else show(data.filter(p => p.category === cat));
}

// Load all
show(data);