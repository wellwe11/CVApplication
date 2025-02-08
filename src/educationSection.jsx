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

  const [rowState, setRowState] = useState({});

  const displayInputs = (index) => {
    setRowState((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const [textAreaValue, setTextAreaValue] = useState("");

  const getHeight = (e) => {
    return e.length > 235
      ? "125px"
      : e.length > 175
      ? "100px"
      : e.length > 100
      ? "75px"
      : e.length > 40
      ? "50px"
      : "30px";
  };

  return (
    <div className="experienceSection">
      <div
        className={`titleAndButton ${
          activeSection !== titleType ? "experienceTitleMini" : ""
        }`}
      >
        <h2>{titleType}</h2>
        <button
          className="expandExperienceInputs"
          onClick={() => {
            setActiveSection(activeSection === titleType ? null : titleType);
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
                        <p
                          style={{
                            display: "none",
                            color: "rgb(225, 144, 144)",
                          }}
                        >
                          Please fill out this input
                        </p>
                        <input
                          key={row.id}
                          type="text"
                          value={row[key]}
                          placeholder={`Enter ${key}`}
                          onChange={(e) => handleChange(e, index, key)}
                          style={{
                            width:
                              row[key].length > 25
                                ? "300px"
                                : row[key].length > 15
                                ? "185px"
                                : row[key].length > 10
                                ? "100px"
                                : "80px",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div
                    className={`textAreaWrapper ${
                      rowState[index] ? "scaleUpBar" : "minimizeBar"
                    }`}
                  >
                    <h5>Description</h5>
                    <textarea
                      onChange={(e) => setTextAreaValue(e.target.value)}
                      style={{
                        height: getHeight(textAreaValue),
                        transition: "0.3s ease",
                        placeholder:
                          "Tell us something about your experience...",
                      }}
                    ></textarea>
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
          }}
          className={`addRowButton ${!hideButton ? "displayBar" : "hideBar"}`}
        >
          <h4>
            {titleType === "Work experience" ? "+Experience" : "+Education"}
          </h4>
        </button>
      </div>
    </div>
  );
}
