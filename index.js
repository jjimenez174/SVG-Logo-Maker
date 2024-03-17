// Packages for the application
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

//An array of questions 
 const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What is the logo name? (three characters only)',
        validate: (answer) => {
            if (answer.length > 3) {
                console.log('\n Text must be three characters or less. Please try again');
                return false;
            }
            return true;
        }
}, {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (color keyword OR hexadecimal number)',
 }, {
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape',
        choices: ['Circle', 'Triangle', 'Square']
 }, {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter color of shape (color keyword OR hexadecimal number)',
 },
];

function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log(response)
            let selectedShape;
            if (response.shape === 'Square') {
                selectedShape = new Square(response.text, response.textColor, response.shapeColor );
            } else if (response.shape === 'Circle') {
                selectedShape = new Circle(response.text, response.textColor, response.shapeColor );
            } else {
                selectedShape = new Triangle(response.text, response.textColor, response.shapeColor);
            }

            fs.writeFile('./Design/logo.svg', selectedShape.render(), (error) => {
                if (error) {
                    console.error('Error writing to file:', error);
                } else {
                    console.log('Shape successfully written to logo.svg');
                }
            });
        })
        .catch((err) => {
            console.error('An error occurred:', err);
        });
}

init();
