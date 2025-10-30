"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Box from "./Box";

const AnimatedCamera = ({
  targetPosition,
}: {
  targetPosition: [number, number, number];
}) => {
  const { camera } = useThree();
  const cam = camera;

  // Create smooth motion values for x, y, z
  const springX = useSpring(camera.position.x, { stiffness: 60, damping: 15 });
  const springY = useSpring(camera.position.y, { stiffness: 60, damping: 15 });
  const springZ = useSpring(camera.position.z, { stiffness: 60, damping: 15 });

  // Update target values whenever `targetPosition` changes
  useEffect(() => {
    springX.set(targetPosition[0]);
    springY.set(targetPosition[1]);
    springZ.set(targetPosition[2]);
  }, [targetPosition, springX, springY, springZ]);

  // Apply the animated values to the actual camera every frame
  useFrame(() => {
    cam.position.set(springX.get(), springY.get(), springZ.get());
    cam.lookAt(0, 0, 0);
  });

  return null;
};

const Page = () => {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate((prev) => !prev);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-bold">Camera Animation</h1>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {animate ? "Animate Back" : "Animate Camera"}
      </button>

      <div className="w-full h-[70vh]">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Box />
          <OrbitControls />
          <AnimatedCamera targetPosition={animate ? [2, 0, 5] : [0, 0, 5]} />
        </Canvas>
      </div>
    </div>
  );
};

export default Page;
