function submitFB() {
  let v = document.getElementById("msg").value;
  if (!v) return;
  let data = JSON.parse(localStorage.getItem('fb') || "[]");
  data.push(v);
  localStorage.setItem('fb', JSON.stringify(data));
  document.getElementById("msg").value = "";
  upd();
}
function upd() { document.getElementById("cnt").innerText = JSON.parse(localStorage.getItem('fb') || "[]").length; }
upd();
