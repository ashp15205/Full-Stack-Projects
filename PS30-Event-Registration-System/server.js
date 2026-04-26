const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/eventDB");

// Schema
const Event = mongoose.model("Event", {
    name: String,
    email: String,
    event: String
});

// CREATE
app.post("/add", async (req, res) => {
    await new Event(req.body).save();
    res.send("Added");
});

// READ
app.get("/all", async (req, res) => {
    res.json(await Event.find());
});

// UPDATE
app.put("/update/:id", async (req, res) => {
    await Event.findByIdAndUpdate(req.params.id, req.body);
    res.send("Updated");
});

// DELETE
app.delete("/delete/:id", async (req, res) => {
    await Event.findByIdAndDelete(req.params.id);
    res.send("Deleted");
});

app.listen(5000, () => console.log("Server running"));