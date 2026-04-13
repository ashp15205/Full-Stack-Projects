function add() {
  let v = document.getElementById("inp").value.trim(); if(!v) return;
  let li = document.createElement("li");
  li.innerHTML = `<span onclick="this.style.textDecoration=this.style.textDecoration?'':'line-through'">${v}</span><button onclick="this.parentElement.remove()">🗑</button>`;
  document.getElementById("list").appendChild(li);
  document.getElementById("inp").value = "";
}
