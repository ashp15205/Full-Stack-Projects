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
  eventName: { type: String, required: true },
  registeredAt: { type: Date, default: Date.now },
});
const Event = mongoose.model("Event", eventSchema);

app.get("/registrations", async (req, res) =>
  res.json(await Event.find()),
);
app.post("/registrations", async (req, res) => {
  const e = new Event(req.body);
  await e.save();
  res.json({ msg: "Registered successfully", data: e });
});
app.delete("/registrations/:id", async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

app.put("/registrations/:id", async (req, res) => {
  const doc = await Event.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  res.json(doc);
});
app.listen(3006, () =>
  console.log("PS40 Server on http://localhost:3006"),
);
