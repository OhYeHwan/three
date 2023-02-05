import {
  MeshReflectorMaterial,
  Float,
  Text,
  Html,
  PivotControls,
  TransformControls,
  OrbitControls,
} from "@react-three/drei";
import { useRef } from "react";

function App() {
  const cubeRef = useRef();
  const ballRef = useRef();

  return (
    <>
      <OrbitControls enableDamping={true} makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh ref={cubeRef}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>

      <mesh ref={ballRef} position-x={2} scale={1.5}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
        <Html
          position={[1, 1, 0]}
          wrapperClass="label"
          center
          distanceFactor={8}
          occlude={[ballRef, cubeRef]}
        >
          That's a ball
        </Html>
      </mesh>
      <TransformControls object={ballRef} />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.5}
          color="greenyellow"
        />
      </mesh>

      <Float speed={5} floatIntensity={2}>
        <Text
          fontSize={3}
          color="salmon"
          position-y={2}
          maxWidht={2}
          textAlign="center"
        >
          I Love R3F
          <meshNormalMaterial />
        </Text>
      </Float>
    </>
  );
}

export default App;
