import Ground from "./Ground";

function Cube({ position, size = [1, 1, 1], color = "white" }) {
    return (
        <mesh position={position} castShadow receiveShadow>
            <boxGeometry args={size} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
}

export default function World() {
    return (
        <>
            <Ground />

            {/* Spawn */}
            <Cube
                position={[0, 0.5, 0]}
                color="lime"
            />

            {/* Wall */}
            <Cube
                position={[0, 2, -20]}
                size={[40, 4, 1]}
                color="#666666"
            />

            {/* Platform */}
            <Cube
                position={[8, 1, -8]}
                size={[4, 2, 4]}
                color="orange"
            />

            {/* Towers */}
            <Cube
                position={[15, 2, -10]}
                size={[3, 4, 3]}
                color="royalblue"
            />

            <Cube
                position={[-15, 3, -5]}
                size={[2, 6, 2]}
                color="tomato"
            />

            {/* Direction Markers */}

            {/* Front */}
            <Cube
                position={[0, 0.5, -10]}
                color="red"
            />

            {/* Back */}
            <Cube
                position={[0, 0.5, 10]}
                color="blue"
            />

            {/* Right */}
            <Cube
                position={[10, 0.5, 0]}
                color="green"
            />

            {/* Left */}
            <Cube
                position={[-10, 0.5, 0]}
                color="yellow"
            />

            {/* Corners */}

            <Cube
                position={[10, 0.5, 10]}
                color="cyan"
            />

            <Cube
                position={[-10, 0.5, 10]}
                color="purple"
            />

            <Cube
                position={[10, 0.5, -10]}
                color="pink"
            />

            <Cube
                position={[-10, 0.5, -10]}
                color="white"
            />

            {/* Extra Obstacles */}

            <Cube
                position={[20, 0.5, 5]}
                color="gold"
            />

            <Cube
                position={[-20, 0.5, -8]}
                color="brown"
            />

            <Cube
                position={[5, 0.5, 20]}
                color="black"
            />

            <Cube
                position={[-5, 0.5, -25]}
                color="orange"
            />
        </>
    );
}
