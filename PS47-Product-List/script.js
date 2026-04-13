const prods = [{n:"Phone", e:"📱", c:"elec"}, {n:"Laptop", e:"💻", c:"elec"}, {n:"T-Shirt", e:"👕", c:"cloth"}, {n:"Jeans", e:"👖", c:"cloth"}, {n:"Headphones", e:"🎧", c:"elec"}];

function fil(cat) {
  let f = cat === 'all' ? prods : prods.filter(p => p.c === cat);
  document.getElementById("grid").innerHTML = f.map(p => `<div class="card">${p.e}<br><small>${p.n}</small></div>`).join('');
}
fil('all');
