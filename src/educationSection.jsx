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
}) {
  const { state: titleState, toggleState: handleTitleState } =
    handleState(false);
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
            handleTitleState();
            handleHideAddButton(false);
          }}
        >
          {hideAddButton ? "-" : "+"}
        </button>
      </div>
      <div className="experienceInputs">
        {rows.map((row, index) => (
          <div className={`experienceInput`} key={index}>
            {titleState && (
              <>
                <button
                  onClick={() => {
                    displayInputs(index);
                    handleHideButton(true);
                    handleHideAddButton(true);
                  }}
                  className={!hideButton ? "displayBar" : "hideBar"}
                >
                  +
                </button>
                <h4 className={!hideButton ? "displayBar" : "hideBar"}>
                  {Object.values(row)[0].length > 0
                    ? Object.values(row)[0]
                    : "Placeholder"}
                </h4>
                <div className="inputsContainer">
                  <div
                    className={`inputsAndInputsButtonsContainer ${
                      rowState[index] ? "scaleUpBar" : "minimizeBar"
                    }`}
                  >
                    {Object.keys(row).map((key) => (
                      <div key={key}>
                        <h5>{key}</h5>
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
            hideAddButton ? "scaleUpBar" : "minimizeBar"
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
}
