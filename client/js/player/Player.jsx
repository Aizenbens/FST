export default function Player() {
    return (
        <mesh position={[0, 1, 0]} castShadow>
            <capsuleGeometry args={[0.35, 1, 8, 16]} />

            <meshStandardMaterial color="#ff8c00" />
        </mesh>
    );
}
