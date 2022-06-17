let canvas = document.getElementById('canvas_display');

canvas.width = 1024;
canvas.height = 1024;

let context = canvas.getContext('2d');

var spice = 16777215;

var xx = 32;

function Clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#eeeeee';
    context.fillRect(0, 0, 1024, 1024);
}

function Background() {
    if(Math.floor(Math.random() * 4) == 0) {
        xx = 8;
    } else if(Math.floor(Math.random() * 4) == 1) {
        xx = 16;
    } else if(Math.floor(Math.random() * 4) == 2) {
        xx = 32;
    } else if(Math.floor(Math.random() * 4) == 3) {
        xx = 64;
    }

    for(var ii = 0; ii <= 1024; ii += xx) {
        for(var i = 0; i <= 1024; i += xx) {    
            context.fillStyle = '#' + Math.floor(Math.random() * spice).toString(16);
            context.fillRect(ii, i, xx, xx);
        }
    }
}

function Signature() {
    context.fillStyle = '#' + Math.floor(Math.random() * spice).toString(16);
    context.fillRect(32*24, 32*24, 32 * 7, 32 * 7);

    context.fillStyle = '#' + Math.floor(Math.random() * spice).toString(16);
    context.fillRect(32*25, 32*25, 32, 32);
    context.fillStyle = '#' + Math.floor(Math.random() * spice).toString(16);
    context.fillRect(32*26, 32*25, 32, 32);

    context.fillStyle = '#' + Math.floor(Math.random() * spice).toString(16);
    context.fillRect(32*25, 32*26, 32, 32);

    context.fillStyle = '#' + Math.floor(Math.random() * spice).toString(16);
    context.fillRect(32*25, 32*27, 32, 32);
    context.fillStyle = '#' + Math.floor(Math.random() * spice).toString(16);
    context.fillRect(32*26, 32*27, 32, 32);

    context.fillStyle = '#' + Math.floor(Math.random() * spice).toString(16);
    context.fillRect(32*26, 32*28, 32, 32);

    context.fillStyle = '#' + Math.floor(Math.random() * spice).toString(16);
    context.fillRect(32*25, 32*29, 32, 32);
    context.fillStyle = '#' + Math.floor(Math.random() * spice).toString(16);
    context.fillRect(32*26, 32*29, 32, 32);

    //

    context.fillStyle = '#' + Math.floor(Math.random() * spice).toString(16);
    context.fillRect(32*28, 32*25, 32, 32);
    context.fillStyle = '#' + Math.floor(Math.random() * spice).toString(16);
    context.fillRect(32*29, 32*25, 32, 32);

    context.fillStyle = '#' + Math.floor(Math.random() * spice).toString(16);
    context.fillRect(32*29, 32*26, 32, 32);

    context.fillStyle = '#' + Math.floor(Math.random() * spice).toString(16);
    context.fillRect(32*28, 32*27, 32, 32);
    context.fillStyle = '#' + Math.floor(Math.random() * spice).toString(16);
    context.fillRect(32*29, 32*27, 32, 32);

    context.fillStyle = '#' + Math.floor(Math.random() * spice).toString(16);
    context.fillRect(32*28, 32*28, 32, 32);

    context.fillStyle = '#' + Math.floor(Math.random() * spice).toString(16);
    context.fillRect(32*28, 32*29, 32, 32);
    context.fillStyle = '#' + Math.floor(Math.random() * spice).toString(16);
    context.fillRect(32*29, 32*29, 32, 32);

}

function updateCanvas() {

    spice = Math.floor(Math.random() * (Math.random() * 99999999));

    Clear();
    
    Background();

    Signature();
}

setInterval(function(){
    updateCanvas();
}, 1000);
