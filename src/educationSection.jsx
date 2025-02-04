import { useState } from "react";
import "./educationSection.css";
import "./educationSectionTwo.css";

const handleState = (stateToUse) => {
  const [state, setState] = useState(stateToUse);

  const toggleState = () => {
    setState((prevState) => !prevState);
    console.log(state);
  };

  return {
    state,
    toggleState,
  };
};

export default function ExperienceInputs({
  rows,
  handleChange,
  handleAddRow,
  handleRemoveRow,
  titleType,
  experienceTitle,
}) {
  const setSelfDisplayNone = (e) => {
    e.target.style.display = "none";
  };

  return (
    <div className="experienceSection">
      <div className="titleAndButton">
        <h2>{titleType}</h2>
        <button className="expandExperienceInputs"></button>
      </div>
      <div className="experienceInputs">
        {rows.map((row, index) => (
          <div className="experienceInput" key={index}>
            <div className={`experienceHeader`}>
              <button
                onClick={() => handleRemoveRow(index)}
                className="deleteRowButton"
              >
                -
              </button>
              <div className={`experienceInputContainer`}>
                <div>
                  <div>
                    <h4>{experienceTitle}</h4>
                  </div>
                  {Object.keys(row).map((key) => (
                    <div key={key}>
                      <h5>{key}</h5>
                      <input
                        key={key}
                        type="text"
                        value={row[key]}
                        placeholder={key}
                        onChange={(e) => handleChange(e, index, key)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleAddRow} className="addRowButton">
        +
      </button>
    </div>
  );
}
