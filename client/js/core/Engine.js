class Engine {

    constructor() {

        this.started = false;
        this.scene = null;
        this.player = null;
        this.world = null;

    }

    start() {

        this.started = true;

        console.log("KRUNK WAR Engine Started");

    }

    update() {

        if (!this.started) return;

    }

}

const engine = new Engine();

export default engine;
