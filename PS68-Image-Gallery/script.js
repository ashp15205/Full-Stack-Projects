const imgs = [
  {src:"https://picsum.photos/id/10/280/160", cat:"nature", name:"Forest"},
  {src:"https://picsum.photos/id/29/280/160", cat:"city", name:"Downtown"},
  {src:"https://picsum.photos/id/292/280/160", cat:"food", name:"Plate"},
  {src:"https://picsum.photos/id/15/280/160", cat:"nature", name:"River"},
  {src:"https://picsum.photos/id/164/280/160", cat:"city", name:"Building"},
  {src:"https://picsum.photos/id/312/280/160", cat:"food", name:"Dinner"}
];
function fil(cat) {
  let f = cat === 'all' ? imgs : imgs.filter(x => x.cat === cat);
  document.getElementById("grid").innerHTML = f.map(x => `<div class="item"><img src="${x.src}" alt="${x.name}"><div class="label">${x.name}</div></div>`).join('');
}
fil('all');
