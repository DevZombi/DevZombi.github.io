import Text from './text.js';
class TextBuilder {
    constructor(gfx) {
        this.x = 0
        this.y = 0
        this.size = "20px"
        this.color = "#292929"
        this.font = "Roboto"
        this.bold = false
        this.italic = false
        this.text = "text"

        this.gfx = gfx
    }

    setLocation(x,y) {
        this.x = x
        this.y = y
        return this
    }

    setSize(size) {
        this.size = size
        return this
    }

    setColor(color) {
        this.color = color
        return this
    }

    setFont(font) {
        this.font = font
        return this
    }

    setBold(bold) {
        this.bold = bold
        return this
    }

    setItalic(italic) {
        this.italic = italic
        return this
    }

    setText(text) {
        this.text = text
        return this
    }

    build() {
        return new Text(this.text, this.x, this.y, this.size, this.color, this.font, this.bold, this.italic, this.gfx);
    }
}

export default TextBuilder;