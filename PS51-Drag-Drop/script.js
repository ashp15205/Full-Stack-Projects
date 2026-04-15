let src;
function start(e) {
  src = e.target;
  e.dataTransfer.setData("text", "");
}
function over(e) {
  e.preventDefault();
}
function drop(e) {
  e.preventDefault();
  if (src !== e.target) {
    let list = document.getElementById("list");
    let items = Array.from(list.children);
    let sIdx = items.indexOf(src),
      tIdx = items.indexOf(e.target);
    if (sIdx < tIdx) e.target.after(src);
    else e.target.before(src);
  }
}
