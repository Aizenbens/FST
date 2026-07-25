import { isKeyPressed } from "../input/Input";

export default class Movement {

    constructor() {
        this.speed = 6;
        this.sprintSpeed = 10;
        this.jumpForce = 8;

        this.direction = {
            x: 0,
            z: 0
        };
    }

    update(delta) {

        this.direction.x = 0;
        this.direction.z = 0;

        if (isKeyPressed("KeyW")) this.direction.z -= 1;
        if (isKeyPressed("KeyS")) this.direction.z += 1;

        if (isKeyPressed("KeyA")) this.direction.x -= 1;
        if (isKeyPressed("KeyD")) this.direction.x += 1;

        // الحركة الحقيقية سنضيفها في الخطوة القادمة

    }

}
