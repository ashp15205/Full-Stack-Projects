let yr = false;
function swap() {
  yr = !yr;
  document.getElementById("tog").innerText = yr
    ? "View Monthly"
    : "View Yearly (-20%)";
  document.getElementById("plan").innerText = yr
    ? "Yearly Plan"
    : "Monthly Plan";
  document.getElementById("price").innerHTML = yr
    ? `$96<span style="font-size:18px; color:#888;">/yr</span>`
    : `$10<span style="font-size:18px; color:#888;">/mo</span>`;
}
