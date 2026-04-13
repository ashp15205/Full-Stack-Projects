const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/products_agg_db');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number
});
const Product = mongoose.model('Product', productSchema);

// Seed sample data
mongoose.connection.once('open', async () => {
  if(await Product.countDocuments() === 0) {
    await Product.insertMany([
      {name:'Phone A', category:'Electronics', price:15000},
      {name:'Phone B', category:'Electronics', price:25000},
      {name:'Shirt', category:'Clothing', price:800},
      {name:'Jeans', category:'Clothing', price:1500},
      {name:'Laptop', category:'Electronics', price:60000}
    ]);
    console.log('Products seeded');
  }
});

// GET all products
app.get('/products', async (req, res) => res.json(await Product.find()));

// POST add product
app.post('/products', async (req, res) => { const p = new Product(req.body); await p.save(); res.json(p); });

// PS29 CORE: MongoDB Aggregation — $match + $group to get average price by category
app.get('/products/avg-price', async (req, res) => {
  const result = await Product.aggregate([
    { $group: { _id: '$category', avgPrice: { $avg: '$price' }, count: { $sum: 1 } } },
    { $sort: { avgPrice: -1 } }
  ]);
  res.json(result);
});

// Filter by category first, then aggregate (combining $match + $group)
app.get('/products/avg-price/:category', async (req, res) => {
  const result = await Product.aggregate([
    { $match: { category: req.params.category } },
    { $group: { _id: '$category', avgPrice: { $avg: '$price' }, count: { $sum: 1 } } }
  ]);
  res.json(result);
});



app.put('/products/:id', async (req, res) => { const doc = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true}); res.json(doc); });
app.delete('/products/:id', async (req, res) => { await Product.findByIdAndDelete(req.params.id); res.json({ msg: 'Deleted' }); });
app.listen(3005, () => console.log('PS29 Server on http://localhost:3005'));

