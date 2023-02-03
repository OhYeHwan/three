import * as Three from "three";
import { useFrame, extend, useThree } from "@react-three/fiber";
import { Scene } from "three";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function NativeThree() {
  const mesh = new THREE.Mesh();
  mesh.geometry = new THREE.BoxGeometry(3, 3, 3);
  mesh.material = new THREE.MeshBasicMaterial({ color: "red" });

  const scene = new Scene();
  scene.add(mesh);
}

extend({
  OrbitControls,
});

function App() {
  const { camera, gl } = useThree();
  const groupRef = useRef();

  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta;

    const angle = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(angle) * 8;
    state.camera.position.z = Math.cos(angle) * 8;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <group ref={groupRef}>
        <mesh position={[0, 1, 0]} rotation-x={0.5}>
          <boxGeometry />
          <meshBasicMaterial color="red" />
        </mesh>
        <mesh>
          <sphereGeometry />
          <meshBasicMaterial color="orange" />
        </mesh>
      </group>
    </>
  );
}

export default App;
