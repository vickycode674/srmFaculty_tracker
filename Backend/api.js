const express = require('express');
const cors = require('cors'); // Import the cors middleware

const db = require('./db'); // Import your database connection module

const app = express();


app.use(cors({
    origin: 'http://127.0.0.1:5500' // Replace with your frontend's URL
  }));
  
// Set up a route to get faculty information based on day and period
app.get('/faculty', (req, res) => {
  const { day, period } = req.query;

  // Perform a database query to retrieve faculty information
  const sql = `
    SELECT Faculty.faculty_id, Faculty.faculty_name,Faculty.faculty_number,Faculty.faculty_subject_name
    FROM Timetable
    JOIN Days ON Timetable.day_id = Days.day_id
    JOIN Periods ON Timetable.period_id = Periods.period_id
    JOIN Faculty ON Timetable.faculty_id = Faculty.faculty_id
    WHERE Days.day_name = ? AND Periods.period_number = ?
  `;

  db.query(sql, [day, period], (err, results) => {
    if (err) {
      console.error('Error retrieving data from the database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    res.json(results);
  });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
