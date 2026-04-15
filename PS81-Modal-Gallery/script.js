const photos = [10, 20, 30, 40, 50, 60, 70, 80, 90].map(
  (id) => `https://picsum.photos/id/${id}/400/300`,
);

document.getElementById("grid").innerHTML = photos
  .map(
    (src) =>
      `<img class="thumb" src="${src.replace("400/300", "280/160")}" onclick="open('${src}')">`,
  )
  .join("");

function open(src) {
  document.getElementById("mImg").src = src;
  document.getElementById("modal").classList.add("open");
}
function closeM() {
  document.getElementById("modal").classList.remove("open");
}
