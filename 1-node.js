const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

function sumEvenNumbers(array) {
  return array.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}

function interval() {
  setInterval(() => {
    console.log("QUERY RUNNING");
  }, 5000);
}

// USAGE:

// sumEventNumbers([1, 3, 6, 7, 11, 17, 22, 51]) 
// -> 28

// interval
// -> QUERY RUNNING