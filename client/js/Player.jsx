export default function Player() {
    return (
        <mesh position={[0, 1, 0]} castShadow>
            <capsuleGeometry args={[0.4, 1]} />
            <meshStandardMaterial color="#4da6ff" />
        </mesh>
    );
}
