// Code Practice: Making a Scene
// Name: Steve Lin
// Date: Jan 13

"use strict"

let config = {
    type: Phaser.AUTO,
    scene: [MainMenu, Play],
}

let game = new Phaser.Game(config)