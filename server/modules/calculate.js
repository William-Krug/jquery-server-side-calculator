/**
 * Function takes in an object with the values and operation to calculate
 * ...and returns the object with a new parameter of "result"
 * @param {*} equation
 */
function calculate(equation) {
  switch (equation.calculation.operation) {
    case '+':
      equation.result =
        Number(equation.calculation.firstNumber) +
        Number(equation.calculation.secondNumber);
      break;
    case '-':
      equation.result =
        Number(equation.calculation.firstNumber) -
        Number(equation.calculation.secondNumber);
      break;
    case '*':
      equation.result =
        Number(equation.calculation.firstNumber) *
        Number(equation.calculation.secondNumber);
      break;
    case '/':
      equation.result =
        Number(equation.calculation.firstNumber) /
        Number(equation.calculation.secondNumber);
      break;
  }

  return equation;
}

module.exports = calculate;
