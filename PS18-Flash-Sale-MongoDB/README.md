# PS18 - Flash Sale Schema (Nested Attributes)
**Problem:** MongoDB schema for Flash Sale with variable attributes (size, color). GET route by nested attribute.  
**Stack:** Node.js, MongoDB, Mongoose

## Run
```bash
npm install && node server.js
```

## Key Concept
```js
// Nested Object in Mongoose schema
attributes: { sizes: [String], colors: [String], brand: String }

// Query by nested array item
FlashSale.find({ 'attributes.colors': 'Red' })
```
