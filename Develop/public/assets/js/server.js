// Import required modules
// IMPORT express
// IMPORT path
// IMPORT fs

// Create an instance of the Express app
// app = CREATE express app
// PORT = GET process.env.PORT or use 3000

// Set up middleware
// USE express.urlencoded
// USE express.json
// USE serve static assets from 'public' directory

// Define API routes

// Route to get notes
// GET '/api/notes'
//   READ notes from 'db.json'
//   RETURN notes as JSON

// Route to save a new note
// POST '/api/notes'
//   READ newNote from request body
//   READ existing notes from 'db.json'
//   ADD newNote to notes
//   WRITE notes to 'db.json'
//   RETURN newNote as JSON

// Start the server
// LISTEN to PORT
//   PRINT "Server is running on port PORT"