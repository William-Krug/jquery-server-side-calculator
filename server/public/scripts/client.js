console.log('JavaScript is ready');
$(document).ready(onReady);

const verbose = true;
let operation = '';

function onReady() {
  console.log('jQuery is ready');
  $('#calculatorInput').on('submit', calculate);
  $('.operationButton').on('click', setOperation);
  $('#clearInputs').on('click', resetInputs);
}

function calculate(event) {
  event.preventDefault();
  const newEquation = {
    firstNumber: Number($('#firstNumberInput').val()),
    operation: operation,
    secondNumber: Number($('#secondNumberInput').val()),
  };
  if (verbose) {
    console.log('*** in calculate() ***');
    console.log('\tnewEquation:', newEquation);
  }

  // POST quote data to server
  $.ajax({
    data: {
      calculation: newEquation,
    },
    url: '/calculate',
    method: 'POST',
  })
    .then(function (response) {
      console.log('Banana Yeah!!!');
    })
    .then(function (error) {
      console.log('wah wah Banana No');
    });
}

/**
 * Function sets the mathematical operation from user input
 *
 * Assistance from John Shands on setup
 * @param {*} event
 */
function setOperation(event) {
  event.preventDefault();
  operation = $(this).data('operation');
  if (verbose) {
    console.log('*** in setOperation() ***');
    console.log('\tthis:', $(this).data('operation'));
    console.log('\toperation:', operation);
  }
}

function resetInputs() {
  operation = '';
  $('#firstNumberInput').val('');
  $('#secondNumberInput').val('');
  if (verbose) {
    console.log('*** in resetInputs() ***');
    console.log('\toperation:', operation);
  }
}
