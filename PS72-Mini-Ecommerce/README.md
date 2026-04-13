# PS72 - Mini E-Commerce Product Page
**Problem:** Display products with image, price, and Add to Cart button.  
**Stack:** HTML, CSS, JavaScript

## Features
- Product grid with image, name, price
- Add to Cart → updates cart count badge
- Remove individual items from cart
- Dynamic total price calculation

## Key Concept
```js
const products = [{name:"Laptop",price:45999,img:"💻"}, ...];
// Filter + render pattern
document.getElementById("grid").innerHTML = 
  products.map(p => `<div class="card">...${p.name}...</div>`).join('');
```
