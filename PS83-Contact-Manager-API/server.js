const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/contact_manager_db');

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true }
});
const Contact = mongoose.model('Contact', ContactSchema);

// GET all contacts
app.get('/contacts', async (req, res) => res.json(await Contact.find()));

// POST new contact
app.post('/contacts', async (req, res) => {
  const c = new Contact(req.body);
  await c.save();
  res.json(c);
});

// DELETE contact
app.delete('/contacts/:id', async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Deleted' });
});



app.put('/contacts/:id', async (req, res) => { const doc = await Contact.findByIdAndUpdate(req.params.id, req.body, {new:true}); res.json(doc); });
app.listen(3083, () => console.log('PS83 Contact Manager Server on http://localhost:3083'));

