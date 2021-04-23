var config = {
    width: 600,
    height: 600,
    backgroundColor: 0x347d7a,
    scene: [PreloadScene, MenuScene, PlayScene],
    pixelArt: true,
	render:{
		pixelArt: true
	},
    physics: {
        default: "arcade",
        arcade:{
            debug: true
        }
    }
}

var game = new Phaser.Game(config);
var field_size = 60;
