import { useState } from "react";
import TitleAndInputs from "./titleAndInputs";
import "./mainContent.css";
import "./educationSection.css";
import "./CVSection.css";

function CVHeaderSection({ nameValue, emailValue, phoneValue, addressValue }) {
  return (
    <div className="CVHeaderContainer">
      <div className="nameContainer">
        <h1 value={nameValue}></h1>
      </div>
      <div className="personalInformationContainer">
        <h3 value={emailValue}></h3>
        <h3 value={phoneValue}></h3>
        <h3 value={addressValue}></h3>
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
      <h3 value={sectionTitleValue}></h3>
      <div className="CVExperienceContentContainer">
        <div className="experienceLeftBar">
          <h4 value={dateValue}></h4>
          <h4 value={locationValue}></h4>
        </div>
        <div className="experienceRightBar">
          <h4 value={titleName}></h4>
          <h4 value={degreeValue}></h4>
        </div>
      </div>
    </div>
  );
}

function ExperienceInputs({
  former,
  rows,
  handleAddRow,
  handleRemoveRow,
  handleExperienceChange,
  experienceType,
  titleType,
}) {
  return (
    <div className="experienceSection">
      <h2>{former}</h2>
      <div className="experienceInputs">
        {rows.map((row, index) => (
          <div className="experienceInput" key={index}>
            <div className="experienceHeader">
              <button onClick={() => handleRemoveRow(index)}>-</button>
              <input
                type="text"
                value={row[experienceType] || ""}
                onChange={(e) =>
                  handleExperienceChange(e, index, experienceType)
                }
                placeholder={experienceType}
              ></input>
            </div>
            <div className="experiencePosition">
              <input
                type="text"
                value={row[titleType] || ""}
                onChange={(e) => handleExperienceChange(e, index, titleType)}
                placeholder={titleType}
              ></input>
            </div>
            <div className="experienceDate">
              <input type="date"></input>
              <p>-</p>
              <input
                type="date"
                onChange={(e) => handleExperienceChange(e, index, "date")}
              ></input>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleAddRow}>+</button>
    </div>
  );
}

export default function MainContent() {
  const [rows, setRows] = useState([
    { experienceType: "", titleType: "", date: "" },
  ]);

  const handleAddRow = () => {
    setRows([...rows, { experienceType: "", titleType: "", date: "" }]);
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

  return (
    <div>
      <div className="headerContainer">
        <header>
          <h1>HeaderTitle</h1>
        </header>
      </div>
      <div className="contentContainer">
        <div className="leftContent contentSection">
          <TitleAndInputs />
          <ExperienceInputs
            experienceType={"companyName"}
            titleType={"title"}
            former={"Work experience"}
            rows={rows}
            handleAddRow={handleAddRow}
            handleRemoveRow={handleRemoveRow}
            handleExperienceChange={handleExperienceChange}
          />
          <ExperienceInputs
            experienceType={"SchoolName"}
            titleType={"studies"}
            former={"Education"}
            rows={rows}
            handleAddRow={handleAddRow}
            handleRemoveRow={handleRemoveRow}
            handleExperienceChange={handleExperienceChange}
          />
        </div>
        <div className="rightContent contentSection">
          <div className="CVContainer">
            <CVHeaderSection />
            <CVExperiences />
          </div>
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
