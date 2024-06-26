// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    // What is your GitHub username?
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username');
                return false;
            }
        }
    },
    // What is your email address?
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    // What is your project name?
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name?'
    },
    // Please write a short description of your project
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project'
    },
    // What kind of License should your project have?
    {
        type: 'list',
        name: 'license',
        message: 'What kind of License should your project have?',
        choices: [
            'MIT',
            'APACHE 2.0',
            'GPL 3.0',
            'BSD 3',
            'None'
        ]
    },
    // What commend should be run to install dependencies? (npm i)
    {
        type:'input',
        name: 'installation',
        message: 'What commend should be run to install dependencies?',
        default: 'npm i'
    },
    // What commend should be run to run tests? (npm test)
    {
        type: 'input',
        name: 'test',
        message: 'What commend should be run to run tests?',
        default: 'npm test'
    },
    // What does the user need to know about using the repo?
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?'
    },
    // What does the user need to know about contributing to the repo?
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);

        console.log('README.md generated')
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(readmeData => {
        const markdown = generateMarkdown(readmeData);
        writeToFile('README.md', markdown)
    })
}

// Function call to initialize app
init();
