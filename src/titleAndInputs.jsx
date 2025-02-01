import "./TitleAndInputs.css";

export default function TitleAndInputs({ handleNameChange, name }) {
  return (
    <div className="inputsContainer">
      <div className="headerInputs">
        <div className="nameContainer">
          <input
            className="nameInput"
            type="text"
            placeholder="Your name..."
            value={name}
            onChange={handleNameChange}
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
