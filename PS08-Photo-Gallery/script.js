function get() {
  let g = localStorage.getItem("gallery_img");
  return g
    ? JSON.parse(g)
    : [
        "https://picsum.photos/id/10/280/200",
        "https://picsum.photos/id/20/280/200",
        "https://picsum.photos/id/30/280/200",
      ];
}
function add() {
  let val = document.getElementById("inp").value.trim();
  if (!val) return;
  let data = get();
  data.push(val);
  localStorage.setItem("gallery_img", JSON.stringify(data));
  document.getElementById("inp").value = "";
  ren();
}
function edit(i) {
  let data = get();
  let newVal = prompt("Edit Image URL:", data[i]);
  if (newVal && newVal.trim()) {
    data[i] = newVal.trim();
    localStorage.setItem(
      "gallery_img",
      JSON.stringify(data),
    );
    ren();
  }
}
function del(i) {
  let data = get();
  data.splice(i, 1);
  localStorage.setItem("gallery_img", JSON.stringify(data));
  ren();
}
function ren() {
  document.getElementById("list").innerHTML = get()
    .map(
      (item, index) => `
    <div style="position:relative; display:inline-block;">
      <img src="${item}" alt="Gallery Image" style="display:block;">
      <div style="position:absolute; top:5px; right:5px; background:rgba(0,0,0,0.6); padding:5px; border-radius:4px;">
        <button onclick="edit(${index})" style="background:#fbbf24; border:none; padding:2px 5px; cursor:pointer; font-weight:bold; border-radius:3px;">Edit</button>
        <button onclick="del(${index})" style="background:#f72585; border:none; color:white; padding:2px 5px; cursor:pointer; font-weight:bold; border-radius:3px;">Del</button>
      </div>
    </div>
  `,
    )
    .join("");
}
ren();
