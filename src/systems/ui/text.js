class Text {
    constructor(x, y, size, color, font, bold, italic, gfx) {
        this.x = x
        this.y = y
        this.size = size
        this.color = color
        this.font = font
        this.bold = bold
        this.italic = italic

        this.canvas = gfx.getCanvas()
        this.ctx = gfx.getContext()
    }

    draw(text) {
        this.ctx.fillStyle = this.color
        if(this.bold) {
            this.ctx.font = "bold " + this.size + " " + this.font
        } else if(this.italic) {
            this.ctx.font = "italic " + this.size + " " + this.font
        } else {
            this.ctx.font = this.size + " " + this.font
        }
        
        var text_width = this.ctx.measureText(text).width
        var text_height = 10
        this.ctx.fillText(text, this.x - (text_width / 2), this.y - (text_height / 2))
        this.ctx.font = "bold 20px Roboto"
    }
}

export default Text