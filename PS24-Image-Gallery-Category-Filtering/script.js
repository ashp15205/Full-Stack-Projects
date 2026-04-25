const items = [
    { title: "Smart City Concept", cat: "tech", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800" },
    { title: "Foggy Mountain", cat: "nature", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800" },
    { title: "Glass Skyscraper", cat: "arch", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800" },
    { title: "Code Syntax", cat: "tech", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800" },
    { title: "Autumm Forest", cat: "nature", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800" },
    { title: "Modern Museum", cat: "arch", img: "https://images.unsplash.com/photo-1554435493-93422e8220c8?q=80&w=800" }
];

const grid = document.getElementById('galleryGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close-btn');

function renderGallery(filter = 'all') {
    const filtered = items.filter(i => filter === 'all' || i.cat === filter);
    
    grid.innerHTML = filtered.map(item => `
        <div class="gallery-item" onclick="openModal('${item.img}', '${item.title}')">
            <div class="img-box">
                <img src="${item.img}" alt="${item.title}">
            </div>
            <div class="item-info">
                <span class="tag">${item.cat}</span>
                <h4>${item.title}</h4>
            </div>
        </div>
    `).join('');
}

window.openModal = (url, title) => {
    modal.classList.remove('hidden');
    modalImg.src = url;
    caption.textContent = title;
};

closeBtn.onclick = () => modal.classList.add('hidden');

modal.onclick = (e) => {
    if (e.target === modal) modal.classList.add('hidden');
};

filterBtns.forEach(btn => {
    btn.onclick = () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGallery(btn.dataset.filter);
    };
});

renderGallery();
