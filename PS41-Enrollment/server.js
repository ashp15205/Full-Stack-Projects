const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/enrollment_db');

const enrollmentSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  courseName: { type: String, required: true },
  enrolledAt: { type: Date, default: Date.now }
});
const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

app.get('/enrollments', async (req, res) => res.json(await Enrollment.find()));
app.post('/enrollments', async (req, res) => { const e = new Enrollment(req.body); await e.save(); res.json(e); });
app.put('/enrollments/:id', async (req, res) => { const e = await Enrollment.findByIdAndUpdate(req.params.id, req.body, { new: true }); res.json(e); });
app.delete('/enrollments/:id', async (req, res) => { await Enrollment.findByIdAndDelete(req.params.id); res.json({ msg: 'Deleted' }); });

app.listen(3007, () => console.log('PS41 Server on http://localhost:3007'));
