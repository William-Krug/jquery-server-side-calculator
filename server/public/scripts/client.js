console.log('JavaScript is ready');
$(document).ready(onReady);

const verbose = true;

function onReady() {
  console.log('jQuery is ready');
  $('#calculatorInput').on('submit', calculate);
}

function calculate(event) {
  event.preventDefault();
  const newEquation = {
    firstNumber: Number($('#firstNumberInput').val()),
    operation: '',
    secondNumber: Number($('#secondNumberInput').val()),
  };
  if (verbose) {
    console.log('in calculate()');
    console.log('\tnewEquation:', newEquation);
  }
}
