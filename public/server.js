const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
const saltRounds = 10; // Number of salt rounds for password hashing

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Initialize SQLite database
const db = new sqlite3.Database('./users.db');

// Create users table (if not exists)
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
  )
`);

// Registration route
app.use(express.static('public'));

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Insert user data into the database
    db.run(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [username, email, password], // Store the password as-is 
        (err) => {
            if (err) {
                console.error(err);
                return res.status(400).json({ message: 'Username or email already exists' });
            }
            res.status(201).json({ message: 'Registration successful' });
        }
    );
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
