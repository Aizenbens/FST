import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { getMouse, resetMouseDelta } from "../input/Input";

export default function CameraController() {

    const { camera, gl } = useThree();

    const yaw = useRef(0);
    const pitch = useRef(0);

    const sensitivity = 0.0025;

    useEffect(() => {

        camera.position.set(0, 1.7, 5);

        const canvas = gl.domElement;

        function lockPointer() {
            canvas.requestPointerLock();
        }

        canvas.addEventListener("click", lockPointer);

        return () => {
            canvas.removeEventListener("click", lockPointer);
        };

    }, [camera, gl]);

    useFrame(() => {

        const mouse = getMouse();

        if (document.pointerLockElement !== gl.domElement) {
            resetMouseDelta();
            return;
        }

        yaw.current -= mouse.movementX * sensitivity;
        pitch.current -= mouse.movementY * sensitivity;

        const limit = Math.PI / 2 - 0.05;

        if (pitch.current > limit) pitch.current = limit;
        if (pitch.current < -limit) pitch.current = -limit;

        camera.rotation.order = "YXZ";
        camera.rotation.y = yaw.current;
        camera.rotation.x = pitch.current;

        resetMouseDelta();

    });

    return null;

}
