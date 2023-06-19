// define a base class so you only have to write certain info once
class Shape {
    constructor(color) {
        this.color = color;
    }

    // setColor(col) {
    //     this.color = col;
    // }
}

class Circle extends Shape {

    render() {
        return `<svg width ="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="150" r="150" fill="${this.color}"/>
        </svg>`
    }
}

const cir = new Circle();

// cir.setColor('')

class Triangle extends Shape {

    render() {
        return `<svg width ="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
      </svg>`
    }
}

const tri = new Triangle()

// tri.setColor('')

class Square extends Shape {

    render() {
        return `<svg width ="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="30" height="30" fill="${this.color}"/>
        </svg>`
    }
}

const squ = new Square()

// squ.setColor('')

function createSVG(answers) {
    const {text, textColor, shape, shapeColor} = answers

    const shapeObj = createShapeObject(shape, shapeColor);
    const shapeMarkup = shapeObj.render();

    const svgTemplate = 
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shapeMarkup}
      <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${text}</text>
    </svg>`

    return svgTemplate
}

function createShapeObject(shape, shapeColor) {
    switch (shape) {
      case 'triangle':
        return new Triangle(shapeColor);
      case 'square':
        return new Square(shapeColor);
      case 'circle':
        return new Circle(shapeColor);
      default:
        throw new Error(`Invalid shape: ${shape}`);
    }
  }

// allow other files to use this class
module.exports = { Shape, Triangle, Square, Circle, createSVG };
