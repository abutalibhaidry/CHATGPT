require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./Routes/userRouts');

const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
const MONGO_URI = 'mongodb+srv://mohammadabutalib0110:H9BVVmeMNZLJQCHS@mycluster01.n8rma.mongodb.net/myDatabase';
//mongodb+srv://mohammadabutalib0110:H9BVVmeMNZLJQCHS@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority
mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use('/api/users', userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send("Hello World!")
})