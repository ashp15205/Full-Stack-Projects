const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/student_db");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true },
  branch: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
const Student = mongoose.model("Student", studentSchema);

app.get("/students", async (req, res) =>
  res.json(await Student.find()),
);
app.post("/students", async (req, res) => {
  try {
    const s = new Student(req.body);
    await s.save();
    res.json(s);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});
app.put("/students/:id", async (req, res) => {
  const s = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  res.json(s);
});
app.delete("/students/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

app.listen(3010, () =>
  console.log("PS29 Student Record Management System running on http://localhost:3010"),
);
