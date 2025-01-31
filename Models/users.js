const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    default: 18,
  },
}, { timestamps: true });

// User Model
const User = mongoose.model('User', userSchema);

module.exports = User;
