const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets (HTML, CSS, JavaScript)
app.use(express.static('public'));

// API routes

// Get notes
app.get('/api/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('db.json', 'utf8'));
  res.json(notes);
});

// Save a new note
app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  const notes = JSON.parse(fs.readFileSync('db.json', 'utf8'));
  notes.push(newNote);
  fs.writeFileSync('db.json', JSON.stringify(notes));
  res.json(newNote);
});

// Route to serve the front-end interface
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});