import { Canvas } from "@react-three/fiber";

import Environment from "./scene/Environment";
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
            <Environment />

            <Lights />

            <Physics>
                <World />
                <Player />
            </Physics>

            <UI />
        </Canvas>
    );
}
