/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Plane } from "@react-three/drei";
import Spotlight from "./Spotlight";
// import WallLight from "./WallLight";
import Furniture from "./Furniture";
// import LightControlPanel from "./LightControlPanel";

const LightingRoom = ({ settings }) => {
  // const [angle, setAngle] = useState(30);
  const [intensity, setIntensity] = useState(0);
  const [SpotLightPosition, setSpotLightPosition] = useState("ceiling");
  const [colorTemperature, setColorTemperature] = useState("#FFFFFF");
  const [wallColor, setWallColor] = useState("#FAEBD7")
  
  const getSpotLightPosition =()=>{
    switch(SpotLightPosition){
      case  "front":
        return[0,2.5,-5];
      case "top-front-left":
        return[-5,5,-5];
      case "top-front-right":
        return[5,5,-5];
      case "top-back-left":
        return[-5,5,5];
      case "top-back-right":
        return[5,5,5];
      case "back":
        return[0, 2.5, 5];
      case "ceiling":
        return [0, 4.9, 0];
      default:
        return [0, 4.9, 0];
    }

  };
  const getSpotlightColor = () => {
    switch (colorTemperature) {
      case "3000K":
        return "#FFD700"; // Warm White (Golden)
      case "4000K":
        return "#FFFFFF"; // Neutral White
      case "6500K":
        return "#ADD8E6"; // Cool White (Bluish)
      default:
        return "#FFFFFF"; // Default to neutral white
    }
  };

  return (
    <div className="lighting-room">
      

      {/* {SpotLight Intensity Control} */}
      <div className="light-intensity-control">
        <h3>SpotLight Intensity</h3>
        <label>
          <input type="radio" name="intensity" value="800" onChange={()=> setIntensity(800)}/>
          800 lumens
        </label>
        <label>
          <input type="radio" name="intensity" value="1200" checked={intensity === 1200} onChange={()=> setIntensity(1200)}/>
          1200 lumens
        </label>
        <label>
          <input type="radio" name="intensity" value="1800"  onChange={()=> setIntensity(1800)}/>
          1800 lumens
        </label>
      </div>
      {/* SpotLight Color Temperature Control */}
      <div className="light-color-control">
        <h3>SpotLight Color Temperature</h3>
        <label>
          <input type="radio" name="colorTemp" value="3000K" checked={colorTemperature === "3000K"} onChange={() => setColorTemperature("3000K")} />
          3000K (Warm White)
        </label>
        <label>
          <input type="radio" name="colorTemp" value="4000K" checked={colorTemperature === "4000K"} onChange={() => setColorTemperature("4000K")} />
          4000K (Neutral White)
        </label>
        <label>
          <input type="radio" name="colorTemp" value="6500K" checked={colorTemperature === "6500K"} onChange={() => setColorTemperature("6500K")} />
          6500K (Cool White)
        </label>
      </div>
      <div className="wall-color-control">
        <h3>Wall Color</h3>
        <label>
          <input type="radio" name="wallColor" value="#FAEBD7" checked={wallColor === "#FAEBD7"} onChange={() => setWallColor("#FAEBD7")} />
          Antique White
        </label>
        <label>
          <input type="radio" name="wallColor" value="#D3D3D3" checked={wallColor === "#D3D3D3"} onChange={() => setWallColor("#D3D3D3")} />
          Light Gray
        </label>
        <label>
          <input type="radio" name="wallColor" value="#A9A9A9" checked={wallColor === "#A9A9A9"} onChange={() => setWallColor("#A9A9A9")} />
          Dark Gray
        </label>
        <label>
          <input type="radio" name="wallColor" value="#CD9575" checked={wallColor === "#CD9575"} onChange={() => setWallColor("#CD9575")} />
          Antique Brass
        </label>
        <label>
          <input type="radio" name="wallColor" value="#9966CC" checked={wallColor === "#9966CC"} onChange={() => setWallColor("#9966CC")} />
          Amethyst
        </label>
        <label>
          <input type="radio" name="wallColor" value="#FBCEB1" checked={wallColor === "#FBCEB1"} onChange={() => setWallColor("#FBCEB1")} />
          Apricot
        </label>
        <label>
          <input type="radio" name="wallColor" value="#89CFF0" checked={wallColor === "#89CFF0"} onChange={() => setWallColor("#89CFF0")} />
          Baby Blue
        </label>
        <label>
          <input type="radio" name="wallColor" value="#F4C2C2" checked={wallColor === "#F4C2C2"} onChange={() => setWallColor("#F4C2C2")} />
          Baby Pink
        </label>
      </div>

      

      <div className="spot-light-control">
        <h3>Spot Light Position</h3>
        <label>
          <input type="radio" name="spotPosition" value="front" checked={SpotLightPosition === "front"} onChange={() => setSpotLightPosition("front")} />
           Front Wall
        </label>
        <label>
          <input type="radio" name="spotPosition" value="top-front-left" checked={SpotLightPosition === "top-front-left"} onChange={() => setSpotLightPosition("top-front-left")} />
          Top Front Left Wall
        </label>
        <label>
          <input type="radio" name="spotPosition" value="top-front-right" checked={SpotLightPosition === "top-front-right"} onChange={() => setSpotLightPosition("top-front-right")} />
          Top Front Right Wall
        </label>
        <label>
          <input type="radio" name="spotPosition" value="top-back-right" checked={SpotLightPosition === "top-back-right"} onChange={() => setSpotLightPosition("top-back-right")} />
          Top Back Right Wall
        </label>
        <label>
          <input type="radio" name="spotPosition" value="top-back-left" checked={SpotLightPosition === "top-back-left"} onChange={() => setSpotLightPosition("top-back-left")} />
          Top Back Left Wall
        </label>
        <label>
          <input type="radio" name="spotPosition" value="back" checked={SpotLightPosition === "back"} onChange={() => setSpotLightPosition("back")} />
          Back Wall
        </label>
        <label>
          <input type="radio" name="spotPosition" value="ceiling" checked={SpotLightPosition === "ceiling"} onChange={() => setSpotLightPosition("ceiling")} />
          Ceiling
        </label>
      </div>


      <Canvas shadows camera={{ position: [0, 3, 8], fov: 50 }}>
        <ambientLight intensity={2} />

        
        <Spotlight position={getSpotLightPosition()} intensity={intensity} color={getSpotlightColor()}/>
        <Furniture />

        {/* Floor */}
        <Plane receiveShadow rotation={[-Math.PI / 2, 0, 0]} args={[10, 10]} position={[0, 0, 0]}>
          <meshStandardMaterial color="black" />
        </Plane>

        {/* Walls */}
        <Plane receiveShadow position={[0, 2.5, -5]} args={[10, 5]}>
          <meshStandardMaterial color={wallColor} />
        </Plane>

        <Plane receiveShadow position={[5, 2.5, 0]} rotation={[0, -Math.PI / 2, 0]} args={[10, 5]}>
          <meshStandardMaterial color={wallColor} />
        </Plane>

        {/* Ceiling */}
        <Plane receiveShadow position={[0, 5, 0]} rotation={[Math.PI / 2, 0, 0]} args={[10, 10]}>
          <meshStandardMaterial color={wallColor} />
        </Plane>

        {/* Left Wall */}
        <Plane receiveShadow position={[-5, 2.5, 0]} rotation={[0, Math.PI / 2, 0]} args={[10, 5]}>
          <meshStandardMaterial color={wallColor} />
        </Plane>


        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default LightingRoom;
