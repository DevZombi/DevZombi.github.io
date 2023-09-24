class Status {
    constructor(x, y, width, height, background_color,accent_color, gfx) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.background_color = background_color;
        this.border_color = "#eee";
        this.empty_color = "#eee"
        this.accent_color = accent_color;

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
        //bottom
        var bottom_loc = [this.x - (this.width / 2), this.y - (this.height / 2)];
        this.roundRectBackground(bottom_loc[0],bottom_loc[1], this.width, this.height, 15,this.background_color);
        this.roundRectBorder(bottom_loc[0],bottom_loc[1], this.width, this.height, 15, this.border_color);
        //bubble one
        var bubble_one_loc = [this.x - (((this.width / 6) / 2) + (this.width / 6) * 2) - 6, this.y - ((this.height - 5) / 2)];
        if(val > 0) {
            this.roundRectBackground(bubble_one_loc[0],bubble_one_loc[1], this.width / 6 - 2 , this.height - 5, 10,this.accent_color);
        } else {
            this.roundRectBackground(bubble_one_loc[0],bubble_one_loc[1], this.width / 6 - 2 , this.height - 5, 10,this.empty_color);
        }
        this.roundRectBorder(bubble_one_loc[0],bubble_one_loc[1], this.width / 6 - 2 , this.height - 5, 10, this.border_color);
        //bubble two
        var bubble_two_loc = [this.x - (((this.width / 6) / 2) + (this.width / 6) * 1) - 3, this.y - ((this.height - 5) / 2)];
        if(val > 1) {
            this.roundRectBackground(bubble_two_loc[0],bubble_two_loc[1], this.width / 6 - 2 , this.height - 5, 10,this.accent_color);
        } else {
            this.roundRectBackground(bubble_two_loc[0],bubble_two_loc[1], this.width / 6 - 2 , this.height - 5, 10,this.empty_color);
        }
        this.roundRectBorder(bubble_two_loc[0],bubble_two_loc[1], this.width / 6 - 2 , this.height - 5, 10, this.border_color);
        //bubble three
        var bubble_three_loc = [this.x - (((this.width / 6) / 2)), this.y - ((this.height - 5) / 2)];
        if(val > 2) {
            this.roundRectBackground(bubble_three_loc[0],bubble_three_loc[1], this.width / 6 - 2 , this.height - 5, 10,this.accent_color);
        } else {
            this.roundRectBackground(bubble_three_loc[0],bubble_three_loc[1], this.width / 6 - 2 , this.height - 5, 10,this.empty_color);
        }
        this.roundRectBorder(bubble_three_loc[0],bubble_three_loc[1], this.width / 6 - 2 , this.height - 5, 10, this.border_color);
        //bubble four
        var bubble_four_loc = [this.x - (((this.width / 6) / 2) - (this.width / 6) * 1) + 3, this.y - ((this.height - 5) / 2)];
        if(val > 3) {
            this.roundRectBackground(bubble_four_loc[0],bubble_four_loc[1], this.width / 6 - 2 , this.height - 5, 10,this.accent_color);
        } else {
            this.roundRectBackground(bubble_four_loc[0],bubble_four_loc[1], this.width / 6 - 2 , this.height - 5, 10,this.empty_color);
        }
        this.roundRectBorder(bubble_four_loc[0],bubble_four_loc[1], this.width / 6 - 2 , this.height - 5, 10, this.border_color);
        //bubble five
        var bubble_five_loc = [this.x - (((this.width / 6) / 2) - (this.width / 6) * 2) + 6, this.y - ((this.height - 5) / 2)];
        if(val > 4) {
            this.roundRectBackground(bubble_five_loc[0],bubble_five_loc[1], this.width / 6 - 2 , this.height - 5, 10,this.accent_color);
        } else {
            this.roundRectBackground(bubble_five_loc[0],bubble_five_loc[1], this.width / 6 - 2 , this.height - 5, 10,this.empty_color);
        }
        this.roundRectBorder(bubble_five_loc[0],bubble_five_loc[1], this.width / 6 - 2 , this.height - 5, 10, this.border_color);
        //bubble six
    }
}

export default Status;