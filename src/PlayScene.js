class PlayScene extends Phaser.Scene {
    
    constructor() {
        super("playScene");
		
		this.map = new Map(this);
		
		this.actual_level = 0;
    }
    
    create() {
		
		////////////// Keys //////////////
		
		this.cursorKeys = this.input.keyboard.createCursorKeys(); 
		this.restartKey = this.input.keyboard.addKey('R'); 
		
		
		////////////// Map Init //////////////
		
		this.map.loadLevel(this.actual_level);
		
		this.frog = this.map.getFrog();
		this.stork = this.map.getStork();
		this.lily_group = this.map.getLilygroup();
		this.stone_group = this.map.getStonegroup();
		this.fly_group = this.map.getFlygroup();
		this.number_of_flies = this.map.getNumberOfFlies();
		this.goal_stone = this.map.getGoalStone();
		
		this.frog_predict = this.frog.frog_predict;
		
		
		////////////// Overlaps //////////////
		
		this.physics.add.overlap(this.frog_predict, this.lily_group, this.jumpOnLily, ()=>{
			return this.colliderAct;
		}, this);
		
		this.physics.add.overlap(this.frog_predict, this.stone_group, this.jumpOnStone, ()=>{
			return this.colliderAct;
		}, this);
		
		this.physics.add.overlap(this.frog, this.fly_group, this.catchAFly, null, this);
		
		this.physics.add.overlap(this.frog, this.stork, this.storkHit, null, this);
		
    }
	
	
	jumpOnLily(frog_predict, lily) {	
		
		this.frog.colliderAct = false;
		
		if (this.frog.x == this.frog_predict.x &&
		    this.frog.y == this.frog_predict.y)
		{
			return;		
		}
		
		this.frog.previous_lily = this.frog.actual_lily;
		this.frog.actual_lily = lily;
	}
	
	
	jumpOnStone(frog_predict, stone) {
		
		this.frog.colliderAct = false;
		
		if (this.frog.x == this.frog_predict.x &&
		    this.frog.y == this.frog_predict.y)
		{	
			return;		
		}
		
		this.frog.previous_lily = this.frog.actual_lily;
	}
	
	
	catchAFly(frog, fly) {
		
		fly.destroy();
		frog.points++;
		
		if (frog.points == this.number_of_flies) {
			
			this.goal_stone.setTexture("goalLily");
			
			this.physics.add.overlap(this.frog, this.goal_stone, function(){
				
				this.actual_level+= 1;	
				this.scene.restart();
			}
			, null, this);
		}
	}
	
	
	storkHit(frog, stork) {
		
		this.stork.pauseFollow();
		this.physics.pause();
		
		var gameover_text = this.add.text(300, 300, "Game Over").setOrigin(0.5);
		gameover_text.setFontSize(50);	
	}
	
	
    update() {

		this.frog.update();
	
		if (this.restartKey.isDown)
		{
			this.scene.restart();		
		}
	}
}