# Problem 20 – E-Commerce Logic Engine

## 🎯 Objective
Shopping cart with quantity controls and coupon logic. Admin mode lets you add/edit/delete products dynamically.

## 🛠 Tech Stack
`HTML` · `CSS` · `JavaScript`

## 📁 Files
| File | Purpose |
|------|---------|
| `index.html` | Header (admin badge) + admin panel + products grid + cart |
| `style.css` | Dark theme + admin panel + cart + product admin row |
| `script.js` | Cart CRUD + Product CRUD + Coupon logic |

---

## ✨ Features

### Customer Features
- Product grid with Add to Cart
- Qty `+/−` per item in cart
- Remove item
- 3 coupon codes: `SAVE10` (10% off), `FLAT200` (₹200 off), `HALF` (50% off)
- Live subtotal → discount → total
- Checkout button

### Admin Features (Click "Admin Login")
- Admin panel slides in with "🛡 Admin" badge
- **Add Product** → form with emoji, name, price → Save → appears in grid
- **Edit Product** → form prefills → update name/price/emoji
- **Delete Product** → removes from grid (also removes from cart)
- Click "Admin Logout" → panel hides

---

## 🔑 Key Concepts

### Cart State Object
```javascript
let cart = {};  // { productId: quantity }

// Add
cart[id] = (cart[id] || 0) + 1;

// Quantity change
cart[id] = cart[id] + delta;
if (cart[id] <= 0) delete cart[id];

// Subtotal
const subtotal = Object.keys(cart).reduce((sum, id) =>
  sum + products.find(p => p.id === +id).price * cart[id], 0
);
```

### Coupon Logic
```javascript
const COUPONS = {
  SAVE10:  { type: 'percent', value: 10  },
  FLAT200: { type: 'flat',    value: 200 },
};
const discount = coupon.type === 'percent'
  ? subtotal * coupon.value / 100
  : Math.min(coupon.value, subtotal);
```

### Product CRUD
```javascript
// Add
products.push({ id: nextId++, name, price, emoji });

// Edit
Object.assign(products.find(p => p.id === editingId), { name, price, emoji });

// Delete
products = products.filter(p => p.id !== id);
delete cart[id];   // also clear from cart
```

---

## 🚀 How to Run
Open `index.html` in browser — no dependencies.

---

## 🎓 Exam Demo Checklist
- [ ] Add items to cart → subtotal updates
- [ ] Use + / − qty buttons → total changes
- [ ] Apply coupon `SAVE10` → discount appears
- [ ] Apply invalid coupon → error message shown
- [ ] Click Checkout → success alert + cart clears
- [ ] Click **Admin Login** → admin panel appears
- [ ] Add new product → appears in grid
- [ ] Edit product price → "Add to Cart" reflects new price
- [ ] Delete product → gone from grid + removed from cart
