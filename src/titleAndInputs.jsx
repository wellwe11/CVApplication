import "./titleAndInputs.css";

export default function TitleAndInputs({ rows, handleNameChange }) {
  return (
    <div className="headerInputs">
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
            />
          </div>
        ))
      )}
    </div>
  );
}
