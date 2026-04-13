const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json()); app.use(cors());

mongoose.connect('mongodb://localhost:27017/vehicle_portal_db');

const vehicleSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: Number,
  price: Number,
  km: Number,
  contact: String,
  listedAt: { type: Date, default: Date.now }
});
const Vehicle = mongoose.model('Vehicle', vehicleSchema);

app.get('/vehicles', async (req, res) => res.json(await Vehicle.find().sort({ listedAt: -1 })));
app.post('/vehicles', async (req, res) => { const v = new Vehicle(req.body); await v.save(); res.json(v); });
app.delete('/vehicles/:id', async (req, res) => { await Vehicle.findByIdAndDelete(req.params.id); res.json({ msg: 'Listing removed' }); });



app.put('/vehicles/:id', async (req, res) => { const doc = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {new:true}); res.json(doc); });
app.listen(3009, () => console.log('PS77 Vehicle Portal → http://localhost:3009'));

