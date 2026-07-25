import React from "react";

export default function Lights() {
    return (
        <>
            <ambientLight intensity={1.5} />

            <directionalLight
                castShadow
                intensity={2}
                position={[15, 20, 10]}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />
        </>
    );
}
