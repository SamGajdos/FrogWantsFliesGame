class MenuScene extends Phaser.Scene {
    
	constructor() {
        super("menuScene");
    }
	
	create() { //creating the menu screen
       
		this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.20,"theme");
		
		let singleplayerButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "singleplayer").setDepth(1);
		
		let multiplayerButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 100, "multiplayer").setDepth(1);
		
		let howtoplayButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 200, "howtoplay").setDepth(1);
		
		let lilyOne = this.add.sprite(100,100, "lily");
		lilyOne.setVisible(false);
		let lilyTwo = this.add.sprite(100,100, "lily");
		lilyTwo.setVisible(false);
		
		let stone = this.add.sprite(100,100, "stone");
		stone.setVisible(false);
		let frogOne = this.add.sprite(100,100, "frog");
		frogOne.setVisible(false);
		let frogTwo = this.add.sprite(100,100, "grog");
		frogTwo.setVisible(false);
		let fly = this.add.sprite(100, 100, "fly");
		fly.setVisible(false);
		let stork = this.add.sprite(100,100, "stork");
		stork.setVisible(false);
		
		singleplayerButton.setInteractive();
		
		singleplayerButton.on("pointerover", ()=>{
			this.pointerOverGraphics(singleplayerButton, lilyOne, frogOne, lilyTwo, fly);
			
		});
		
		singleplayerButton.on("pointerout", ()=>{
			this.pointerOutGraphics([lilyOne, frogOne, lilyTwo, fly]);
		})
		
		singleplayerButton.on("pointerup", ()=>{
			this.scene.start("playScene");
		})
		
		
		multiplayerButton.setInteractive();
		
		multiplayerButton.on("pointerover", ()=>{
			this.pointerOverGraphics(multiplayerButton, lilyOne, frogOne, lilyTwo, frogTwo);
			
		});
		
		multiplayerButton.on("pointerout", ()=>{
			this.pointerOutGraphics([lilyOne, frogOne, lilyTwo, frogTwo]);
		})
		
		multiplayerButton.on("pointerup", ()=>{
			//this.scene.start("");
		})
		
		howtoplayButton.setInteractive();
		
		howtoplayButton.on("pointerover", ()=>{
			this.pointerOverGraphics(howtoplayButton, stone, null, stork, null);
			
		});
		
		howtoplayButton.on("pointerout", ()=>{
			this.pointerOutGraphics([stone, stork]);
		})
		
		howtoplayButton.on("pointerup", ()=>{
			//this.scene.start("");
		})
		
		
    }
	
	pointerOverGraphics(button, lily1, object1, lily2, object2) {
		
		if (button) {
			
			if (lily1) {
				lily1.setVisible(true);
				lily1.x = button.x - button.width*0.7;
				lily1.y = button.y;
			}
			
			if (object1) {
				object1.setVisible(true);
				object1.x = button.x - button.width*0.7;
				object1.y = button.y;
			}
			
			if (lily2) {
				lily2.setVisible(true);
				lily2.x = button.x + button.width*0.7;
				lily2.y = button.y;
			}
			
			if (object2) {
				object2.setVisible(true);
				object2.x = button.x + button.width*0.7;
				object2.y = button.y;
			}
		}
	}
	
	pointerOutGraphics(objects) {
		objects.forEach(function(object) {
			if (object) {
				object.setVisible(false);
			}
		});
	}
}