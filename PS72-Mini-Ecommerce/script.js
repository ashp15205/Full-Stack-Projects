const prods = [
  {n:"Headphones", p:1299, img:"https://picsum.photos/id/0/160/100"},
  {n:"Keyboard", p:899, img:"https://picsum.photos/id/1/160/100"},
  {n:"Mouse", p:599, img:"https://picsum.photos/id/2/160/100"},
  {n:"Webcam", p:1999, img:"https://picsum.photos/id/3/160/100"},
  {n:"Monitor", p:12999, img:"https://picsum.photos/id/4/160/100"}
];
let cart = {count:0, total:0};

document.getElementById("prods").innerHTML = prods.map((p,i) => `
  <div class="card">
    <img src="${p.img}" alt="${p.n}">
    <h4>${p.n}</h4>
    <div class="price">₹${p.p}</div>
    <button onclick="add(${i})">🛒 Add to Cart</button>
  </div>`).join('');

function add(i) {
  cart.count++; cart.total += prods[i].p;
  document.getElementById("cnt").innerText = cart.count;
  document.getElementById("tot").innerText = cart.total;
}
function checkout() { alert(`Order placed!\n${cart.count} items | ₹${cart.total}`); cart={count:0,total:0}; document.getElementById("cnt").innerText=0; document.getElementById("tot").innerText=0; }
