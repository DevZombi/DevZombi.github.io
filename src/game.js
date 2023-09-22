//2021-2022 samuel r rivera-bonilla

//testing input
import Controls from './systems/io/controls.js';

//testing graphics
import Graphics from './systems/io/graphics.js';

//testing ui
import Button from './systems/ui/button.js';
import Text from './systems/ui/text.js';
import BackgroundColor from './systems/ui/backgroundcolor.js';
import MaterialColors from './systems/ui/colors/material.js';
import Status from './systems/ui/status.js';

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
let canvas = document.getElementById("game_canvas");
if(isMobile.any()){
    canvas.width = window.innerWidth - 10;
    canvas.height = window.innerHeight - 10;
} else {
    if((window.innerWidth - 100) > 600) {
        canvas.width = 500;
    } else {
        canvas.width = window.innerWidth - 100;
    }
    
    canvas.height = window.innerHeight - 100;
}

let gfx = new Graphics(canvas, canvas.width, canvas.height);
let input = new Controls(canvas.width, canvas.height);

let mColors = new MaterialColors();

//game pallete for ui
let primary_light_color = "#512B81";
let primary_dark_color = "#35155D";
let secondary_light_color ="#8CABFF";
let secodnary_dark_color = "#4477CE";
let app_white = "#eee";
let app_black = "#292929";

let background = new BackgroundColor(primary_dark_color, 1.0,gfx);

var taskLoaded = false;
var taskSelect = false;
var taskIdle = true;

var newgame = true;
var profile = false;
var task = false;

var count = 0; var mental = 5; var physical = 5; var morality = 5; var name = "npc test";
let btClicker = new Button("Click", (canvas.width / 2), canvas.height - 40, app_white, primary_light_color, primary_dark_color, app_white, gfx, input, () => { count = Number(count) + 1; });
let btStartTask = new Button("Start Task", (canvas.width / 2), canvas.height - 40, app_white, primary_light_color, primary_dark_color, app_white, gfx, input, () => { });
let btSelectTask = new Button("Select Task", (canvas.width / 2), canvas.height - 40, app_white, primary_light_color, primary_dark_color, app_white, gfx, input, () => { taskIdle = false; taskSelect = true; });

let btQuit = new Button("Quit", ((canvas.width / 2)/2) * 3, canvas.height - 40, app_white, primary_light_color, primary_dark_color, app_white, gfx, input, () => { profile = false; newgame = true; });
let btShop = new Button("Shop", (canvas.width / 2), canvas.height - 40, app_white, primary_light_color, primary_dark_color, app_white, gfx, input, () => { });
let btTask = new Button("Tasks", (canvas.width / 2) / 2, canvas.height - 40, app_white, primary_light_color, primary_dark_color, app_white, gfx, input, () => { profile = false; task = true; });


function randomInteger(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

var first = ['Big','Don','Miss','Lil\'','Captain','Sentient','King','Hostile','Happy'];
var middle = ['Slimmy','Precious','Special','Salami','Stress','Friendly'];
var last = ['Johny','Susan','Workman','Sam','Mary','Pedro','Pepe','Linda','Ram','Computer'];

//newgame scene
let txTitle = new Text((canvas.width / 2), (canvas.height / 2) + 180, app_white, gfx);
let btNewGame = new Button("New Game", (canvas.width / 2), (canvas.height / 2) + 240, app_white, primary_light_color, primary_dark_color, app_white, gfx, input, () => { 
    newgame = false; 
    profile = true;
    mental = randomInteger(2,5);
    physical = randomInteger(2,5);
    morality = randomInteger(2,5);
    if(mental == 2 & physical == 2 & morality == 2) {
        name = 'HolyC Davis'
    } else if(mental == 5 & physical == 5 & morality == 5) {
        name = '🍀 🍀 🍀';
    } else {
        name = first[randomInteger(0,first.length - 1)] + ' ' + middle[randomInteger(0,middle.length - 1)] + ' ' + last[randomInteger(0,last.length - 1)];
    }
});

var txCount = new Text((canvas.width / 2), + 100, app_white, gfx);


var txTitleName = new Text((canvas.width / 2), (canvas.height / 2), app_white, gfx);
var txTitleMental = new Text((canvas.width / 2), (canvas.height / 2) + 85, app_white, gfx);
var stMental = new Status((canvas.width / 2), (canvas.height / 2) + 100, 165, 30, secodnary_dark_color,secondary_light_color, gfx);
var txTitlePhysical = new Text((canvas.width / 2), (canvas.height / 2) + 155, app_white, gfx);
var stPhysical = new Status((canvas.width / 2), (canvas.height / 2) + 170, 165, 30, secodnary_dark_color,secondary_light_color, gfx);
var txTitleMorality = new Text((canvas.width / 2), (canvas.height / 2) + 215, app_white, gfx);
var stMorality = new Status((canvas.width / 2), (canvas.height / 2) + 230, 165, 30, secodnary_dark_color,secondary_light_color, gfx);

class Game {

    drawBackground() {
        gfx.clear();
        background.drawColor();
    }

    taskScene() {
        if(taskLoaded) {
            txTitle.draw("Task Completion");
            txCount.draw(count);
            btClicker.draw();
        } 
        if(taskSelect) {
            btStartTask.draw();
        }
        if(taskIdle) {
            btSelectTask.draw();
        }
    } 
    
    newgameScene() {
        txTitle.draw('Rouge Clicker');
        btNewGame.draw();
    }

    profileScene() {

        txTitleName.draw(name);

        txTitleMental.draw('Mental Health');
        stMental.draw(mental);
        txTitlePhysical.draw('Physical Health');
        stPhysical.draw(physical);
        txTitleMorality.draw('Morality');
        stMorality.draw(morality);

        btQuit.draw();
        btShop.draw();
        btTask.draw();
    }

    async update() {
        this.drawBackground();
        if(newgame) {
            this.newgameScene();
        }
        if(profile) {
            this.profileScene();
        }
        if(task) {
            this.taskScene();
        }
    }
}

export default Game;