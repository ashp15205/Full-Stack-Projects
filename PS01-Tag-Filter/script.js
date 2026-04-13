const dic = [{t:"<b>", d:"Bold text"}, {t:"<i>", d:"Italic text"}, {t:"<u>", d:"Underline"}, {t:"<mark>", d:"Highlight text element"}];
function find() {
  let q = document.getElementById("q").value.toLowerCase();
  document.getElementById("list").innerHTML = dic.filter(x => x.t.includes(q) || x.d.toLowerCase().includes(q)).map(x => `<li><b style="color:#6c63ff; background:rgba(255,255,255,0.1); padding:2px 5px; border-radius:4px;">${x.t.replace('<','&lt;').replace('>','&gt;')}</b> &mdash; ${x.d}</li>`).join("");
}
find();
