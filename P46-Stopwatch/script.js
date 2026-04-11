let running = false;
let startTime = 0;
let elapsed  = 0;
let raf;
let laps = [];
let lastLapTime = 0;

const hoursEl   = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const msEl      = document.getElementById('ms');
const startBtn  = document.getElementById('startBtn');
const lapBtn    = document.getElementById('lapBtn');
const resetBtn  = document.getElementById('resetBtn');

function fmt(n, digits) { return String(Math.floor(n)).padStart(digits, '0'); }

function formatTime(ms) {
  const h  = ms / 3600000;
  const m  = (ms % 3600000) / 60000;
  const s  = (ms % 60000) / 1000;
  const cs = (ms % 1000) / 10;
  return { h: fmt(h,2), m: fmt(m,2), s: fmt(s,2), cs: fmt(cs,2) };
}

function updateDisplay() {
  const total = elapsed + (running ? Date.now() - startTime : 0);
  const t = formatTime(total);
  hoursEl.textContent   = t.h;
  minutesEl.textContent = t.m;
  secondsEl.textContent = t.s;
  msEl.textContent      = t.cs;
  if (running) raf = requestAnimationFrame(updateDisplay);
}

startBtn.addEventListener('click', () => {
  if (!running) {
    startTime = Date.now();
    running = true;
    startBtn.textContent = '⏸ Pause';
    startBtn.classList.add('running');
    lapBtn.disabled  = false;
    resetBtn.disabled = false;
    raf = requestAnimationFrame(updateDisplay);
  } else {
    elapsed += Date.now() - startTime;
    running = false;
    cancelAnimationFrame(raf);
    startBtn.textContent = '▶ Resume';
    startBtn.classList.remove('running');
  }
});

lapBtn.addEventListener('click', () => {
  if (!running) return;
  const total = elapsed + (Date.now() - startTime);
  const split = total - lastLapTime;
  laps.unshift({ num: laps.length + 1, split, total });
  lastLapTime = total;
  renderLaps();
});

resetBtn.addEventListener('click', () => {
  running = false;
  cancelAnimationFrame(raf);
  elapsed = 0; startTime = 0; lastLapTime = 0; laps = [];
  hoursEl.textContent = minutesEl.textContent = secondsEl.textContent = '00';
  msEl.textContent = '00';
  startBtn.textContent = '▶ Start';
  startBtn.classList.remove('running');
  lapBtn.disabled = resetBtn.disabled = true;
  document.getElementById('lapList').innerHTML = '';
  document.getElementById('lapsHeader').style.display = 'none';
});

function renderLaps() {
  document.getElementById('lapsHeader').style.display = 'flex';
  const splits = laps.map(l => l.split);
  const minSplit = Math.min(...splits);
  const maxSplit = Math.max(...splits);

  document.getElementById('lapList').innerHTML = laps.map((l) => {
    const cls = splits.length > 1 ? (l.split === minSplit ? 'fastest' : l.split === maxSplit ? 'slowest' : '') : '';
    const tSplit = formatTime(l.split);
    const tTotal = formatTime(l.total);
    return `
      <li class="lap-item ${cls}">
        <span class="lap-num">Lap ${laps.length - l.num + 1}</span>
        <span class="lap-split">${tSplit.m}:${tSplit.s}.${tSplit.cs}</span>
        <span class="lap-total">${tTotal.m}:${tTotal.s}.${tTotal.cs}</span>
      </li>
    `;
  }).join('');
}
