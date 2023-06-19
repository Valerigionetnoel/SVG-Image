const {Triangle, Circle, Square, createSVG }= require('../lib/Shape.js')

test('Should render a blue triangle', () => {
    const shape = new Triangle();
    shape.render("blue");
    expect(shape.render()).toEqual(`<svg width ="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="blue" />
    </svg>`);
})