const express = require("express");
const app = express();
const notes = require("./data/notes");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is Running ...");
});

app.get("/app/data", (req, res) => {
  res.json(notes);
});

app.get("/app/data/:id", (req, res) => {
  const filterdNote = notes.find((note) => note._id === req.params.id);
  res.send(filterdNote);
});

app.listen(PORT, console.log(`Console started on PORT= ${PORT}`));
