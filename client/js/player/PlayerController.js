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

        this.position.x += this.velocity.x * delta;
        this.position.z += this.velocity.z * delta;

        if (!this.isGrounded) {

            this.velocity.y -= PlayerConfig.gravity * delta;
            this.position.y += this.velocity.y * delta;

            if (this.position.y <= PlayerConfig.height) {

                this.position.y = PlayerConfig.height;
                this.velocity.y = 0;
                this.isGrounded = true;

            }

        }

    }

}
