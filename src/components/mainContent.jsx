import { useState } from "react";
import TopLeftButton from "./changeColorBtn";
import TitleAndInputs from "./titleAndInputs";
import ExperienceInputs from "./educationSection";
import "../styles/mainContent.css";
import "../styles/titleAndInputs.css";

// abstract usestate to manage input-objects. They are mainly the same
const handleState = (stateToUse) => {
  const [state, setState] = useState(stateToUse);

  const handleAddState = () => {
    setState([
      ...state,
      {
        experience: "",
        title: "",
        "start date": "",
        "end date": "",
        location: "",
        id: crypto.randomUUID(),
        description: "",
      },
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
      "User name": "Robin Ryan",
      Location: "Sweden",
      "Phone number": "+74 123 392 09",
      "Email Address": "robinsMadeUpMail@email.com",
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
      "company name": "EA Digital Illusions CE AB",
      title: "Game developer",
      "start date": "04/20/2019",
      "end date": "present",
      location: "Sweden",
      id: crypto.randomUUID(),
      description:
        "My first job as a developer was with games, which was stationed in Stockholm, Sweden. I am still here, and enjoy the job as it is.",
    },
  ]);

  const {
    state: educationRows,
    handleAddState: handleAddEducationRow,
    handleRemoveState: handleRemoveEducationRow,
    handleStateChange: handleEducationChange,
  } = handleState([
    {
      "school / university": "Ljud och Bildskolan",
      "degree / field of study": "Game design",
      "start date": "09/01/2012",
      "end date": "07/23/2015",
      location: "Sweden",
      id: crypto.randomUUID(),
    },
  ]);

  const [textAreaTextWorkExperience, setTextAreaTextWorkExperience] =
    useState("");

  const [activeSection, setActiveSection] = useState(null);

  const [backgroundColor, setBackgroundColor] = useState(
    "rgba(173, 216, 230, 0.3)"
  );
  const [textColor, setTextColor] = useState("rgba(1, 1, 1, 1)");

  const handleChangeBackgroundColor = (newColor) => {
    const rgbaColor = `rgba(${newColor.rgb.r}, ${newColor.rgb.g}, ${newColor.rgb.b}, ${newColor.rgb.a})`;
    console.log(rgbaColor);
    setBackgroundColor(rgbaColor);
  };

  const handleChangeTextColor = (newColor) => {
    const rgbaColor = `rgba(${newColor.rgb.r}, ${newColor.rgb.g}, ${newColor.rgb.b}, ${newColor.rgb.a})`;
    setTextColor(rgbaColor);
  };

  return (
    <div>
      <TopLeftButton
        backgroundColor={backgroundColor}
        handleChangeBackgroundColor={handleChangeBackgroundColor}
        textColor={textColor}
        handleChangeTextColor={handleChangeTextColor}
      />
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
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            textAreaText={textAreaTextWorkExperience}
            setTextAreaText={setTextAreaTextWorkExperience}
          />
          <ExperienceInputs
            titleType={"Education"}
            rows={educationRows}
            handleAddRow={handleAddEducationRow}
            handleRemoveRow={handleRemoveEducationRow}
            handleChange={handleEducationChange}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>

        <div className="rightContent contentSection">
          <TitleAndInputs
            rows={nameRows}
            handleNameChange={handleNamesRowChange}
            backgroundC={backgroundColor}
            textC={textColor}
          />

          <h2
            className="rightTitle"
            style={{ backgroundColor: backgroundColor, color: textColor }}
          >
            <div>Education</div>
          </h2>

          <ExperienceInputs
            rows={educationRows}
            handleAddRow={handleAddEducationRow}
            handleRemoveRow={handleRemoveEducationRow}
            handleChange={handleEducationChange}
          />

          <h2
            className="rightTitle"
            style={{ backgroundColor: backgroundColor, color: textColor }}
          >
            <div>Work experience</div>
          </h2>
          <ExperienceInputs
            rows={experienceRows}
            handleAddRow={handleAddExperienceRow}
            handleRemoveRow={handleRemoveExperienceRow}
            handleChange={handleExperienceChange}
            textAreaText={textAreaTextWorkExperience}
            setTextAreaText={setTextAreaTextWorkExperience}
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
