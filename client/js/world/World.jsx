import Ground from "./Ground";

export default function World() {
    return (
        <>
            <Ground />

            {/* Spawn */}
            <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="lime" />
            </mesh>

            {/* Wall */}
            <mesh position={[0, 2, -20]}>
                <boxGeometry args={[20, 4, 1]} />
                <meshStandardMaterial color="gray" />
            </mesh>

            {/* Platform */}
            <mesh position={[8, 1, -8]}>
                <boxGeometry args={[4, 2, 4]} />
                <meshStandardMaterial color="orange" />
            </mesh>

            {/* Cubes */}
            <mesh position={[-6, 0.5, -6]}>
                <boxGeometry />
                <meshStandardMaterial color="red" />
            </mesh>

            <mesh position={[6, 0.5, -6]}>
                <boxGeometry />
                <meshStandardMaterial color="blue" />
            </mesh>

            <mesh position={[-6, 0.5, 6]}>
                <boxGeometry />
                <meshStandardMaterial color="yellow" />
            </mesh>

            <mesh position={[6, 0.5, 6]}>
                <boxGeometry />
                <meshStandardMaterial color="purple" />
            </mesh>

            <mesh position={[0, 0.5, 10]}>
                <boxGeometry />
                <meshStandardMaterial color="cyan" />
            </mesh>

            <mesh position={[10, 0.5, 0]}>
                <boxGeometry />
                <meshStandardMaterial color="pink" />
            </mesh>

            <mesh position={[-10, 0.5, 0]}>
                <boxGeometry />
                <meshStandardMaterial color="white" />
            </mesh>

            <mesh position={[12, 0.5, 10]}>
                <boxGeometry />
                <meshStandardMaterial color="brown" />
            </mesh>

            <mesh position={[-12, 0.5, 10]}>
                <boxGeometry />
                <meshStandardMaterial color="gold" />
            </mesh>

            <mesh position={[0, 0.5, -12]}>
                <boxGeometry />
                <meshStandardMaterial color="black" />
            </mesh>

        </>
    );
}
