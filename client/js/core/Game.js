import engine from "./Engine";

class Game {

    start() {

        engine.start();

    }

    update() {

        engine.update();

    }

}

const game = new Game();

export default game;
