// Importing Circle, Triangle and Square
const { Circle, Triangle, Square } = require('./shapes');

// Testing each shape with a specific color to render
describe('shape', () => {
    it('Cirlce renders correctly', () => {
      const circle = new Circle('JPJ', 'MistyRose','Violet')
      const expectedValue = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="Violet" /><text x="150" y="125" font-size="70" text-anchor="middle" fill="MistyRose">JPJ</text></svg>`;
      const actualValue = circle.render();
      expect(actualValue).toEqual(expectedValue);
    })
    it('Triangle renders correctly', () => {
      const triangle = new Triangle('JPJ','Aliceblue','Blue')
      const expectedValue =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100, 15 200, 200 0, 200" fill="Blue"/><text x="100" y="150" font-size="70" text-anchor="middle" fill="Aliceblue">JPJ</text></svg>`;
      const actualValue = triangle.render();
      expect(actualValue).toEqual(expectedValue);
    })
    it('Square renders correctly', () => {
      const square = new Square('JPJ','Crimson','Bisque')
      const expectedValue = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="Bisque"/><text x="100" y="115" font-size="70" text-anchor="middle" fill="Crimson">JPJ</text></svg>`;
      const actualValue = square.render();
      expect(actualValue).toEqual(expectedValue);
    })
  })