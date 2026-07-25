import { Canvas } from "@react-three/fiber";

import World from "./world/World";
import Player from "./player/Player";

export default function Scene() {
    return (
        <Canvas
            shadows
            camera={{
                position: [0, 2, 5],
                fov: 75
            }}
        >
            <ambientLight intensity={2} />

            <directionalLight
                position={[5, 10, 5]}
                intensity={2}
                castShadow
            />

            <World />

            <Player />

        </Canvas>
    );
}
