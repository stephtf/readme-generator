// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## Project Title
  
${data.title}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)


## Installation 

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage 
${data.usage}

## Contributing 
${data.contributing}

## Tests 
To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## License 
${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

${renderLicenseBadge(data.license)}


## Questions 

If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }/).
`;
}

module.exports = generateMarkdown;