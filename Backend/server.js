const express=require('express');

// Create an instance of the Express application
const app = express();

// Set up a basic route
app.get('/', (req, res) => {
  res.send('Welcome to the College Timetable API!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});