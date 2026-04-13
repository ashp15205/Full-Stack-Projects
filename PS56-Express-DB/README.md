# PS56 - Node.js Express API with MongoDB
**Problem:** Express API with MongoDB schemas for products and categories.  
**Stack:** Node.js, Express, MongoDB, Mongoose  
**Note:** This is the same architecture as PS4. See `PS4-NoSQL-Ecommerce-Schema` for full UI.  
**Run:** `npm install && node server.js`

| Method | Route | Action |
|--------|-------|--------|
| GET/POST | `/categories` | List / Add categories |
| GET/POST | `/products` | List / Add products (populated) |
| DELETE | `/products/:id` | Remove product |
