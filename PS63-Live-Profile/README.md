# PS63 - Live Profile Preview
**Problem:** Profile preview that updates live as user types.  
**Stack:** HTML, CSS, JavaScript (Real-time Input Binding)

## Key Concept
```js
function u() {
  const nm = document.getElementById("nm").value;
  document.getElementById("pn").innerText = nm || "Your Name";  // Live update
  document.getElementById("av").innerText = nm ? nm[0].toUpperCase() : "?"; // Avatar initial
}
```
Every field has `oninput="u()"` which calls one shared render function that refreshes all preview elements simultaneously.
