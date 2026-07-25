import { Canvas } from "@react-three/fiber";

import Player from "./Player";
import World from "./World";

export default function Scene() {

    return (

        <Canvas
            shadows
            camera={{
                position: [0, 2, 6],
                fov: 75
            }}
        >

            <ambientLight intensity={1.5} />

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
