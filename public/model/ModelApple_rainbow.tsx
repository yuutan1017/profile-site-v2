/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Sphere008: THREE.Mesh;
    BezierCurve004: THREE.Mesh;
    Sphere009: THREE.Mesh;
  };
  materials: {
    ["Material.013"]: THREE.MeshPhysicalMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
  };
};

export function ModelApple_rainbow(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/assets/ModelApple_rainbow.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null} scale={14}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere008.geometry}
        material={materials["Material.013"]}
        position={[-0.18, 0, 0.06]}
        scale={0.12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve004.geometry}
        material={materials["Material.002"]}
        position={[-0.19, 0.11, 0.07]}
        rotation={[0.03, -1.43, -1.54]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere009.geometry}
        material={materials["Material.003"]}
        position={[-0.14, 0.13, 0.08]}
        rotation={[-1.14, -0.26, 1.35]}
        scale={0.03}
      />
    </group>
  );
}

useGLTF.preload("/assets/ModelApple_rainbow.glb");