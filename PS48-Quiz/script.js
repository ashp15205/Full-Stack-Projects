const qs = [
  {
    q: "What does HTML stand for?",
    opts: [
      "HyperText Markup Language",
      "High Tech ML",
      "HyperText Machine Language",
      "None",
    ],
    ans: 0,
  },
  {
    q: "Which tag creates a hyperlink?",
    opts: ["<a>", "<link>", "<href>", "<nav>"],
    ans: 0,
  },
  {
    q: "Which CSS property changes text color?",
    opts: [
      "font-color",
      "text-color",
      "color",
      "background",
    ],
    ans: 2,
  },
  {
    q: "What does JS `typeof null` return?",
    opts: ["null", "undefined", "object", "boolean"],
    ans: 2,
  },
  {
    q: "Which method adds to end of array?",
    opts: ["push()", "pop()", "shift()", "splice()"],
    ans: 0,
  },
];
let cur = 0,
  score = 0,
  answered = false;

function render() {
  const q = qs[cur];
  document.getElementById("qNo").innerText =
    `Q${cur + 1} of ${qs.length}`;
  document.getElementById("qText").innerText = q.q;
  document.getElementById("feedback").innerText = "";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("options").innerHTML = q.opts
    .map(
      (o, i) =>
        `<div class="opt" id="opt${i}" onclick="pick(${i})">${o}</div>`,
    )
    .join("");
  answered = false;
}
function pick(i) {
  if (answered) return;
  answered = true;
  const q = qs[cur];
  document
    .getElementById("opt" + i)
    .classList.add(i === q.ans ? "correct" : "wrong");
  if (i === q.ans) {
    score++;
    document.getElementById("feedback").innerHTML =
      '<span style="color:#4caf50">✓ Correct!</span>';
  } else {
    document
      .getElementById("opt" + q.ans)
      .classList.add("correct");
    document.getElementById("feedback").innerHTML =
      '<span style="color:#f72585">✗ Wrong</span>';
  }
  document.getElementById("nextBtn").style.display =
    "inline-block";
}
function next() {
  cur++;
  if (cur < qs.length) {
    render();
  } else {
    document.getElementById("quizCard").style.display =
      "none";
    document.getElementById("resultCard").style.display =
      "block";
    document.getElementById("score").innerText =
      score + " / " + qs.length;
  }
}
function restart() {
  cur = 0;
  score = 0;
  document.getElementById("quizCard").style.display =
    "block";
  document.getElementById("resultCard").style.display =
    "none";
  render();
}
render();
