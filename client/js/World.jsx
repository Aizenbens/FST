export default function World() {
    return (
        <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            receiveShadow
        >
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial color="#49b14d" />
        </mesh>
    );
}
