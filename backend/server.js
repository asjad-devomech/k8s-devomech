const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/test";

mongoose.connect(mongoURL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
