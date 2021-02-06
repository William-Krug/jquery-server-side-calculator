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

/**
 *
 * @param {*} event
 */
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
  event.preventDefault();
  operation = $(this).data('operation');
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
  if (verbose) {
    console.log('*** in resetInputs() ***');
    console.log('\toperation:', operation);
  }
}

function getEquationHistory() {
  const ajaxOptions = {
    url: '/equationHistory',
    method: 'GET',
  };
  $.ajax(ajaxOptions)
    .then(function (response) {
      console.log('Banana Yeah!!!');
    })
    .catch(function (error) {
      console.log('Banana No');
    });
}

// let ajaxOptions = {
//   url: '/allTheQuotes',
//   method: 'GET',
// };
// $.ajax(ajaxOptions)
//   // Promise to call me back later, plz
//   .then(function (quoteList) {
//     console.log('got a response:', quoteList);
//     $('#quoteList').empty();
//     // Take array of quotes
//     // loop d' lop through em
//     for (let quote of quoteList) {
//       // and render (.append()) to the DOM
//       $('#quoteList').append(`
//           <li>
//             <blockquote>
//               "${quote.quote}"
//               —${quote.author}
//             </blockquote>
//           </li>
//         `);
//     }
//   })
//   .catch(function () {
//     // alert('ruh roh... Better contact your webmaster.');
//     $('#messages').text('ruh roh... Better contact your webmaster.');
//   });
