import React, { useEffect, useRef } from 'react'
import { useFrame, useGraph } from '@react-three/fiber'
import { useGLTF, useFBX, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import * as THREE from 'three'; // Import THREE

export function Avatar(props) {
  const group = useRef();
  const { scene } = useGLTF('/avatar/models/model.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  // Ensure wavingAnimation is loaded correctly
  const { animations: wavingAnimation } = useFBX('/avatar/animations/Waving.fbx');
  wavingAnimation[0].name = "Waving";
  const { actions } = useAnimations(wavingAnimation, group);

  useEffect(() => {
    actions["Waving"].reset().play();  // Ensure the animation exists before playing
  }, [actions]);
  

  useFrame((state) => {

      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
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

useGLTF.preload('models/model.glb');
