const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const URL = mongoose.model("student", urlSchema);

module.exports = {
  URL,
};
