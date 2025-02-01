import { useState } from "react";
import TitleAndInputs from "./titleAndInputs";
import ExperienceInputs from "./educationSection";
import "./mainContent.css";

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
  // logic for experienceRows

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

  const [nameRows, setNameRows] = useState([
    {
      userName: "",
      phoneNumber: "",
      emailAddress: "",
    },
  ]);

  const handleNamesRowChange = (e, index, key) => {
    const values = [...nameRows];
    values[index][key] = e.target.value;
    setNameRows(values);
  };

  return (
    <div>
      <div className="headerContainer">
        <header>
          <h1>HeaderTitle</h1>
        </header>
      </div>
      <div className="contentContainer">
        <div className="leftContent contentSection">
          <h2>Work experience</h2>
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
          <h2>Education</h2>
          <ExperienceInputs
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
          <h2>Work experience</h2>
          <ExperienceInputs
            rows={experienceRows}
            handleAddRow={handleAddExperienceRow}
            handleRemoveRow={handleRemoveExperienceRow}
            handleChange={handleExperienceChange}
          />
          <h2>Educatiion</h2>
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
