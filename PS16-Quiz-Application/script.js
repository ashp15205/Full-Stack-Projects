const data = [
    {
        q: "HTML stands for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "None"],
        ans: 0
    },
    {
        q: "CSS is used for?",
        options: ["Structure", "Styling", "Logic"],
        ans: 1
    },
    {
        q: "JS is?",
        options: ["Programming Language", "Database", "Browser"],
        ans: 0
    }
];

let i = 0;
let score = 0;

// Load question
function load() {
    if (i >= data.length) {
        document.querySelector(".card").innerHTML =
            `<h2>Score: ${score} / ${data.length}</h2>`;
        return;
    }

    question.innerText = data[i].q;

    let out = "";
    data[i].options.forEach((opt, idx) => {
        out += `
        <div class="option" onclick="select(${idx})">
            ${opt}
        </div>`;
    });

    options.innerHTML = out;
}

// Select answer
function select(ans) {
    if (ans === data[i].ans) score++;
    i++;
    load();
}

// Next button (optional skip)
function next() {
    i++;
    load();
}

// Start
load();