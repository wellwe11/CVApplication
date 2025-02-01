import { useState } from "react";
import TitleAndInputs from "./titleAndInputs";
import ExperienceInputs from "./educationSection";
import "./mainContent.css";

export default function MainContent() {
  const [experienceRows, setExperienceRows] = useState([
    { experienceType: "", titleType: "", dateTypeStart: "", dateTypeEnd: "" },
  ]);

  const handleAddExperienceRow = () => {
    setExperienceRows([
      ...experienceRows,
      { experienceType: "", titleType: "", dateTypeStart: "", dateTypeEnd: "" },
    ]);
  };

  const handleRemoveExperienceRow = (index) => {
    const temp = [...experienceRows];
    temp.splice(index, 1);
    setExperienceRows(temp);
  };

  const handleExperienceChange = (e, index, key) => {
    const values = [...experienceRows];
    values[index][key] = e.target.value;
    setExperienceRows(values);
  };

  const [educationRows, setEducationRows] = useState([
    { experienceType: "", titleType: "", dateTypeStart: "", dateTypeEnd: "" },
  ]);

  const handleAddEducationRow = () => {
    setEducationRows([
      ...educationRows,
      { experienceType: "", titleType: "", dateTypeStart: "", dateTypeEnd: "" },
    ]);
  };

  const handleRemoveEducationRow = (index) => {
    const temp = [...educationRows];
    temp.splice(index, 1);
    setEducationRows(temp);
  };

  const handleEducationChange = (e, index, key) => {
    const values = [...educationRows];
    values[index][key] = e.target.value;
    setEducationRows(values);
  };

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
