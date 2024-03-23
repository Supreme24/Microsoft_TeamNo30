const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3002;

// Create a connection pool to the MySQL database
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '1234',
  database: 'ContactFormDB',
});

// Middleware to parse JSON data
app.use(bodyParser.json());

// Route to handle form submissions
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  // Insert data into the database
  pool.query('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)', [name, email, message], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('Form submitted successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});