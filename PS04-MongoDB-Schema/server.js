const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/ecommerce_db")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Category Schema
const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
});
const Category = mongoose.model("Category", categorySchema);

// Product Schema (references Category)
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});
const Product = mongoose.model("Product", productSchema);

// Category Routes
app.get("/categories", async (req, res) =>
  res.json(await Category.find()),
);
app.post("/categories", async (req, res) => {
  const c = new Category(req.body);
  await c.save();
  res.json(c);
});

// Product Routes
app.get("/products", async (req, res) =>
  res.json(await Product.find().populate("category")),
);
app.post("/products", async (req, res) => {
  const p = new Product(req.body);
  await p.save();
  res.json(p);
});
app.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

app.put("/categories/:id", async (req, res) => {
  const doc = await Category.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  res.json(doc);
});
app.delete("/categories/:id", async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});
app.listen(3000, () =>
  console.log("PS4 Server on http://localhost:3000"),
);
