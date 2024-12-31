import React, { useEffect, useRef, useState } from 'react';
import { useFrame, useGraph } from '@react-three/fiber';
import { useGLTF, useFBX, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import * as THREE from 'three';

export function Avatar(props) {
  const group = useRef();
  const [scale, setScale] = useState([4, 4, 4]); // Default scale
  const [position, setPosition] = useState([-0.1, -7.4, 0]); // Default position

  // Load GLTF model
  const { scene } = useGLTF('/avatar/models/avatar.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  // Load FBX animations
  const { animations: wavingAnimation } = useFBX('/avatar/animations/Idle.fbx');
  if (wavingAnimation?.length > 0) wavingAnimation[0].name = "Idle";
  const { actions } = useAnimations(wavingAnimation, group);

  // Play idle animation
  useEffect(() => {
    if (actions?.["Idle"]) {
      actions["Idle"].reset().play();
    }
  }, [actions]);

  // Handle pointer look-at behavior
  useFrame((state) => {
    const target = new THREE.Vector3(state.pointer.x, state.pointer.y - 0.5, 1);
    group.current?.getObjectByName("Head")?.lookAt(target);
  });

  // Adjust for mobile device scale and position
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

  // Ensure fallback materials for missing properties
  const fallbackMaterial = new THREE.MeshStandardMaterial({ color: 'peachpuff' });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={scale}
      position={position}
      rotation={[Math.PI / 2, Math.PI, Math.PI]}
    >
      {nodes?.Hips && <primitive object={nodes.Hips} />}
      {nodes?.avaturn_hair_1 && (
        <skinnedMesh
          geometry={nodes.avaturn_hair_1.geometry}
          material={materials?.avaturn_hair_1_material || fallbackMaterial}
          skeleton={nodes.avaturn_hair_1.skeleton}
        />
      )}
      {nodes?.avaturn_glasses_0 && (
        <skinnedMesh
          geometry={nodes.avaturn_glasses_0.geometry}
          material={materials?.avaturn_glasses_0_material|| fallbackMaterial}
          skeleton={nodes.avaturn_glasses_0.skeleton}
        />
      )}
      {nodes?.avaturn_glasses_1 && (
        <skinnedMesh
          geometry={nodes.avaturn_glasses_1.geometry}
          material={materials?.avaturn_glasses_1_material || fallbackMaterial}
          skeleton={nodes.avaturn_glasses_1.skeleton}
        />
      )}
      {nodes?.avaturn_hair_0 && (
        <skinnedMesh
          geometry={nodes.avaturn_hair_0.geometry}
          material={materials?.avaturn_hair_0_material || fallbackMaterial}
          skeleton={nodes.avaturn_hair_0.skeleton}
        />
      )}
      {nodes?.avaturn_look_0 && (
        <skinnedMesh
          geometry={nodes.avaturn_look_0.geometry}
          material={materials?.avaturn_look_0_material || fallbackMaterial}
          skeleton={nodes.avaturn_look_0.skeleton}
        />
      )}
      
      {nodes?.avaturn_shoes_0 && (
        <skinnedMesh
          geometry={nodes.avaturn_shoes_0.geometry}
          material={materials?.avaturn_shoes_0_material || fallbackMaterial}
          skeleton={nodes.avaturn_shoes_0.skeleton}
        />
      )}
      {nodes?.Body_Mesh && (
        <skinnedMesh
          geometry={nodes.Body_Mesh.geometry}
          material={materials?.Body || fallbackMaterial}
          skeleton={nodes.Body_Mesh.skeleton}
        />
      )}
     {/* {nodes?.EyeAO_Mesh && (
        <skinnedMesh
          geometry={nodes.EyeAO_Mesh.geometry}
          material={materials?.EyeAO_Mesh_material || fallbackMaterial}
          skeleton={nodes.EyeAO_Mesh.skeleton}
        />
      )}
      {nodes?.Eyelash_Mesh && (
        <skinnedMesh
          geometry={nodes.Eyelash_Mesh.geometry}
          material={materials?.Eyelash_Mesh_material || fallbackMaterial}
          skeleton={nodes.Eyelash_Mesh}
        />
      )}  */}

      
      
      {nodes?.EyeLeft && (
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials?.EyeAO_Mesh_material|| fallbackMaterial}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
      )}
      {nodes?.EyeRight && (
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials?.Eyes_Mesh_material || fallbackMaterial}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
      )}
      {nodes?.Head_Mesh && (
        <skinnedMesh
          name="Head_Mesh"
          geometry={nodes.Head_Mesh.geometry}
          material={materials?.Head || fallbackMaterial}
          skeleton={nodes.Head_Mesh.skeleton}
          morphTargetDictionary={nodes.Head_Mesh.morphTargetDictionary}
          morphTargetInfluences={nodes.Head_Mesh.morphTargetInfluences}
        />
      )}
      {nodes?.Wolf3D_Teeth && (
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials?.Teeth_Mesh_material || fallbackMaterial}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
      )}
    </group>
  );
}

useGLTF.preload('/avatar/models/avatar.glb');
