const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/event_db");

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  eventType: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
const EventReg = mongoose.model("EventReg", eventSchema);

app.get("/events", async (req, res) => res.json(await EventReg.find().sort({ createdAt: -1 })));

app.post("/events", async (req, res) => {
  try {
    const e = new EventReg(req.body);
    await e.save();
    res.json(e);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put("/events/:id", async (req, res) => {
  try {
    const e = await EventReg.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(e);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete("/events/:id", async (req, res) => {
  try {
    await EventReg.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = 3011;
app.listen(PORT, () => {
  console.log(`PS30 Event Registration System running on http://localhost:${PORT}`);
});
