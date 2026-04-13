# PS29 - MongoDB Aggregation
**Problem:** Use `$match` and `$group` to calculate avg price of products via Express route.  
**Stack:** Node.js, Express, MongoDB, Mongoose Aggregation Framework

## Run
```bash
npm install && node server.js
```

## Key Concept
```js
// Aggregation pipeline
Product.aggregate([
  { $match: { category: 'Electronics' } },   // Filter
  { $group: {
      _id: '$category',
      avgPrice: { $avg: '$price' },           // Calculate average
      count: { $sum: 1 }
  }}
]);
```
