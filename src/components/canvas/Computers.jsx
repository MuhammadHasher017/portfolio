import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../Loader/Loader.component";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor={"black"} />
      <pointLight intensity={1} />
      <primitive object={computer.scene} />
    </mesh>
  );
};

export default Computers;
