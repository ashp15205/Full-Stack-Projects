const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const lapBtn = document.getElementById('lapBtn');
const resetBtn = document.getElementById('resetBtn');
const lapsList = document.getElementById('lapsList');
const noLaps = document.getElementById('noLaps');

let startTime;
let elapsedTime = 0;
let timerInterval;
let laps = [];

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 1000;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(3, "0");
    let formattedHH = hh.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}<small>.${formattedMS}</small>`;
}

function print(txt) {
    display.innerHTML = txt;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    showButton("PAUSE");
}

function pause() {
    clearInterval(timerInterval);
    showButton("PLAY");
}

function reset() {
    clearInterval(timerInterval);
    print("00:00:00<small>.000</small>");
    elapsedTime = 0;
    laps = [];
    renderLaps();
    showButton("PLAY");
}

function addLap() {
    laps.unshift(timeToString(elapsedTime));
    renderLaps();
}

function renderLaps() {
    if (laps.length === 0) {
        lapsList.innerHTML = '';
        noLaps.classList.remove('hidden');
        return;
    }
    noLaps.classList.add('hidden');
    lapsList.innerHTML = laps.map((lap, index) => `
        <li class="lap-item">
            <span class="lap-no">Lap ${laps.length - index}</span>
            <span class="lap-time">${lap}</span>
        </li>
    `).join('');
}

function showButton(buttonKey) {
    if (buttonKey === "PAUSE") {
        startBtn.textContent = "Pause";
        startBtn.classList.replace('primary', 'outline');
    } else {
        startBtn.textContent = "Start";
        startBtn.classList.replace('outline', 'primary');
    }
}

startBtn.addEventListener("click", () => {
    if (startBtn.textContent === "Start") {
        start();
    } else {
        pause();
    }
});

lapBtn.addEventListener("click", addLap);
resetBtn.addEventListener("click", reset);
