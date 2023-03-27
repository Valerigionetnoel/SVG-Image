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
const {Triangle, Square, Circle} = require('./lib/Shape.js')

inquirer.prompt ([
    {
        type:'input',
        message:'What are 3 character that you would like in the shape?',
        name:'character',
    },
    {
        type:'input',
        message:'What color? It can be hex',
        name:'color',
    },
    {
        type: 'list',
        message: 'What shape is it?',
        choices: ['Circle', 'Square', 'Triangle'],
        name: 'shape'
    },
    // {
    //     type:'input',
    //     message:'',
    //     name:'',
    // },
]).then((response) => {
    const Shape = {
        if (${response.shape} === 'Circle') {
            return new Circle ();
        }else if (${response.shape} === 'Square'){
            return new Square();
        }else if (${response.shape} === 'Triangle'){
            return new Triangle();
        }
    }
    
    // if the shape is (circle triangle square) make that shape
    // const cir = new Circle()
fs.writeFile('shape.svg', Shape.render(), (err) => {

} )})

