const inquirer = require('inquirer');

const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'Enter your project description',
      name: 'Description',
    },
  ])
  .then((data) => {
    fs.writeFile('README.md', JSON.stringify(data), (err) => {
        if (err) {
            console.log(err); 
        } else {
            console.log('YAYYY');
        }
    })
  });