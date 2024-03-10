// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/bookreviewdb', { useNewUrlParser: true, useUnifiedTopology: true });

// Define MongoDB Schema and Models (using Mongoose)

// API Endpoints
app.get('/api/books', (req, res) => {
  // Logic to fetch books from the database
});

app.post('/api/reviews', (req, res) => {
  // Logic to add a review to the database
});

// Start server
app.listen(PORT, () => {
  console.log(Server running on http://localhost:${PORT});
});
