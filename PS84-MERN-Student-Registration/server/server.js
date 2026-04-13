const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/student_registration')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));
const studentSchema = new mongoose.Schema({
  name:    { type: String, required: true, trim: true },
  email:   { type: String, required: true, trim: true },
  rollNo:  { type: String, required: true, trim: true },
  branch:  { type: String, required: true },
  year:    { type: Number, required: true, min: 1, max: 4 },
  phone:   { type: String, trim: true },
}, { timestamps: true });
const Student = mongoose.model('Student', studentSchema);
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get('/api/students/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.post('/api/students', async (req, res) => {
  try {
    const student = new Student(req.body);
    const saved   = await student.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
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
app.delete('/api/students/:id', async (req, res) => {
  try {
    const deleted = await Student.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));