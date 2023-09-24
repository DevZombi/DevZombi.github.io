//2021-2022 samuel r rivera-bonilla

//input and graphics
import Graphics from './systems/io/graphics.js';
import Controls from './systems/io/controls.js';
//input and graphics variables
let gfx = new Graphics("game_canvas");
let input = new Controls(gfx.getWidth(),gfx.getHeight());

//testing ui
import Button from './systems/ui/button.js';
import BackgroundColor from './systems/ui/backgroundcolor.js';
import MaterialColors from './systems/ui/colors/material.js';
import Status from './systems/ui/status.js';

import TextBuilder from './systems/ui/textbuilder.js';



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
let btClicker = new Button("Click", (gfx.getWidth() / 2), gfx.getHeight() - 40, app_white, primary_light_color, primary_dark_color, app_white, gfx, input, () => { count = Number(count) + 1; });
let btStartTask = new Button("Start Task", (gfx.getWidth() / 2), gfx.getHeight() - 40, app_white, primary_light_color, primary_dark_color, app_white, gfx, input, () => { });
let btSelectTask = new Button("Select Task", (gfx.getWidth() / 2), gfx.getHeight() - 40, app_white, primary_light_color, primary_dark_color, app_white, gfx, input, () => { taskIdle = false; taskSelect = true; });

let btQuit = new Button("Quit", ((gfx.getWidth() / 2)/2) * 3, gfx.getHeight() - 40, app_white, primary_light_color, primary_dark_color, app_white, gfx, input, () => { profile = false; newgame = true; });
let btShop = new Button("Shop", (gfx.getWidth() / 2), gfx.getHeight() - 40, app_white, primary_light_color, primary_dark_color, app_white, gfx, input, () => { });
let btTask = new Button("Tasks", (gfx.getWidth() / 2) / 2, gfx.getHeight() - 40, app_white, primary_light_color, primary_dark_color, app_white, gfx, input, () => { profile = false; task = true; });


function randomInteger(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

var first = ['Big','Don','Miss','Lil\'','Captain','Sentient','King','Hostile','Happy'];
var middle = ['Slimmy','Precious','Special','Salami','Stress','Friendly'];
var last = ['Johny','Susan','Workman','Sam','Mary','Pedro','Pepe','Linda','Ram','Computer'];

//newgame scene
var txTitle = new TextBuilder(gfx)
    .setText('Rouge Clicker')
    .setLocation((gfx.getWidth() / 2), (gfx.getHeight() / 2) + 180)
    .setSize('40px')
    .setBold(true)
    .setColor('#eee')
    .build()

let btNewGame = new Button("New Game", (gfx.getWidth() / 2), (gfx.getHeight() / 2) + 240, app_white, primary_light_color, primary_dark_color, app_white, gfx, input, () => { 
    newgame = false; 
    profile = true;
    mental = randomInteger(2,5);
    physical = randomInteger(2,5);
    morality = randomInteger(2,5);
    if(mental == 2 & physical == 2 & morality == 2) {
        name = 'HolyC Davis'
    } else if(mental == 5 & physical == 5 & morality == 5) {
        name = '🍀 🍀 🍀'
    } else {
        name = first[randomInteger(0,first.length - 1)] + ' ' + middle[randomInteger(0,middle.length - 1)] + ' ' + last[randomInteger(0,last.length - 1)];
    }
});

//profile screen

//var txCount = new Text((canvas.width / 2), + 100, app_white, gfx);


//var txTitleName = new Text((canvas.width / 2), (canvas.height / 2), app_white, gfx);
//var txTitleMental = new Text((canvas.width / 2), (canvas.height / 2) + 85, app_white, gfx);
var stMental = new Status((gfx.getWidth() / 2), (gfx.getHeight() / 2) + 100, 165, 30, secodnary_dark_color,secondary_light_color, gfx);
//var txTitlePhysical = new Text((canvas.width / 2), (canvas.height / 2) + 155, app_white, gfx);
var stPhysical = new Status((gfx.getWidth() / 2), (gfx.getHeight() / 2) + 170, 165, 30, secodnary_dark_color,secondary_light_color, gfx);
//var txTitleMorality = new Text((canvas.width / 2), (canvas.height / 2) + 215, app_white, gfx);
var stMorality = new Status((gfx.getWidth() / 2), (gfx.getHeight() / 2) + 230, 165, 30, secodnary_dark_color,secondary_light_color, gfx);

//task scene
var txCount = new TextBuilder(gfx)
    .setLocation((gfx.getWidth() / 2), + 100)
    .setSize("20px")
    .setColor("#eee")
    .build()

var txTaskTitle = new TextBuilder(gfx)
    .setLocation((gfx.getWidth() / 2), + 100)
    .setSize("20px")
    .setColor("#eee")
    .build()

class Game {

    drawBackground() {
        gfx.clear();
        background.drawColor();
    }

    taskScene() {
        if(taskLoaded) {
            txTaskTitle.draw("Task Completion");
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

        //txTitleName.draw(name);

        //txTitleMental.draw('Mental Health');
        stMental.draw(mental);
        //txTitlePhysical.draw('Physical Health');
        stPhysical.draw(physical);
        //txTitleMorality.draw('Morality');
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