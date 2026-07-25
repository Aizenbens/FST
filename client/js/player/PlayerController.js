import PlayerConfig from "./PlayerConfig";

export default class PlayerController {

    constructor() {

        this.position = {
            x: 0,
            y: PlayerConfig.height,
            z: 0
        };

        this.velocity = {
            x: 0,
            y: 0,
            z: 0
        };

        this.rotation = {
            yaw: 0,
            pitch: 0
        };

        this.isGrounded = true;

        this.isRunning = false;

    }

    update(delta) {

        // سنضيف الحركة هنا في الجزء الثاني

    }

}
