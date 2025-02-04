import { useState } from "react";
import TitleAndInputs from "./titleAndInputs";
import ExperienceInputs from "./educationSection";
import "./mainContent.css";
import "./titleAndInputs.css";

// abstract usestate to manage input-objects. They are mainly the same
const handleState = (stateToUse) => {
  const [state, setState] = useState(stateToUse);

  const handleAddState = () => {
    setState([
      ...state,
      { experienceType: "", titleType: "", dateTypeStart: "", dateTypeEnd: "" },
    ]);
  };

  const handleRemoveState = (index) => {
    const temp = [...state];
    temp.splice(index, 1);
    setState(temp);
  };

  const handleStateChange = (e, index, key) => {
    const values = [...state];
    values[index][key] = e.target.value;
    setState(values);
  };

  return {
    state,
    handleAddState,
    handleRemoveState,
    handleStateChange,
  };
};
export default function MainContent() {
  //
  const [nameRows, setNameRows] = useState([
    {
      "User name": "",
      "Phone number": "",
      "Email Address": "",
    },
  ]);

  const handleNamesRowChange = (e, index, key) => {
    const values = [...nameRows];
    values[index][key] = e.target.value;
    setNameRows(values);
  };

  const {
    state: experienceRows,
    handleAddState: handleAddExperienceRow,
    handleRemoveState: handleRemoveExperienceRow,
    handleStateChange: handleExperienceChange,
  } = handleState([
    {
      experienceType: "",
      titleType: "",
      dateTypeStart: "",
      dateTypeEnd: "",
    },
  ]);

  const {
    state: educationRows,
    handleAddState: handleAddEducationRow,
    handleRemoveState: handleRemoveEducationRow,
    handleStateChange: handleEducationChange,
  } = handleState([
    { experienceType: "", titleType: "", dateTypeStart: "", dateTypeEnd: "" },
  ]);

  return (
    <div>
      <div className="headerContainer">
        <header>
          <h1>HeaderTitle</h1>
        </header>
      </div>
      <div className="contentContainer">
        <div className="leftContent contentSection">
          <div>
            <h2>Personal Details</h2>
          </div>
          <TitleAndInputs
            rows={nameRows}
            handleNameChange={handleNamesRowChange}
          />
          <ExperienceInputs
            titleType={"Work experience"}
            rows={experienceRows}
            handleAddRow={handleAddExperienceRow}
            handleRemoveRow={handleRemoveExperienceRow}
            handleChange={handleExperienceChange}
          />
          <ExperienceInputs
            titleType={"Education"}
            rows={educationRows}
            handleAddRow={handleAddEducationRow}
            handleRemoveRow={handleRemoveEducationRow}
            handleChange={handleEducationChange}
          />
        </div>

        <div className="rightContent contentSection">
          <TitleAndInputs
            rows={nameRows}
            handleNameChange={handleNamesRowChange}
          />
          <ExperienceInputs
            rows={experienceRows}
            handleAddRow={handleAddExperienceRow}
            handleRemoveRow={handleRemoveExperienceRow}
            handleChange={handleExperienceChange}
          />
          <ExperienceInputs
            rows={educationRows}
            handleAddRow={handleAddEducationRow}
            handleRemoveRow={handleRemoveEducationRow}
            handleChange={handleEducationChange}
          />
        </div>
      </div>
    </div>
  );
}

// 2 sections instead of three
// left section:
// add button to show and hide work experience / education
// if button "education" is clicked, hide work experience, vice verca
// add save and edit button to each previous job and education. Once save, bar collapses, edit should open it

// right section:
