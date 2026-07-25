import { isKeyPressed } from "../input/Input";
import PlayerConfig from "./PlayerConfig";

export default class Movement {

    constructor(controller) {

        this.controller = controller;

    }

    update(delta) {

        let x = 0;
        let z = 0;

        if (isKeyPressed("KeyW")) z -= 1;
        if (isKeyPressed("KeyS")) z += 1;

        if (isKeyPressed("KeyA")) x -= 1;
        if (isKeyPressed("KeyD")) x += 1;

        const yaw = this.controller.rotation.yaw;

        const sin = Math.sin(yaw);
        const cos = Math.cos(yaw);

        const worldX = x * cos - z * sin;
        const worldZ = x * sin + z * cos;

        const speed = isKeyPressed("ShiftLeft")
            ? PlayerConfig.sprintSpeed
            : PlayerConfig.speed;

        this.controller.velocity.x = worldX * speed;
        this.controller.velocity.z = worldZ * speed;

        if (isKeyPressed("Space") && this.controller.isGrounded) {

            this.controller.velocity.y = PlayerConfig.jumpForce;
            this.controller.isGrounded = false;

        }

    }

}
