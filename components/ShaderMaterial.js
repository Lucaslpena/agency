import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import vertexShader from "../shaders/vertexShader.glsl";
import fragmentShader from "../shaders/basic.glsl";

const CustomShaderMaterial = shaderMaterial(
  {
    uTime: 0,
  },
  vertexShader,
  fragmentShader
);

extend({ CustomShaderMaterial });

export { CustomShaderMaterial };
