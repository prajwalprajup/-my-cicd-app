const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use environment PORT or default to 3000

// Basic route to confirm server is working
app.get('/', (req, res) => {
  res.send('Hello, World! Welcome to the test Express app.');
});

// Start the server and log the expected message
app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});