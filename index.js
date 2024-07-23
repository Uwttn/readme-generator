// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);

// TODO: Create an array of questions for user input
const questions = [
        {
            type: `input`,
            message: `Who is the author?`,
            name: `author`,
        },
        {
            type: `checkbox`,
            message: `what languages do you know?`,
            choices: [`HTML`, `CSS`, `JavaScript`, `SwiftUI`],
            name: `languages`,
        },
        {
            type: `input`,
            message: `What is your github username?`,
            name: `github`,
        },
        {
            type: `input`,
            message: `What is your linkedIn Username?`,
            name: `linkedin`,
        }
    ];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    const content = `
# ${data.author}'s Portfolio

## Languages
${data.languages.join(", ")}

## Contact Me
- GitHub: [${data.github}](https://github.com/${data.github})
- LinkedIn: [${data.linkedin}](https://www.linkedin.com/in/${data.linkedin})
`;

    fs.writeFile(fileName, content, (err) => {
        err ? console.error(err) : console.log(`README.md created successfully!`);
    });
}

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile(`README.md`, answers);
    })
    .catch((error) => {
        console.error(error);
    });
}

// Function call to initialize app

init();