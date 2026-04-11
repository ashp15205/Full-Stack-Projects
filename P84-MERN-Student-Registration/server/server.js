const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

const app = express();

// ── Middleware ──
app.use(cors());
app.use(express.json());

// ── MongoDB Connection ──
mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

// ── Student Schema & Model ──
const studentSchema = new mongoose.Schema({
  name:    { type: String, required: true, trim: true },
  email:   { type: String, required: true, trim: true },
  rollNo:  { type: String, required: true, trim: true },
  branch:  { type: String, required: true },
  year:    { type: Number, required: true, min: 1, max: 4 },
  phone:   { type: String, trim: true },
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

// ── ROUTES ──

// GET all students
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single student
app.get('/api/students/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create student
app.post('/api/students', async (req, res) => {
  try {
    const student = new Student(req.body);
    const saved   = await student.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update student
app.put('/api/students/:id', async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: 'Student not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE student
app.delete('/api/students/:id', async (req, res) => {
  try {
    const deleted = await Student.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ── Start Server ──
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
