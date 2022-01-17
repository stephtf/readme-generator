// these are the packages linked
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// the following is the array of questions that the user will be prompted with
const questions = [
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Enter your project description',
    name: 'description',
  },
  {
    type: 'input', 
    message: 'Enter the command to install necessary dependencies',
    name: 'installation',
  },
  {
    type: 'input', 
    message: 'Provide an example of usage',
    name: 'usage',
  },
  {
    type: 'input', 
    message: 'Provide information about contributing',
    name: 'contributing',
  },
  {
    type: 'input', 
    message: 'Provide information about running tests',
    name: 'test',
  }, 
  {
    type: 'list', 
    choices: ['Apache 2.0','BSD 3-Clause', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'IBM Public License Version 1.0'],
    name: 'license',
  }, 
  {
    type: 'input', 
    message: 'What is your email address?',
    name: 'email',
  }, 
  {
    type: 'input', 
    message: 'What is your github username?',
    name: 'github',
  }, 
]; 

// the following function prompts the user with the questions and then takes the data and adds it to the readme file
inquirer
  .prompt(questions)
  .then((data) => {
    let markdown = generateMarkdown ({
      title: `${data.title}`,
      description: `${data.description}`,
      installation: `${data.installation}`,
      usage: `${data.usage}`,
      contributing: `${data.contributing}`,
      test: `${data.test}`,
      license: `${data.license}`,
      email: `${data.email}`,
      github: `${data.github}`,
    })
    // generateMarkdown(data)
    fs.writeFile('README.md', markdown, (err) => {
        if (err) {
            console.log(err); 
        } else {
            console.log('YAYYY');
        }
    })
  });


// this function initializes the app
function init() {}

// this calls the initialization
init();
