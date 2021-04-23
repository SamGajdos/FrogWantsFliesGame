class FrogPredict extends Phaser.GameObjects.Sprite {
	
	constructor(scene, x, y) {
		super(scene, x, y, "frog_predict");
		this.initEntity();
		
    }
	
	initEntity() {
		this.scene.physics.world.enable(this);
    	this.body.setCollideWorldBounds(false);
    	this.scene.add.existing(this);
		this.body.setSize(1,1);
	}
	
	setParentObject(object) {	
		this.parent = object;
 	}
}