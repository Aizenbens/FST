import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export default function CameraController() {

    const { camera, gl } = useThree();

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

    return null;

}
