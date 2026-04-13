# Problem 13 – Product Gallery Filter

## 🎯 Objective
Product cards with category filter, real-time search, and admin CRUD for adding/editing/deleting products.

## 🛠 Tech Stack
`HTML` · `CSS` · `JavaScript`

## 📁 Files
| File | Purpose |
|------|---------|
| `index.html` | Admin form + filter controls + product grid |
| `style.css` | Card layout + admin form + filter button styles |
| `script.js` | Filter/search + Admin CRUD logic |

---

## ✨ Features

### Viewer Features
- 12 products across Electronics, Clothing, Books, Sports
- Category filter buttons (All / per category)
- Real-time search by product name
- Product count display ("Showing X of 12 products")
- Hover animation on cards (translateY + glow)
- Star rating display

### Admin Features (Click "Admin Login")
- **+ Add Product** button appears
- Form: Emoji, Name, Category, Price, Rating (1–5)
- **Edit Product** → form prefills
- **Delete Product** → confirm dialog → removes card
- Filters and search still work after add/edit/delete

---

## 🔑 Key Concepts

### Filter + Search
```javascript
const filtered = products.filter(p => {
  const matchCat    = currentCat === 'all' || p.category === currentCat;
  const matchSearch = p.name.toLowerCase().includes(searchQuery);
  return matchCat && matchSearch;
});
```

### Dynamic Star Rating
```javascript
function starsHtml(n) {
  return '⭐'.repeat(n) + '☆'.repeat(5 - n);
}
```

### CRUD
```javascript
// Add
products.push({ id: nextId++, emoji, name, category, price, rating });

// Edit
Object.assign(products.find(p => p.id === editingId), { emoji, name, category, price, rating });

// Delete
products = products.filter(p => p.id !== id);
```

---

## 🚀 How to Run
Open `index.html` in browser — no dependencies.

---

## 🎓 Checklist
- [ ] Click "Electronics" filter → only electronics cards show
- [ ] Type "book" in search → only book cards show
- [ ] Clear search → all cards restore
- [ ] Click **Admin Login** → "+ Add Product" appears on cards
- [ ] Add new product → appears in correct category
- [ ] Search for the new product by name
- [ ] Click ✏ Edit on any card → form prefills → change price → Save
- [ ] Click 🗑 Del → card disappears
- [ ] Click Admin Logout → edit/delete buttons hide
