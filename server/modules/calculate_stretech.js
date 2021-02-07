/**
 *  Accepts a body like:
 * {
 *  "formula": {
 *    "equation": "['171', '+' '77']"
 *  }
 * }
 *
 * @param {*} formula
 */

function calculateStretch(data) {
  console.log('*** in calculateStretch() ***');
  console.log('data.formula:', data.formula);
  console.log('data.formula.equation:', data.formula.equation);
  if (data.formula.equation.includes('+')) {
    console.log('addition');
  } else if (data.formula.equation.includes('-')) {
    console.log('subtraction');
  } else if (data.formula.equation.includes('*')) {
    console.log('multiplication');
  } else if (data.formula.equation.includes('/')) {
    console.log('division');
  }
}

module.exports = calculateStretch;
