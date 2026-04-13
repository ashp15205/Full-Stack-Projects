function add() {
  let v = document.getElementById("t").value.trim(); if(!v) return;
  let li = document.createElement("li");
  li.innerHTML = `<span>${v}</span><button onclick="this.parentElement.remove()">Delete</button>`;
  document.getElementById("list").appendChild(li);
  document.getElementById("t").value = "";
}
