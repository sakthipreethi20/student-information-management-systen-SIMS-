const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes or specify the allowed origins
app.use(cors({ origin: 'http://localhost:5173' }));

// Define your routes and other middleware here

const port = process.env.PORT || 8080; // Use the port defined in environment variables or 8080 as a default

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
