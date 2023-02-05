import * as THREE from "three";
import { OrbitControls, useHelper } from "@react-three/drei";
import { useRef } from "react";

function App() {
  const cubeRef = useRef();
  const directionalLight = useRef();

  useHelper(directionalLight, THREE.DirectionalLightHelper, 5, "red");

  return (
    <>
      <OrbitControls enableDamping={true} makeDefault />
      <directionalLight
        ref={directionalLight}
        position={[1, 2, 3]}
        intensity={1.5}
      />
      <ambientLight intensity={0.5} />

      <mesh ref={cubeRef}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>

      <mesh position-y={-2} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="yellowgreen" />
      </mesh>
    </>
  );
}

export default App;
