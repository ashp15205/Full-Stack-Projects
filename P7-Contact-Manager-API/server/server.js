const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

const app = express();

// ── Middleware ──
app.use(cors());
app.use(express.json());

// ── MongoDB Connection ──
mongoose.connect('mongodb://127.0.0.1:27017/contactDB')
  .then(() => console.log('✅ MongoDB connected — database: contactDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err.message));

// ── Contact Schema & Model ──
const contactSchema = new mongoose.Schema({
  name:  { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phone: { type: String, trim: true },
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

// ── ROUTES ──

// GET all contacts
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create contact
app.post('/api/contacts', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and Email are required' });
    }
    const contact = new Contact({ name, email, phone });
    const saved   = await contact.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE contact
app.delete('/api/contacts/:id', async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Contact not found' });
    res.json({ message: 'Contact deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ── Start Server ──
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
