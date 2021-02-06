/**
 * Function takes in an object with the values and operation to calculate
 * ...and returns the object with a new parameter of "result"
 * @param {*} equation
 */
function calculate(equation) {
  switch (equation.calculation.operation) {
    case 'addition':
      equation.result =
        Number(equation.calculation.firstNumber) +
        Number(equation.calculation.secondNumber);
      break;
    case 'subtraction':
      equation.result =
        Number(equation.calculation.firstNumber) -
        Number(equation.calculation.secondNumber);
      break;
    case 'multiplication':
      equation.result =
        Number(equation.calculation.firstNumber) *
        Number(equation.calculation.secondNumber);
      break;
    case 'division':
      equation.result =
        Number(equation.calculation.firstNumber) /
        Number(equation.calculation.secondNumber);
      break;
  }

  return equation;
}

module.exports = calculate;
