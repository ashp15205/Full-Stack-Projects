// PS63 script.js - Live Profile Preview
function u() {
  const nm = document.getElementById("nm").value;
  document.getElementById("pn").innerText =
    nm || "Your Name";
  document.getElementById("av").innerText = nm
    ? nm[0].toUpperCase()
    : "?";
  document.getElementById("pr").innerText =
    document.getElementById("role").value || "Your Role";
  document.getElementById("pe").innerText =
    "✉ " +
    (document.getElementById("em").value ||
      "email@example.com");
}
