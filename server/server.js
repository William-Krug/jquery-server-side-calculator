const express = require('express');

const app = express();
const port = 5000;
const verbose = true;

app.use(express.static('server/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, function () {
  console.log(`I'm listening....`, port);
});

// POST endpoint
/**
 * POST /calculate endpoint
 *
 * Accepts a body like:
 * {
 *  "calculation": {
 *    "firstNumber": 171,
 *    "operation": 'addition',
 *    "secondNumber": 69
 *  }
 * }
 */
app.post('/calculate', (req, res) => {
  if (verbose) {
    console.log('*** in /calculate ***');
    console.log('\treq.body:', req.body);
  }
  res.sendStatus(200);
  // res.status(200).send(...);
});

function calculate(equation) {
  switch (equation.operation) {
    case 'addition':
      equation.result = equation.firstNumber + equation.secondNumber;
      break;
    case 'subtraction':
      equation.result = equation.firstNumber - equation.secondNumber;
      break;
    case 'multiplication':
      equation.result = equation.firstNumber * equation.secondNumber;
      break;
    case 'division':
      equation.result = equation.firstNumber / equation.secondNumber;
      break;
  }
  return equation;
}
