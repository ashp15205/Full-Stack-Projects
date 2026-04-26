// Image data (online)
const images = [
    "https://picsum.photos/200?1",
    "https://picsum.photos/200?2",
    "https://picsum.photos/200?3",
    "https://picsum.photos/200?4",
    "https://picsum.photos/200?5",
    "https://picsum.photos/200?6"
];

// Render gallery
function loadGallery() {
    let out = "";

    images.forEach((img, i) => {
        out += `
        <div class="item">
            <img src="${img}">
            <div class="overlay">Image ${i+1}</div>
        </div>`;
    });

    document.getElementById("gallery").innerHTML = out;
}

// Load on start
loadGallery();