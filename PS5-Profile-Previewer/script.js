function upd() {
  document.getElementById("bName").innerText = document.getElementById("nm").value || "Your Name";
  document.getElementById("bRole").innerText = document.getElementById("role").value || "Job Title";
  document.getElementById("bEm").innerText = "📧 " + (document.getElementById("em").value || "email@example.com");
  document.getElementById("bPh").innerText = "📞 " + (document.getElementById("ph").value || "+00 0000000000");
}
