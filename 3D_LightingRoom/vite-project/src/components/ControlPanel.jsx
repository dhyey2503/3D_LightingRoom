/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

const ControlPanel = ({ onChange }) => {
  const lumensOptions = [700, 1200, 1800, 2200];
  const colorOptions = ["#ffffff", "#ffcc00", "#ff5733", "#00ff00"];

  const defaultSpotlight = {
    lumens: 1000,
    color: "#ffffff",
    position: { x: 0, y: 3, z: 2 },
  };

  const [spotlights, setSpotlights] = useState([defaultSpotlight]);

  const updateSpotlight = (index, key, value) => {
    const newSpotlights = [...spotlights];
    newSpotlights[index] = { ...newSpotlights[index], [key]: value };
    setSpotlights(newSpotlights);
    onChange(newSpotlights);
  };

  const addSpotlight = () => {
    setSpotlights([...spotlights, defaultSpotlight]);
    onChange([...spotlights, defaultSpotlight]);
  };

  const removeSpotlight = (index) => {
    const newSpotlights = spotlights.filter((_, i) => i !== index);
    setSpotlights(newSpotlights);
    onChange(newSpotlights);
  };

  return (
    <div className="control-panel">
      <h2>Light Control Panel</h2>

      {spotlights.map((light, index) => (
        <div key={index} className="spotlight-control">
          <h3>Spotlight {index + 1}</h3>

          {/* Lumens Selection */}
          <fieldset>
            <legend>Brightness (Lumens):</legend>
            {lumensOptions.map((lumens) => (
              <label key={lumens}>
                <input
                  type="radio"
                  name={`lumens-${index}`}
                  value={lumens}
                  checked={light.lumens === lumens}
                  onChange={() => updateSpotlight(index, "lumens", lumens)}
                />
                {lumens} lm
              </label>
            ))}
          </fieldset>

          {/* Color Selection */}
          <fieldset>
            <legend>Light Color:</legend>
            {colorOptions.map((color) => (
              <label key={color}>
                <input
                  type="radio"
                  name={`color-${index}`}
                  value={color}
                  checked={light.color === color}
                  onChange={() => updateSpotlight(index, "color", color)}
                />
                <span
                  style={{
                    display: "inline-block",
                    width: "20px",
                    height: "20px",
                    backgroundColor: color,
                    borderRadius: "50%",
                    marginLeft: "5px",
                  }}
                ></span>
              </label>
            ))}
          </fieldset>

          <button onClick={() => removeSpotlight(index)}>Remove Light</button>
        </div>
      ))}

      <button onClick={addSpotlight}>Add Spotlight</button>
    </div>
  );
};

export default ControlPanel;
