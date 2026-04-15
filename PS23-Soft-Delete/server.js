const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017/soft_delete_db",
);

const recordSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  isActive: { type: Boolean, default: true }, // Soft delete flag
  deletedAt: Date,
});
const Record = mongoose.model("Record", recordSchema);

// GET all active records
app.get("/records", async (req, res) =>
  res.json(await Record.find({ isActive: true })),
);

// GET archived (soft deleted) records
app.get("/records/archived", async (req, res) =>
  res.json(await Record.find({ isActive: false })),
);

// POST create
app.post("/records", async (req, res) => {
  const r = new Record(req.body);
  await r.save();
  res.json(r);
});

// DELETE — soft delete (mark isActive: false, NOT remove from DB)
app.delete("/records/:id", async (req, res) => {
  const r = await Record.findByIdAndUpdate(
    req.params.id,
    { isActive: false, deletedAt: new Date() },
    { new: true },
  );
  res.json({ msg: "Soft deleted", record: r });
});

// RESTORE — set isActive back to true
app.patch("/records/:id/restore", async (req, res) => {
  const r = await Record.findByIdAndUpdate(
    req.params.id,
    { isActive: true, deletedAt: null },
    { new: true },
  );
  res.json({ msg: "Restored", record: r });
});

app.put("/records/:id", async (req, res) => {
  const doc = await Record.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  res.json(doc);
});
app.listen(3003, () =>
  console.log("PS23 Server on http://localhost:3003"),
);
