# PS4 - NoSQL Schema for E-Commerce
**Problem:** MongoDB schema for Product & Category with a GET route to fetch all items.  
**Stack:** Node.js, Express, MongoDB, Mongoose

## Run
```bash
npm install
node server.js
```
Open `index.html` in browser (server must be running).

## API Endpoints
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/categories` | Get all categories |
| POST | `/categories` | Add a category |
| GET | `/products` | Get all products (populated) |
| POST | `/products` | Add a product |
| DELETE | `/products/:id` | Delete a product |

## Key Concepts
- **Mongoose Schema** with `ObjectId` ref to link Products → Categories
- **`.populate('category')`** on GET to embed the category object into the product response
