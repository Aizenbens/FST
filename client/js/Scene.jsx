import { Canvas } from "@react-three/fiber";

export default function Scene() {
    return (
        <Canvas
            camera={{
                position: [0, 2, 5],
                fov: 75
            }}
        >
            <ambientLight intensity={2} />

            <directionalLight
                position={[5, 10, 5]}
                intensity={2}
            />

            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[200, 200]} />
                <meshStandardMaterial color="#4caf50" />
            </mesh>

            <mesh position={[0, 1, 0]}>
                <boxGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>

        </Canvas>
    );
}
