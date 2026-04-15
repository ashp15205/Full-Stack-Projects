function login(e) {
  e.preventDefault();
  let em = document.getElementById("em").value,
    pw = document.getElementById("pw").value,
    v = true;
  document.getElementById("emErr").innerText =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)
      ? ""
      : ((v = false), "Invalid email format");
  document.getElementById("pwErr").innerText =
    pw.length >= 6
      ? ""
      : ((v = false),
        "Password must be at least 6 characters");
  if (v) alert("Login successful!");
}
