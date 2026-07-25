import { useThree, useFrame } from "@react-three/fiber";
import { useEffect } from "react";

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

        camera.position.set(
            controller.position.x,
            controller.position.y,
            controller.position.z
        );

    });

    return null;

}
