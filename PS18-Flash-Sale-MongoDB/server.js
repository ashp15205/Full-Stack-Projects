const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/flash_sale_db");

// Flash Sale Schema with nested variable attributes (size, color)
const flashSaleSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  originalPrice: Number,
  salePrice: Number,
  discount: Number,
  expiresAt: Date,
  attributes: {
    sizes: [String], // e.g. ["S","M","L","XL"]
    colors: [String], // e.g. ["Red","Blue"]
    brand: String,
  },
});
const FlashSale = mongoose.model(
  "FlashSale",
  flashSaleSchema,
);

// Routes
app.get("/sales", async (req, res) =>
  res.json(await FlashSale.find()),
);

// GET by nested attribute — filter by color
app.get("/sales/by-color/:color", async (req, res) => {
  const sales = await FlashSale.find({
    "attributes.colors": req.params.color,
  });
  res.json(sales);
});

app.post("/sales", async (req, res) => {
  const s = new FlashSale(req.body);
  await s.save();
  res.json(s);
});

app.delete("/sales/:id", async (req, res) => {
  await FlashSale.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

app.put("/sales/:id", async (req, res) => {
  const doc = await FlashSale.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  res.json(doc);
});
app.listen(3002, () =>
  console.log("PS18 Server on http://localhost:3002"),
);
