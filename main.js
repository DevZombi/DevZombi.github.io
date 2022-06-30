import  MaterialColor from "./src/material-colors.js"

let mColors = new MaterialColor();

let canvas = document.getElementById('canvas_display');

canvas.width = 1024;
canvas.height = 1024;

//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;

let context = canvas.getContext('2d');

var spice = 16777215;

var xx = 32;

var download = false;

function Clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#eeeeee';
    context.fillRect(0, 0, 1024, 1024);
}

function drawTraingleDown() {
    var xx = -32; var yy = 0; var zz = 32; var count = 0;
    var xxx = 0; var yyy = 32;

    var color_theme = Math.floor(Math.random() * 2);
    var color_theme_mutation_one = Math.floor(Math.random() * 19);
    var color_theme_mutation_two = Math.floor(Math.random() * 19);

    console.log(color_theme + " " + color_theme_mutation_one + " " + color_theme_mutation_two)

    for(var x = 0; x <= 17; x++) {
        if(color_theme == 0) {
            context.fillStyle = mColors.getRandomColor();
        }    
        if(color_theme == 1) {
            var color_theme_mutation = Math.floor(Math.random() * 2);
            if(color_theme_mutation == 0) {
                if(color_theme_mutation_one == 0) {
                    context.fillStyle = mColors.getRandomRedColor();
                }
                if(color_theme_mutation_one == 1) {
                    context.fillStyle = mColors.getRandomPinkColor();
                }
                if(color_theme_mutation_one == 2) {
                    context.fillStyle = mColors.getRandomPurpleColor();
                }
                if(color_theme_mutation_one == 3) {
                    context.fillStyle = mColors.getRandomDeepPurpleColor();
                }
                if(color_theme_mutation_one == 4) {
                    context.fillStyle = mColors.getRandomIndigoColor();
                }
                if(color_theme_mutation_one == 5) {
                    context.fillStyle = mColors.getRandomBlueColor();
                }
                if(color_theme_mutation_one == 6) {
                    context.fillStyle = mColors.getRandomLightBlueColor();
                }
                if(color_theme_mutation_one == 7) {
                    context.fillStyle = mColors.getRandomCyanColor();
                }
                if(color_theme_mutation_one == 8) {
                    context.fillStyle = mColors.getRandomTealColor();
                }
                if(color_theme_mutation_one == 9) {
                    context.fillStyle = mColors.getRandomGreenColor();
                }
                if(color_theme_mutation_one == 10) {
                    context.fillStyle = mColors.getRandomLightGreenColor();
                }
                if(color_theme_mutation_one == 11) {
                    context.fillStyle = mColors.getRandomLimeColor();
                }
                if(color_theme_mutation_one == 12) {
                    context.fillStyle = mColors.getRandomYellowColor();
                }
                if(color_theme_mutation_one == 13) {
                    context.fillStyle = mColors.getRandomAmberColor();
                }
                if(color_theme_mutation_one == 14) {
                    context.fillStyle = mColors.getRandomOrangeColor();
                }
                if(color_theme_mutation_one == 15) {
                    context.fillStyle = mColors.getRandomDeepOrangeColor();
                }
                if(color_theme_mutation_one == 16) {
                    context.fillStyle = mColors.getRandomBrownColor();
                }
                if(color_theme_mutation_one == 17) {
                    context.fillStyle = mColors.getRandomGreyColor();
                }
                if(color_theme_mutation_one == 18) {
                    context.fillStyle = mColors.getRandomBlueGreyColor();
                }
            }
            if(color_theme_mutation == 1) {
                if(color_theme_mutation_two == 0) {
                    context.fillStyle = mColors.getRandomRedColor();
                }
                if(color_theme_mutation_two == 1) {
                    context.fillStyle = mColors.getRandomPinkColor();
                }
                if(color_theme_mutation_two == 2) {
                    context.fillStyle = mColors.getRandomPurpleColor();
                }
                if(color_theme_mutation_two == 3) {
                    context.fillStyle = mColors.getRandomDeepPurpleColor();
                }
                if(color_theme_mutation_two == 4) {
                    context.fillStyle = mColors.getRandomIndigoColor();
                }
                if(color_theme_mutation_two == 5) {
                    context.fillStyle = mColors.getRandomBlueColor();
                }
                if(color_theme_mutation_two == 6) {
                    context.fillStyle = mColors.getRandomLightBlueColor();
                }
                if(color_theme_mutation_two == 7) {
                    context.fillStyle = mColors.getRandomCyanColor();
                }
                if(color_theme_mutation_two == 8) {
                    context.fillStyle = mColors.getRandomTealColor();
                }
                if(color_theme_mutation_two == 9) {
                    context.fillStyle = mColors.getRandomGreenColor();
                }
                if(color_theme_mutation_two == 10) {
                    context.fillStyle = mColors.getRandomLightGreenColor();
                }
                if(color_theme_mutation_two == 11) {
                    context.fillStyle = mColors.getRandomLimeColor();
                }
                if(color_theme_mutation_two == 12) {
                    context.fillStyle = mColors.getRandomYellowColor();
                }
                if(color_theme_mutation_two == 13) {
                    context.fillStyle = mColors.getRandomAmberColor();
                }
                if(color_theme_mutation_two == 14) {
                    context.fillStyle = mColors.getRandomOrangeColor();
                }
                if(color_theme_mutation_two == 15) {
                    context.fillStyle = mColors.getRandomDeepOrangeColor();
                }
                if(color_theme_mutation_two == 16) {
                    context.fillStyle = mColors.getRandomBrownColor();
                }
                if(color_theme_mutation_two == 17) {
                    context.fillStyle = mColors.getRandomGreyColor();
                }
                if(color_theme_mutation_two == 18) {
                    context.fillStyle = mColors.getRandomBlueGreyColor();
                }
            }  
        }

        context.beginPath();
        context.moveTo(xx, xxx); // + 64
        context.lineTo(yy, yyy); // + 64
        context.lineTo(zz, xxx); // + 64
        context.closePath();
        context.fill();
        
        xx = xx + 64;
        yy = yy + 64;
        zz = zz + 64;

        if(x >= 17) {
            xxx = xxx + 32; yyy = yyy + 32;
            xx = -32; yy = 0; zz = 32; x =0;
            count = count + 1;
            if(count == 32) {
                return
            }
        }
    }
}

function drawTraingleUp() {
    var xx = 32; var yy = 64; var zz = 0; var count = 0;
    var xxx = 0; var yyy = 32;

    var color_theme = Math.floor(Math.random() * 2);
    var color_theme_mutation_one = Math.floor(Math.random() * 19);
    var color_theme_mutation_two = Math.floor(Math.random() * 19);

    for(var x = 0; x <= 16; x++) {
        if(color_theme == 0) {
            context.fillStyle = mColors.getRandomColor();
        }    
        if(color_theme == 1) {
            var color_theme_mutation = Math.floor(Math.random() * 2);
            if(color_theme_mutation == 0) {
                if(color_theme_mutation_one == 0) {
                    context.fillStyle = mColors.getRandomRedColor();
                }
                if(color_theme_mutation_one == 1) {
                    context.fillStyle = mColors.getRandomPinkColor();
                }
                if(color_theme_mutation_one == 2) {
                    context.fillStyle = mColors.getRandomPurpleColor();
                }
                if(color_theme_mutation_one == 3) {
                    context.fillStyle = mColors.getRandomDeepPurpleColor();
                }
                if(color_theme_mutation_one == 4) {
                    context.fillStyle = mColors.getRandomIndigoColor();
                }
                if(color_theme_mutation_one == 5) {
                    context.fillStyle = mColors.getRandomBlueColor();
                }
                if(color_theme_mutation_one == 6) {
                    context.fillStyle = mColors.getRandomLightBlueColor();
                }
                if(color_theme_mutation_one == 7) {
                    context.fillStyle = mColors.getRandomCyanColor();
                }
                if(color_theme_mutation_one == 8) {
                    context.fillStyle = mColors.getRandomTealColor();
                }
                if(color_theme_mutation_one == 9) {
                    context.fillStyle = mColors.getRandomGreenColor();
                }
                if(color_theme_mutation_one == 10) {
                    context.fillStyle = mColors.getRandomLightGreenColor();
                }
                if(color_theme_mutation_one == 11) {
                    context.fillStyle = mColors.getRandomLimeColor();
                }
                if(color_theme_mutation_one == 12) {
                    context.fillStyle = mColors.getRandomYellowColor();
                }
                if(color_theme_mutation_one == 13) {
                    context.fillStyle = mColors.getRandomAmberColor();
                }
                if(color_theme_mutation_one == 14) {
                    context.fillStyle = mColors.getRandomOrangeColor();
                }
                if(color_theme_mutation_one == 15) {
                    context.fillStyle = mColors.getRandomDeepOrangeColor();
                }
                if(color_theme_mutation_one == 16) {
                    context.fillStyle = mColors.getRandomBrownColor();
                }
                if(color_theme_mutation_one == 17) {
                    context.fillStyle = mColors.getRandomGreyColor();
                }
                if(color_theme_mutation_one == 18) {
                    context.fillStyle = mColors.getRandomBlueGreyColor();
                }
            }
            if(color_theme_mutation == 1) {
                if(color_theme_mutation_two == 0) {
                    context.fillStyle = mColors.getRandomRedColor();
                }
                if(color_theme_mutation_two == 1) {
                    context.fillStyle = mColors.getRandomPinkColor();
                }
                if(color_theme_mutation_two == 2) {
                    context.fillStyle = mColors.getRandomPurpleColor();
                }
                if(color_theme_mutation_two == 3) {
                    context.fillStyle = mColors.getRandomDeepPurpleColor();
                }
                if(color_theme_mutation_two == 4) {
                    context.fillStyle = mColors.getRandomIndigoColor();
                }
                if(color_theme_mutation_two == 5) {
                    context.fillStyle = mColors.getRandomBlueColor();
                }
                if(color_theme_mutation_two == 6) {
                    context.fillStyle = mColors.getRandomLightBlueColor();
                }
                if(color_theme_mutation_two == 7) {
                    context.fillStyle = mColors.getRandomCyanColor();
                }
                if(color_theme_mutation_two == 8) {
                    context.fillStyle = mColors.getRandomTealColor();
                }
                if(color_theme_mutation_two == 9) {
                    context.fillStyle = mColors.getRandomGreenColor();
                }
                if(color_theme_mutation_two == 10) {
                    context.fillStyle = mColors.getRandomLightGreenColor();
                }
                if(color_theme_mutation_two == 11) {
                    context.fillStyle = mColors.getRandomLimeColor();
                }
                if(color_theme_mutation_two == 12) {
                    context.fillStyle = mColors.getRandomYellowColor();
                }
                if(color_theme_mutation_two == 13) {
                    context.fillStyle = mColors.getRandomAmberColor();
                }
                if(color_theme_mutation_two == 14) {
                    context.fillStyle = mColors.getRandomOrangeColor();
                }
                if(color_theme_mutation_two == 15) {
                    context.fillStyle = mColors.getRandomDeepOrangeColor();
                }
                if(color_theme_mutation_two == 16) {
                    context.fillStyle = mColors.getRandomBrownColor();
                }
                if(color_theme_mutation_two == 17) {
                    context.fillStyle = mColors.getRandomGreyColor();
                }
                if(color_theme_mutation_two == 18) {
                    context.fillStyle = mColors.getRandomBlueGreyColor();
                }
            }  
        }
        context.beginPath();
        context.moveTo(xx, xxx); // + 64
        context.lineTo(yy, yyy); // + 64
        context.lineTo(zz, yyy); // + 64
        context.closePath();
        context.fill();
        
        xx = xx + 64;
        yy = yy + 64;
        zz = zz + 64;

        if(x >= 16) {
            xxx = xxx + 32; yyy = yyy + 32;
            xx = 32; yy = 64; zz = 0; x =0;
            count = count + 1;
            if(count == 32) {
                return
            }
        }
    }

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

    for(var ii = 0; ii <= 1024; ii += xx) {
        for(var i = 0; i <= 1024; i += xx) {
            if(color_theme == 0) {
                context.fillStyle = mColors.getRandomColor();
            }    
            if(color_theme == 1) {
                var color_theme_mutation = Math.floor(Math.random() * 2);
                if(color_theme_mutation == 0) {
                    if(color_theme_mutation_one == 0) {
                        context.fillStyle = mColors.getRandomRedColor();
                    }
                    if(color_theme_mutation_one == 1) {
                        context.fillStyle = mColors.getRandomPinkColor();
                    }
                    if(color_theme_mutation_one == 2) {
                        context.fillStyle = mColors.getRandomPurpleColor();
                    }
                    if(color_theme_mutation_one == 3) {
                        context.fillStyle = mColors.getRandomDeepPurpleColor();
                    }
                    if(color_theme_mutation_one == 4) {
                        context.fillStyle = mColors.getRandomIndigoColor();
                    }
                    if(color_theme_mutation_one == 5) {
                        context.fillStyle = mColors.getRandomBlueColor();
                    }
                    if(color_theme_mutation_one == 6) {
                        context.fillStyle = mColors.getRandomLightBlueColor();
                    }
                    if(color_theme_mutation_one == 7) {
                        context.fillStyle = mColors.getRandomCyanColor();
                    }
                    if(color_theme_mutation_one == 8) {
                        context.fillStyle = mColors.getRandomTealColor();
                    }
                    if(color_theme_mutation_one == 9) {
                        context.fillStyle = mColors.getRandomGreenColor();
                    }
                    if(color_theme_mutation_one == 10) {
                        context.fillStyle = mColors.getRandomLightGreenColor();
                    }
                    if(color_theme_mutation_one == 11) {
                        context.fillStyle = mColors.getRandomLimeColor();
                    }
                    if(color_theme_mutation_one == 12) {
                        context.fillStyle = mColors.getRandomYellowColor();
                    }
                    if(color_theme_mutation_one == 13) {
                        context.fillStyle = mColors.getRandomAmberColor();
                    }
                    if(color_theme_mutation_one == 14) {
                        context.fillStyle = mColors.getRandomOrangeColor();
                    }
                    if(color_theme_mutation_one == 15) {
                        context.fillStyle = mColors.getRandomDeepOrangeColor();
                    }
                    if(color_theme_mutation_one == 16) {
                        context.fillStyle = mColors.getRandomBrownColor();
                    }
                    if(color_theme_mutation_one == 17) {
                        context.fillStyle = mColors.getRandomGreyColor();
                    }
                    if(color_theme_mutation_one == 18) {
                        context.fillStyle = mColors.getRandomBlueGreyColor();
                    }
                }
                if(color_theme_mutation == 1) {
                    if(color_theme_mutation_two == 0) {
                        context.fillStyle = mColors.getRandomRedColor();
                    }
                    if(color_theme_mutation_two == 1) {
                        context.fillStyle = mColors.getRandomPinkColor();
                    }
                    if(color_theme_mutation_two == 2) {
                        context.fillStyle = mColors.getRandomPurpleColor();
                    }
                    if(color_theme_mutation_two == 3) {
                        context.fillStyle = mColors.getRandomDeepPurpleColor();
                    }
                    if(color_theme_mutation_two == 4) {
                        context.fillStyle = mColors.getRandomIndigoColor();
                    }
                    if(color_theme_mutation_two == 5) {
                        context.fillStyle = mColors.getRandomBlueColor();
                    }
                    if(color_theme_mutation_two == 6) {
                        context.fillStyle = mColors.getRandomLightBlueColor();
                    }
                    if(color_theme_mutation_two == 7) {
                        context.fillStyle = mColors.getRandomCyanColor();
                    }
                    if(color_theme_mutation_two == 8) {
                        context.fillStyle = mColors.getRandomTealColor();
                    }
                    if(color_theme_mutation_two == 9) {
                        context.fillStyle = mColors.getRandomGreenColor();
                    }
                    if(color_theme_mutation_two == 10) {
                        context.fillStyle = mColors.getRandomLightGreenColor();
                    }
                    if(color_theme_mutation_two == 11) {
                        context.fillStyle = mColors.getRandomLimeColor();
                    }
                    if(color_theme_mutation_two == 12) {
                        context.fillStyle = mColors.getRandomYellowColor();
                    }
                    if(color_theme_mutation_two == 13) {
                        context.fillStyle = mColors.getRandomAmberColor();
                    }
                    if(color_theme_mutation_two == 14) {
                        context.fillStyle = mColors.getRandomOrangeColor();
                    }
                    if(color_theme_mutation_two == 15) {
                        context.fillStyle = mColors.getRandomDeepOrangeColor();
                    }
                    if(color_theme_mutation_two == 16) {
                        context.fillStyle = mColors.getRandomBrownColor();
                    }
                    if(color_theme_mutation_two == 17) {
                        context.fillStyle = mColors.getRandomGreyColor();
                    }
                    if(color_theme_mutation_two == 18) {
                        context.fillStyle = mColors.getRandomBlueGreyColor();
                    }
                }  
            }
            if(color_theme == 2) {
                var color_theme_mutation = Math.floor(Math.random() * 3);
                if(color_theme_mutation == 0) {
                    if(color_theme_mutation_one == 0) {
                        context.fillStyle = mColors.getRandomRedColor();
                    }
                    if(color_theme_mutation_one == 1) {
                        context.fillStyle = mColors.getRandomPinkColor();
                    }
                    if(color_theme_mutation_one == 2) {
                        context.fillStyle = mColors.getRandomPurpleColor();
                    }
                    if(color_theme_mutation_one == 3) {
                        context.fillStyle = mColors.getRandomDeepPurpleColor();
                    }
                    if(color_theme_mutation_one == 4) {
                        context.fillStyle = mColors.getRandomIndigoColor();
                    }
                    if(color_theme_mutation_one == 5) {
                        context.fillStyle = mColors.getRandomBlueColor();
                    }
                    if(color_theme_mutation_one == 6) {
                        context.fillStyle = mColors.getRandomLightBlueColor();
                    }
                    if(color_theme_mutation_one == 7) {
                        context.fillStyle = mColors.getRandomCyanColor();
                    }
                    if(color_theme_mutation_one == 8) {
                        context.fillStyle = mColors.getRandomTealColor();
                    }
                    if(color_theme_mutation_one == 9) {
                        context.fillStyle = mColors.getRandomGreenColor();
                    }
                    if(color_theme_mutation_one == 10) {
                        context.fillStyle = mColors.getRandomLightGreenColor();
                    }
                    if(color_theme_mutation_one == 11) {
                        context.fillStyle = mColors.getRandomLimeColor();
                    }
                    if(color_theme_mutation_one == 12) {
                        context.fillStyle = mColors.getRandomYellowColor();
                    }
                    if(color_theme_mutation_one == 13) {
                        context.fillStyle = mColors.getRandomAmberColor();
                    }
                    if(color_theme_mutation_one == 14) {
                        context.fillStyle = mColors.getRandomOrangeColor();
                    }
                    if(color_theme_mutation_one == 15) {
                        context.fillStyle = mColors.getRandomDeepOrangeColor();
                    }
                    if(color_theme_mutation_one == 16) {
                        context.fillStyle = mColors.getRandomBrownColor();
                    }
                    if(color_theme_mutation_one == 17) {
                        context.fillStyle = mColors.getRandomGreyColor();
                    }
                    if(color_theme_mutation_one == 18) {
                        context.fillStyle = mColors.getRandomBlueGreyColor();
                    }
                }
                if(color_theme_mutation == 1) {
                    if(color_theme_mutation_two == 0) {
                        context.fillStyle = mColors.getRandomRedColor();
                    }
                    if(color_theme_mutation_two == 1) {
                        context.fillStyle = mColors.getRandomPinkColor();
                    }
                    if(color_theme_mutation_two == 2) {
                        context.fillStyle = mColors.getRandomPurpleColor();
                    }
                    if(color_theme_mutation_two == 3) {
                        context.fillStyle = mColors.getRandomDeepPurpleColor();
                    }
                    if(color_theme_mutation_two == 4) {
                        context.fillStyle = mColors.getRandomIndigoColor();
                    }
                    if(color_theme_mutation_two == 5) {
                        context.fillStyle = mColors.getRandomBlueColor();
                    }
                    if(color_theme_mutation_two == 6) {
                        context.fillStyle = mColors.getRandomLightBlueColor();
                    }
                    if(color_theme_mutation_two == 7) {
                        context.fillStyle = mColors.getRandomCyanColor();
                    }
                    if(color_theme_mutation_two == 8) {
                        context.fillStyle = mColors.getRandomTealColor();
                    }
                    if(color_theme_mutation_two == 9) {
                        context.fillStyle = mColors.getRandomGreenColor();
                    }
                    if(color_theme_mutation_two == 10) {
                        context.fillStyle = mColors.getRandomLightGreenColor();
                    }
                    if(color_theme_mutation_two == 11) {
                        context.fillStyle = mColors.getRandomLimeColor();
                    }
                    if(color_theme_mutation_two == 12) {
                        context.fillStyle = mColors.getRandomYellowColor();
                    }
                    if(color_theme_mutation_two == 13) {
                        context.fillStyle = mColors.getRandomAmberColor();
                    }
                    if(color_theme_mutation_two == 14) {
                        context.fillStyle = mColors.getRandomOrangeColor();
                    }
                    if(color_theme_mutation_two == 15) {
                        context.fillStyle = mColors.getRandomDeepOrangeColor();
                    }
                    if(color_theme_mutation_two == 16) {
                        context.fillStyle = mColors.getRandomBrownColor();
                    }
                    if(color_theme_mutation_two == 17) {
                        context.fillStyle = mColors.getRandomGreyColor();
                    }
                    if(color_theme_mutation_two == 18) {
                        context.fillStyle = mColors.getRandomBlueGreyColor();
                    }
                }
                if(color_theme_mutation == 2) {
                    if(color_theme_mutation_three == 0) {
                        context.fillStyle = mColors.getRandomRedColor();
                    }
                    if(color_theme_mutation_three == 1) {
                        context.fillStyle = mColors.getRandomPinkColor();
                    }
                    if(color_theme_mutation_three == 2) {
                        context.fillStyle = mColors.getRandomPurpleColor();
                    }
                    if(color_theme_mutation_three == 3) {
                        context.fillStyle = mColors.getRandomDeepPurpleColor();
                    }
                    if(color_theme_mutation_three == 4) {
                        context.fillStyle = mColors.getRandomIndigoColor();
                    }
                    if(color_theme_mutation_three == 5) {
                        context.fillStyle = mColors.getRandomBlueColor();
                    }
                    if(color_theme_mutation_three == 6) {
                        context.fillStyle = mColors.getRandomLightBlueColor();
                    }
                    if(color_theme_mutation_three == 7) {
                        context.fillStyle = mColors.getRandomCyanColor();
                    }
                    if(color_theme_mutation_three == 8) {
                        context.fillStyle = mColors.getRandomTealColor();
                    }
                    if(color_theme_mutation_three == 9) {
                        context.fillStyle = mColors.getRandomGreenColor();
                    }
                    if(color_theme_mutation_three == 10) {
                        context.fillStyle = mColors.getRandomLightGreenColor();
                    }
                    if(color_theme_mutation_three == 11) {
                        context.fillStyle = mColors.getRandomLimeColor();
                    }
                    if(color_theme_mutation_three == 12) {
                        context.fillStyle = mColors.getRandomYellowColor();
                    }
                    if(color_theme_mutation_three == 13) {
                        context.fillStyle = mColors.getRandomAmberColor();
                    }
                    if(color_theme_mutation_three == 14) {
                        context.fillStyle = mColors.getRandomOrangeColor();
                    }
                    if(color_theme_mutation_three == 15) {
                        context.fillStyle = mColors.getRandomDeepOrangeColor();
                    }
                    if(color_theme_mutation_three == 16) {
                        context.fillStyle = mColors.getRandomBrownColor();
                    }
                    if(color_theme_mutation_three == 17) {
                        context.fillStyle = mColors.getRandomGreyColor();
                    }
                    if(color_theme_mutation_three == 18) {
                        context.fillStyle = mColors.getRandomBlueGreyColor();
                    }
                }
            }
            if(color_theme == 3) {
                var color_theme_mutation = Math.floor(Math.random() * 4);
                if(color_theme_mutation == 0) {
                    if(color_theme_mutation_one == 0) {
                        context.fillStyle = mColors.getRandomRedColor();
                    }
                    if(color_theme_mutation_one == 1) {
                        context.fillStyle = mColors.getRandomPinkColor();
                    }
                    if(color_theme_mutation_one == 2) {
                        context.fillStyle = mColors.getRandomPurpleColor();
                    }
                    if(color_theme_mutation_one == 3) {
                        context.fillStyle = mColors.getRandomDeepPurpleColor();
                    }
                    if(color_theme_mutation_one == 4) {
                        context.fillStyle = mColors.getRandomIndigoColor();
                    }
                    if(color_theme_mutation_one == 5) {
                        context.fillStyle = mColors.getRandomBlueColor();
                    }
                    if(color_theme_mutation_one == 6) {
                        context.fillStyle = mColors.getRandomLightBlueColor();
                    }
                    if(color_theme_mutation_one == 7) {
                        context.fillStyle = mColors.getRandomCyanColor();
                    }
                    if(color_theme_mutation_one == 8) {
                        context.fillStyle = mColors.getRandomTealColor();
                    }
                    if(color_theme_mutation_one == 9) {
                        context.fillStyle = mColors.getRandomGreenColor();
                    }
                    if(color_theme_mutation_one == 10) {
                        context.fillStyle = mColors.getRandomLightGreenColor();
                    }
                    if(color_theme_mutation_one == 11) {
                        context.fillStyle = mColors.getRandomLimeColor();
                    }
                    if(color_theme_mutation_one == 12) {
                        context.fillStyle = mColors.getRandomYellowColor();
                    }
                    if(color_theme_mutation_one == 13) {
                        context.fillStyle = mColors.getRandomAmberColor();
                    }
                    if(color_theme_mutation_one == 14) {
                        context.fillStyle = mColors.getRandomOrangeColor();
                    }
                    if(color_theme_mutation_one == 15) {
                        context.fillStyle = mColors.getRandomDeepOrangeColor();
                    }
                    if(color_theme_mutation_one == 16) {
                        context.fillStyle = mColors.getRandomBrownColor();
                    }
                    if(color_theme_mutation_one == 17) {
                        context.fillStyle = mColors.getRandomGreyColor();
                    }
                    if(color_theme_mutation_one == 18) {
                        context.fillStyle = mColors.getRandomBlueGreyColor();
                    }
                }
                if(color_theme_mutation == 1) {
                    if(color_theme_mutation_two == 0) {
                        context.fillStyle = mColors.getRandomRedColor();
                    }
                    if(color_theme_mutation_two == 1) {
                        context.fillStyle = mColors.getRandomPinkColor();
                    }
                    if(color_theme_mutation_two == 2) {
                        context.fillStyle = mColors.getRandomPurpleColor();
                    }
                    if(color_theme_mutation_two == 3) {
                        context.fillStyle = mColors.getRandomDeepPurpleColor();
                    }
                    if(color_theme_mutation_two == 4) {
                        context.fillStyle = mColors.getRandomIndigoColor();
                    }
                    if(color_theme_mutation_two == 5) {
                        context.fillStyle = mColors.getRandomBlueColor();
                    }
                    if(color_theme_mutation_two == 6) {
                        context.fillStyle = mColors.getRandomLightBlueColor();
                    }
                    if(color_theme_mutation_two == 7) {
                        context.fillStyle = mColors.getRandomCyanColor();
                    }
                    if(color_theme_mutation_two == 8) {
                        context.fillStyle = mColors.getRandomTealColor();
                    }
                    if(color_theme_mutation_two == 9) {
                        context.fillStyle = mColors.getRandomGreenColor();
                    }
                    if(color_theme_mutation_two == 10) {
                        context.fillStyle = mColors.getRandomLightGreenColor();
                    }
                    if(color_theme_mutation_two == 11) {
                        context.fillStyle = mColors.getRandomLimeColor();
                    }
                    if(color_theme_mutation_two == 12) {
                        context.fillStyle = mColors.getRandomYellowColor();
                    }
                    if(color_theme_mutation_two == 13) {
                        context.fillStyle = mColors.getRandomAmberColor();
                    }
                    if(color_theme_mutation_two == 14) {
                        context.fillStyle = mColors.getRandomOrangeColor();
                    }
                    if(color_theme_mutation_two == 15) {
                        context.fillStyle = mColors.getRandomDeepOrangeColor();
                    }
                    if(color_theme_mutation_two == 16) {
                        context.fillStyle = mColors.getRandomBrownColor();
                    }
                    if(color_theme_mutation_two == 17) {
                        context.fillStyle = mColors.getRandomGreyColor();
                    }
                    if(color_theme_mutation_two == 18) {
                        context.fillStyle = mColors.getRandomBlueGreyColor();
                    }
                }
                if(color_theme_mutation == 2) {
                    if(color_theme_mutation_three == 0) {
                        context.fillStyle = mColors.getRandomRedColor();
                    }
                    if(color_theme_mutation_three == 1) {
                        context.fillStyle = mColors.getRandomPinkColor();
                    }
                    if(color_theme_mutation_three == 2) {
                        context.fillStyle = mColors.getRandomPurpleColor();
                    }
                    if(color_theme_mutation_three == 3) {
                        context.fillStyle = mColors.getRandomDeepPurpleColor();
                    }
                    if(color_theme_mutation_three == 4) {
                        context.fillStyle = mColors.getRandomIndigoColor();
                    }
                    if(color_theme_mutation_three == 5) {
                        context.fillStyle = mColors.getRandomBlueColor();
                    }
                    if(color_theme_mutation_three == 6) {
                        context.fillStyle = mColors.getRandomLightBlueColor();
                    }
                    if(color_theme_mutation_three == 7) {
                        context.fillStyle = mColors.getRandomCyanColor();
                    }
                    if(color_theme_mutation_three == 8) {
                        context.fillStyle = mColors.getRandomTealColor();
                    }
                    if(color_theme_mutation_three == 9) {
                        context.fillStyle = mColors.getRandomGreenColor();
                    }
                    if(color_theme_mutation_three == 10) {
                        context.fillStyle = mColors.getRandomLightGreenColor();
                    }
                    if(color_theme_mutation_three == 11) {
                        context.fillStyle = mColors.getRandomLimeColor();
                    }
                    if(color_theme_mutation_three == 12) {
                        context.fillStyle = mColors.getRandomYellowColor();
                    }
                    if(color_theme_mutation_three == 13) {
                        context.fillStyle = mColors.getRandomAmberColor();
                    }
                    if(color_theme_mutation_three == 14) {
                        context.fillStyle = mColors.getRandomOrangeColor();
                    }
                    if(color_theme_mutation_three == 15) {
                        context.fillStyle = mColors.getRandomDeepOrangeColor();
                    }
                    if(color_theme_mutation_three == 16) {
                        context.fillStyle = mColors.getRandomBrownColor();
                    }
                    if(color_theme_mutation_three == 17) {
                        context.fillStyle = mColors.getRandomGreyColor();
                    }
                    if(color_theme_mutation_three == 18) {
                        context.fillStyle = mColors.getRandomBlueGreyColor();
                    }
                }
                if(color_theme_mutation == 3) {
                    if(color_theme_mutation_four == 0) {
                        context.fillStyle = mColors.getRandomRedColor();
                    }
                    if(color_theme_mutation_four == 1) {
                        context.fillStyle = mColors.getRandomPinkColor();
                    }
                    if(color_theme_mutation_four == 2) {
                        context.fillStyle = mColors.getRandomPurpleColor();
                    }
                    if(color_theme_mutation_four == 3) {
                        context.fillStyle = mColors.getRandomDeepPurpleColor();
                    }
                    if(color_theme_mutation_four == 4) {
                        context.fillStyle = mColors.getRandomIndigoColor();
                    }
                    if(color_theme_mutation_four == 5) {
                        context.fillStyle = mColors.getRandomBlueColor();
                    }
                    if(color_theme_mutation_four == 6) {
                        context.fillStyle = mColors.getRandomLightBlueColor();
                    }
                    if(color_theme_mutation_four == 7) {
                        context.fillStyle = mColors.getRandomCyanColor();
                    }
                    if(color_theme_mutation_four == 8) {
                        context.fillStyle = mColors.getRandomTealColor();
                    }
                    if(color_theme_mutation_four == 9) {
                        context.fillStyle = mColors.getRandomGreenColor();
                    }
                    if(color_theme_mutation_four == 10) {
                        context.fillStyle = mColors.getRandomLightGreenColor();
                    }
                    if(color_theme_mutation_four == 11) {
                        context.fillStyle = mColors.getRandomLimeColor();
                    }
                    if(color_theme_mutation_four == 12) {
                        context.fillStyle = mColors.getRandomYellowColor();
                    }
                    if(color_theme_mutation_four == 13) {
                        context.fillStyle = mColors.getRandomAmberColor();
                    }
                    if(color_theme_mutation_four == 14) {
                        context.fillStyle = mColors.getRandomOrangeColor();
                    }
                    if(color_theme_mutation_four == 15) {
                        context.fillStyle = mColors.getRandomDeepOrangeColor();
                    }
                    if(color_theme_mutation_four == 16) {
                        context.fillStyle = mColors.getRandomBrownColor();
                    }
                    if(color_theme_mutation_four == 17) {
                        context.fillStyle = mColors.getRandomGreyColor();
                    }
                    if(color_theme_mutation_four == 18) {
                        context.fillStyle = mColors.getRandomBlueGreyColor();
                    }
                }
            }
            context.fillRect(ii, i, xx, xx);
        }
    }
}

function Signature() {
    context.fillStyle = mColors.getRandomColor();
    context.fillRect(32*24, 32*24, 32 * 7, 32 * 7);

    context.fillStyle = mColors.getRandomColor();
    context.fillRect(32*25, 32*25, 32, 32);
    context.fillStyle = mColors.getRandomColor();
    context.fillRect(32*26, 32*25, 32, 32);

    context.fillStyle = mColors.getRandomColor();
    context.fillRect(32*25, 32*26, 32, 32);

    context.fillStyle = mColors.getRandomColor();
    context.fillRect(32*25, 32*27, 32, 32);
    context.fillStyle = mColors.getRandomColor();
    context.fillRect(32*26, 32*27, 32, 32);

    context.fillStyle = mColors.getRandomColor();
    context.fillRect(32*26, 32*28, 32, 32);

    context.fillStyle = mColors.getRandomColor();
    context.fillRect(32*25, 32*29, 32, 32);
    context.fillStyle = mColors.getRandomColor();
    context.fillRect(32*26, 32*29, 32, 32);

    //

    context.fillStyle = mColors.getRandomColor();
    context.fillRect(32*28, 32*25, 32, 32);
    context.fillStyle = mColors.getRandomColor();
    context.fillRect(32*29, 32*25, 32, 32);

    context.fillStyle = mColors.getRandomColor();
    context.fillRect(32*29, 32*26, 32, 32);

    context.fillStyle = mColors.getRandomColor();
    context.fillRect(32*28, 32*27, 32, 32);
    context.fillStyle = mColors.getRandomColor();
    context.fillRect(32*29, 32*27, 32, 32);

    context.fillStyle = mColors.getRandomColor();
    context.fillRect(32*28, 32*28, 32, 32);

    context.fillStyle = mColors.getRandomColor();
    context.fillRect(32*28, 32*29, 32, 32);
    context.fillStyle = mColors.getRandomColor();
    context.fillRect(32*29, 32*29, 32, 32);

}

var xx = 0;
function downloadCanvas() {
    if(download) {
        if(xx <= 100) {
            canvas.toBlob(function(blob) {
                saveAs(blob, spice + ".png");
            });
        }
        xx++;
    }
    
}

function updateCanvas() {

    spice = Math.floor(Math.random() * (Math.random() * 99999999));

    Clear();
    
    //Background();

    drawTraingleDown();

    drawTraingleUp();

    Signature();
}

setInterval(function() {
    updateCanvas();
    
    //downloadCanvas();
}, 1000);