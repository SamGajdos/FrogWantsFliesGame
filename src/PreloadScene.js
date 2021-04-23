class PreloadScene extends Phaser.Scene {
    
    constructor() {
        super("preloadScene");
    }
    
    preload() {
       
        this.load.image("lily", "assets/lily.png"); 
        this.load.image("goalLily", "assets/goalLily.png"); 
        this.load.image("stone", "assets/stone.png");
        this.load.image("goalStone", "assets/goalStone.png");
		
        this.load.image("frog", "assets/frog_small.png"); 
        this.load.image("grog", "assets/grog_small.png"); 
        this.load.image("frog_predict", "assets/frog_predict.png"); 
		
		this.load.image("fly", "assets/fly.png");
		this.load.image("stork", "assets/stork.png");  
		
		
		this.load.image("theme", "assets/menu_theme.png"); 
		this.load.image("singleplayer", "assets/singleplayer_theme.png"); 
		this.load.image("multiplayer", "assets/multiplayer_theme.png"); 
		this.load.image("howtoplay", "assets/how_to_play.png");
    }
    
    create() {
        this.add.text(20, 20, "Loading..");
        this.scene.start("menuScene");
    }
}