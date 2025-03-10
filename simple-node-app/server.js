// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (like HTML, CSS, JS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Simple API endpoint that returns a JSON object
app.get('/api/data', (req, res) => {
  const data = {
    message: "Hello from the backend!"
  };
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
