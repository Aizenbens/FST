import CameraController from "./CameraController";
import Movement from "./Movement";

const movement = new Movement();

export default function Player() {

    movement.update();

    return (
        <>
            <CameraController />

            <mesh
                castShadow
                position={[0, 1, 0]}
            >
                <capsuleGeometry
                    args={[0.35, 1, 8, 16]}
                />

                <meshStandardMaterial
                    color="#ff8c00"
                />
            </mesh>
        </>
    );

}
