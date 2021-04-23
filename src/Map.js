class Map {
	
	constructor(scene) {
		this.scene = scene;
	}
	
	
	loadLevel(level_number) {
		switch(level_number) {	
			case 0:
				this.loadLevelZero();
				break;
			
			case 1:
				this.loadLevelOne();
				break;
				
			case 2:
				this.loadLevelTwo();
				break;
				
			case 3:
				this.loadLevelThree();
				break;
				
			case 4:
				this.loadLevelFour();
				break;
				
			case 5:
				this.loadLevelFive();
				break;
				
			default:
				console.log("Wrong level number");				
		}
	}
	
	
	loadLevelZero() {
		
		var map = [
		  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
		  0, 0, 1, 0, 1, 0, 1, 0, 0, 0,
		  0, 0, 1, 0, 3, 0, 1, 0, 0, 0,
		  0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
		  0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
		  0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,	
		  0, 0, 0, 0, 0, 0, 0, 0, 0, 0 
		];	
		
		this.createMap(map);
		
		var flies_coordinates = [[2,5], [6,3], [4,7]];
		this.addFlies(flies_coordinates);
		
		this.stork = null;
	}
	
	
	loadLevelOne() {
				
		var map = [
		  0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
		  0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
		  0, 1, 1, 1, 1, 0, 1, 1, 1, 1,
		  0, 1, 1, 0, 1, 1, 1, 1, 1, 0,
		  0, 0, 1, 0, 0, 1, 0, 1, 1, 1,
		  0, 0, 1, 1, 1, 3, 0, 1, 1, 0,
		  0, 0, 1, 1, 1, 1, 1, 1, 1, 0,
		  0, 0, 1, 0, 1, 1, 1, 1, 1, 0,
		  0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
		  0, 0, 1, 1, 1, 1, 1, 1, 1, 0	
		];
		
		this.createMap(map);
		
		var flies_coordinates = [[2,3], [4,9], [7,4], [9,1]];
		this.addFlies(flies_coordinates);
		
		this.stork = null;
	}
	
	
	loadLevelTwo() {
		
		var map = [
		  3, 2, 2, 2, 2, 2, 2, 2, 2, 2,
		  2, 0, 0, 1, 0, 1, 0, 1, 0, 2,
		  2, 1, 1, 1, 1, 0, 1, 1, 1, 2,
		  2, 1, 1, 0, 1, 1, 1, 1, 1, 2,
		  2, 0, 1, 1, 0, 1, 0, 1, 1, 2,
		  2, 0, 1, 1, 1, 1, 1, 1, 1, 2,
		  2, 0, 1, 1, 1, 1, 1, 1, 1, 2,
		  2, 0, 1, 0, 1, 1, 1, 1, 1, 2,
		  2, 0, 1, 0, 0, 1, 0, 0, 1, 2,
		  2, 2, 2, 2, 2, 2, 2, 2, 2, 2	
		];
		
		this.createMap(map);
		
		var flies_coordinates = [[8,8], [3,5], [7,2]];
		this.addFlies(flies_coordinates);
		
		this.frog.setAngle(180);
		
		var path = new Phaser.Curves.Path(60-field_size/2, 360-field_size/2);
		
		path.lineTo(600-field_size/2, 360-field_size/2);
		path.lineTo(300-field_size/2, 60-field_size/2);
		path.lineTo(300-field_size/2, 600-field_size/2);
		path.lineTo(60-field_size/2, 360-field_size/2);	
		
		this.stork = this.scene.add.follower(path, 60-field_size/2, 360-field_size/2, "stork");
		
		this.scene.physics.world.enable(this.stork);
		
		this.stork.startFollow({
        duration: 9000,
        yoyo: false,
        repeat: -1,
		rotateToPath: true,
        verticalAdjust: true
    	});
	}
	
	
	loadLevelThree() {
	
		var map = [	
		  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,	
		  0, 0, 0, 0, 0, 2, 0, 0, 0, 0,	
		  0, 0, 0, 1, 1, 1, 1, 0, 0, 0,
		  0, 0, 1, 1, 0, 0, 1, 0, 0, 0,
		  0, 3, 1, 1, 1, 1, 1, 1, 1, 0,
		  0, 1, 1, 1, 0, 0, 1, 1, 0, 0,
		  0, 1, 0, 1, 1, 1, 1, 1, 0, 0,
		  0, 1, 1, 1, 1, 2, 1, 1, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		  0, 0, 0, 0, 0, 0, 0, 0, 0, 0	
		];
		
		this.createMap(map);
		
		var flies_coordinates = [[3,2], [2,4], [5,4], [6,6]];
		this.addFlies(flies_coordinates);
		
		this.frog.setAngle(90);
		
		var path = new Phaser.Curves.Path(360-field_size/2, 120-field_size/2);
		
		path.lineTo(360-field_size/2, 480-field_size/2);
		
		this.stork = this.scene.add.follower(path, 360-field_size/2, 120-field_size/2, "stork");
		
		this.scene.physics.world.enable(this.stork);
		
		this.stork.startFollow({
        duration: 1000,
        yoyo: true,
        repeat: -1,
		rotateToPath: true,
        verticalAdjust: true
    	});
	}
	
	
	loadLevelFour() {
	
		var map = [	
		  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,	
		  1, 0, 0, 0, 1, 1, 0, 0, 0, 1,	
		  1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
		  1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
		  3, 1, 1, 1, 2, 2, 1, 1, 1, 1,
		  2, 1, 1, 1, 2, 2, 1, 1, 1, 1,
		  1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
		  1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
		  1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
		  1, 1, 1, 1, 1, 1, 1, 1, 1, 1
		];
		
		this.createMap(map);
		
		var flies_coordinates = [[0,0], [9,0], [0,9], [9,9], [1,4], [4,1], [4,9], [9,4]];
		this.addFlies(flies_coordinates);
		
		this.stork = null;
	}
	
	loadLevelFive() {
		
		var map = [	
		  3, 1, 1, 1, 1, 2, 1, 1, 1, 1,
		  1, 0, 0, 0, 0, 1, 1, 1, 0, 1,
		  1, 1, 0, 1, 1, 1, 1, 0, 0, 1,
		  1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
		  2, 1, 1, 0, 1, 2, 0, 1, 0, 1,
		  1, 0, 1, 0, 2, 1, 0, 1, 1, 2,
		  1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 
		  1, 0, 0, 1, 1, 1, 1, 0, 1, 1,
		  1, 0, 1, 1, 1, 0, 0, 0, 0, 1,
		  1, 1, 1, 1, 2, 1, 1, 1, 1, 1
		];
		
		this.createMap(map);
		
		var flies_coordinates = [[9,1], [0,8], [9,8], [5,5], [6,6], [1,3], [5,9]];
		this.addFlies(flies_coordinates);
		
		var pathOne = new Phaser.Curves.Path(360-field_size/2, 60-field_size/2);
		
		pathOne.lineTo(360-field_size/2, 300-field_size/2);
		pathOne.lineTo(60-field_size/2, 300-field_size/2);
		
		this.stork = this.scene.add.follower(pathOne, 360-field_size/2, 60-field_size/2, "stork");
		
		this.scene.physics.world.enable(this.stork);
		
		this.stork.startFollow({
        duration: 3000,
        yoyo: true,
        repeat: -1,
		rotateToPath: true,
        verticalAdjust: true
    	});
		
		
		var pathTwo = new Phaser.Curves.Path(300-field_size/2, 600-field_size/2);
		
		pathTwo.lineTo(300-field_size/2, 360-field_size/2);
		pathTwo.lineTo(600-field_size/2, 360-field_size/2);
		
		this.stork = this.scene.add.follower(pathTwo, 300-field_size/2, 600-field_size/2, "stork");
		
		this.scene.physics.world.enable(this.stork);
		
		this.stork.startFollow({
        duration: 3000,
        yoyo: true,
        repeat: -1,
		rotateToPath: true,
        verticalAdjust: true
    	});
	}    
	
	
	
	createMap(mapArray) {
		
		this.lily_group = this.scene.physics.add.group();
		this.stone_group = this.scene.physics.add.group();
		
		let mapLength = 100;
		for (let i = 0; i < mapLength; i++) {
			
			let row = Math.floor(i/10);
			let column = i%10;
			
			if (mapArray[i] == 1) {
				var lily = this.scene.physics.add.sprite(column*60, row*60, "lily");
				lily.setOrigin(0,0);
				this.lily_group.add(lily);

			}

			else if (mapArray[i] == 2) {
				var stone = this.scene.physics.add.sprite(column*60, row*60, "stone");
				stone.setOrigin(0,0);
				this.stone_group.add(stone); 
			}

			else if (mapArray[i] == 3) {
				this.goal_stone = this.scene.physics.add.sprite(column*60, row*60, "goalStone");
				this.goal_stone.setOrigin(0,0);
				this.stone_group.add(this.goal_stone);

				Frog.count = 0;
				this.frog = new Frog(this.scene, column, row, "frog");
				this.frog.setDepth(1);
			}
		}
	}
	
	
	addFlies(flies_coordinates) {
		
		this.fly_group = this.scene.physics.add.group();
		
		flies_coordinates.forEach((coor) => {
			var fly = this.scene.physics.add.sprite(coor[0]*60, coor[1]*60, "fly");
			fly.setOrigin(0,0);
			
			this.fly_group.add(fly); 
		});
		
		this.number_of_flies = flies_coordinates.length;
	}
	
	
	setScene(scene) {
		this.scene = scene;
	}
	
	getFrog() {
		return this.frog;
	}
	
	getFrogGroup() {
		return this.frog_group;
	}
	
	getFrogPredictGroup() {
		return this.frog_predict_group;
	}
	
	getStork() {
		return this.stork;
	}
	
	getLilygroup() {
		return this.lily_group;
	}
	
	getStonegroup() {
		return this.stone_group;
	}
	
	getFlygroup() {
		return this.fly_group;
	}
	
	getNumberOfFlies() {
		return this.number_of_flies;
	}
	
	getGoalStone() {
		return this.goal_stone;
	}
}