const images = [
{id:1, emoji:'🌄', title:'Mountain Sunrise', desc:'Golden hour over the Alps at dawn', cat:'nature'},
{id:2, emoji:'🏙', title:'City Skyline', desc:'Urban architecture at dusk', cat:'architecture'},
{id:3, emoji:'🌊', title:'Ocean Wave', desc:'Pacific surf at high tide', cat:'nature'}
];
let filtered = [...images];
let modalIdx = 0;
function render() {
  const grid = document.getElementById('gallery');
  grid.innerHTML = filtered.map((img, i) => `
    <div class="gallery-item" onclick="openModal(${i})" data-index="${i}">
      <div class="gallery-img">${img.emoji}</div>
      <div class="gallery-overlay">
        <div class="gallery-title">${img.title}</div>
        <div class="gallery-cat">${img.cat}</div>
      </div>
    </div>
  `).join('');
}
let currentCat = 'all';
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCat = btn.dataset.cat;
    filtered = currentCat === 'all' ? [...images] : images.filter(i => i.cat === currentCat);
    render();
  });
});
function openModal(idx) {
  modalIdx = idx;
  showModal();
}
function showModal() {
  const img = filtered[modalIdx];
  document.getElementById('modalImg').textContent = img.emoji;
  document.getElementById('modalTitle').textContent = img.title;
  document.getElementById('modalDesc').textContent = img.desc;
  document.getElementById('modalCat').textContent = img.cat;
  document.getElementById('modal').classList.remove('hidden');
  document.getElementById('overlay').classList.remove('hidden');
}
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('overlay').addEventListener('click', closeModal);
function closeModal() {
  document.getElementById('modal').classList.add('hidden');
  document.getElementById('overlay').classList.add('hidden');
}
document.getElementById('modalPrev').addEventListener('click', () => {
  modalIdx = (modalIdx - 1 + filtered.length) % filtered.length;
  showModal();
});
document.getElementById('modalNext').addEventListener('click', () => {
  modalIdx = (modalIdx + 1) % filtered.length;
  showModal();
});
document.addEventListener('keydown', e => {
  if (document.getElementById('modal').classList.contains('hidden')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') { modalIdx = (modalIdx - 1 + filtered.length) % filtered.length; showModal(); }
  if (e.key === 'ArrowRight') { modalIdx = (modalIdx + 1) % filtered.length; showModal(); }
});
render();