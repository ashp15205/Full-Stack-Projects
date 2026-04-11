# Problem 46 – Stopwatch

## 🎯 Objective
Precise stopwatch with Start/Pause/Resume, lap tracking with split times, fastest/slowest lap highlighting.

## 🛠 Tech Stack
`HTML` · `CSS` · `JavaScript`

## 📁 Files
| File | Purpose |
|------|---------|
| `index.html` | Digital display + 3 control buttons + lap list |
| `style.css` | Watch card + display font + lap colours |
| `script.js` | requestAnimationFrame timing + lap logic |

---

## ✨ Features
- **HH:MM:SS.cs** display (centiseconds — smooth)
- **Start / Pause / Resume** button (changes label dynamically)
- **🏁 Lap** button → records split time + total elapsed
- **↺ Reset** → clears display and all laps
- 🟢 Fastest lap highlighted green
- 🔴 Slowest lap highlighted red
- Laps shown newest-first (most recent at top)

---

## 🔑 Key Concepts

### requestAnimationFrame (smooth, no drift)
```javascript
let startTime = 0;
let elapsed   = 0;   // accumulated time when paused
let running   = false;

// Start
startTime = Date.now();
running   = true;
raf = requestAnimationFrame(updateDisplay);

// Inside updateDisplay
function updateDisplay() {
  const total = elapsed + (running ? Date.now() - startTime : 0);
  // format and show hours, minutes, seconds, centiseconds
  if (running) raf = requestAnimationFrame(updateDisplay);
}

// Pause
elapsed += Date.now() - startTime;
running  = false;
cancelAnimationFrame(raf);
```

> Why not `setInterval`?  
> `setInterval` drifts over time. `requestAnimationFrame` syncs to the screen refresh rate (60fps) — much smoother and more accurate.

### Lap Time Calculation
```javascript
let lastLapTime = 0;

function recordLap() {
  const total = elapsed + (Date.now() - startTime);
  const split = total - lastLapTime;   // time since last lap
  laps.unshift({ num: laps.length + 1, split, total });
  lastLapTime = total;
}
```

### Format ms → HH:MM:SS.cs
```javascript
function formatTime(ms) {
  const h  = Math.floor(ms / 3600000);
  const m  = Math.floor((ms % 3600000) / 60000);
  const s  = Math.floor((ms % 60000) / 1000);
  const cs = Math.floor((ms % 1000) / 10);
  return `${pad(h)}:${pad(m)}:${pad(s)}.${pad(cs)}`;
}
function pad(n) { return String(n).padStart(2, '0'); }
```

---

## 🚀 How to Run
Open `index.html` in browser.

---

## 🎓 Checklist
- [ ] Click ▶ Start → timer begins running
- [ ] Display updates smoothly (centiseconds visible)
- [ ] Click ⏸ Pause → timer freezes
- [ ] Click ▶ Resume → continues from where it stopped
- [ ] Click 🏁 Lap → lap entry appears with split + total time
- [ ] Record 3+ laps → fastest = green, slowest = red
- [ ] Click ↺ Reset → display clears, laps list clears
- [ ] Lap and Reset buttons are disabled when not running
