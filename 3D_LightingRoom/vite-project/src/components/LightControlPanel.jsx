/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const LightControlPanel = ({ rotation, setRotation }) => {
  return (
    <div className="light-control-panel">
      <h3>Light Rotation</h3>
      <label>
        <input
          type="radio"
          name="rotation"
          value="0"
          checked={rotation === 0}
          onChange={() => setRotation(0)}
        />
        0°
      </label>
      <label>
        <input
          type="radio"
          name="rotation"
          value="45"
          checked={rotation === 45}
          onChange={() => setRotation(45)}
        />
        45°
      </label>
      <label>
        <input
          type="radio"
          name="rotation"
          value="90"
          checked={rotation === 90}
          onChange={() => setRotation(90)}
        />
        90°
      </label>
      <label>
        <input
          type="radio"
          name="rotation"
          value="135"
          checked={rotation === 135}
          onChange={() => setRotation(135)}
        />
        135°
      </label>
      <label>
        <input
          type="radio"
          name="rotation"
          value="180"
          checked={rotation === 180}
          onChange={() => setRotation(180)}
        />
        180°
      </label>
    </div>
  );
};

export default LightControlPanel;
