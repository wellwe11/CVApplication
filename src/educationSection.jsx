import { useState } from "react";
import "./educationSectionTwo.css";

const handleState = (stateToUse) => {
  const [state, setState] = useState(stateToUse);

  const toggleState = () => {
    setState((prevState) => !prevState);
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
  activeSection,
  setActiveSection,
}) {
  const { state: hideButton, toggleState: handleHideButton } =
    handleState(false);
  const { state: hideAddButton, toggleState: handleHideAddButton } =
    handleState(false);

  const [rowState, setRowState] = useState({});

  const displayInputs = (index) => {
    setRowState((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="experienceSection">
      <div className="titleAndButton">
        <h2>{titleType}</h2>
        <button
          className="expandExperienceInputs"
          onClick={() => {
            setActiveSection(activeSection === titleType ? null : titleType);
            handleHideAddButton(false);
          }}
        >
          {activeSection === titleType ? "-" : "+"}
        </button>
      </div>

      <div
        className={`experienceInputs ${
          activeSection === titleType ? "scaleUpBar" : "minimizeBar"
        }`}
      >
        {rows.map((row, index) => (
          <div className={`experienceInput`} key={index}>
            {activeSection === titleType && (
              <>
                <button
                  onClick={() => {
                    displayInputs(index);
                    handleHideButton(true);
                    handleHideAddButton(true);
                  }}
                  className={`experienceButton ${
                    !hideButton ? "displayBar" : "hideBar"
                  }`}
                >
                  <h4 className={!hideButton ? "displayBar" : "hideBar"}>
                    {Object.values(row)[0].length > 0
                      ? Object.values(row)[0]
                      : "Placeholder"}
                  </h4>
                </button>

                <div className="inputsContainer">
                  <div
                    className={`inputsAndInputsButtonsContainer ${
                      rowState[index] ? "scaleUpBar" : "minimizeBar"
                    }`}
                  >
                    {Object.keys(row).map((key) => (
                      <div key={key}>
                        <h5>{key}</h5>
                        <p style={{ display: "none", color: "red" }}>
                          Please fill out this input
                        </p>
                        <input
                          key={row.id}
                          type="text"
                          value={row[key]}
                          placeholder={key}
                          onChange={(e) => handleChange(e, index, key)}
                        />
                      </div>
                    ))}
                  </div>
                  <div
                    className={`experienceInputContainerButtons ${
                      rowState[index] ? "displayBar" : "hideBar"
                    }`}
                  >
                    <button
                      onClick={() => {
                        handleRemoveRow(index);
                        setRowState(index);
                        handleHideButton(false);
                        handleHideAddButton(true);
                      }}
                      className="deleteRowButton"
                    >
                      Delete
                    </button>
                    <button
                      type="submit"
                      className="submitBtn"
                      onClick={() => {
                        displayInputs(index);
                        handleHideButton(true);
                        handleHideAddButton(true);
                      }}
                      disabled={Object.values(row)[0].length > 0 ? false : true}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
        <button
          onClick={() => {
            handleAddRow();
            displayInputs(rows.length);
            handleHideButton(false);
            handleHideAddButton(true);
          }}
          className={`addRowButton ${
            hideAddButton ? "scaleUpBarBtn" : "minimizeBar"
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
}
