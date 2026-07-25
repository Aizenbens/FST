import { Sky } from "@react-three/drei";

export default function Environment() {
    return (
        <>
            <color attach="background" args={["#87CEEB"]} />

            <Sky
                distance={450000}
                sunPosition={[50, 20, 50]}
                inclination={0.5}
                azimuth={0.25}
            />
        </>
    );
}
