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
  const handleHideSelf = (rows) => {
    console.log(rows.length);
  };

  return (
    <div className="experienceSection">
      <div className="titleAndButton">
        <h2>{titleType}</h2>
        <button
          className="expandExperienceInputs"
          onClick={() => {
            handleTitleState();
            handleHideAddButton();
          }}
        ></button>
      </div>
      <div className="experienceInputs">
        {rows.map((row, index) => (
          <div className="experienceInput" key={index}>
            <div className={`experienceHeader`}>
              <div className={`experienceInputContainer`}>
                {titleState && (
                  <>
                    <button
                      onClick={() => {
                        displayInputs(index);
                        handleHideButton(true);
                        handleHideAddButton();
                      }}
                      className={!hideButton ? "displayBar" : "hideBar"}
                    >
                      Click me
                    </button>
                    <h4>{row.experienceType}</h4>
                    {Object.keys(row).map((key) => (
                      <div
                        key={key}
                        className={rowState[index] ? "displayBar" : "hideBar"}
                      >
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
                  </>
                )}
              </div>
            </div>
            <button
              onClick={() => {
                handleRemoveRow(index);
                setRowState(index);
                handleHideButton(false);
              }}
              className={`deleteRowButton ${
                rowState[index] ? "displayBar" : "hideBar"
              }`}
            >
              -
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            handleAddRow();
            displayInputs(rows.length);
            handleHideAddButton();
            handleHideButton(true);
          }}
          className={`addRowButton ${hideAddButton ? "displayBar" : "hideBar"}`}
        >
          +
        </button>
      </div>
    </div>
  );
}
