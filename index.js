// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// // TODO: Create an array of questions for user input
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
    choices: ['choice A', 'choice B', 'choice c', 'choice d'],
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

// TODO: Create a function to write README file



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



// // TODO: Create a function to initialize app
function init() {}

// // Function call to initialize app
init();
