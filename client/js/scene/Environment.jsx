import React from "react";

export default function Environment() {
    return (
        <>
            <color
                attach="background"
                args={["#87CEEB"]}
            />

            <fog
                attach="fog"
                args={["#87CEEB", 50, 250]}
            />
        </>
    );
}
