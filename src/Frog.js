class Frog extends Phaser.GameObjects.Sprite {
	
	static count = 0;
	
	constructor(scene, x, y, key) {
    	super(scene, x*60+field_size/2, y*60+field_size/2, key);
		
		this.initVars();
		this.initKeys();
		this.initEntity();
		
		Frog.count++;
    }
	
	
	initVars() {
		
		this.start_coor = [this.x, this.y];
		
		this.frog_predict = new FrogPredict(this.scene, this.x, this.y);
		this.frog_predict.setParentObject(this);
		 
		//this.cursorKeys = this.scene.input.keyboard.createCursorKeys();
		
		this.previous_lily = this.scene.physics.add.sprite(-120, -120, "lily");
		this.previous_lily.setOrigin(0,0);
		this.actual_lily = this.previous_lily;
		
		this.colliderAct = true;
		
		this.points = 0;
	}


	initKeys() {
		switch(Frog.count) {
			case 0:
				this.keys = [this.scene.cursorKeys.left, 					this.scene.cursorKeys.right, this.scene.cursorKeys.up, this.scene.cursorKeys.down];
				break;
				
			case 1:
				this.keys = [this.scene.keyA, this.scene.keyD, this.scene.keyW, this.scene.keyS];
				break;
				
			default:
				console.log("Wrong number of created Frogs, cannot add new keys");
		}
		
	}
	
	initEntity() {
		this.scene.physics.world.enable(this);
    	this.body.setCollideWorldBounds(true);
    	this.scene.add.existing(this);
		this.body.setSize(1,1);
	}
	
	
	update() {	
		
		if (!this.colliderAct) {
			
			this.setPosition(this.frog_predict.x, this.frog_predict.y);
			
			this.previous_lily.destroy();
		}
		else {
			this.frog_predict.setPosition(this.x, this.y);
		}
		
		
		if (this.scene.input.keyboard.checkDown(this.keys[0], 250)){
			this.frog_predict.x -= field_size;
			this.setAngle(270);
			
			this.colliderAct = true;
		}
		
		else if (this.scene.input.keyboard.checkDown(this.keys[1], 250)) {
			this.frog_predict.x += field_size;
			this.setAngle(90);
			
			this.colliderAct = true;
		}
		
		else if (this.scene.input.keyboard.checkDown(this.keys[2], 250)) {
			this.frog_predict.y -= field_size;
			this.setAngle(0);
			
			this.colliderAct = true;
		}
		
		else if (this.scene.input.keyboard.checkDown(this.keys[3], 250)) {
			this.frog_predict.y += field_size;
			this.setAngle(180);
		
			this.colliderAct = true;
		}
	}
} 