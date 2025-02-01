import "./educationSection.css";
import "./educationSectionTwo.css";

export default function ExperienceInputs({
  Type,
  former,
  rows,
  handleAddRow,
  handleRemoveRow,
  handleExperienceChange,
  experienceType,
  titleType,
  dateTypeStart,
  dateTypeEnd,
}) {
  return (
    <div className="experienceSection">
      <h2>{former}</h2>
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
              <Type
                type="text"
                value={row[experienceType] || ""}
                onChange={(e) =>
                  handleExperienceChange(e, index, experienceType)
                }
                placeholder={experienceType}
                className="experienceInputType"
              />
            </div>
            <div className="experiencePosition">
              <Type
                type="text"
                value={row[titleType] || ""}
                onChange={(e) => handleExperienceChange(e, index, titleType)}
                placeholder={titleType}
                className="experiencePositionClass"
              />
            </div>
            <div className="experienceDateContainer">
              <Type
                type="text"
                value={row[dateTypeStart] || ""}
                onChange={(e) =>
                  handleExperienceChange(e, index, dateTypeStart)
                }
                className="experienceDate"
              />
              <p>-</p>
              <Type
                type="text"
                value={row[dateTypeEnd] || ""}
                onChange={(e) => handleExperienceChange(e, index, dateTypeEnd)}
                className="experienceDate"
              />
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
