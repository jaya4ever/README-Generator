// TODO: Include packages needed for this application
// including package require for this applicatation 
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is your project title?'

},
{
    type: 'input',
    name: 'description',
    message: 'What is the description of your project?'

},

{
    type: 'list',
    name: 'license',
    message:'what kind of license you use for this project?',
    choices:["MIT", "GNU","Apache"]

},



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
