function calc() {
  let s = document.getElementById("str").value;
  document.getElementById("res").innerHTML = `
    <b>Length:</b> ${s.length}<br>
    <b>Uppercase:</b> ${s.toUpperCase()}<br>
    <b>Lowercase:</b> ${s.toLowerCase()}<br>
    <b>Reverse:</b> ${s.split('').reverse().join('')}
  `;
}
