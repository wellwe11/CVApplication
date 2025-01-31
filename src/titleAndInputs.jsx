import { useState } from "react";
import "./TitleAndInputs.css";

//
const TitleText = ({ value }) => {
  return (
    <h2 value={value} className="titleName">
      Welcome{value}
    </h2>
  );
};

const AllButCurentInputDisplayed = ({ title, handleTitleSelect }) => {
  return (
    <div className="titleSelections">
      {["Dr", "Mr", "Mrs"].map((selection) => (
        <button
          key={selection}
          onClick={() => handleTitleSelect(selection)}
          className={
            title === selection ? "dropdownHidden" : "dropdownDisplayed"
          }
        >
          {selection}
        </button>
      ))}
    </div>
  );
};

const ExperienceHeader = ({}) => {
  const [titleDropDown, setTitleDropDown] = useState(false);
  const [title, setTitle] = useState("Title");

  const changeDropDownValue = (e) => {
    setTitle(e);
    titleDropDownClicked();
  };

  const titleDropDownClicked = () => {
    setTitleDropDown((prev) => !prev);
  };

  return (
    <div
      className={`titleSelectorContainer ${
        titleDropDown
          ? "titleSelectorContainerActive"
          : "titleSelectorContainerInactive"
      }`}
    >
      <button onClick={titleDropDownClicked}>
        <p className="titleSelectorName">{title}</p>
      </button>
      {titleDropDown && (
        <AllButCurentInputDisplayed
          title={title}
          handleTitleSelect={(e) => changeDropDownValue(e)}
        />
      )}
    </div>
  );
};

export default function TitleAndInputs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // created dublicate for onBlur method (i know they taught us not to)
  const [fullName, setFullName] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  // updates full name with a space at start for the title
  const createFullNameWithSpaceAtStart = () => {
    setFullName(
      ` ${firstName.charAt(0).toUpperCase() + firstName.slice(1)} ${
        lastName.charAt(0).toUpperCase() + lastName.slice(1)
      }`
    );
  };

  return (
    <div className="headerAndInputsContainer">
      <TitleText value={fullName} />
      <div className="headerInputs">
        <div className="firstNameContainer">
          {<ExperienceHeader />}
          <input
            className="firstNameInput"
            type="text"
            placeholder="First Name..."
            value={firstName}
            onChange={handleFirstNameChange}
            onBlur={createFullNameWithSpaceAtStart}
            required
          />
        </div>

        <div className="lastNameContainer">
          <input
            className="firstNameInput"
            type="text"
            placeholder="Last Name..."
            value={lastName}
            onChange={handleLastNameChange}
            onBlur={createFullNameWithSpaceAtStart}
            required
          />
        </div>
        <div className="emailInputContainer">
          <input type="email" placeholder="applicant@gmail.com" required />
        </div>
        <div className="phoneNumberInputContainer">
          <input placeholder="+01 234 5678 9" />
        </div>
      </div>
    </div>
  );
}
