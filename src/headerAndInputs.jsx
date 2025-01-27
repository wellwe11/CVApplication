import { useState } from "react";
import "./headerAndInputs.css";

//
const TitleText = ({ value }) => {
  return (
    <h1 value={value} className="titleName">
      Welcome{value || "!"}
    </h1>
  );
};

export default function HeaderAndInputs() {
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
          <h4>First Name: </h4>
          <input
            className="firstNameInput"
            type="text"
            placeholder="First Name..."
            value={firstName}
            onChange={handleFirstNameChange}
            onBlur={createFullNameWithSpaceAtStart}
          />
        </div>

        <div className="lastNameContainer">
          <h4>Last Name: </h4>
          <input
            className="firstNameInput"
            type="text"
            placeholder="Last Name..."
            value={lastName}
            onChange={handleLastNameChange}
            onBlur={createFullNameWithSpaceAtStart}
          />
        </div>
      </div>
    </div>
  );
}
