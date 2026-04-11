# Problem 81 – Image Gallery

## 🎯 Objective
Masonry-style image gallery with category filtering, hover effects, modal lightbox with keyboard navigation.

## 🛠 Tech Stack
`HTML` · `CSS Masonry` · `JavaScript`

## 📁 Files
| File | Purpose |
|------|---------|
| `index.html` | Filter buttons + masonry grid + modal overlay |
| `style.css` | CSS columns masonry + overlay + modal + hover |
| `script.js` | Gallery data + rendering + filter + modal nav |

---

## ✨ Features
- **15 images** across 4 categories (Nature, Architecture, Abstract, People)
- **CSS Masonry** layout using `columns` property
- **Category filter** buttons: All / Nature / Architecture / Abstract / People
- **Hover overlay** showing title + category badge
- **Modal lightbox** on click (full-screen overlay)
- **← → arrow navigation** through images in modal
- **Keyboard support**: ← → keys + Escape to close
- **Click outside** modal → closes it
- Images use color gradients as placeholders (no external URLs)

---

## 🔑 Key Concepts

### CSS Masonry (No JS needed!)
```css
.masonry-grid {
  columns: 4;            /* 4-column masonry */
  column-gap: 1rem;
}

.gallery-item {
  break-inside: avoid;   /* prevents card splitting across columns */
  margin-bottom: 1rem;
  display: inline-block;
  width: 100%;
}
```

### Filter Logic
```javascript
let currentCat = 'all';

const filtered = items.filter(img =>
  currentCat === 'all' || img.category === currentCat
);

grid.innerHTML = filtered.map(img => `<div class="gallery-item">...</div>`).join('');
```

### Modal with Keyboard Navigation
```javascript
let currentIdx = 0;

function openModal(idx) {
  currentIdx = idx;
  // Set modal image/title from filtered[currentIdx]
  modal.classList.remove('hidden');
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft')  prevImage();
  if (e.key === 'Escape')     closeModal();
});
```

---

## 🚀 How to Run
Open `index.html` in browser.

---

## 🎓 Checklist
- [ ] Gallery loads with all 15 cards in masonry layout
- [ ] Click "Architecture" → only architecture cards show
- [ ] Click "All" → all cards restore
- [ ] Hover a card → title overlay fades in
- [ ] Click a card → modal opens with full-size image
- [ ] Click → or press → key → next image in modal
- [ ] Press Escape → modal closes
- [ ] Click outside modal (dark area) → modal closes
- [ ] Filter while modal open → filter updates (after close)
