const days = [
  { d: "Mon", t: 22 },
  { d: "Tue", t: 32 },
  { d: "Wed", t: 20 },
  { d: "Thu", t: 38 },
  { d: "Fri", t: 25 },
];
document.getElementById("dash").innerHTML = days
  .map(
    (x) =>
      `<div class="w-box" style="height:${x.t * 4}px"><span class="tval">${x.t}°</span><span class="dval">${x.d}</span></div>`,
  )
  .join("");
