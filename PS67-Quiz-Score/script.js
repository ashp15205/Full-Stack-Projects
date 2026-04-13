const q = [
  { text: "2 + 2?", opts: ["3", "4", "5"], ans: "4" },
  { text: "Capital of France?", opts: ["Berlin", "Paris", "Rome"], ans: "Paris" },
  { text: "JS stands for?", opts: ["JavaScript", "JavaStyle", "JustScript"], ans: "JavaScript" }
];

let i = 0, score = 0;

function load() {
  if (i >= q.length) {
    document.getElementById("question").innerText = "Quiz Over!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("result").innerText = `Final Score: ${score}/${q.length}`;
    return;
  }
  document.getElementById("question").innerText = q[i].text;
  document.getElementById("options").innerHTML = "";
  q[i].opts.forEach(o => {
    let b = document.createElement("button");
    b.innerText = o;
    b.onclick = () => { if (o === q[i].ans) score++; i++; load(); };
    document.getElementById("options").appendChild(b);
  });
}

load();