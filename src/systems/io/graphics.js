//2021-2022 samuel r rivera-bonilla

let canvas = "";

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

class Graphics {
    constructor(ncanvas) {
        canvas = document.getElementById(ncanvas);
        if(isMobile.any()){
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        } else {
            if((window.innerWidth - 100) > 600) {
                canvas.width = 400;
            } else {
                canvas.width = window.innerWidth - 100;
            }
            canvas.height = window.innerHeight - 100;
        }
        this.ctx = canvas.getContext("2d");
        this.x = canvas.width;
        this.y = canvas.height;
        this.color = '#eee';
        this.opacitiy = 1.0;
    }
    
    getContext() {
        return this.ctx;
    }

    getCanvas() {
        return canvas;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getWidth() {
        return canvas.width;
    }

    getHeight() {
        return canvas.height;
    }

    setBackground(color,opacity) {
        this.color = color
        this.opacity = opacity
    }

    clear() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ctx.fillStyle = this.color;
        this.ctx.globalAlpha = this.opacitiy;
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.ctx.globalAlpha = 1.0;
    }
}

export default Graphics;