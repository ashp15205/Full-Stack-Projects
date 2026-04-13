let sec = 0, timer = null;
function start() {
  if (timer) return;
  timer = setInterval(() => {
    sec++;
    let h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    document.getElementById("disp").innerText = [h, m, s].map(v => v < 10 ? '0' + v : v).join(':');
  }, 1000);
}
function stop() { clearInterval(timer); timer = null; }
function reset() { stop(); sec = 0; document.getElementById("disp").innerText = "00:00:00"; }