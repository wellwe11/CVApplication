import { useState } from "react";
import TitleAndInputs from "./titleAndInputs";
import ExperienceInputs from "./educationSection";
import "./mainContent.css";

function CVHeaderSection({ nameValue, emailValue, phoneValue, addressValue }) {
  return (
    <div className="CVHeaderContainer">
      <div className="nameContainer">
        <h1>{nameValue}</h1>
      </div>
      <div className="personalInformationContainer">
        <h3>{emailValue}</h3>
        <h3>{phoneValue}</h3>
        <h3>{addressValue}</h3>
      </div>
    </div>
  );
}

function CVExperiences({
  sectionTitleValue,
  locationValue,
  dateValue,
  titleName,
  degreeValue,
}) {
  return (
    <div className="CVExperienceContainer">
      <h3>{sectionTitleValue}</h3>
      <div className="CVExperienceContentContainer">
        <div className="experienceLeftBar">
          <h4>{dateValue}</h4>
          <h4>{locationValue}</h4>
        </div>
        <div className="experienceRightBar">
          <h4>{titleName}</h4>
          <h4>{degreeValue}</h4>
        </div>
      </div>
    </div>
  );
}

export default function MainContent() {
  const [rows, setRows] = useState([
    { experienceType: "", titleType: "", dateTypeStart: "", dateTypeEnd: "" },
  ]);

  const handleAddRow = () => {
    setRows([
      ...rows,
      { experienceType: "", titleType: "", dateTypeStart: "", dateTypeEnd: "" },
    ]);
  };

  const handleRemoveRow = (index) => {
    const temp = [...rows];
    temp.splice(index, 1);
    setRows(temp);
  };

  const handleExperienceChange = (e, index, key) => {
    const values = [...rows];
    values[index][key] = e.target.value;
    setRows(values);
  };

  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
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
          <TitleAndInputs handleNameChange={handleNameChange} name={name} />
          <ExperienceInputs
            Type="input"
            experienceType={"companyName"}
            titleType={"title"}
            dateTypeStart={"dateStart"}
            former={"Work experience"}
            rows={rows}
            handleAddRow={handleAddRow}
            handleRemoveRow={handleRemoveRow}
            handleExperienceChange={handleExperienceChange}
          />
          <ExperienceInputs
            Type="input"
            experienceType={"SchoolName"}
            titleType={"studies"}
            dateTypeEnd={"dateEnd"}
            former={"Education"}
            rows={rows}
            handleAddRow={handleAddRow}
            handleRemoveRow={handleRemoveRow}
            handleExperienceChange={handleExperienceChange}
          />
        </div>

        <div className="rightContent contentSection">
          <CVHeaderSection />
          <CVExperiences />
          <ExperienceInputs
            Type="input"
            experienceType={"companyName"}
            titleType={"title"}
            dateTypeStart={"dateStart"}
            former={"Work experience"}
            rows={rows}
            handleAddRow={handleAddRow}
            handleRemoveRow={handleRemoveRow}
            handleExperienceChange={handleExperienceChange}
          />
          <ExperienceInputs
            Type="input"
            experienceType={"SchoolName"}
            titleType={"studies"}
            dateTypeEnd={"dateEnd"}
            former={"Education"}
            rows={rows}
            handleAddRow={handleAddRow}
            handleRemoveRow={handleRemoveRow}
            handleExperienceChange={handleExperienceChange}
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
