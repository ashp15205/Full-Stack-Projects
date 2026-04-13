const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json()); app.use(cors());

mongoose.connect('mongodb://localhost:27017/shop_api_db');

const categorySchema = new mongoose.Schema({ name: String });
const Category = mongoose.model('Category', categorySchema);

const productSchema = new mongoose.Schema({
  name: String, price: Number, stock: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
});
const Product = mongoose.model('Product', productSchema);

app.get('/categories', async (req, res) => res.json(await Category.find()));
app.post('/categories', async (req, res) => { const c = new Category(req.body); await c.save(); res.json(c); });

app.get('/products', async (req, res) => res.json(await Product.find().populate('category')));
app.post('/products', async (req, res) => { const p = new Product(req.body); await p.save(); res.json(p); });
app.delete('/products/:id', async (req, res) => { await Product.findByIdAndDelete(req.params.id); res.json({msg:'Deleted'}); });



app.put('/categories/:id', async (req, res) => { const doc = await Category.findByIdAndUpdate(req.params.id, req.body, {new:true}); res.json(doc); });
app.delete('/categories/:id', async (req, res) => { await Category.findByIdAndDelete(req.params.id); res.json({ msg: 'Deleted' }); });
app.listen(3011, () => console.log('PS56 Server on http://localhost:3011'));

