import "./educationSection.css";
import "./educationSectionTwo.css";

export default function ExperienceInputs({
  rows,
  handleChange,
  handleAddRow,
  handleRemoveRow,
}) {
  return (
    <div className="experienceSection">
      <div className="experienceInputs">
        {rows.map((row, index) => (
          <div className="experienceInput" key={index}>
            <div className="experienceHeader">
              <button
                onClick={() => handleRemoveRow(index)}
                className="deleteRowButton"
              >
                -
              </button>
              <div>
                {Object.keys(row).map((key) => (
                  <input
                    key={key}
                    type="text"
                    value={row[key]}
                    placeholder={key}
                    onChange={(e) => handleChange(e, index, key)}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleAddRow} className="addRowButton">
        +
      </button>
    </div>
  );
}
