console.log('JavaScript is ready');
$(document).ready(onReady);

const verbose = true;
let operation = '';

function onReady() {
  console.log('jQuery is ready');
  renderEquationHistory();
  $('#calculatorInput').on('submit', calculate);
  $('.operationButton').on('click', setOperation);
  $('#clearInputs').on('click', resetInputs);
}

/**
 * Function takes DOM input and stores it in an object
 *
 * POST call is made to store the "equation" to the server
 *
 * Successful POST results in the equation being displayed to DOM
 * @param {*} event
 */
function calculate(event) {
  // Keep DOM from refreshing on 'Submit'
  event.preventDefault();

  // capture DOM inputs
  const newEquation = {
    firstNumber: Number($('#firstNumberInput').val()),
    operation: operation,
    secondNumber: Number($('#secondNumberInput').val()),
  };

  // console logs used for testing, debugging, and process tracking
  if (verbose) {
    console.log('*** in calculate() ***');
    console.log('\tnewEquation:', newEquation);
  }

  // POST equation data to server
  $.ajax({
    data: {
      calculation: newEquation,
    },
    url: '/calculate',
    method: 'POST',
  })
    .then(function (response) {
      console.log('Banana Yeah!!!');
      renderEquationHistory();
      renderResult();
    })
    .catch(function (error) {
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
  // Keep DOM from refreshing on 'Submit'
  event.preventDefault();
  operation = $(this).data('operation');

  // console logs used for testing, debugging, and process tracking
  if (verbose) {
    console.log('*** in setOperation() ***');
    console.log('\tthis:', $(this).data('operation'));
    console.log('\toperation:', operation);
  }
}

/**
 * Function resets the input elements on the DOM and resets
 * ...the "operation" variable to an empty string
 */
function resetInputs() {
  operation = '';
  $('#firstNumberInput').val('');
  $('#secondNumberInput').val('');

  // console logs used for testing, debugging, and process tracking
  if (verbose) {
    console.log('*** in resetInputs() ***');
    console.log('\toperation:', operation);
  }
}

/**
 * Function makes a GET call to get the equation history from the server
 *
 * Successful GET results in history log being rendered to the DOM
 */
function renderEquationHistory() {
  // console logs used for testing, debugging, and process tracking
  if (verbose) {
    console.log('*** in renderEquationHistory() ***');
  }
  const ajaxOptions = {
    url: '/equationHistory',
    method: 'GET',
  };
  $.ajax(ajaxOptions)
    .then(function (equationHistory) {
      console.log('Banana Yeah!!!');
      const $historyLog = $('#historyLog');
      $historyLog.empty();
      for (let equation of equationHistory) {
        $historyLog.append(`
          <li>
            ${equation.calculation.firstNumber} ${equation.calculation.operation} ${equation.calculation.secondNumber} = ${equation.result}
          </li>
        `);
      }
    })
    .catch(function (error) {
      console.log('Banana No');
    });
}

/**
 * Function makes a GET call to the equation history from the server
 *
 * Successful GET results in the latest result being rendered to the DOM
 */
function renderResult() {
  // console logs used for testing, debugging, and process tracking
  if (verbose) {
    console.log('*** in renderResult() ***');
  }
  const ajaxOptions = {
    url: '/equationHistory',
    method: 'GET',
  };
  $.ajax(ajaxOptions)
    .then(function (equationHistory) {
      console.log('Banana Yeah!!!');
      const $result = $('#result');
      $result.empty();
      $result.append(equationHistory[equationHistory.length - 1].result);
    })
    .catch(function (error) {
      console.log('Banana No');
    });
}
