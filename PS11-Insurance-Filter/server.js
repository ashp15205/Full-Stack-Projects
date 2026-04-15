const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/insurance_db");

// Insurance Policy Schema
const policySchema = new mongoose.Schema({
  name: String,
  type: String,
  premium: Number,
  coverage: Number,
});
const Policy = mongoose.model("Policy", policySchema);

// Seed data on first run
async function seed() {
  if ((await Policy.countDocuments()) === 0) {
    await Policy.insertMany([
      {
        name: "Basic Health",
        type: "Health",
        premium: 5000,
        coverage: 200000,
      },
      {
        name: "Premium Life",
        type: "Life",
        premium: 15000,
        coverage: 1000000,
      },
      {
        name: "Vehicle Cover",
        type: "Vehicle",
        premium: 8000,
        coverage: 500000,
      },
      {
        name: "Home Shield",
        type: "Home",
        premium: 12000,
        coverage: 800000,
      },
    ]);
    console.log("Seeded policies");
  }
}
mongoose.connection.once("open", seed);

// Get all policies
app.get("/policies", async (req, res) =>
  res.json(await Policy.find()),
);

// Filter by max premium (PS11 key requirement: $lt / $gt operator)
app.get("/policies/filter", async (req, res) => {
  const { maxPremium, minPremium } = req.query;
  const query = {};
  if (maxPremium)
    query.premium = {
      ...query.premium,
      $lte: Number(maxPremium),
    };
  if (minPremium)
    query.premium = {
      ...query.premium,
      $gte: Number(minPremium),
    };
  res.json(await Policy.find(query));
});

app.post("/policies", async (req, res) => {
  const p = new Policy(req.body);
  await p.save();
  res.json(p);
});
app.delete("/policies/:id", async (req, res) => {
  await Policy.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

app.put("/policies/:id", async (req, res) => {
  const doc = await Policy.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  res.json(doc);
});
app.listen(3001, () =>
  console.log("PS11 Server on http://localhost:3001"),
);
