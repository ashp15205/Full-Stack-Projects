if(localStorage.getItem("theme") === "light") { document.body.classList.add("light"); document.getElementById("label").innerText = "Light"; }
function toggle() {
  document.body.classList.toggle("light");
  let isLight = document.body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  document.getElementById("label").innerText = isLight ? "Light" : "Dark";
}
