import Ecctrl from "ecctrl";
import { CapsuleCollider } from "@react-three/rapier";

export default function Player() {
  return (
    <Ecctrl
      animated={false}
      capsuleHalfHeight={0.35}
      capsuleRadius={0.35}
      camCollision
      camInitDis={0}
      camMinDis={0}
      camMaxDis={0}
      camFollowMult={100}
      turnSpeed={100}
      maxVelLimit={8}
      jumpVel={6}
      sprintMult={1.7}
    >
      <CapsuleCollider args={[0.35, 0.35]} />

      <mesh castShadow>
        <capsuleGeometry args={[0.35, 1]} />
        <meshStandardMaterial color="#4DA6FF" />
      </mesh>
    </Ecctrl>
  );
}
