/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import ControlPanel from "./components/ControlPanel";
import LightingRoom from "./components/LightningRoom";
import "./Styles/panel.css";

const App = () => {
  const [lightSettings, setLightSettings] = useState([
    { lumens: 1000, color: "#ffffff", position: { x: 0, y: 3, z: 2 } },
  ]);

  return (
    <div className="app">
      {/* <ControlPanel onChange={setLightSettings} /> */}
      <LightingRoom settings={lightSettings} />
    </div>
  );
};

export default App;
