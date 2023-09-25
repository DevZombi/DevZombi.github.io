//2021-2022 samuel r rivera-bonilla

//input and graphics
import Graphics from './systems/io/graphics.js'
import Controls from './systems/io/controls.js'
//input and graphics variables
let gfx = new Graphics("game_canvas")
let input = new Controls(gfx.getWidth(),gfx.getHeight())

//testing ui
import Button from './systems/ui/elements/button.js'

import StatusBuilder from './systems/ui/builders/statusbuilder.js'
import TextBuilder from './systems/ui/builders/textbuilder.js'

//game pallete for ui
let primary_light_color = '#512B81'
let primary_dark_color = '#35155D'
let secondary_light_color = '#8CABFF'
let secodnary_dark_color = '#4477CE'
let app_white = '#eee'
let app_black = '#292929'

gfx.setBackground(primary_dark_color,1.0)

var taskLoaded = true
var taskSelect = false
var taskIdle = false

var newgame = true
var profile = false
var task = false

var count = 0; var mental = 5; var physical = 5; var morality = 5; var name = 'npc test';

let btStartTask = new Button('Start Task', (gfx.getWidth() / 2), gfx.getHeight() - 40, app_white, primary_light_color, primary_dark_color, app_white, gfx, input, () => { })
let btSelectTask = new Button('Select Task', (gfx.getWidth() / 2), gfx.getHeight() - 40, app_white, primary_light_color, primary_dark_color, app_white, gfx, input, () => { taskIdle = false; taskSelect = true; })

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function reRoll() {
    newgame = false
    profile = true
    mental = randomInteger(2,5)
    physical = randomInteger(2,5)
    morality = randomInteger(2,5)
    btClicker.update(() => {
        var clickAdd = Number(mental) + Number(physical)
        count = Number(count) + Number(clickAdd);
    })
    if(mental == 2 & physical == 2 & morality == 2) {
        name = 'HolyC Davis'
    } else if(mental == 5 & physical == 5 & morality == 5) {
        name = '🍀 🍀 🍀'
    } else {
        name = first[randomInteger(0,first.length - 1)] + ' ' + middle[randomInteger(0,middle.length - 1)] + ' ' + last[randomInteger(0,last.length - 1)]
    }
}

var first = ['Big','Don','Miss','Lil\'','Captain','Sentient','King','Hostile','Happy']
var middle = ['Slimmy','Precious','Special','Salami','Stress','Friendly']
var last = ['Johny','Susan','Workman','Sam','Mary','Pedro','Pepe','Linda','Ram','Computer']

//newgame scene
var txTitle = new TextBuilder(gfx)
    .setText('Rouge Clicker')
    .setLocation((gfx.getWidth() / 2), (gfx.getHeight() / 2) + 180)
    .setSize('40px')
    .setItalic(true)
    .setColor(app_white)
    .build()

let btNewGame = new Button("New Game", (gfx.getWidth() / 2), (gfx.getHeight() / 2) + 240, app_white, primary_light_color, primary_dark_color, app_white, gfx, input, () => { 
    reRoll()
});

//profile screen

var txTitleName = new TextBuilder(gfx)
    .setText(name)
    .setSize('28px')
    .setLocation((gfx.getWidth() / 2), (gfx.getHeight() / 2))
    .setColor(app_white)
    .build()

var txTitleMental = new TextBuilder(gfx)
    .setText('Mental Health')
    .setSize('22px')
    .setLocation((gfx.getWidth() / 2), (gfx.getHeight() / 2) + 45)
    .setColor(app_white)
    .build()

var stMental = new StatusBuilder(gfx)
    .setLocation((gfx.getWidth() / 2), (gfx.getHeight() / 2) + 65)
    .setSize(165, 30)
    .setColors(secodnary_dark_color,secondary_light_color,app_white,app_white)
    .build()

var txTitlePhysical = new TextBuilder(gfx)
    .setText('Physical Health')
    .setSize('22px')
    .setLocation((gfx.getWidth() / 2), (gfx.getHeight() / 2) + 115)
    .setColor(app_white)
    .build()

var stPhysical = new StatusBuilder(gfx)
    .setLocation((gfx.getWidth() / 2), (gfx.getHeight() / 2) + 135)
    .setSize(165, 30)
    .setColors(secodnary_dark_color,secondary_light_color,app_white,app_white)
    .build()

var txTitleMorality = new TextBuilder(gfx)
    .setText('Morality')
    .setSize('22px')
    .setLocation((gfx.getWidth() / 2), (gfx.getHeight() / 2) + 185)
    .setColor(app_white)
    .build()

var stMorality = new StatusBuilder(gfx)
    .setLocation((gfx.getWidth() / 2), (gfx.getHeight() / 2) + 205)
    .setSize(165, 30)
    .setColors(secodnary_dark_color,secondary_light_color,app_white,app_white)
    .build()

let btQuit = new Button('Quit', ((gfx.getWidth() / 2)/2) * 3, gfx.getHeight() - 40, app_white, primary_light_color, primary_dark_color, app_white, gfx, input, () => { profile = false; newgame = true; });
let btShop = new Button('Shop', (gfx.getWidth() / 2), gfx.getHeight() - 40, app_white, primary_light_color, primary_dark_color, app_white, gfx, input, () => { });
let btTask = new Button('Tasks', (gfx.getWidth() / 2) / 2, gfx.getHeight() - 40, app_white, primary_light_color, primary_dark_color, app_white, gfx, input, () => { profile = false; task = true; });


//task scene
var txCount = new TextBuilder(gfx)
    .setText(count)
    .setLocation((gfx.getWidth() / 2), +120)
    .setSize('20px')
    .setColor('#eee')
    .build()

var txTaskTitle = new TextBuilder(gfx)
    .setText('Test Mode')
    .setLocation((gfx.getWidth() / 2), + 100)
    .setSize('20px')
    .setColor('#eee')
    .build()

let btClicker = new Button('Click', (gfx.getWidth() / 2), gfx.getHeight() - 40, app_white, primary_light_color, primary_dark_color, app_white, gfx, input, () => {
    var clickAdd = Number(mental) + Number(physical)
    count = Number(count) + Number(clickAdd)
});

class Game {

    drawBackground() {
        gfx.clear()
    }

    taskScene() {
        if(taskLoaded) {
            txTaskTitle.draw()
            txCount.update(count)
            txCount.draw()
            btClicker.draw()
        } 
        if(taskSelect) {
            btStartTask.draw()
        }
        if(taskIdle) {
            btSelectTask.draw()
        }
    } 
    
    newgameScene() {
        txTitle.draw()
        btNewGame.draw()
    }

    profileScene() {
        txTitleName.update(name)
        txTitleName.draw()

        txTitleMental.draw()
        stMental.update(mental)
        stMental.draw()
        txTitlePhysical.draw()
        stPhysical.update(physical)
        stPhysical.draw()
        txTitleMorality.draw()
        stMorality.update(morality)
        stMorality.draw()

        btQuit.draw()
        btShop.draw()
        btTask.draw()
    }

    async update() {
        this.drawBackground()
        if(newgame) {
            this.newgameScene()
        }
        if(profile) {
            this.profileScene()
        }
        if(task) {
            this.taskScene()
        }
    }
}

export default Game;