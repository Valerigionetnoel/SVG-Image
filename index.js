// prompt the user for 
// -- 3 char(text)
// -- color
// -- shapes -list
// -- color of shape

// when all of thoser are answered
// -- then
// -- take that data, create svg info
// -- write it to a file w/ the ext of svg
/* <svg width ="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
call you render function to get the shap ele
create a text el
</svg>*/

const fs = require('fs')
const inquirer = require('inquirer')
const { Shape, Triangle, Square, Circle, createSVG } = require('./lib/Shape.js')

inquirer.prompt([
    {
        type: 'input',
        message: 'What are 3 character that you would like in the shape?',
        name: 'text',
        validate: function (input) {
            return input.length <= 3;
        }
    },
    {
        type: 'input',
        message: 'What color are the letter? It can be hex',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'What shape is it?',
        choices: ['circle', 'square', 'triangle'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'What color is the shape? It can be hex',
        name: 'shapeColor',
    },
]).then((answers) => {
    var svgContent = createSVG(answers) 

    // switch (answers.shape) {
    //     case 'circle':
    //         svgContent = new Circle();
    //         break;
    //     case 'square':
    //         svgContent = new Square();
    //         break;
    //     case 'triangle':
    //         svgContent = new Triangle();
    //         break;
    //     default:
    //         break;

    // }

    console.log(svgContent)
    fs.writeFile(`logo.svg`, svgContent, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg')
    })
})

// {
    //     if (${response.shape} === 'Circle') {
    //         return new Circle ();
    //     }else if (${response.shape} === 'Square'){
    //         return new Square();
    //     }else if (${response.shape} === 'Triangle'){
    //         return new Triangle();
    //     }
    // }

    // if the shape is (circle triangle square) make that shape
    // const cir = new Circle()