const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const questionText = document.getElementById('questionText');
const optionsGrid = document.getElementById('optionsGrid');
const currentQ = document.getElementById('currentQ');
const totalQ = document.getElementById('totalQ');
const finalScore = document.getElementById('finalScore');
const totalScore = document.getElementById('totalScore');

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

function showScreen(screen) {
    [startScreen, quizScreen, resultScreen].forEach(s => s.classList.add('hidden'));
    screen.classList.remove('hidden');
}

function renderQuestion() {
    const data = quizData[currentIndex];
    questionText.textContent = data.q;
    currentQ.textContent = currentIndex + 1;
    totalQ.textContent = quizData.length;
    
    optionsGrid.innerHTML = '';
    data.a.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => selectOption(idx);
        optionsGrid.appendChild(btn);
    });
}

function selectOption(idx) {
    if (idx === quizData[currentIndex].correct) {
        score++;
    }
    
    currentIndex++;
    if (currentIndex < quizData.length) {
        renderQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    finalScore.textContent = score;
    totalScore.textContent = quizData.length;
    showScreen(resultScreen);
}

startBtn.onclick = () => {
    currentIndex = 0;
    score = 0;
    showScreen(quizScreen);
    renderQuestion();
};

restartBtn.onclick = () => {
    showScreen(startScreen);
};
