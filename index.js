import fs from 'fs';
import inquirer from 'inquirer';

const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Enter a description of your project:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Enter installation instructions:',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Enter usage information:',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Enter contribution guidelines:',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Enter test instructions:',
    name: 'tests',
  },
  {
    type: 'list',
    message: 'Choose a license for your project:',
    name: 'license',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    message: 'Enter your GitHub username:',
    name: 'github',
  },
  {
    type: 'input',
    message: 'Enter your email address:',
    name: 'email',
  },
];

inquirer.prompt(questions).then((answers) => {
  const readmeContent = generateReadme(answers);
  fs.writeFile('./output/README.md', readmeContent, (err) => {
    if (err) {
      console.error('Error', err);
    } else {
      console.log('README.md generated');
    }
  });
});

// Create function for the badge https://img.shields.io/badge/any_text-you_like-blue

function generateReadme(answers) {
  return `
# ${answers.title}

![Badge](https://img.shields.io/badge/any-text-you-like-blue)

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, please contact me with the information below:

GitHub: [${answers.github}](https://github.com/${answers.github})
Email: ${answers.email}
  `;
}