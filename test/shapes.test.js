const { Triangle, Circle, Square, createSVG } = require('../lib/Shape.js')

test('Should render a blue triangle', () => {
    const shape = new Triangle("blue");
    shape.render();
    expect(shape.render()).toEqual(
        `<svg width ="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill="blue" />
      </svg>`);
})

test('Should render a red square', () => {
    const shape = new Square("red");
    shape.render();
    expect(shape.render()).toEqual(
        `<svg width ="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="200" height="200" fill="red"/>
        </svg>`);
})

test('Should render a #fcba03 circle', () => {
    const shape = new Circle("#fcba03");
    shape.render();
    expect(shape.render()).toEqual(
        `<svg width ="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="#fcba03"/>
        </svg>`);
})