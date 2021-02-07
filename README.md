![MIT LICENSE](https://img.shields.io/github/license/William-Krug/jquery-server-side-calculator.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/William-Krug/jquery-server-side-calculator.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/William-Krug/jquery-server-side-calculator.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/https:William-Krug/jquery-server-side-calculator.svg?style=social)

# jQuery Server Side Calculator

## Description

_Duration: 1 Weekend Sprint_

This application is a basic calculator that can perform addition, subtraction, multiplication, and division. Users interact with the DOM and calculations are computed on the server. A history log of previous calculations are stored below the input field.

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Screen Shot

### Base Mode

![Start](https://github.com/William-Krug/jquery-server-side-calculator/blob/master/images/base-mode-start.png)

![History_Log](https://github.com/William-Krug/jquery-server-side-calculator/blob/master/images/base-mode-history-log.png)

### Stretch Goals

![Start](https://github.com/William-Krug/jquery-server-side-calculator/blob/master/images/stretch-goals-start.png)

![History_Log](https://github.com/William-Krug/jquery-server-side-calculator/blob/master/images/stretch-goals-history-log.png)

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [jQuery.js](https://jquery.com/)

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example -- Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `your database name`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

### Base Mode

1. Enter your first operand in the input field called `First Number`
2. Select your operation by clicking on the appropriate button
3. Enter your second operand in the input field called `Second Number`
4. Click the `=` button to see the result of your equation
5. A log history of all calculations (current and previous) will be displayed below the input field
6. Click the `C` button to clear the inputs (log history will not be cleared)

### Stretch MOde

1. Use the keypad (buttons) to input the desired equation
2. The entered equation will display above the keypad in the display bar as each button is selected
3. Click the `=` button to see the result o your equation
4. A log history of all calculations (current and previous) will be displayed below the input field
5. Click the `C` button to clear the inputs (log history will not be cleared)

## Built With

- HTML
- CSS
- JavaScript
- jQuery
- Node
- Express
- Ajax

## License

[MIT](./LICENSE.txt)

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. A special shoutout goes to @John Shands for reminding me about `data-` attributes and how useful they can be.

## Support

If you have suggestions or issues, please email me at [william.p.krug@gmail.com](william.p.krug@gmail.com)
