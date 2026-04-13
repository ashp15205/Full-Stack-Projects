const tags = [
  {tag:"<b>", type:"inline", desc:"Bold text"},
  {tag:"<i>", type:"inline", desc:"Italic text"},
  {tag:"<span>", type:"inline", desc:"Inline container"},
  {tag:"<a>", type:"inline", desc:"Hyperlink"},
  {tag:"<div>", type:"block", desc:"Block container"},
  {tag:"<p>", type:"block", desc:"Paragraph"},
  {tag:"<h1>", type:"block", desc:"Heading level 1"},
  {tag:"<section>", type:"block", desc:"Semantic section"}
];
let cur = "all";
function setCat(c) { cur = c; render(); }
function render() {
  let f = cur === "all" ? tags : tags.filter(t => t.type === cur);
  document.getElementById("body").innerHTML = f.map(t => `<tr><td><code style="color:#6c63ff">${t.tag.replace('<','&lt;').replace('>','&gt;')}</code></td><td>${t.type}</td><td>${t.desc}</td></tr>`).join('');
}
render();
