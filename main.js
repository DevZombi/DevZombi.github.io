let colors =  {"red":{"50":"#ffebee","100":"#ffcdd2","200":"#ef9a9a","300":"#e57373","400":"#ef5350","500":"#f44336","600":"#e53935","700":"#d32f2f","800":"#c62828","900":"#b71c1c","a100":"#ff8a80","a200":"#ff5252","a400":"#ff1744","a700":"#d50000"},"pink":{"50":"#fce4ec","100":"#f8bbd0","200":"#f48fb1","300":"#f06292","400":"#ec407a","500":"#e91e63","600":"#d81b60","700":"#c2185b","800":"#ad1457","900":"#880e4f","a100":"#ff80ab","a200":"#ff4081","a400":"#f50057","a700":"#c51162"},"purple":{"50":"#f3e5f5","100":"#e1bee7","200":"#ce93d8","300":"#ba68c8","400":"#ab47bc","500":"#9c27b0","600":"#8e24aa","700":"#7b1fa2","800":"#6a1b9a","900":"#4a148c","a100":"#ea80fc","a200":"#e040fb","a400":"#d500f9","a700":"#aa00ff"},"deepPurple":{"50":"#ede7f6","100":"#d1c4e9","200":"#b39ddb","300":"#9575cd","400":"#7e57c2","500":"#673ab7","600":"#5e35b1","700":"#512da8","800":"#4527a0","900":"#311b92","a100":"#b388ff","a200":"#7c4dff","a400":"#651fff","a700":"#6200ea"},"indigo":{"50":"#e8eaf6","100":"#c5cae9","200":"#9fa8da","300":"#7986cb","400":"#5c6bc0","500":"#3f51b5","600":"#3949ab","700":"#303f9f","800":"#283593","900":"#1a237e","a100":"#8c9eff","a200":"#536dfe","a400":"#3d5afe","a700":"#304ffe"},"blue":{"50":"#e3f2fd","100":"#bbdefb","200":"#90caf9","300":"#64b5f6","400":"#42a5f5","500":"#2196f3","600":"#1e88e5","700":"#1976d2","800":"#1565c0","900":"#0d47a1","a100":"#82b1ff","a200":"#448aff","a400":"#2979ff","a700":"#2962ff"},"lightBlue":{"50":"#e1f5fe","100":"#b3e5fc","200":"#81d4fa","300":"#4fc3f7","400":"#29b6f6","500":"#03a9f4","600":"#039be5","700":"#0288d1","800":"#0277bd","900":"#01579b","a100":"#80d8ff","a200":"#40c4ff","a400":"#00b0ff","a700":"#0091ea"},"cyan":{"50":"#e0f7fa","100":"#b2ebf2","200":"#80deea","300":"#4dd0e1","400":"#26c6da","500":"#00bcd4","600":"#00acc1","700":"#0097a7","800":"#00838f","900":"#006064","a100":"#84ffff","a200":"#18ffff","a400":"#00e5ff","a700":"#00b8d4"},"teal":{"50":"#e0f2f1","100":"#b2dfdb","200":"#80cbc4","300":"#4db6ac","400":"#26a69a","500":"#009688","600":"#00897b","700":"#00796b","800":"#00695c","900":"#004d40","a100":"#a7ffeb","a200":"#64ffda","a400":"#1de9b6","a700":"#00bfa5"},"green":{"50":"#e8f5e9","100":"#c8e6c9","200":"#a5d6a7","300":"#81c784","400":"#66bb6a","500":"#4caf50","600":"#43a047","700":"#388e3c","800":"#2e7d32","900":"#1b5e20","a100":"#b9f6ca","a200":"#69f0ae","a400":"#00e676","a700":"#00c853"},"lightGreen":{"50":"#f1f8e9","100":"#dcedc8","200":"#c5e1a5","300":"#aed581","400":"#9ccc65","500":"#8bc34a","600":"#7cb342","700":"#689f38","800":"#558b2f","900":"#33691e","a100":"#ccff90","a200":"#b2ff59","a400":"#76ff03","a700":"#64dd17"},"lime":{"50":"#f9fbe7","100":"#f0f4c3","200":"#e6ee9c","300":"#dce775","400":"#d4e157","500":"#cddc39","600":"#c0ca33","700":"#afb42b","800":"#9e9d24","900":"#827717","a100":"#f4ff81","a200":"#eeff41","a400":"#c6ff00","a700":"#aeea00"},"yellow":{"50":"#fffde7","100":"#fff9c4","200":"#fff59d","300":"#fff176","400":"#ffee58","500":"#ffeb3b","600":"#fdd835","700":"#fbc02d","800":"#f9a825","900":"#f57f17","a100":"#ffff8d","a200":"#ffff00","a400":"#ffea00","a700":"#ffd600"},"amber":{"50":"#fff8e1","100":"#ffecb3","200":"#ffe082","300":"#ffd54f","400":"#ffca28","500":"#ffc107","600":"#ffb300","700":"#ffa000","800":"#ff8f00","900":"#ff6f00","a100":"#ffe57f","a200":"#ffd740","a400":"#ffc400","a700":"#ffab00"},"orange":{"50":"#fff3e0","100":"#ffe0b2","200":"#ffcc80","300":"#ffb74d","400":"#ffa726","500":"#ff9800","600":"#fb8c00","700":"#f57c00","800":"#ef6c00","900":"#e65100","a100":"#ffd180","a200":"#ffab40","a400":"#ff9100","a700":"#ff6d00"},"deepOrange":{"50":"#fbe9e7","100":"#ffccbc","200":"#ffab91","300":"#ff8a65","400":"#ff7043","500":"#ff5722","600":"#f4511e","700":"#e64a19","800":"#d84315","900":"#bf360c","a100":"#ff9e80","a200":"#ff6e40","a400":"#ff3d00","a700":"#dd2c00"},"brown":{"50":"#efebe9","100":"#d7ccc8","200":"#bcaaa4","300":"#a1887f","400":"#8d6e63","500":"#795548","600":"#6d4c41","700":"#5d4037","800":"#4e342e","900":"#3e2723"},"grey":{"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121"},"blueGrey":{"50":"#eceff1","100":"#cfd8dc","200":"#b0bec5","300":"#90a4ae","400":"#78909c","500":"#607d8b","600":"#546e7a","700":"#455a64","800":"#37474f","900":"#263238"},"black":"#000000","white":"#ffffff","darkText":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","dividers":"rgba(0, 0, 0, 0.12)"},"lightText":{"primary":"rgba(255, 255, 255, 1)","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","dividers":"rgba(255, 255, 255, 0.12)"},"darkIcons":{"active":"rgba(0, 0, 0, 0.54)","inactive":"rgba(0, 0, 0, 0.38)"},"lightIcons":{"active":"rgba(255, 255, 255, 1)","inactive":"rgba(255, 255, 255, 0.5)"}};

let canvas = document.getElementById('canvas_display');

//canvas.width = 1024;
//canvas.height = 1024;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext('2d');

var spice = 16777215;

var xx = 32;


function getRandomColor() {
    var color_temp = Math.floor(Math.random() * 19);
    var color_shade_temp = Math.floor(Math.random() * 9);

    if(color_temp == 0) {
        if(color_shade_temp == 0) {
            return colors.red[100];
        }
        if(color_shade_temp == 1) {
            return colors.red[200];
        }
        if(color_shade_temp == 2) {
            return colors.red[300];
        }
        if(color_shade_temp == 3) {
            return colors.red[400];
        }
        if(color_shade_temp == 4) {
            return colors.red[500];
        }
        if(color_shade_temp == 5) {
            return colors.red[600];
        }
        if(color_shade_temp == 6) {
            return colors.red[700];
        }
        if(color_shade_temp == 7) {
            return colors.red[800];
        }
        if(color_shade_temp == 8) {
            return colors.red[900];
        }
    }
    if(color_temp == 1) {
        if(color_shade_temp == 0) {
            return colors.pink[100];
        }
        if(color_shade_temp == 1) {
            return colors.pink[200];
        }
        if(color_shade_temp == 2) {
            return colors.pink[300];
        }
        if(color_shade_temp == 3) {
            return colors.pink[400];
        }
        if(color_shade_temp == 4) {
            return colors.pink[500];
        }
        if(color_shade_temp == 5) {
            return colors.pink[600];
        }
        if(color_shade_temp == 6) {
            return colors.pink[700];
        }
        if(color_shade_temp == 7) {
            return colors.pink[800];
        }
        if(color_shade_temp == 8) {
            return colors.pink[900];
        }
    }
    if(color_temp == 2) {
        if(color_shade_temp == 0) {
            return colors.purple[100];
        }
        if(color_shade_temp == 1) {
            return colors.purple[200];
        }
        if(color_shade_temp == 2) {
            return colors.purple[300];
        }
        if(color_shade_temp == 3) {
            return colors.purple[400];
        }
        if(color_shade_temp == 4) {
            return colors.purple[500];
        }
        if(color_shade_temp == 5) {
            return colors.purple[600];
        }
        if(color_shade_temp == 6) {
            return colors.purple[700];
        }
        if(color_shade_temp == 7) {
            return colors.purple[800];
        }
        if(color_shade_temp == 8) {
            return colors.purple[900];
        }
    }
    if(color_temp == 3) {
        if(color_shade_temp == 0) {
            return colors.deepPurple[100];
        }
        if(color_shade_temp == 1) {
            return colors.deepPurple[200];
        }
        if(color_shade_temp == 2) {
            return colors.deepPurple[300];
        }
        if(color_shade_temp == 3) {
            return colors.deepPurple[400];
        }
        if(color_shade_temp == 4) {
            return colors.deepPurple[500];
        }
        if(color_shade_temp == 5) {
            return colors.deepPurple[600];
        }
        if(color_shade_temp == 6) {
            return colors.deepPurple[700];
        }
        if(color_shade_temp == 7) {
            return colors.deepPurple[800];
        }
        if(color_shade_temp == 8) {
            return colors.deepPurple[900];
        }
    }
    if(color_temp == 4) {
        if(color_shade_temp == 0) {
            return colors.indigo[100];
        }
        if(color_shade_temp == 1) {
            return colors.indigo[200];
        }
        if(color_shade_temp == 2) {
            return colors.indigo[300];
        }
        if(color_shade_temp == 3) {
            return colors.indigo[400];
        }
        if(color_shade_temp == 4) {
            return colors.indigo[500];
        }
        if(color_shade_temp == 5) {
            return colors.indigo[600];
        }
        if(color_shade_temp == 6) {
            return colors.indigo[700];
        }
        if(color_shade_temp == 7) {
            return colors.indigo[800];
        }
        if(color_shade_temp == 8) {
            return colors.indigo[900];
        }
    }
    if(color_temp == 5) {
        if(color_shade_temp == 0) {
            return colors.blue[100];
        }
        if(color_shade_temp == 1) {
            return colors.blue[200];
        }
        if(color_shade_temp == 2) {
            return colors.blue[300];
        }
        if(color_shade_temp == 3) {
            return colors.blue[400];
        }
        if(color_shade_temp == 4) {
            return colors.blue[500];
        }
        if(color_shade_temp == 5) {
            return colors.blue[600];
        }
        if(color_shade_temp == 6) {
            return colors.blue[700];
        }
        if(color_shade_temp == 7) {
            return colors.blue[800];
        }
        if(color_shade_temp == 8) {
            return colors.blue[900];
        }
    }
    if(color_temp == 6) {
        if(color_shade_temp == 0) {
            return colors.lightBlue[100];
        }
        if(color_shade_temp == 1) {
            return colors.lightBlue[200];
        }
        if(color_shade_temp == 2) {
            return colors.lightBlue[300];
        }
        if(color_shade_temp == 3) {
            return colors.lightBlue[400];
        }
        if(color_shade_temp == 4) {
            return colors.lightBlue[500];
        }
        if(color_shade_temp == 5) {
            return colors.lightBlue[600];
        }
        if(color_shade_temp == 6) {
            return colors.lightBlue[700];
        }
        if(color_shade_temp == 7) {
            return colors.lightBlue[800];
        }
        if(color_shade_temp == 8) {
            return colors.lightBlue[900];
        }
    }
    if(color_temp == 7) {
        if(color_shade_temp == 0) {
            return colors.cyan[100];
        }
        if(color_shade_temp == 1) {
            return colors.cyan[200];
        }
        if(color_shade_temp == 2) {
            return colors.cyan[300];
        }
        if(color_shade_temp == 3) {
            return colors.cyan[400];
        }
        if(color_shade_temp == 4) {
            return colors.cyan[500];
        }
        if(color_shade_temp == 5) {
            return colors.cyan[600];
        }
        if(color_shade_temp == 6) {
            return colors.cyan[700];
        }
        if(color_shade_temp == 7) {
            return colors.cyan[800];
        }
        if(color_shade_temp == 8) {
            return colors.cyan[900];
        }
    }
    if(color_temp == 8) {
        if(color_shade_temp == 0) {
            return colors.teal[100];
        }
        if(color_shade_temp == 1) {
            return colors.teal[200];
        }
        if(color_shade_temp == 2) {
            return colors.teal[300];
        }
        if(color_shade_temp == 3) {
            return colors.teal[400];
        }
        if(color_shade_temp == 4) {
            return colors.teal[500];
        }
        if(color_shade_temp == 5) {
            return colors.teal[600];
        }
        if(color_shade_temp == 6) {
            return colors.teal[700];
        }
        if(color_shade_temp == 7) {
            return colors.teal[800];
        }
        if(color_shade_temp == 8) {
            return colors.teal[900];
        }
    }
    if(color_temp == 9) {
        if(color_shade_temp == 0) {
            return colors.green[100];
        }
        if(color_shade_temp == 1) {
            return colors.green[200];
        }
        if(color_shade_temp == 2) {
            return colors.green[300];
        }
        if(color_shade_temp == 3) {
            return colors.green[400];
        }
        if(color_shade_temp == 4) {
            return colors.green[500];
        }
        if(color_shade_temp == 5) {
            return colors.green[600];
        }
        if(color_shade_temp == 6) {
            return colors.green[700];
        }
        if(color_shade_temp == 7) {
            return colors.green[800];
        }
        if(color_shade_temp == 8) {
            return colors.green[900];
        }
    }
    if(color_temp == 10) {
        if(color_shade_temp == 0) {
            return colors.lightGreen[100];
        }
        if(color_shade_temp == 1) {
            return colors.lightGreen[200];
        }
        if(color_shade_temp == 2) {
            return colors.lightGreen[300];
        }
        if(color_shade_temp == 3) {
            return colors.lightGreen[400];
        }
        if(color_shade_temp == 4) {
            return colors.lightGreen[500];
        }
        if(color_shade_temp == 5) {
            return colors.lightGreen[600];
        }
        if(color_shade_temp == 6) {
            return colors.lightGreen[700];
        }
        if(color_shade_temp == 7) {
            return colors.lightGreen[800];
        }
        if(color_shade_temp == 8) {
            return colors.lightGreen[900];
        }
    }
    if(color_temp == 11) {
        if(color_shade_temp == 0) {
            return colors.lime[100];
        }
        if(color_shade_temp == 1) {
            return colors.lime[200];
        }
        if(color_shade_temp == 2) {
            return colors.lime[300];
        }
        if(color_shade_temp == 3) {
            return colors.lime[400];
        }
        if(color_shade_temp == 4) {
            return colors.lime[500];
        }
        if(color_shade_temp == 5) {
            return colors.lime[600];
        }
        if(color_shade_temp == 6) {
            return colors.lime[700];
        }
        if(color_shade_temp == 7) {
            return colors.lime[800];
        }
        if(color_shade_temp == 8) {
            return colors.lime[900];
        }
    }
    if(color_temp == 12) {
        if(color_shade_temp == 0) {
            return colors.yellow[100];
        }
        if(color_shade_temp == 1) {
            return colors.yellow[200];
        }
        if(color_shade_temp == 2) {
            return colors.yellow[300];
        }
        if(color_shade_temp == 3) {
            return colors.yellow[400];
        }
        if(color_shade_temp == 4) {
            return colors.yellow[500];
        }
        if(color_shade_temp == 5) {
            return colors.yellow[600];
        }
        if(color_shade_temp == 6) {
            return colors.yellow[700];
        }
        if(color_shade_temp == 7) {
            return colors.yellow[800];
        }
        if(color_shade_temp == 8) {
            return colors.yellow[900];
        }
    }
    if(color_temp == 13) {
        if(color_shade_temp == 0) {
            return colors.amber[100];
        }
        if(color_shade_temp == 1) {
            return colors.amber[200];
        }
        if(color_shade_temp == 2) {
            return colors.amber[300];
        }
        if(color_shade_temp == 3) {
            return colors.amber[400];
        }
        if(color_shade_temp == 4) {
            return colors.amber[500];
        }
        if(color_shade_temp == 5) {
            return colors.amber[600];
        }
        if(color_shade_temp == 6) {
            return colors.amber[700];
        }
        if(color_shade_temp == 7) {
            return colors.amber[800];
        }
        if(color_shade_temp == 8) {
            return colors.amber[900];
        }
    }
    if(color_temp == 14) {
        if(color_shade_temp == 0) {
            return colors.orange[100];
        }
        if(color_shade_temp == 1) {
            return colors.orange[200];
        }
        if(color_shade_temp == 2) {
            return colors.orange[300];
        }
        if(color_shade_temp == 3) {
            return colors.orange[400];
        }
        if(color_shade_temp == 4) {
            return colors.orange[500];
        }
        if(color_shade_temp == 5) {
            return colors.orange[600];
        }
        if(color_shade_temp == 6) {
            return colors.orange[700];
        }
        if(color_shade_temp == 7) {
            return colors.orange[800];
        }
        if(color_shade_temp == 8) {
            return colors.orange[900];
        }
    }
    if(color_temp == 15) {
        if(color_shade_temp == 0) {
            return colors.deepOrange[100];
        }
        if(color_shade_temp == 1) {
            return colors.deepOrange[200];
        }
        if(color_shade_temp == 2) {
            return colors.deepOrange[300];
        }
        if(color_shade_temp == 3) {
            return colors.deepOrange[400];
        }
        if(color_shade_temp == 4) {
            return colors.deepOrange[500];
        }
        if(color_shade_temp == 5) {
            return colors.deepOrange[600];
        }
        if(color_shade_temp == 6) {
            return colors.deepOrange[700];
        }
        if(color_shade_temp == 7) {
            return colors.deepOrange[800];
        }
        if(color_shade_temp == 8) {
            return colors.deepOrange[900];
        }
    }
    if(color_temp == 16) {
        if(color_shade_temp == 0) {
            return colors.brown[100];
        }
        if(color_shade_temp == 1) {
            return colors.brown[200];
        }
        if(color_shade_temp == 2) {
            return colors.brown[300];
        }
        if(color_shade_temp == 3) {
            return colors.brown[400];
        }
        if(color_shade_temp == 4) {
            return colors.brown[500];
        }
        if(color_shade_temp == 5) {
            return colors.brown[600];
        }
        if(color_shade_temp == 6) {
            return colors.brown[700];
        }
        if(color_shade_temp == 7) {
            return colors.brown[800];
        }
        if(color_shade_temp == 8) {
            return colors.brown[900];
        }
    }
    if(color_temp == 17) {
        if(color_shade_temp == 0) {
            return colors.grey[100];
        }
        if(color_shade_temp == 1) {
            return colors.grey[200];
        }
        if(color_shade_temp == 2) {
            return colors.grey[300];
        }
        if(color_shade_temp == 3) {
            return colors.grey[400];
        }
        if(color_shade_temp == 4) {
            return colors.grey[500];
        }
        if(color_shade_temp == 5) {
            return colors.grey[600];
        }
        if(color_shade_temp == 6) {
            return colors.grey[700];
        }
        if(color_shade_temp == 7) {
            return colors.grey[800];
        }
        if(color_shade_temp == 8) {
            return colors.grey[900];
        }
    }
    if(color_temp == 18) {
        if(color_shade_temp == 0) {
            return colors.blueGrey[100];
        }
        if(color_shade_temp == 1) {
            return colors.blueGrey[200];
        }
        if(color_shade_temp == 2) {
            return colors.blueGrey[300];
        }
        if(color_shade_temp == 3) {
            return colors.blueGrey[400];
        }
        if(color_shade_temp == 4) {
            return colors.blueGrey[500];
        }
        if(color_shade_temp == 5) {
            return colors.blueGrey[600];
        }
        if(color_shade_temp == 6) {
            return colors.blueGrey[700];
        }
        if(color_shade_temp == 7) {
            return colors.blueGrey[800];
        }
        if(color_shade_temp == 8) {
            return colors.blueGrey[900];
        }
    }
}

function getRandomRedColor() {
    var color_shade_temp = Math.floor(Math.random() * 9);

    if(color_shade_temp == 0) {
        return colors.red[100];
    }
    if(color_shade_temp == 1) {
        return colors.red[200];
    }
    if(color_shade_temp == 2) {
        return colors.red[300];
    }
    if(color_shade_temp == 3) {
        return colors.red[400];
    }
    if(color_shade_temp == 4) {
        return colors.red[500];
    }
    if(color_shade_temp == 5) {
        return colors.red[600];
    }
    if(color_shade_temp == 6) {
        return colors.red[700];
    }
    if(color_shade_temp == 7) {
        return colors.red[800];
    }
    if(color_shade_temp == 8) {
        return colors.red[900];
    }
}

function getRandomPinkColor() {
    var color_shade_temp = Math.floor(Math.random() * 9);

    if(color_shade_temp == 0) {
        return colors.pink[100];
    }
    if(color_shade_temp == 1) {
        return colors.pink[200];
    }
    if(color_shade_temp == 2) {
        return colors.pink[300];
    }
    if(color_shade_temp == 3) {
        return colors.pink[400];
    }
    if(color_shade_temp == 4) {
        return colors.pink[500];
    }
    if(color_shade_temp == 5) {
        return colors.pink[600];
    }
    if(color_shade_temp == 6) {
        return colors.pink[700];
    }
    if(color_shade_temp == 7) {
        return colors.pink[800];
    }
    if(color_shade_temp == 8) {
        return colors.pink[900];
    }
}

function getRandomPurpleColor() {
    var color_shade_temp = Math.floor(Math.random() * 9);

    if(color_shade_temp == 0) {
        return colors.purple[100];
    }
    if(color_shade_temp == 1) {
        return colors.purple[200];
    }
    if(color_shade_temp == 2) {
        return colors.purple[300];
    }
    if(color_shade_temp == 3) {
        return colors.purple[400];
    }
    if(color_shade_temp == 4) {
        return colors.purple[500];
    }
    if(color_shade_temp == 5) {
        return colors.purple[600];
    }
    if(color_shade_temp == 6) {
        return colors.purple[700];
    }
    if(color_shade_temp == 7) {
        return colors.purple[800];
    }
    if(color_shade_temp == 8) {
        return colors.purple[900];
    }
}

function getRandomDeepPurpleColor() {
    var color_shade_temp = Math.floor(Math.random() * 9);

    if(color_shade_temp == 0) {
        return colors.deepPurple[100];
    }
    if(color_shade_temp == 1) {
        return colors.deepPurple[200];
    }
    if(color_shade_temp == 2) {
        return colors.deepPurple[300];
    }
    if(color_shade_temp == 3) {
        return colors.deepPurple[400];
    }
    if(color_shade_temp == 4) {
        return colors.deepPurple[500];
    }
    if(color_shade_temp == 5) {
        return colors.deepPurple[600];
    }
    if(color_shade_temp == 6) {
        return colors.deepPurple[700];
    }
    if(color_shade_temp == 7) {
        return colors.deepPurple[800];
    }
    if(color_shade_temp == 8) {
        return colors.deepPurple[900];
    }
    
}

function getRandomIndigoColor() {
    var color_shade_temp = Math.floor(Math.random() * 9);

    if(color_shade_temp == 0) {
        return colors.indigo[100];
    }
    if(color_shade_temp == 1) {
        return colors.indigo[200];
    }
    if(color_shade_temp == 2) {
        return colors.indigo[300];
    }
    if(color_shade_temp == 3) {
        return colors.indigo[400];
    }
    if(color_shade_temp == 4) {
        return colors.indigo[500];
    }
    if(color_shade_temp == 5) {
        return colors.indigo[600];
    }
    if(color_shade_temp == 6) {
        return colors.indigo[700];
    }
    if(color_shade_temp == 7) {
        return colors.indigo[800];
    }
    if(color_shade_temp == 8) {
        return colors.indigo[900];
    }
}

function getRandomBlueColor() {
    var color_shade_temp = Math.floor(Math.random() * 9);

    if(color_shade_temp == 0) {
        return colors.blue[100];
    }
    if(color_shade_temp == 1) {
        return colors.blue[200];
    }
    if(color_shade_temp == 2) {
        return colors.blue[300];
    }
    if(color_shade_temp == 3) {
        return colors.blue[400];
    }
    if(color_shade_temp == 4) {
        return colors.blue[500];
    }
    if(color_shade_temp == 5) {
        return colors.blue[600];
    }
    if(color_shade_temp == 6) {
        return colors.blue[700];
    }
    if(color_shade_temp == 7) {
        return colors.blue[800];
    }
    if(color_shade_temp == 8) {
        return colors.blue[900];
    }
}

function getRandomLightBlueColor() {
    var color_shade_temp = Math.floor(Math.random() * 9);

    if(color_shade_temp == 0) {
        return colors.lightBlue[100];
    }
    if(color_shade_temp == 1) {
        return colors.lightBlue[200];
    }
    if(color_shade_temp == 2) {
        return colors.lightBlue[300];
    }
    if(color_shade_temp == 3) {
        return colors.lightBlue[400];
    }
    if(color_shade_temp == 4) {
        return colors.lightBlue[500];
    }
    if(color_shade_temp == 5) {
        return colors.lightBlue[600];
    }
    if(color_shade_temp == 6) {
        return colors.lightBlue[700];
    }
    if(color_shade_temp == 7) {
        return colors.lightBlue[800];
    }
    if(color_shade_temp == 8) {
        return colors.lightBlue[900];
    }
}

function getRandomCyanColor() {
    var color_shade_temp = Math.floor(Math.random() * 9);

    if(color_shade_temp == 0) {
        return colors.cyan[100];
    }
    if(color_shade_temp == 1) {
        return colors.cyan[200];
    }
    if(color_shade_temp == 2) {
        return colors.cyan[300];
    }
    if(color_shade_temp == 3) {
        return colors.cyan[400];
    }
    if(color_shade_temp == 4) {
        return colors.cyan[500];
    }
    if(color_shade_temp == 5) {
        return colors.cyan[600];
    }
    if(color_shade_temp == 6) {
        return colors.cyan[700];
    }
    if(color_shade_temp == 7) {
        return colors.cyan[800];
    }
    if(color_shade_temp == 8) {
        return colors.cyan[900];
    }
}

function getRandomTealColor() {
    var color_shade_temp = Math.floor(Math.random() * 9);

    if(color_shade_temp == 0) {
        return colors.teal[100];
    }
    if(color_shade_temp == 1) {
        return colors.teal[200];
    }
    if(color_shade_temp == 2) {
        return colors.teal[300];
    }
    if(color_shade_temp == 3) {
        return colors.teal[400];
    }
    if(color_shade_temp == 4) {
        return colors.teal[500];
    }
    if(color_shade_temp == 5) {
        return colors.teal[600];
    }
    if(color_shade_temp == 6) {
        return colors.teal[700];
    }
    if(color_shade_temp == 7) {
        return colors.teal[800];
    }
    if(color_shade_temp == 8) {
        return colors.teal[900];
    }
}

function getRandomGreenColor() {
    var color_shade_temp = Math.floor(Math.random() * 9);

    if(color_shade_temp == 0) {
        return colors.green[100];
    }
    if(color_shade_temp == 1) {
        return colors.green[200];
    }
    if(color_shade_temp == 2) {
        return colors.green[300];
    }
    if(color_shade_temp == 3) {
        return colors.green[400];
    }
    if(color_shade_temp == 4) {
        return colors.green[500];
    }
    if(color_shade_temp == 5) {
        return colors.green[600];
    }
    if(color_shade_temp == 6) {
        return colors.green[700];
    }
    if(color_shade_temp == 7) {
        return colors.green[800];
    }
    if(color_shade_temp == 8) {
        return colors.green[900];
    }
    
}

function getRandomLightGreenColor(){
    var color_shade_temp = Math.floor(Math.random() * 9);

    if(color_shade_temp == 0) {
        return colors.lightGreen[100];
    }
    if(color_shade_temp == 1) {
        return colors.lightGreen[200];
    }
    if(color_shade_temp == 2) {
        return colors.lightGreen[300];
    }
    if(color_shade_temp == 3) {
        return colors.lightGreen[400];
    }
    if(color_shade_temp == 4) {
        return colors.lightGreen[500];
    }
    if(color_shade_temp == 5) {
        return colors.lightGreen[600];
    }
    if(color_shade_temp == 6) {
        return colors.lightGreen[700];
    }
    if(color_shade_temp == 7) {
        return colors.lightGreen[800];
    }
    if(color_shade_temp == 8) {
        return colors.lightGreen[900];
    }
}

function getRandomLimeColor(){
    var color_shade_temp = Math.floor(Math.random() * 9);

    if(color_shade_temp == 0) {
        return colors.lime[100];
    }
    if(color_shade_temp == 1) {
        return colors.lime[200];
    }
    if(color_shade_temp == 2) {
        return colors.lime[300];
    }
    if(color_shade_temp == 3) {
        return colors.lime[400];
    }
    if(color_shade_temp == 4) {
        return colors.lime[500];
    }
    if(color_shade_temp == 5) {
        return colors.lime[600];
    }
    if(color_shade_temp == 6) {
        return colors.lime[700];
    }
    if(color_shade_temp == 7) {
        return colors.lime[800];
    }
    if(color_shade_temp == 8) {
        return colors.lime[900];
    }
}

function getRandomYellowColor(){
    var color_shade_temp = Math.floor(Math.random() * 9);

    if(color_shade_temp == 0) {
        return colors.yellow[100];
    }
    if(color_shade_temp == 1) {
        return colors.yellow[200];
    }
    if(color_shade_temp == 2) {
        return colors.yellow[300];
    }
    if(color_shade_temp == 3) {
        return colors.yellow[400];
    }
    if(color_shade_temp == 4) {
        return colors.yellow[500];
    }
    if(color_shade_temp == 5) {
        return colors.yellow[600];
    }
    if(color_shade_temp == 6) {
        return colors.yellow[700];
    }
    if(color_shade_temp == 7) {
        return colors.yellow[800];
    }
    if(color_shade_temp == 8) {
        return colors.yellow[900];
    }
}

function getRandomAmberColor(){
    var color_shade_temp = Math.floor(Math.random() * 9);

    if(color_shade_temp == 0) {
        return colors.amber[100];
    }
    if(color_shade_temp == 1) {
        return colors.amber[200];
    }
    if(color_shade_temp == 2) {
        return colors.amber[300];
    }
    if(color_shade_temp == 3) {
        return colors.amber[400];
    }
    if(color_shade_temp == 4) {
        return colors.amber[500];
    }
    if(color_shade_temp == 5) {
        return colors.amber[600];
    }
    if(color_shade_temp == 6) {
        return colors.amber[700];
    }
    if(color_shade_temp == 7) {
        return colors.amber[800];
    }
    if(color_shade_temp == 8) {
        return colors.amber[900];
    }
}

function getRandomDeepOrangeColor(){
    var color_shade_temp = Math.floor(Math.random() * 9);

    if(color_shade_temp == 0) {
        return colors.deepOrange[100];
    }
    if(color_shade_temp == 1) {
        return colors.deepOrange[200];
    }
    if(color_shade_temp == 2) {
        return colors.deepOrange[300];
    }
    if(color_shade_temp == 3) {
        return colors.deepOrange[400];
    }
    if(color_shade_temp == 4) {
        return colors.deepOrange[500];
    }
    if(color_shade_temp == 5) {
        return colors.deepOrange[600];
    }
    if(color_shade_temp == 6) {
        return colors.deepOrange[700];
    }
    if(color_shade_temp == 7) {
        return colors.deepOrange[800];
    }
    if(color_shade_temp == 8) {
        return colors.deepOrange[900];
    }
}

function getRandomOrangeColor() {
    var color_shade_temp = Math.floor(Math.random() * 9);

    if(color_shade_temp == 0) {
        return colors.orange[100];
    }
    if(color_shade_temp == 1) {
        return colors.orange[200];
    }
    if(color_shade_temp == 2) {
        return colors.orange[300];
    }
    if(color_shade_temp == 3) {
        return colors.orange[400];
    }
    if(color_shade_temp == 4) {
        return colors.orange[500];
    }
    if(color_shade_temp == 5) {
        return colors.orange[600];
    }
    if(color_shade_temp == 6) {
        return colors.orange[700];
    }
    if(color_shade_temp == 7) {
        return colors.orange[800];
    }
    if(color_shade_temp == 8) {
        return colors.orange[900];
    }
}

function getRandomBrownColor() {
    var color_shade_temp = Math.floor(Math.random() * 9);

    if(color_shade_temp == 0) {
        return colors.brown[100];
    }
    if(color_shade_temp == 1) {
        return colors.brown[200];
    }
    if(color_shade_temp == 2) {
        return colors.brown[300];
    }
    if(color_shade_temp == 3) {
        return colors.brown[400];
    }
    if(color_shade_temp == 4) {
        return colors.brown[500];
    }
    if(color_shade_temp == 5) {
        return colors.brown[600];
    }
    if(color_shade_temp == 6) {
        return colors.brown[700];
    }
    if(color_shade_temp == 7) {
        return colors.brown[800];
    }
    if(color_shade_temp == 8) {
        return colors.brown[900];
    }
}

function getRandomGreyColor(){
    var color_shade_temp = Math.floor(Math.random() * 9);

    if(color_shade_temp == 0) {
        return colors.grey[100];
    }
    if(color_shade_temp == 1) {
        return colors.grey[200];
    }
    if(color_shade_temp == 2) {
        return colors.grey[300];
    }
    if(color_shade_temp == 3) {
        return colors.grey[400];
    }
    if(color_shade_temp == 4) {
        return colors.grey[500];
    }
    if(color_shade_temp == 5) {
        return colors.grey[600];
    }
    if(color_shade_temp == 6) {
        return colors.grey[700];
    }
    if(color_shade_temp == 7) {
        return colors.grey[800];
    }
    if(color_shade_temp == 8) {
        return colors.grey[900];
    }
}

function getRandomBlueGreyColor(){
    var color_shade_temp = Math.floor(Math.random() * 9);

    if(color_shade_temp == 0) {
        return colors.blueGrey[100];
    }
    if(color_shade_temp == 1) {
        return colors.blueGrey[200];
    }
    if(color_shade_temp == 2) {
        return colors.blueGrey[300];
    }
    if(color_shade_temp == 3) {
        return colors.blueGrey[400];
    }
    if(color_shade_temp == 4) {
        return colors.blueGrey[500];
    }
    if(color_shade_temp == 5) {
        return colors.blueGrey[600];
    }
    if(color_shade_temp == 6) {
        return colors.blueGrey[700];
    }
    if(color_shade_temp == 7) {
        return colors.blueGrey[800];
    }
    if(color_shade_temp == 8) {
        return colors.blueGrey[900];
    }
}

function Clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#eeeeee';
    context.fillRect(0, 0, 1024, 1024);
}

function Background() {
    var temp_roll = Math.floor(Math.random() * 3);
    if(temp_roll == 0) {
        xx = 16;
    } else if(temp_roll == 1) {
        xx = 32;
    } else if(temp_roll == 2) {
        xx = 64;
    } 

    var color_theme = Math.floor(Math.random() * 4);
    var color_theme_mutation_one = Math.floor(Math.random() * 19);
    var color_theme_mutation_two = Math.floor(Math.random() * 19);
    var color_theme_mutation_three = Math.floor(Math.random() * 19);
    var color_theme_mutation_four = Math.floor(Math.random() * 19);

    for(var ii = 0; ii <= canvas.width; ii += xx) {
        for(var i = 0; i <= canvas.height; i += xx) {
            if(color_theme == 0) {
                context.fillStyle = getRandomColor();
            }    
            if(color_theme == 1) {
                var color_theme_mutation = Math.floor(Math.random() * 2);
                if(color_theme_mutation == 0) {
                    if(color_theme_mutation_one == 0) {
                        context.fillStyle = getRandomRedColor();
                    }
                    if(color_theme_mutation_one == 1) {
                        context.fillStyle = getRandomPinkColor();
                    }
                    if(color_theme_mutation_one == 2) {
                        context.fillStyle = getRandomPurpleColor();
                    }
                    if(color_theme_mutation_one == 3) {
                        context.fillStyle = getRandomDeepPurpleColor();
                    }
                    if(color_theme_mutation_one == 4) {
                        context.fillStyle = getRandomIndigoColor();
                    }
                    if(color_theme_mutation_one == 5) {
                        context.fillStyle = getRandomBlueColor();
                    }
                    if(color_theme_mutation_one == 6) {
                        context.fillStyle = getRandomLightBlueColor();
                    }
                    if(color_theme_mutation_one == 7) {
                        context.fillStyle = getRandomCyanColor();
                    }
                    if(color_theme_mutation_one == 8) {
                        context.fillStyle = getRandomTealColor();
                    }
                    if(color_theme_mutation_one == 9) {
                        context.fillStyle = getRandomGreenColor();
                    }
                    if(color_theme_mutation_one == 10) {
                        context.fillStyle = getRandomLightGreenColor();
                    }
                    if(color_theme_mutation_one == 11) {
                        context.fillStyle = getRandomLimeColor();
                    }
                    if(color_theme_mutation_one == 12) {
                        context.fillStyle = getRandomYellowColor();
                    }
                    if(color_theme_mutation_one == 13) {
                        context.fillStyle = getRandomAmberColor();
                    }
                    if(color_theme_mutation_one == 14) {
                        context.fillStyle = getRandomOrangeColor();
                    }
                    if(color_theme_mutation_one == 15) {
                        context.fillStyle = getRandomDeepOrangeColor();
                    }
                    if(color_theme_mutation_one == 16) {
                        context.fillStyle = getRandomBrownColor();
                    }
                    if(color_theme_mutation_one == 17) {
                        context.fillStyle = getRandomGreyColor();
                    }
                    if(color_theme_mutation_one == 18) {
                        context.fillStyle = getRandomBlueGreyColor();
                    }
                }
                if(color_theme_mutation == 1) {
                    if(color_theme_mutation_two == 0) {
                        context.fillStyle = getRandomRedColor();
                    }
                    if(color_theme_mutation_two == 1) {
                        context.fillStyle = getRandomPinkColor();
                    }
                    if(color_theme_mutation_two == 2) {
                        context.fillStyle = getRandomPurpleColor();
                    }
                    if(color_theme_mutation_two == 3) {
                        context.fillStyle = getRandomDeepPurpleColor();
                    }
                    if(color_theme_mutation_two == 4) {
                        context.fillStyle = getRandomIndigoColor();
                    }
                    if(color_theme_mutation_two == 5) {
                        context.fillStyle = getRandomBlueColor();
                    }
                    if(color_theme_mutation_two == 6) {
                        context.fillStyle = getRandomLightBlueColor();
                    }
                    if(color_theme_mutation_two == 7) {
                        context.fillStyle = getRandomCyanColor();
                    }
                    if(color_theme_mutation_two == 8) {
                        context.fillStyle = getRandomTealColor();
                    }
                    if(color_theme_mutation_two == 9) {
                        context.fillStyle = getRandomGreenColor();
                    }
                    if(color_theme_mutation_two == 10) {
                        context.fillStyle = getRandomLightGreenColor();
                    }
                    if(color_theme_mutation_two == 11) {
                        context.fillStyle = getRandomLimeColor();
                    }
                    if(color_theme_mutation_two == 12) {
                        context.fillStyle = getRandomYellowColor();
                    }
                    if(color_theme_mutation_two == 13) {
                        context.fillStyle = getRandomAmberColor();
                    }
                    if(color_theme_mutation_two == 14) {
                        context.fillStyle = getRandomOrangeColor();
                    }
                    if(color_theme_mutation_two == 15) {
                        context.fillStyle = getRandomDeepOrangeColor();
                    }
                    if(color_theme_mutation_two == 16) {
                        context.fillStyle = getRandomBrownColor();
                    }
                    if(color_theme_mutation_two == 17) {
                        context.fillStyle = getRandomGreyColor();
                    }
                    if(color_theme_mutation_two == 18) {
                        context.fillStyle = getRandomBlueGreyColor();
                    }
                }  
            }
            if(color_theme == 2) {
                var color_theme_mutation = Math.floor(Math.random() * 3);
                if(color_theme_mutation == 0) {
                    if(color_theme_mutation_one == 0) {
                        context.fillStyle = getRandomRedColor();
                    }
                    if(color_theme_mutation_one == 1) {
                        context.fillStyle = getRandomPinkColor();
                    }
                    if(color_theme_mutation_one == 2) {
                        context.fillStyle = getRandomPurpleColor();
                    }
                    if(color_theme_mutation_one == 3) {
                        context.fillStyle = getRandomDeepPurpleColor();
                    }
                    if(color_theme_mutation_one == 4) {
                        context.fillStyle = getRandomIndigoColor();
                    }
                    if(color_theme_mutation_one == 5) {
                        context.fillStyle = getRandomBlueColor();
                    }
                    if(color_theme_mutation_one == 6) {
                        context.fillStyle = getRandomLightBlueColor();
                    }
                    if(color_theme_mutation_one == 7) {
                        context.fillStyle = getRandomCyanColor();
                    }
                    if(color_theme_mutation_one == 8) {
                        context.fillStyle = getRandomTealColor();
                    }
                    if(color_theme_mutation_one == 9) {
                        context.fillStyle = getRandomGreenColor();
                    }
                    if(color_theme_mutation_one == 10) {
                        context.fillStyle = getRandomLightGreenColor();
                    }
                    if(color_theme_mutation_one == 11) {
                        context.fillStyle = getRandomLimeColor();
                    }
                    if(color_theme_mutation_one == 12) {
                        context.fillStyle = getRandomYellowColor();
                    }
                    if(color_theme_mutation_one == 13) {
                        context.fillStyle = getRandomAmberColor();
                    }
                    if(color_theme_mutation_one == 14) {
                        context.fillStyle = getRandomOrangeColor();
                    }
                    if(color_theme_mutation_one == 15) {
                        context.fillStyle = getRandomDeepOrangeColor();
                    }
                    if(color_theme_mutation_one == 16) {
                        context.fillStyle = getRandomBrownColor();
                    }
                    if(color_theme_mutation_one == 17) {
                        context.fillStyle = getRandomGreyColor();
                    }
                    if(color_theme_mutation_one == 18) {
                        context.fillStyle = getRandomBlueGreyColor();
                    }
                }
                if(color_theme_mutation == 1) {
                    if(color_theme_mutation_two == 0) {
                        context.fillStyle = getRandomRedColor();
                    }
                    if(color_theme_mutation_two == 1) {
                        context.fillStyle = getRandomPinkColor();
                    }
                    if(color_theme_mutation_two == 2) {
                        context.fillStyle = getRandomPurpleColor();
                    }
                    if(color_theme_mutation_two == 3) {
                        context.fillStyle = getRandomDeepPurpleColor();
                    }
                    if(color_theme_mutation_two == 4) {
                        context.fillStyle = getRandomIndigoColor();
                    }
                    if(color_theme_mutation_two == 5) {
                        context.fillStyle = getRandomBlueColor();
                    }
                    if(color_theme_mutation_two == 6) {
                        context.fillStyle = getRandomLightBlueColor();
                    }
                    if(color_theme_mutation_two == 7) {
                        context.fillStyle = getRandomCyanColor();
                    }
                    if(color_theme_mutation_two == 8) {
                        context.fillStyle = getRandomTealColor();
                    }
                    if(color_theme_mutation_two == 9) {
                        context.fillStyle = getRandomGreenColor();
                    }
                    if(color_theme_mutation_two == 10) {
                        context.fillStyle = getRandomLightGreenColor();
                    }
                    if(color_theme_mutation_two == 11) {
                        context.fillStyle = getRandomLimeColor();
                    }
                    if(color_theme_mutation_two == 12) {
                        context.fillStyle = getRandomYellowColor();
                    }
                    if(color_theme_mutation_two == 13) {
                        context.fillStyle = getRandomAmberColor();
                    }
                    if(color_theme_mutation_two == 14) {
                        context.fillStyle = getRandomOrangeColor();
                    }
                    if(color_theme_mutation_two == 15) {
                        context.fillStyle = getRandomDeepOrangeColor();
                    }
                    if(color_theme_mutation_two == 16) {
                        context.fillStyle = getRandomBrownColor();
                    }
                    if(color_theme_mutation_two == 17) {
                        context.fillStyle = getRandomGreyColor();
                    }
                    if(color_theme_mutation_two == 18) {
                        context.fillStyle = getRandomBlueGreyColor();
                    }
                }
                if(color_theme_mutation == 2) {
                    if(color_theme_mutation_three == 0) {
                        context.fillStyle = getRandomRedColor();
                    }
                    if(color_theme_mutation_three == 1) {
                        context.fillStyle = getRandomPinkColor();
                    }
                    if(color_theme_mutation_three == 2) {
                        context.fillStyle = getRandomPurpleColor();
                    }
                    if(color_theme_mutation_three == 3) {
                        context.fillStyle = getRandomDeepPurpleColor();
                    }
                    if(color_theme_mutation_three == 4) {
                        context.fillStyle = getRandomIndigoColor();
                    }
                    if(color_theme_mutation_three == 5) {
                        context.fillStyle = getRandomBlueColor();
                    }
                    if(color_theme_mutation_three == 6) {
                        context.fillStyle = getRandomLightBlueColor();
                    }
                    if(color_theme_mutation_three == 7) {
                        context.fillStyle = getRandomCyanColor();
                    }
                    if(color_theme_mutation_three == 8) {
                        context.fillStyle = getRandomTealColor();
                    }
                    if(color_theme_mutation_three == 9) {
                        context.fillStyle = getRandomGreenColor();
                    }
                    if(color_theme_mutation_three == 10) {
                        context.fillStyle = getRandomLightGreenColor();
                    }
                    if(color_theme_mutation_three == 11) {
                        context.fillStyle = getRandomLimeColor();
                    }
                    if(color_theme_mutation_three == 12) {
                        context.fillStyle = getRandomYellowColor();
                    }
                    if(color_theme_mutation_three == 13) {
                        context.fillStyle = getRandomAmberColor();
                    }
                    if(color_theme_mutation_three == 14) {
                        context.fillStyle = getRandomOrangeColor();
                    }
                    if(color_theme_mutation_three == 15) {
                        context.fillStyle = getRandomDeepOrangeColor();
                    }
                    if(color_theme_mutation_three == 16) {
                        context.fillStyle = getRandomBrownColor();
                    }
                    if(color_theme_mutation_three == 17) {
                        context.fillStyle = getRandomGreyColor();
                    }
                    if(color_theme_mutation_three == 18) {
                        context.fillStyle = getRandomBlueGreyColor();
                    }
                }
            }
            if(color_theme == 3) {
                var color_theme_mutation = Math.floor(Math.random() * 4);
                if(color_theme_mutation == 0) {
                    if(color_theme_mutation_one == 0) {
                        context.fillStyle = getRandomRedColor();
                    }
                    if(color_theme_mutation_one == 1) {
                        context.fillStyle = getRandomPinkColor();
                    }
                    if(color_theme_mutation_one == 2) {
                        context.fillStyle = getRandomPurpleColor();
                    }
                    if(color_theme_mutation_one == 3) {
                        context.fillStyle = getRandomDeepPurpleColor();
                    }
                    if(color_theme_mutation_one == 4) {
                        context.fillStyle = getRandomIndigoColor();
                    }
                    if(color_theme_mutation_one == 5) {
                        context.fillStyle = getRandomBlueColor();
                    }
                    if(color_theme_mutation_one == 6) {
                        context.fillStyle = getRandomLightBlueColor();
                    }
                    if(color_theme_mutation_one == 7) {
                        context.fillStyle = getRandomCyanColor();
                    }
                    if(color_theme_mutation_one == 8) {
                        context.fillStyle = getRandomTealColor();
                    }
                    if(color_theme_mutation_one == 9) {
                        context.fillStyle = getRandomGreenColor();
                    }
                    if(color_theme_mutation_one == 10) {
                        context.fillStyle = getRandomLightGreenColor();
                    }
                    if(color_theme_mutation_one == 11) {
                        context.fillStyle = getRandomLimeColor();
                    }
                    if(color_theme_mutation_one == 12) {
                        context.fillStyle = getRandomYellowColor();
                    }
                    if(color_theme_mutation_one == 13) {
                        context.fillStyle = getRandomAmberColor();
                    }
                    if(color_theme_mutation_one == 14) {
                        context.fillStyle = getRandomOrangeColor();
                    }
                    if(color_theme_mutation_one == 15) {
                        context.fillStyle = getRandomDeepOrangeColor();
                    }
                    if(color_theme_mutation_one == 16) {
                        context.fillStyle = getRandomBrownColor();
                    }
                    if(color_theme_mutation_one == 17) {
                        context.fillStyle = getRandomGreyColor();
                    }
                    if(color_theme_mutation_one == 18) {
                        context.fillStyle = getRandomBlueGreyColor();
                    }
                }
                if(color_theme_mutation == 1) {
                    if(color_theme_mutation_two == 0) {
                        context.fillStyle = getRandomRedColor();
                    }
                    if(color_theme_mutation_two == 1) {
                        context.fillStyle = getRandomPinkColor();
                    }
                    if(color_theme_mutation_two == 2) {
                        context.fillStyle = getRandomPurpleColor();
                    }
                    if(color_theme_mutation_two == 3) {
                        context.fillStyle = getRandomDeepPurpleColor();
                    }
                    if(color_theme_mutation_two == 4) {
                        context.fillStyle = getRandomIndigoColor();
                    }
                    if(color_theme_mutation_two == 5) {
                        context.fillStyle = getRandomBlueColor();
                    }
                    if(color_theme_mutation_two == 6) {
                        context.fillStyle = getRandomLightBlueColor();
                    }
                    if(color_theme_mutation_two == 7) {
                        context.fillStyle = getRandomCyanColor();
                    }
                    if(color_theme_mutation_two == 8) {
                        context.fillStyle = getRandomTealColor();
                    }
                    if(color_theme_mutation_two == 9) {
                        context.fillStyle = getRandomGreenColor();
                    }
                    if(color_theme_mutation_two == 10) {
                        context.fillStyle = getRandomLightGreenColor();
                    }
                    if(color_theme_mutation_two == 11) {
                        context.fillStyle = getRandomLimeColor();
                    }
                    if(color_theme_mutation_two == 12) {
                        context.fillStyle = getRandomYellowColor();
                    }
                    if(color_theme_mutation_two == 13) {
                        context.fillStyle = getRandomAmberColor();
                    }
                    if(color_theme_mutation_two == 14) {
                        context.fillStyle = getRandomOrangeColor();
                    }
                    if(color_theme_mutation_two == 15) {
                        context.fillStyle = getRandomDeepOrangeColor();
                    }
                    if(color_theme_mutation_two == 16) {
                        context.fillStyle = getRandomBrownColor();
                    }
                    if(color_theme_mutation_two == 17) {
                        context.fillStyle = getRandomGreyColor();
                    }
                    if(color_theme_mutation_two == 18) {
                        context.fillStyle = getRandomBlueGreyColor();
                    }
                }
                if(color_theme_mutation == 2) {
                    if(color_theme_mutation_three == 0) {
                        context.fillStyle = getRandomRedColor();
                    }
                    if(color_theme_mutation_three == 1) {
                        context.fillStyle = getRandomPinkColor();
                    }
                    if(color_theme_mutation_three == 2) {
                        context.fillStyle = getRandomPurpleColor();
                    }
                    if(color_theme_mutation_three == 3) {
                        context.fillStyle = getRandomDeepPurpleColor();
                    }
                    if(color_theme_mutation_three == 4) {
                        context.fillStyle = getRandomIndigoColor();
                    }
                    if(color_theme_mutation_three == 5) {
                        context.fillStyle = getRandomBlueColor();
                    }
                    if(color_theme_mutation_three == 6) {
                        context.fillStyle = getRandomLightBlueColor();
                    }
                    if(color_theme_mutation_three == 7) {
                        context.fillStyle = getRandomCyanColor();
                    }
                    if(color_theme_mutation_three == 8) {
                        context.fillStyle = getRandomTealColor();
                    }
                    if(color_theme_mutation_three == 9) {
                        context.fillStyle = getRandomGreenColor();
                    }
                    if(color_theme_mutation_three == 10) {
                        context.fillStyle = getRandomLightGreenColor();
                    }
                    if(color_theme_mutation_three == 11) {
                        context.fillStyle = getRandomLimeColor();
                    }
                    if(color_theme_mutation_three == 12) {
                        context.fillStyle = getRandomYellowColor();
                    }
                    if(color_theme_mutation_three == 13) {
                        context.fillStyle = getRandomAmberColor();
                    }
                    if(color_theme_mutation_three == 14) {
                        context.fillStyle = getRandomOrangeColor();
                    }
                    if(color_theme_mutation_three == 15) {
                        context.fillStyle = getRandomDeepOrangeColor();
                    }
                    if(color_theme_mutation_three == 16) {
                        context.fillStyle = getRandomBrownColor();
                    }
                    if(color_theme_mutation_three == 17) {
                        context.fillStyle = getRandomGreyColor();
                    }
                    if(color_theme_mutation_three == 18) {
                        context.fillStyle = getRandomBlueGreyColor();
                    }
                }
                if(color_theme_mutation == 3) {
                    if(color_theme_mutation_four == 0) {
                        context.fillStyle = getRandomRedColor();
                    }
                    if(color_theme_mutation_four == 1) {
                        context.fillStyle = getRandomPinkColor();
                    }
                    if(color_theme_mutation_four == 2) {
                        context.fillStyle = getRandomPurpleColor();
                    }
                    if(color_theme_mutation_four == 3) {
                        context.fillStyle = getRandomDeepPurpleColor();
                    }
                    if(color_theme_mutation_four == 4) {
                        context.fillStyle = getRandomIndigoColor();
                    }
                    if(color_theme_mutation_four == 5) {
                        context.fillStyle = getRandomBlueColor();
                    }
                    if(color_theme_mutation_four == 6) {
                        context.fillStyle = getRandomLightBlueColor();
                    }
                    if(color_theme_mutation_four == 7) {
                        context.fillStyle = getRandomCyanColor();
                    }
                    if(color_theme_mutation_four == 8) {
                        context.fillStyle = getRandomTealColor();
                    }
                    if(color_theme_mutation_four == 9) {
                        context.fillStyle = getRandomGreenColor();
                    }
                    if(color_theme_mutation_four == 10) {
                        context.fillStyle = getRandomLightGreenColor();
                    }
                    if(color_theme_mutation_four == 11) {
                        context.fillStyle = getRandomLimeColor();
                    }
                    if(color_theme_mutation_four == 12) {
                        context.fillStyle = getRandomYellowColor();
                    }
                    if(color_theme_mutation_four == 13) {
                        context.fillStyle = getRandomAmberColor();
                    }
                    if(color_theme_mutation_four == 14) {
                        context.fillStyle = getRandomOrangeColor();
                    }
                    if(color_theme_mutation_four == 15) {
                        context.fillStyle = getRandomDeepOrangeColor();
                    }
                    if(color_theme_mutation_four == 16) {
                        context.fillStyle = getRandomBrownColor();
                    }
                    if(color_theme_mutation_four == 17) {
                        context.fillStyle = getRandomGreyColor();
                    }
                    if(color_theme_mutation_four == 18) {
                        context.fillStyle = getRandomBlueGreyColor();
                    }
                }
            }
            context.fillRect(ii, i, xx, xx);
        }
    }
}

function Signature() {
    context.fillStyle = getRandomColor();
    context.fillRect(32*24, 32*24, 32 * 7, 32 * 7);

    context.fillStyle = getRandomColor();
    context.fillRect(32*25, 32*25, 32, 32);
    context.fillStyle = getRandomColor();
    context.fillRect(32*26, 32*25, 32, 32);

    context.fillStyle = getRandomColor();
    context.fillRect(32*25, 32*26, 32, 32);

    context.fillStyle = getRandomColor();
    context.fillRect(32*25, 32*27, 32, 32);
    context.fillStyle = getRandomColor();
    context.fillRect(32*26, 32*27, 32, 32);

    context.fillStyle = getRandomColor();
    context.fillRect(32*26, 32*28, 32, 32);

    context.fillStyle = getRandomColor();
    context.fillRect(32*25, 32*29, 32, 32);
    context.fillStyle = getRandomColor();
    context.fillRect(32*26, 32*29, 32, 32);

    //

    context.fillStyle = getRandomColor();
    context.fillRect(32*28, 32*25, 32, 32);
    context.fillStyle = getRandomColor();
    context.fillRect(32*29, 32*25, 32, 32);

    context.fillStyle = getRandomColor();
    context.fillRect(32*29, 32*26, 32, 32);

    context.fillStyle = getRandomColor();
    context.fillRect(32*28, 32*27, 32, 32);
    context.fillStyle = getRandomColor();
    context.fillRect(32*29, 32*27, 32, 32);

    context.fillStyle = getRandomColor();
    context.fillRect(32*28, 32*28, 32, 32);

    context.fillStyle = getRandomColor();
    context.fillRect(32*28, 32*29, 32, 32);
    context.fillStyle = getRandomColor();
    context.fillRect(32*29, 32*29, 32, 32);

}

function downloadCanvas() {
    canvas.toBlob(function(blob) {
        saveAs(blob, spice + ".png");
    });
}

function updateCanvas() {

    spice = Math.floor(Math.random() * (Math.random() * 99999999));

    Clear();
    
    Background();

    Signature();
}

setInterval(function() {
    updateCanvas();
    //downloadCanvas();
}, 1000);