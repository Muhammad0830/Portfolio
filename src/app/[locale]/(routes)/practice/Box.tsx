"use client";
import { useRef } from "react";
import { Mesh } from "three";

const Box = () => {
  const boxRef = useRef<Mesh>(null);

  //   useFrame(() => {
  //     if (boxRef.current && boxRef.current.rotation) {
  //       boxRef.current.rotation.x += 0.05;
  //       boxRef.current.rotation.y += 0.02;
  //     }
  //   });

  return (
    <>
      <color attach="background" args={["#ff0000"]} />
      <ambientLight intensity={0.0} />
      <directionalLight position={[0, 0, 5]} intensity={0.5} />
      <mesh ref={boxRef}>
        <boxGeometry args={[1, 3, 2]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  );
};

export default Box;
