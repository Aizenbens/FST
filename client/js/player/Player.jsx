import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import CameraController from "./CameraController";
import Movement from "./Movement";

const movement = new Movement();

export default function Player() {

    const playerRef = useRef();

    useFrame((state, delta) => {

        movement.update(delta);

        if (!playerRef.current) return;

        playerRef.current.position.x += movement.direction.x * movement.speed * delta;
        playerRef.current.position.z += movement.direction.z * movement.speed * delta;

    });

    return (
        <>
            <CameraController />

            <mesh
                ref={playerRef}
                castShadow
                position={[0, 1, 0]}
            >
                <capsuleGeometry args={[0.35, 1, 8, 16]} />
                <meshStandardMaterial color="#ff8c00" />
            </mesh>
        </>
    );
}
