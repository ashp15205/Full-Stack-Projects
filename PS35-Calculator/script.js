let expr = "";
function ap(v) {
  expr += v;
  document.getElementById("disp").value = expr;
}
function cl() {
  expr = "";
  document.getElementById("disp").value = "";
}
function calc() {
  try {
    expr = String(eval(expr));
    document.getElementById("disp").value = expr;
  } catch {
    document.getElementById("disp").value = "Error";
    expr = "";
  }
}
