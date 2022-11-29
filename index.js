// TODO: Include packages needed for this application
// including package require for this applicatation 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
//Creating Questions for the user input
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
    type: 'checkbox',
    name: 'license',
    message: 'what kind of license you use for this project?',
    choices: ["MIT", "GNU", "Apache"]

},

{
    type: 'input',
    name: 'installation',
    message: 'What is the instruction for installation?'

},

{
    type: 'input',
    name: 'test',
    message: 'Enter command should run to run tests?'
},
{
    type: 'input',
    name: 'usage',
    message: 'What is the usage information?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
},
{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
},
{
    type: 'input',
    name: 'contribution',
    message: 'What are the contribution guidlines?'
}



];

// TODO: Create a function to write README file
// function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName,data, function (err){
        if(err){
            console.log('Error!');
        }else{
            console.log('README file created successfully!');
        }
    })
};

// TODO: Create a function to initialize app
// intializing app
function init() { 
    inquirer.prompt(questions).then(function (data){
      writeToFile("README.md", generateMarkdown(data));
    })
}


// Function call to initialize app
init();
