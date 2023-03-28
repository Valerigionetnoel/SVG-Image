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
const { Shape, Triangle, Square, Circle } = require('./lib/Shape.js')

inquirer.prompt([
    {
        type: 'input',
        message: 'What are 3 character that you would like in the shape?',
        name: 'character',
    },
    {
        type: 'input',
        message: 'What color are the letter? It can be hex',
        name: 'colorLetter',
    },
    {
        type: 'list',
        message: 'What shape is it?',
        choices: ['circle', 'square', 'triangle'],
        name: 'shape'
    },
    {
        type:'input',
        message:'What color is the shape? It can be hex',
        name:'col',
    },
]).then((response) => {
    var shapeOne = `${response.shape}` 

        switch (shapeOne) {
            case 'circle':
                new Circle();
                break;
            case 'square':
                new Square();
                break;
            case 'triangle':
                new Triangle();
                break;
            default:
                break;
        
    }
    
    console.log(shapeOne)
    fs.writeFile(`${response.shape}.svg`, shapeOne.render(), (err) => {

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