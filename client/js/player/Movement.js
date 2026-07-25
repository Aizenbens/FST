import { isKeyPressed } from "../input/Input";
import PlayerConfig from "./PlayerConfig";

export default class Movement {

    constructor(controller) {

        this.controller = controller;

    }

    update(delta) {

        let moveX = 0;
        let moveZ = 0;

        if (isKeyPressed("KeyW")) moveZ -= 1;
        if (isKeyPressed("KeyS")) moveZ += 1;

        if (isKeyPressed("KeyA")) moveX -= 1;
        if (isKeyPressed("KeyD")) moveX += 1;

        this.controller.isRunning = isKeyPressed("ShiftLeft");

        const speed = this.controller.isRunning
            ? PlayerConfig.sprintSpeed
            : PlayerConfig.speed;

        this.controller.velocity.x = moveX * speed;
        this.controller.velocity.z = moveZ * speed;

        if (isKeyPressed("Space") && this.controller.isGrounded) {

            this.controller.velocity.y = PlayerConfig.jumpForce;
            this.controller.isGrounded = false;

        }

    }

}
