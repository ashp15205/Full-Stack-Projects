const faqs = [
  {
    q: "What is HTML?",
    a: "HTML (HyperText Markup Language) is the standard language for creating web pages.",
  },
  {
    q: "What is CSS?",
    a: "CSS (Cascading Style Sheets) styles the appearance of HTML elements like colors, fonts, and layout.",
  },
  {
    q: "What is JavaScript?",
    a: "JavaScript is a scripting language that makes web pages interactive and dynamic.",
  },
  {
    q: "What is the DOM?",
    a: "The Document Object Model (DOM) represents the HTML structure as a tree that JavaScript can manipulate.",
  },
  {
    q: "What is localStorage?",
    a: "localStorage is a browser API that lets you store key-value pairs persistently across sessions.",
  },
];

document.getElementById("acc").innerHTML = faqs
  .map(
    (f, i) => `
  <div class="item" id="item${i}">
    <div class="q" onclick="tog(${i})"><span>${f.q}</span><span class="arr">▼</span></div>
    <div class="a">${f.a}</div>
  </div>`,
  )
  .join("");

function tog(i) {
  document
    .getElementById("item" + i)
    .classList.toggle("open");
}
