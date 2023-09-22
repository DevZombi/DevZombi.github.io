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
    canvas.width = window.innerWidth - 100;
    canvas.height = window.innerHeight - 100;
}

let gfx = new Graphics(canvas, canvas.width, canvas.height);
let input = new Controls(canvas.width, canvas.height);

let mColors = new MaterialColors();

let background = new BackgroundColor(mColors.blue_800(), 1.0,gfx);

var taskLoaded = false;
var taskSelect = false;
var taskIdle = false;

var newgame = true;
var profile = false;
var task = false;

var count = 0;
let btClicker = new Button("Click", (canvas.width / 2), canvas.height - 40, mColors.gray_200(), mColors.blue_600(), mColors.blue_800(), mColors.blue_200(), gfx, input, () => { count = Number(count) + 1; });
let btStartTask = new Button("Start Task", (canvas.width / 2), canvas.height - 40, mColors.gray_200(), mColors.red_600(), mColors.red_800(), mColors.red_200(), gfx, input, () => { });
let btSelectTask = new Button("Select Task", (canvas.width / 2), canvas.height - 40, mColors.gray_200(), mColors.green_600(), mColors.green_800(), mColors.green_200(), gfx, input, () => { taskIdle = false; taskSelect = true; });

let btQuit = new Button("Quit", ((canvas.width / 2)/2) * 3, canvas.height - 40, mColors.gray_200(), mColors.red_600(), mColors.red_800(), mColors.red_200(), gfx, input, () => { profile = false; newgame = true; });
let btShop = new Button("Shop", (canvas.width / 2), canvas.height - 40, mColors.gray_200(), mColors.blue_600(), mColors.blue_800(), mColors.blue_200(), gfx, input, () => { });
let btTask = new Button("Tasks", (canvas.width / 2) / 2, canvas.height - 40, mColors.gray_200(), mColors.green_600(), mColors.green_800(), mColors.green_200(), gfx, input, () => { });

let btNewGame = new Button("New Game", (canvas.width / 2), canvas.height - 40, mColors.gray_200(), mColors.blue_600(), mColors.blue_800(), mColors.blue_200(), gfx, input, () => { newgame = false; profile = true;});

let txTitle = new Text((canvas.width / 2), + 80, mColors.gray_200(), gfx);
var txCount = new Text((canvas.width / 2), + 100, mColors.gray_200(), gfx);

var stMental = new Status((canvas.width / 2), 50, mColors.gray_100(), gfx);

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
        stMental.draw();
        btNewGame.draw();
    }

    profileScene() {
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