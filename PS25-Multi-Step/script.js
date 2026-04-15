let cur = 1;
function renderDots() {
  document.getElementById("dots").innerHTML = [1, 2, 3, 4]
    .map(
      (i) =>
        `<span class="dot ${i < cur ? "done" : i === cur ? "active" : ""}">${i < cur ? "✓" : i}</span>`,
    )
    .join("");
  document.getElementById("progFill").style.width =
    ((cur - 1) / 3) * 100 + "%";
}
function next(step) {
  let v = true;
  document
    .querySelectorAll(".err")
    .forEach((e) => (e.innerText = ""));
  if (step == 1) {
    if (!document.getElementById("fn").value) {
      document.getElementById("fnE").innerText = "Required";
      v = false;
    }
    if (!document.getElementById("dob").value) {
      document.getElementById("dobE").innerText =
        "Required";
      v = false;
    }
  }
  if (step == 2) {
    if (!document.getElementById("email").value) {
      document.getElementById("emE").innerText = "Required";
      v = false;
    }
    if (!document.getElementById("ph").value) {
      document.getElementById("phE").innerText = "Required";
      v = false;
    }
  }
  if (step == 3) {
    if (!document.getElementById("usr").value) {
      document.getElementById("usE").innerText = "Required";
      v = false;
    }
    if (!document.getElementById("pwd").value) {
      document.getElementById("pwE").innerText = "Required";
      v = false;
    }
  }
  if (!v) return;
  cur++;
  [1, 2, 3, 4, 5].forEach(
    (i) =>
      (document.getElementById("s" + i).hidden = i !== cur),
  );
  if (cur == 4)
    document.getElementById("rev").innerHTML = [
      "fn",
      "dob",
      "email",
      "ph",
      "usr",
      "pwd",
    ]
      .map(
        (id) =>
          `${id}: ${document.getElementById(id).value}`,
      )
      .join("<br>");
  renderDots();
}
renderDots();
