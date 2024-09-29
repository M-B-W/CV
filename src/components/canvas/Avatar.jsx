import React, { useEffect, useRef, Suspense } from 'react';
import { useFrame, useGraph } from '@react-three/fiber';
import { useGLTF, useFBX, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import * as THREE from 'three';
import CanvasLoader from '../Loader'; // Import your CanvasLoader component

export function Avatar(props) {
  const group = useRef();
  const { scene } = useGLTF('/avatar/models/model.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  const { animations: wavingAnimation } = useFBX('/avatar/animations/Waving.fbx');
  wavingAnimation[0].name = "Waving";
  const { actions } = useAnimations(wavingAnimation, group);

  useEffect(() => {
    if (actions["Waving"]) {
      actions["Waving"].reset().play();
    }
  }, [actions, wavingAnimation]);

  const clippingPlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 1);

  useEffect(() => {
    Object.values(materials).forEach(material => {
      if (material instanceof THREE.MeshStandardMaterial) {
        material.clippingPlanes = [clippingPlane];
      }
    });
  }, [materials]);

  useFrame((state) => {
    const target = new THREE.Vector3(state.mouse.x, state.mouse.y - 0.2, 1);
    group.current.getObjectByName("Head").lookAt(target);
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[4, 4, 4]}
      rotation={[Math.PI / 2, Math.PI, Math.PI]}
      position={[-0.2, -7.4, 0]}
    >
      <primitive object={nodes.Hips} />
      <skinnedMesh geometry={nodes.avaturn_body.geometry} material={materials.avaturn_body_material} skeleton={nodes.avaturn_body.skeleton} />
      <skinnedMesh geometry={nodes.avaturn_hair_0.geometry} material={materials.avaturn_hair_0_material} skeleton={nodes.avaturn_hair_0.skeleton} />
      <skinnedMesh geometry={nodes.avaturn_hair_1.geometry} material={materials.avaturn_hair_1_material} skeleton={nodes.avaturn_hair_1.skeleton} />
      <skinnedMesh geometry={nodes.avaturn_shoes_0.geometry} material={materials.avaturn_shoes_0_material} skeleton={nodes.avaturn_shoes_0.skeleton} />
      <skinnedMesh geometry={nodes.avaturn_look_0.geometry} material={materials.avaturn_look_0_material} skeleton={nodes.avaturn_look_0.skeleton} />
    </group>
  );
}

useGLTF.preload('/avatar/models/model.glb');
