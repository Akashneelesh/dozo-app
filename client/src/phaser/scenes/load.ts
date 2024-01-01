import Phaser from "phaser";
export class LoadScene extends Phaser.Scene {
    constructor() {
        super("load");
    }

    preload() {
        this.load.image("white", "img/white.png");
        this.load.image("edge-e", "img/edge-e.png");
        this.load.image("edge-ne", "img/edge-ne.png");
        this.load.image("edge-nw", "img/edge-nw.png");
        this.load.image("edge-w", "img/edge-w.png");
        this.load.image("edge-sw", "img/edge-sw.png");
        this.load.image("edge-se", "img/edge-se.png");
        this.load.image("empty", "img/empty.png");
        this.load.image("empty-hill", "img/empty-hill.png");
        this.load.image("grass", "img/grass.png");
        this.load.image("grass-bw", "img/grass-bw.png");
        this.load.image("grass-red", "img/grass-red.png");
        this.load.image("tree", "img/tree.png");
        this.load.image("tree-bw", "img/tree-bw.png");
        this.load.image("street", "img/street.png");
        this.load.image("street-red", "img/street-red.png");
        this.load.image("street-bw", "img/street-bw.png");
        this.load.image("house", "img/house.png");
        this.load.image("house-bw", "img/house-bw.png");
        this.load.image("center", "img/castle_2.png");
        this.load.image("center-bw", "img/castle-bw_2.png");
        this.load.image("watchtower", "img_2/watchtower_Lvl1.png");
        this.load.image("propeller", "img/propeller.png");
        this.load.image("watchtower-red", "img_2/watchtower_Lvl1_red.png");
        this.load.image("watchtower-hill", "img_2/watchtower_Lvl2.png");
        this.load.image("watchtower-bw", "img_2/watchtower_Lvl1-bw.png");
        this.load.image("watchtower-hill-bw", "img_2/watchtower_Lvl2-bw.png");
        this.load.image("port-bw", "img/port.png");
        this.load.spritesheet("port", "img/port-color.png", {
            frameWidth: 140,
            frameHeight: 140,
        });

        this.load.image("blue", "img/map_pattern.png");
        this.load.image("map_pattern", "img/map_pattern.png");
        this.load.image("rotate", "img/rotate.png");
        this.load.image("question", "img/question.png");
        this.load.image("x", "img/x.png");
        this.load.image("help-page", "img/help-page.png");
        this.load.image("page", "img/page.png");
        this.load.image("waves", "img/waves.png");
        this.load.image("waves2", "img/waves2.png");
        this.load.image("particle", "img/particle.png");
        this.load.image("a-shape", "img/a-shape.png");
        this.load.image("c-shape", "img/c-shape.png");
        this.load.image("slash-shape", "img/slash-shape.png");

        this.load.spritesheet("tutorial-button", "img/tutorial-button.png", {
            frameWidth: 811,
            frameHeight: 91,
        });

        this.load.image("play-button", "img/play-button.png");
        this.load.image("play-again-button", "img/play-again-button.png");
        this.load.image("how-to-play-button", "img/how-to-play-button.png");
        this.load.image("realms_logo_black", "img/realms_logo_black.svg");

        // New assets
        // this.load.image("castle", "img/castle.png");
        // this.load.image("castle-bw"), "img/castle-bw.png";

        this.load.bitmapFont("font", "font/font.png", "font/font.fnt");
        this.load.audio("ambience", "sfx/ambience.wav");
        this.load.audio("pop", "sfx/pop.wav");
        this.load.audio("place", "sfx/place.wav");
        this.load.audio("tree", "sfx/tree.wav");
        this.load.audio("watchtower", "sfx/windmill.wav");
        this.load.audio("watchtower-hill", "sfx/windmill-hill.wav");
        this.load.audio("port", "sfx/port.wav");
        this.load.audio("splash", "sfx/splash.wav");
        this.load.audio("click", "sfx/click.wav");
    }

    async create() {
        this.scene.start("menu");
    }
}
