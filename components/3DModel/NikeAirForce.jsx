import { useGLTF, useTexture } from "@react-three/drei";
import { MergeContext } from "contexts/MergeContext";
import React, { memo, useContext, useEffect, useRef, useState } from "react";
import * as THREE from "three";

const modelPath = "models/nike-air-force/model.gltf";

export const Model = memo(({ record, ...props }) => {
  const { mergeState } = useContext(MergeContext);
  const { nodes, materials } = useGLTF(modelPath);
  const meshRef = useRef();

  useEffect(() => {
    if (record) {
      meshRef.current.rotation.y = 1;
    }
  }, []);

  const texture = useTexture(mergeState.selectedNFT.image);
  const imageMaterial = new THREE.MeshStandardMaterial({ map: texture });
  // Setting up scaling and positioning of a texture
  imageMaterial.map.repeat.set(1.8, 1.8);
  imageMaterial.map.offset.set(0.45, -0.28);
  imageMaterial.map.center.set(0.5, 0.5);
  imageMaterial.map.encoding = THREE.sRGBEncoding;

  return (
    <group ref={meshRef} {...props} dispose={null}>
      {/* Middle */}
      <group>
        <mesh
          material-color={mergeState.model.items.middle}
          geometry={nodes.tongue.geometry}
          material={materials.Tongue}
        />
        <mesh
          material-color={mergeState.model.items.middle}
          geometry={nodes.sideRight.geometry}
          material={materials.Sides}
        />
        <mesh
          material-color={mergeState.model.items.middle}
          geometry={nodes.tip.geometry}
          material={materials.Tip}
        />
        <mesh
          material-color={mergeState.model.items.middle}
          geometry={nodes.back.geometry}
          material={materials.Back}
        />
      </group>

      {/* Top */}
      <group>
        <mesh
          material-color={mergeState.model.items.top}
          geometry={nodes.heelStrap.geometry}
          material={materials["Heel Strap"]}
        />
        <mesh
          material-color={mergeState.model.items.top}
          geometry={nodes.heel.geometry}
          material={materials.Heel}
        />
        <mesh
          material-color={mergeState.model.items.top}
          geometry={nodes.frontTip.geometry}
          material={materials.FrontTip}
        />
        <mesh
          material-color={mergeState.model.items.top}
          geometry={nodes.laceGuard.geometry}
          material={materials.LaceGuard}
        />
        <mesh
          material-color={mergeState.model.items.top}
          geometry={nodes.thread.geometry}
          material={materials.Thread}
        />
        <mesh
          material-color={mergeState.model.items.top}
          geometry={nodes.nftSlotMesh.geometry}
          material={materials["NFT Frame"]}
        />
      </group>

      {/* Accent */}
      <group>
        <mesh
          material-color={mergeState.model.items.accent}
          geometry={nodes.patch2.geometry}
          material={materials.Patch}
        />
        <mesh
          material-color={mergeState.model.items.accent}
          geometry={nodes.laces.geometry}
          material={materials["Laces "]}
        />
      </group>

      {/* Feature */}
      <group>
        <mesh
          material-color={mergeState.model.items.feature}
          geometry={nodes.logo.geometry}
          material={materials["Leather Base 02.002"]}
        />
        <mesh
          material-color={mergeState.model.items.feature}
          geometry={nodes.liner.geometry}
          material={materials.Liner}
        />
      </group>

      {/* NFT background */}
      <group>
        <mesh
          material-color={mergeState.model.items.NFT}
          geometry={nodes.liner2.geometry}
          material={materials.Liner2}
        />
        <mesh
          geometry={nodes.nftSlotMesh_1.geometry}
          material={imageMaterial}
        />
      </group>

      {/* Always white */}
      <group>
        <mesh
          material-color="#ffffff"
          geometry={nodes.sole.geometry}
          material={materials.Sole}
        />
        <mesh
          material-color="#ffffff"
          geometry={nodes.innerSole.geometry}
          material={materials["mesh white"]}
        />
        <mesh
          material-color="#ffffff"
          geometry={nodes.innerSole.geometry}
          material={materials["mesh white"]}
        />
        <mesh
          material-color="#ffffff"
          geometry={nodes.innerSole2.geometry}
          material={materials["mesh white"]}
        />
      </group>
    </group>
  );
});

useGLTF.preload(modelPath);
