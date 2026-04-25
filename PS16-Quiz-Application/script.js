const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');
const startBtn = document.getElementById('startBtn');
const questionText = document.getElementById('questionText');
const optionsGrid = document.getElementById('optionsGrid');
const questionNum = document.getElementById('questionNum');
const timerEl = document.getElementById('timer');
const finalScore = document.getElementById('finalScore');

const quizData = [
    {
        q: "What does HTML stand for?",
        a: ["Hyperlink Text Markup Language", "Hyper Text Markup Language", "High Tech Multi Language", "Home Tool Markup Language"],
        correct: 1
    },
    {
        q: "Which CSS property controls the text size?",
        a: ["font-style", "text-size", "font-size", "text-weight"],
        correct: 2
    },
    {
        q: "How do you declare a JavaScript variable?",
        a: ["v myVar;", "variable myVar;", "var myVar;", "v = myVar;"],
        correct: 2
    }
];

let currentIndex = 0;
let score = 0;
let timerId = null;
let timeLeft = 15;

function showScreen(screen) {
    [startScreen, quizScreen, resultScreen].forEach(s => s.classList.add('hidden'));
    screen.classList.remove('hidden');
}

function renderQuestion() {
    const data = quizData[currentIndex];
    questionText.textContent = data.q;
    questionNum.textContent = `Question ${currentIndex + 1} of ${quizData.length}`;
    timeLeft = 15;
    timerEl.textContent = `${timeLeft}s`;
    
    optionsGrid.innerHTML = '';
    data.a.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.textContent = opt;
        btn.onclick = () => selectOption(idx);
        optionsGrid.appendChild(btn);
    });

    clearInterval(timerId);
    timerId = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerId);
            selectOption(-1);
        }
    }, 1000);
}

function selectOption(idx) {
    clearInterval(timerId);

    Array.from(optionsGrid.children).forEach((btn, buttonIdx) => {
        btn.disabled = true;
        if (buttonIdx === quizData[currentIndex].correct) {
            btn.classList.add('correct');
        } else if (buttonIdx === idx && idx !== quizData[currentIndex].correct) {
            btn.classList.add('wrong');
        }
    });

    if (idx === quizData[currentIndex].correct) {
        score++;
    }

    setTimeout(() => {
        currentIndex++;
        if (currentIndex < quizData.length) {
            renderQuestion();
        } else {
            showResults();
        }
    }, 700);
}

function showResults() {
    finalScore.textContent = score;
    showScreen(resultScreen);
}

startBtn.onclick = () => {
    currentIndex = 0;
    score = 0;
    showScreen(quizScreen);
    renderQuestion();
};
