// The properties of the Square
// constructor of the text, color and shape
class Square {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="${this.shapeColor}"/><text x="100" y="115" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}
    


module.exports = { Square };