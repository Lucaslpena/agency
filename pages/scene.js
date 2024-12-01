import React, { useRef } from "react";
import { Color, ShaderMaterial } from "three";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import vertexShader from "../shaders/vertexShader.glsl";
import fragmentShader from "../shaders/fragmentShader.glsl";

extend({ ShaderMaterial });

const GradientShaderMaterial = ({ children }) => {
  const materialRef = useRef();

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.getElapsedTime();
    }
  });

  // const colors = ['#fdab88', '#db0638', '#ead292', '#7eb1a8'].map(x => new Color(x))
  const colors = [
    "#4b7075",
    "#f48c25",
    "#19a4bd",
    "#c84a56",
    //try this https://cc-prod.scene7.com/is/image/CCProdAuthor/chromaric-aberration_P5b_690x450?$pjpeg$&jpegSize=200&wid=690
  ].map((x) => new Color(x));

  console.log({ colors });

  const shader = {
    vertexShader,
    fragmentShader,
    uniforms: {
      time: { value: 0.0 },
      uColor: { value: colors },
    },
  };

  return <shaderMaterial ref={materialRef} args={[shader]} />;
};

const GradientPlane = () => {
  const { viewport } = useThree();
  const { width, height } = viewport;

  return (
    <mesh>
      <planeGeometry
        args={[
          width > height ? width * 2 : height * 2,
          width > height ? width * 2 : height * 2,
          100,
          100,
        ]}
      />
      <GradientShaderMaterial />
      {/*<meshNormalMaterial/>*/}
    </mesh>
  );
};

export default function Scene() {
  return (
    <Canvas
      style={{
        position: "relative",
        width: "100vw !important",
      }}
      orthographic
      camera={{ position: [0, 0, 1], zoom: 1 }}
    >
      <ambientLight />
      {/*<Plane args={[30, 30, 100, 100]}>*/}
      {/*    <meshNormalMaterial wireframe={true}/>*/}
      {/*</Plane>*/}
      <GradientPlane />
      {/*<OrbitControls enableZoom={true} enablePan={true} enableRotate={true}/>*/}
    </Canvas>
  );
}
