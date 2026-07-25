import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import {
  PointerLockControls,
  KeyboardControls
} from "@react-three/drei";

function Ground() {
  return (
    <RigidBody type="fixed">
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#4caf50" />
      </mesh>
    </RigidBody>
  );
}

function Player() {
  return (
    <RigidBody
      colliders="cuboid"
      position={[0, 2, 0]}
      mass={1}
    >
      <mesh castShadow>
        <capsuleGeometry args={[0.4, 1]} />
        <meshStandardMaterial color="#3fa9f5" />
      </mesh>
    </RigidBody>
  );
}

export default function Scene() {
  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["KeyW"] },
        { name: "backward", keys: ["KeyS"] },
        { name: "left", keys: ["KeyA"] },
        { name: "right", keys: ["KeyD"] },
        { name: "jump", keys: ["Space"] }
      ]}
    >
      <Canvas
        shadows
        camera={{
          position: [0, 2, 6],
          fov: 75
        }}
      >
        <PointerLockControls />

        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 10, 5]}
          intensity={2}
          castShadow
        />

        <Physics gravity={[0, -9.81, 0]}>
          <Ground />
          <Player />
        </Physics>
      </Canvas>
    </KeyboardControls>
  );
}
