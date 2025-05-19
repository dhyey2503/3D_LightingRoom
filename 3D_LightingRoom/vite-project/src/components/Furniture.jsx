/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";

const Furniture = () => {
  return (
    <group>
      {/* Table */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 0.1, 2]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Table Legs */}
      {[[-0.9, 0, -0.9], [0.9, 0, -0.9], [-0.9, 0, 0.9], [0.9, 0, 0.9]].map(
        ([x, y, z], index) => (
          <mesh key={index} position={[x, y, z]} castShadow>
            <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
            <meshStandardMaterial color="#654321" />
          </mesh>
        )
      )}

      {/* Chair 1 */}
      <mesh position={[-1.5, 0.25, 0]} castShadow>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#A0522D" />
      </mesh>

      {/* Chair 2 */}
      <mesh position={[1.5, 0.25, 0]} castShadow>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#A0522D" />
      </mesh>

      {/* Couch */}
      <mesh position={[0, 0.3, 3]} castShadow>
        <boxGeometry args={[2.5, 0.6, 1]} />
        <meshStandardMaterial color="#6A5ACD" />
      </mesh>

      {/* Shelf */}
      <mesh position={[-4, 1.5, -4]} castShadow>
        <boxGeometry args={[1, 2, 0.2]} />
        <meshStandardMaterial color="#3E2723" />
      </mesh>

      {/* Lamp */}
      <mesh position={[3, 1, 2]} castShadow>
        <cylinderGeometry args={[0.2, 0.5, 1, 16]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>
    </group>
  );
};

export default Furniture;
