const express = require('express');
const User = require('../Models/users');

const router = express.Router();

// CREATE: Add a new user
router.post('/', async (req, res) => {
  console.log ("Create a Post Request")
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ: Get all users
router.get('/', async (req, res) => {
  console.log ("Get all Request")
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ: Get a single user by ID
router.get('/:id', async (req, res) => {
  console.log ("Get a Specific id")
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE: Update a user by ID
router.put('/:id', async (req, res) => {
  console.log ("Update a Specific id")
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE: Delete a user by ID
router.delete('/:id', async (req, res) => {
  console.log ("Deleted a Specific id")
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
