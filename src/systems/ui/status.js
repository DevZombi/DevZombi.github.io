class Status {
    constructor(x, y, background_color, gfx) {
        this.x = x;
        this.y = y;
        this.background_color = background_color;
        this.border_color = "#eee";

        this.canvas = gfx.getCanvas();
        this.ctx = gfx.getContext();
    }

    roundRectBorder(x, y, w, h, radius, color) {
        var r = x + w;
        var b = y + h;
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.moveTo(x+radius, y);
        this.ctx.lineTo(r-radius, y);
        this.ctx.quadraticCurveTo(r, y, r, y+radius);
        this.ctx.lineTo(r, y+h-radius);
        this.ctx.quadraticCurveTo(r, b, r-radius, b);
        this.ctx.lineTo(x+radius, b);
        this.ctx.quadraticCurveTo(x, b, x, b-radius);
        this.ctx.lineTo(x, y+radius);
        this.ctx.quadraticCurveTo(x, y, x+radius, y);
        this.ctx.stroke();
    }

    roundRectBackground(x, y, w, h, radius, color) {
        var r = x + w;
        var b = y + h;
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.moveTo(x+radius, y);
        this.ctx.lineTo(r-radius, y);
        this.ctx.quadraticCurveTo(r, y, r, y+radius);
        this.ctx.lineTo(r, y+h-radius);
        this.ctx.quadraticCurveTo(r, b, r-radius, b);
        this.ctx.lineTo(x+radius, b);
        this.ctx.quadraticCurveTo(x, b, x, b-radius);
        this.ctx.lineTo(x, y+radius);
        this.ctx.quadraticCurveTo(x, y, x+radius, y);
        this.ctx.fill();
    }

    draw(val) {
        this.ctx.fillStyle = this.color;
        this.roundRectBackground(this.x, this.y, 150, 50, 2,this.background_color);
        this.roundRectBorder(this.x, this.y, 150, 50, 2, this.border_color);
    }
}

export default Status;