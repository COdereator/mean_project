const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const { URL } = require("./Models/models");
const port = 5000;

app.use(express.json());
app.use(cors());

// connection of mongo
mongoose.connect("mongodb://localhost:27017/mean").then(() => {
  console.log("Connected to Mongodb");
});

app.get("/", (req, res) => {
  res.send("Hello Nothing");
});

// add data from the database
app.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const newUrl = new URL(data);
    const savedData = await newUrl.save();
    res.json({ message: "Data Added Successfully", result: true });
    console.log(savedData);
  } catch (err) {
    console.log(err);
    res.json({ message: "Error Occured", result: err });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
