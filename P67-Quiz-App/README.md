# Problem 67 – Quiz App

## 🎯 Objective
A quiz app with 10 JavaScript questions, countdown timer, score tracking, and a full answer review screen.

## 🛠 Tech Stack
`HTML` · `CSS` · `JavaScript`

## 📁 Files
| File | Purpose |
|------|---------|
| `index.html` | Start screen + quiz screen + results screen |
| `style.css` | Dark quiz card + timer bar + option feedback colours |
| `script.js` | Timer, scoring, option reveal, results with review |

---

## ✨ Features
- **Start screen** with quiz metadata
- **30-second countdown** per question (shrinking orange → red bar)
- 4 answer options in 2×2 grid
- **Instant feedback**: ✅ green = correct, ❌ red = wrong
- **Timer runs out** → auto-reveals answer, moves on
- Score display updates in real-time during quiz
- **Results screen**: % score, emoji rating 🏆/📚/💡
- **Full answer review** — all 10 Qs with your answer vs correct
- **"Try Again"** button restarts everything

---

## 🔑 Key Concepts

### Timer with setInterval
```javascript
let timeLeft = 30;

timer = setInterval(() => {
  timeLeft--;
  updateTimerDisplay();
  if (timeLeft <= 0) {
    clearInterval(timer);
    revealAnswer(-1);  // -1 = timed out, no selection
  }
}, 1000);

// Stop timer when user answers
function selectAnswer(idx) {
  if (answered) return;
  answered = true;
  clearInterval(timer);
  revealAnswer(idx);
}
```

### Answer Reveal
```javascript
function revealAnswer(userIdx) {
  const correct = questions[currentQ].ans;
  if (userIdx === correct) score++;

  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct)   btn.classList.add('correct');  // always green
    else if (i === userIdx) btn.classList.add('wrong'); // red if wrong pick
  });
}
```

### Results Calculation
```javascript
const pct = score / questions.length;
// 70%+ → 🏆 Excellent, 40-69% → 📚 Not Bad, <40% → 💡 Keep Practicing
```

---

## 🚀 How to Run
Open `index.html` in browser. Click "Start Quiz →".

---

## 🎓 Checklist
- [ ] Click "Start Quiz →" → first question loads with 30s timer
- [ ] Select correct answer → green highlight + score increments
- [ ] Select wrong answer → red + correct answer shown green
- [ ] Wait for timer → auto-advances, correct answer revealed
- [ ] Go through all 10 questions
- [ ] Results screen: score circle, emoji, percentage
- [ ] Scroll down review: shows all Q + your answer vs correct
- [ ] Click "Try Again" → restarts from Q1
