import { Canvas } from "@react-three/fiber";

import Lights from "./scene/Lights";
import Physics from "./scene/Physics";
import World from "./world/World";
import Player from "./player/Player";
import UI from "./ui/UI";

export default function Scene() {
    return (
        <Canvas
            shadows
            camera={{
                position: [0, 2, 5],
                fov: 75
            }}
        >
            <Lights />

            <Physics>
                <World />
                <Player />
            </Physics>

            <UI />
        </Canvas>
    );
}
