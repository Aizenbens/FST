import { useThree, useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import { getMouse, resetMouseDelta } from "../input/Input";
import PlayerConfig from "./PlayerConfig";

export default function CameraController({ controller }) {

    const { camera, gl } = useThree();

    useEffect(() => {

        const canvas = gl.domElement;

        function lockPointer() {
            canvas.requestPointerLock();
        }

        canvas.addEventListener("click", lockPointer);

        return () => {
            canvas.removeEventListener("click", lockPointer);
        };

    }, [gl]);

    useFrame(() => {

        if (document.pointerLockElement === gl.domElement) {

            const mouse = getMouse();

            controller.rotation.yaw -= mouse.movementX * PlayerConfig.mouseSensitivity;
            controller.rotation.pitch -= mouse.movementY * PlayerConfig.mouseSensitivity;

            if (controller.rotation.pitch > PlayerConfig.maxLookUp)
                controller.rotation.pitch = PlayerConfig.maxLookUp;

            if (controller.rotation.pitch < PlayerConfig.maxLookDown)
                controller.rotation.pitch = PlayerConfig.maxLookDown;

            resetMouseDelta();

        }

        camera.rotation.order = "YXZ";

        camera.rotation.y = controller.rotation.yaw;
        camera.rotation.x = controller.rotation.pitch;

        camera.position.set(
            controller.position.x,
            controller.position.y,
            controller.position.z
        );

    });

    return null;

}
