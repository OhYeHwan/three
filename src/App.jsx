import {
  MeshReflectorMaterial,
  Float,
  Text,
  Html,
  PivotControls,
  TransformControls,
  OrbitControls,
} from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { useRef } from "react";

function App() {
  const { position } = useControls({
    position: { value: -2, min: -4, max: 4, step: 0.01 },
  });

  const cubeRef = useRef();

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls enableDamping={true} makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh ref={cubeRef}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>

      <mesh position-y={position} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.5}
          color="greenyellow"
        />
      </mesh>
    </>
  );
}

export default App;
