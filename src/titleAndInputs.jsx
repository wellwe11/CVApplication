import "./titleAndInputs.css";

export default function TitleAndInputs({ rows, handleNameChange }) {
  return (
    <div className="headerInputsContainer">
      <div className="headerContainer">
        {rows.map((row, index) =>
          Object.keys(row).map((key) => (
            <div key={key + "container"}>
              <h4>{key}</h4>
              <input
                key={key}
                className={key}
                type="text"
                value={row[key]}
                placeholder={`Your ${key}...`}
                onChange={(e) => handleNameChange(e, index, key)}
                style={{
                  width:
                    row[key].length > 20
                      ? "350px"
                      : row[key].length > 15
                      ? "250px"
                      : row[key].length > 10
                      ? "200px"
                      : "100px",
                }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
