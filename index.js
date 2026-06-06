const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// It looks for the environment variable they pass through the terminal.
// If they don't pass one, it defaults to 'localhost' (which will crash inside a container!)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/rescue_db';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err.message));

app.get('/', (req, res) => {
  res.send('API is running securely!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});