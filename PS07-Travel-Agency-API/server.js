const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/travel_db");

const LeadSchema = new mongoose.Schema({
  name: String,
  email: String,
  destination: String,
  phone: String,
});
const Lead = mongoose.model("Lead", LeadSchema);

app.get("/leads", async (req, res) =>
  res.json(await Lead.find()),
);
app.post("/leads", async (req, res) => {
  const l = new Lead(req.body);
  await l.save();
  res.json(l);
});

app.put("/leads/:id", async (req, res) => {
  const doc = await Lead.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  res.json(doc);
});
app.delete("/leads/:id", async (req, res) => {
  await Lead.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});
app.listen(3013, () =>
  console.log("PS7 Server on http://localhost:3013"),
);
