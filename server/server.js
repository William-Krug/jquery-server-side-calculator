const express = require('express');
const calculate = require('./modules/calculate');
const equationHistory = require('./modules/equation_history');

const app = express();
const port = 5000;
const verbose = true; // used for testing, debugging, and process tracking

app.use(express.static('server/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, function () {
  console.log(`I'm listening....`, port);
});

// GET endpoint
/**
 * GET /equationHistory
 *
 * Return an array with all the previous equations
 */
app.get('/equationHistory', function (req, res) {
  // console logs used for testing, debugging, and process tracking
  if (verbose) {
    console.log('*** in /equationHistory ***');
  }
  res.send(equationHistory);
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
  // Find the result of the POSTed equation and save to the history array
  equationHistory.push(calculate(req.body));

  // console logs used for testing, debugging, and process tracking
  if (verbose) {
    console.log('*** in /calculate ***');
    console.log('req.body:', req.body);
  }
  res.sendStatus(200);
});
