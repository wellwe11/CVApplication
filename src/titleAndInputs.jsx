import "./titleAndInputs.css";

export default function TitleAndInputs({
  rows,
  handleNameChange,
  backgroundC,
  textC,
}) {
  return (
    <div
      className="headerInputsContainer"
      style={{ backgroundColor: `${backgroundC}` }}
    >
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
                onChange={(e) => {
                  handleNameChange(e, index, key);
                }}
                style={{
                  minWidth: "60px",
                  maxWidth: key === "User name" ? "550px" : "300px",
                  width:
                    key === "User name"
                      ? `${row[key].length * 20}px`
                      : `${row[key].length * 10 + 10}px`,
                  transition: "width 0.2s ease",
                  color: `${textC}`,
                }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
