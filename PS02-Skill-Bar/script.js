const s = [
  { n: "HTML & CSS", p: 95 },
  { n: "JavaScript", p: 85 },
  { n: "React Framework", p: 70 },
  { n: "Backend Integration", p: 60 },
];
document.getElementById("bars").innerHTML = s
  .map(
    (x) =>
      `<div class="label">${x.n}</div><div class="bar-bg"><div class="bar-fill" style="width:${x.p}%"></div></div>`,
  )
  .join("");
