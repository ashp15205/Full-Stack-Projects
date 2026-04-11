const questions = [
  { q: 'Which keyword declares a block-scoped variable in JS?', opts: ['var','let','const','function'], ans: 1 },
  { q: 'What does `typeof null` return?', opts: ['"null"','"undefined"','"object"','"boolean"'], ans: 2 },
  { q: 'Which method adds an element at the end of an array?', opts: ['push()','pop()','shift()','unshift()'], ans: 0 },
  { q: 'What is the output of `2 + "3"` in JavaScript?', opts: ['5', '"23"', '"5"', 'NaN'], ans: 1 },
  { q: 'Which of these is NOT a JavaScript data type?', opts: ['Boolean','Float','String','Symbol'], ans: 1 },
  { q: 'What does `===` check?', opts: ['Value only','Type only','Value and type','Neither'], ans: 2 },
  { q: 'What does `Array.isArray([])` return?', opts: ['false','undefined','true','"array"'], ans: 2 },
  { q: 'Which event fires when a user clicks a button?', opts: ['onhover','onclick','onchange','onload'], ans: 1 },
  { q: 'What does JSON stand for?', opts: ['Java Standard Object Notation','JavaScript Object Notation','Java Source Object Name','JS Output Network'], ans: 1 },
  { q: 'What is a closure in JavaScript?', opts: ['A CSS property','A function with access to its outer scope','A loop construct','An HTML attribute'], ans: 1 },
];
let currentQ = 0;
let score = 0;
let timer;
let timeLeft = 30;
let answered = false;
const userAnswers = [];
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}
function startQuiz() {
  currentQ = 0; score = 0; answered = false; userAnswers.length = 0;
  showScreen('quizScreen');
  loadQuestion();
}
function loadQuestion() {
  answered = false;
  timeLeft = 30;
  updateTimer();
  clearInterval(timer);
  timer = setInterval(tick, 1000);
  const q = questions[currentQ];
  document.getElementById('questionNum').textContent = `Q ${currentQ + 1} / ${questions.length}`;
  document.getElementById('scoreDisplay').textContent = `Score: ${score}`;
  document.getElementById('questionText').textContent = q.q;
  document.getElementById('nextQBtn').classList.add('hidden');
  document.getElementById('optionsGrid').innerHTML = q.opts.map((opt, i) => `
    <button class="option-btn" onclick="selectAnswer(${i})">${opt}</button>
  `).join('');
}
function tick() {
  timeLeft--;
  updateTimer();
  if (timeLeft <= 0) { clearInterval(timer); revealAnswer(-1); }
}
function updateTimer() {
  document.getElementById('timerDisplay').textContent = timeLeft;
  document.getElementById('timerFill').style.width = (timeLeft / 30 * 100) + '%';
  const color = timeLeft > 10 ? '#f59e0b' : '#f72585';
  document.getElementById('timerFill').style.background = color;
  document.getElementById('timerDisplay').style.color = color;
}
function selectAnswer(idx) {
  if (answered) return;
  answered = true;
  clearInterval(timer);
  revealAnswer(idx);
}
function revealAnswer(userIdx) {
  const q = questions[currentQ];
  const correct = q.ans;
  const isCorrect = userIdx === correct;
  if (isCorrect) score++;
  userAnswers.push({ q: q.q, correct: q.opts[correct], userAns: userIdx >= 0 ? q.opts[userIdx] : 'Time out', isCorrect });
  const btns = document.querySelectorAll('.option-btn');
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add('correct');
    else if (i === userIdx) btn.classList.add('wrong');
  });
  document.getElementById('nextQBtn').classList.remove('hidden');
  document.getElementById('nextQBtn').textContent = currentQ + 1 < questions.length ? 'Next Question →' : 'View Results →';
}
document.getElementById('nextQBtn').addEventListener('click', () => {
  currentQ++;
  if (currentQ < questions.length) { loadQuestion(); }
  else { showResults(); }
});
function showResults() {
  showScreen('resultsScreen');
  const pct = score / questions.length;
  document.getElementById('finalScore').textContent = `${score} / ${questions.length}`;
  document.getElementById('resultIcon').textContent = pct >= 0.7 ? '🏆' : pct >= 0.4 ? '📚' : '💡';
  document.getElementById('resultTitle').textContent = pct >= 0.7 ? 'Excellent!' : pct >= 0.4 ? 'Not Bad!' : 'Keep Practicing!';
  document.getElementById('resultMsg').textContent = `You scored ${Math.round(pct*100)}% — ${pct >= 0.7 ? 'Great work!' : 'Keep studying!'}`;
  document.getElementById('answerReview').innerHTML = userAnswers.map((r, i) => `
    <div class="review-item-q">
      <span class="icon">${r.isCorrect ? '✅' : '❌'}</span>
      <span><strong>Q${i+1}:</strong> ${r.q.slice(0,40)}… → ${r.isCorrect ? r.correct : `<span style="color:#f72585">${r.userAns}</span> (ans: ${r.correct})`}</span>
    </div>
  `).join('');
}
function restartQuiz() { startQuiz(); }
document.getElementById('startBtn').addEventListener('click', startQuiz);