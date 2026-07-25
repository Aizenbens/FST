export default function Ground() {
    return (
        <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            receiveShadow
            position={[0, 0, 0]}
        >
            <planeGeometry args={[200, 200, 50, 50]} />

            <meshStandardMaterial
                color="#5d8c42"
                roughness={1}
                metalness={0}
            />
        </mesh>
    );
}
