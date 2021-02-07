/**
 * Function takes in a json object, and returns an object with the
 * ...equation array and resulting value
 *
 * Accepts a body like:
 * {
 *  "formula": {
 *    "equation": "['171', '+' '77']"
 *  }
 * }
 *
 * @param {*} formula
 */

function calculateStretch(data) {
  let operand = -1;
  let firstNumber = 0;
  let secondNumber = 0;
  console.log('*** in calculateStretch() ***');
  console.log('data.formula.equation:', data.formula.equation);
  // Boolean tests to determine which type of operation to use
  if (data.formula.equation.includes('+')) {
    // Find the index of the operand
    operand = data.formula.equation.indexOf('+');
    // Convert all array elements before operand into a number data type
    firstNumber = Number(data.formula.equation.slice(0, operand).join(''));
    // Convert all array elements after operand into a number data type
    secondNumber = Number(data.formula.equation.slice(operand + 1).join(''));
    // Store the result of the desired equation into a new property
    data.formula.result = firstNumber + secondNumber;
  } else if (data.formula.equation.includes('-')) {
    // Find the index of the operand
    operand = data.formula.equation.indexOf('-');
    // Convert all array elements before operand into a number data type
    firstNumber = Number(data.formula.equation.slice(0, operand).join(''));
    // Convert all array elements after operand into a number data type
    secondNumber = Number(data.formula.equation.slice(operand + 1).join(''));
    // Store the result of the desired equation into a new property
    data.formula.result = firstNumber - secondNumber;
  } else if (data.formula.equation.includes('*')) {
    // Find the index of the operand
    operand = data.formula.equation.indexOf('*');
    // Convert all array elements before operand into a number data type
    firstNumber = Number(data.formula.equation.slice(0, operand).join(''));
    // Convert all array elements after operand into a number data type
    secondNumber = Number(data.formula.equation.slice(operand + 1).join(''));
    // Store the result of the desired equation into a new property
    data.formula.result = firstNumber * secondNumber;
  } else if (data.formula.equation.includes('/')) {
    // Find the index of the operand
    operand = data.formula.equation.indexOf('/');
    // Convert all array elements before operand into a number data type
    firstNumber = Number(data.formula.equation.slice(0, operand).join(''));
    // Convert all array elements after operand into a number data type
    secondNumber = Number(data.formula.equation.slice(operand + 1).join(''));
    // Store the result of the desired equation into a new property
    data.formula.result = firstNumber / secondNumber;
  }
  // Return an object with the formula as an array and the results as a number
  return data.formula;
}

module.exports = calculateStretch;
