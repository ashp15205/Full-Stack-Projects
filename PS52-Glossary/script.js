const tags = [
  { t: "<b>", c: "Inline", d: "Bold text" },
  { t: "<i>", c: "Inline", d: "Italic" },
  { t: "<u>", c: "Inline", d: "Underline" },
  { t: "<a>", c: "Inline", d: "Hyperlink" },
  { t: "<span>", c: "Inline", d: "Inline container" },
  { t: "<mark>", c: "Inline", d: "Highlight" },
  { t: "<div>", c: "Block", d: "Block container" },
  { t: "<p>", c: "Block", d: "Paragraph" },
  { t: "<h1>", c: "Block", d: "Heading 1" },
  { t: "<table>", c: "Block", d: "Table element" },
  { t: "<ul>", c: "Block", d: "Unordered list" },
  { t: "<section>", c: "Block", d: "Section" },
];
function find() {
  let q = document.getElementById("q").value.toLowerCase();
  document.getElementById("tbody").innerHTML = tags
    .filter(
      (x) =>
        x.t.includes(q) || x.d.toLowerCase().includes(q),
    )
    .map(
      (x) =>
        `<tr><td><code>${x.t.replace("<", "&lt;").replace(">", "&gt;")}</code></td><td>${x.c}</td><td>${x.d}</td></tr>`,
    )
    .join("");
}
find();
