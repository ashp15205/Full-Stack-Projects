const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017/appointments_db",
);

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
const Appointment = mongoose.model(
  "Appointment",
  appointmentSchema,
);

app.get("/appointments", async (req, res) =>
  res.json(await Appointment.find().sort({ date: 1 })),
);
app.post("/appointments", async (req, res) => {
  const a = new Appointment(req.body);
  await a.save();
  res.json(a);
});
app.delete("/appointments/:id", async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ msg: "Cancelled" });
});

app.put("/appointments/:id", async (req, res) => {
  const doc = await Appointment.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  res.json(doc);
});
app.listen(3008, () =>
  console.log(
    "PS76 Appointment Server → http://localhost:3008",
  ),
);
