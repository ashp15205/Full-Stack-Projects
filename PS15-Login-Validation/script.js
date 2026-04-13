function login(e) {
  e.preventDefault();
  let em = document.getElementById("em").value, pw = document.getElementById("pw").value, v = true;
  document.getElementById("emErr").innerText = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em) ? "" : (v=false, "Invalid Email");
  document.getElementById("pwErr").innerText = pw.length >= 6 ? "" : (v=false, "Min 6 chars");
  if(v) alert("Logged in successfully!");
}
