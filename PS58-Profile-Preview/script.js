function upd() {
  let nm = document.getElementById("nm").value;
  document.getElementById("pNm").innerText = nm || "Full Name";
  document.getElementById("av").innerText = nm ? nm[0].toUpperCase() : "?";
  document.getElementById("pRole").innerText = document.getElementById("role").value || "Role / Title";
  document.getElementById("pEm").innerText = "📧 " + (document.getElementById("em").value || "email");
  document.getElementById("pBio").innerText = document.getElementById("bio").value || "Bio appears here...";
}
