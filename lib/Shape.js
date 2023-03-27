// define a base class so you only have to write certain info once
class Shape {
    constructor() {
        this.color = '';
    }

    setColor(col) {
        this.color = col;
    }
}

class Circle extends Shape {

    render() {
        return `<svg width ="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="150" r="150" fill=${response.color}/>
        </svg>`
    }
}

const cir = new Circle();

cir.setColor('')

class Triangle extends Shape {

    render() {
      return `<svg width ="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill="${response.color}" />
      </svg>`  
    }
}

const tri = new Triangle()

tri.setColor('')

class Square extends Shape {

    render() {
        return `<svg width ="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="30" height="30" fill='${response.color}'/>
        </svg>`
    }
}

const squ = new Square()

squ.setColor('')

// allow other files to use this class
module.exports = {Triangle, Square, Circle};