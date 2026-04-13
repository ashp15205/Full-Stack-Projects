# PS79 - Dynamic Shopping Cart
**Problem:** Interactive cart where Total Price updates in real-time as users adjust quantities. Backend persistence via MongoDB.  
**Stack:** Node.js, Express, MongoDB (backend) + HTML, CSS, JS (frontend)

## Run Backend
```bash
npm install && node server.js  # Runs on port 3014
```

## Run Frontend
Open `index.html` directly in browser (works standalone too).

## Key Concepts
- `quantities[]` array tracks each product count
- `reduce()` calculates subtotal dynamically
- Coupon codes `SAVE10` / `SAVE20` apply tiered discounts
- Backend `server.js` persists cart state to MongoDB
