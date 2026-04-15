const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/cart_db");
const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  qty: Number,
});
const CartItem = mongoose.model("CartItem", itemSchema);

app.get("/cart", async (req, res) =>
  res.json(await CartItem.find()),
);
app.post("/cart", async (req, res) => {
  const i = new CartItem(req.body);
  await i.save();
  res.json(i);
});
app.put("/cart/:id", async (req, res) => {
  const i = await CartItem.findByIdAndUpdate(
    req.params.id,
    { qty: req.body.qty },
    { new: true },
  );
  res.json(i);
});
app.delete("/cart/:id", async (req, res) => {
  await CartItem.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

app.listen(3014, () => console.log("PS79 Server running"));
