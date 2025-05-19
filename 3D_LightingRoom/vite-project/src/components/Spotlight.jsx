/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
// import { useFrame } from "@react-three/fiber";

// const Spotlight = ({ settings, rotation }) => {
//   const lightRef = useRef();

//   useFrame(() => {
//     if (lightRef.current) {
//       const angleInRadians = (rotation * Math.PI) / 180;
//       lightRef.current.position.x = Math.cos(angleInRadians) * 2;
//       lightRef.current.position.z = Math.sin(angleInRadians) * 2;
//     }
//   });

//   return (
//     <group>
//       <spotLight
//         ref={lightRef}
//         intensity={settings.lumens / 2}
//         color={settings.color}
//         angle={Math.PI / 6}
//         penumbra={0.4}
//         castShadow
//         position={[2, 3, 0]}
//         shadow-mapSize-width={1024}
//         shadow-mapSize-height={1024}
//         shadow-bias={-0.0001}
//       />
//     </group>
//   );
// };

// export default Spotlight;

const Spotlight = ({position,intensity,color})=>{
  return(
    <group position = {position}>
      <spotLight intensity={intensity} color={color}castShadow/>
      <mesh>
        <sphereGeometry args={[0.2,16,16]}/>
        <meshStandardMaterial color={color} emissive={color}/>
      </mesh>
    </group>
  );
};
export default Spotlight;