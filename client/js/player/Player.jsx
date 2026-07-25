import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import CameraController from "./CameraController";
import PlayerController from "./PlayerController";
import Movement from "./Movement";

const controller = new PlayerController();
const movement = new Movement(controller);

export default function Player() {

    const playerRef = useRef();

    useFrame((state, delta) => {

        movement.update(delta);
        controller.update(delta);

        if (!playerRef.current) return;

        playerRef.current.position.set(
            controller.position.x,
            controller.position.y,
            controller.position.z
        );

    });

    return (
        <>
            <CameraController controller={controller} />

            <mesh
                ref={playerRef}
                castShadow
            >
                <capsuleGeometry args={[0.35, 1, 16, 32]} />

                <meshStandardMaterial color="#ff8c00" />
            </mesh>
        </>
    );
}
