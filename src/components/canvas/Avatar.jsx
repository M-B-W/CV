import React, { useEffect, useRef, useState } from 'react';
import { useFrame, useGraph } from '@react-three/fiber';
import { useGLTF, useFBX, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import * as THREE from 'three';

export function Avatar(props) {
  const group = useRef();
  const [scale, setScale] = useState([4, 4, 4]); // Default scale
  const [position, setPosition] = useState([-0.1, -7.4, 0]); // Default position

  const { scene } = useGLTF('/avatar/models/apollo.glb');
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
    const target = new THREE.Vector3(state.pointer.x, state.pointer.y - 0.4, 1);
    group.current.getObjectByName("Head").lookAt(target);
  });

  // Detect screen width to adjust scale and position for mobile devices
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setScale([3, 3, 3]); // Smaller scale for mobile devices
        setPosition([-0.1, -5.3, 0]); // Adjust position for mobile devices
      } else {
        setScale([4, 4, 4]); // Default scale for larger screens
        setPosition([-0.1, -7.4, 0]); // Default position for larger screens
      }
    }

    // Call the function initially and add an event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={scale}
      position={position}
      rotation={[Math.PI / 2, Math.PI, Math.PI]}
    >
      <primitive object={nodes.Hips} />
      <skinnedMesh geometry={nodes.Body_Mesh.geometry} material={materials.Body} skeleton={nodes.Body_Mesh.skeleton} />
      <skinnedMesh geometry={nodes.avaturn_hair_0.geometry} material={materials.avaturn_hair_0_material} skeleton={nodes.avaturn_hair_0.skeleton} />
      <skinnedMesh geometry={nodes.avaturn_hair_1.geometry} material={materials.avaturn_hair_1_material} skeleton={nodes.avaturn_hair_1.skeleton} />
      <skinnedMesh geometry={nodes.avaturn_shoes_0.geometry} material={materials.avaturn_shoes_0_material} skeleton={nodes.avaturn_shoes_0.skeleton} />
      <skinnedMesh geometry={nodes.avaturn_look_0.geometry} material={materials.avaturn_look_0_material} skeleton={nodes.avaturn_look_0.skeleton} />
      <skinnedMesh name="Eye_Mesh" geometry={nodes.Eye_Mesh.geometry} material={materials.Eyes} skeleton={nodes.Eye_Mesh.skeleton} morphTargetDictionary={nodes.Eye_Mesh.morphTargetDictionary} morphTargetInfluences={nodes.Eye_Mesh.morphTargetInfluences} />
      <skinnedMesh name="EyeAO_Mesh" geometry={nodes.EyeAO_Mesh.geometry} material={materials.EyeAO} skeleton={nodes.EyeAO_Mesh.skeleton} morphTargetDictionary={nodes.EyeAO_Mesh.morphTargetDictionary} morphTargetInfluences={nodes.EyeAO_Mesh.morphTargetInfluences} />
      <skinnedMesh name="Eyelash_Mesh" geometry={nodes.Eyelash_Mesh.geometry} material={materials.Eyelash} skeleton={nodes.Eyelash_Mesh.skeleton} morphTargetDictionary={nodes.Eyelash_Mesh.morphTargetDictionary} morphTargetInfluences={nodes.Eyelash_Mesh.morphTargetInfluences} />
      <skinnedMesh name="Head_Mesh" geometry={nodes.Head_Mesh.geometry} material={materials.Head} skeleton={nodes.Head_Mesh.skeleton} morphTargetDictionary={nodes.Head_Mesh.morphTargetDictionary} morphTargetInfluences={nodes.Head_Mesh.morphTargetInfluences} />
      <skinnedMesh name="Teeth_Mesh" geometry={nodes.Teeth_Mesh.geometry} material={materials.Teeth} skeleton={nodes.Teeth_Mesh.skeleton} morphTargetDictionary={nodes.Teeth_Mesh.morphTargetDictionary} morphTargetInfluences={nodes.Teeth_Mesh.morphTargetInfluences} />
      <skinnedMesh name="Tongue_Mesh" geometry={nodes.Tongue_Mesh.geometry} material={materials.Teeth} skeleton={nodes.Tongue_Mesh.skeleton} morphTargetDictionary={nodes.Tongue_Mesh.morphTargetDictionary} morphTargetInfluences={nodes.Tongue_Mesh.morphTargetInfluences} />
    </group>
  );
}

useGLTF.preload('/avatar/models/apollo.glb');
