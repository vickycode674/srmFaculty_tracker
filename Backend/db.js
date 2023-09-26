const mysql = require('mysql2');

// Create a database connection
const db = mysql.createConnection({
    host: 'localhost', // Your database host
    user: 'root', // Your database username
    password: 'root', // Your database password
    database: 'CollegeTimetable', // Your database name
  });

  // Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

module.exports = db;