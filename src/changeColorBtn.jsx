"use strict";
import ChromePicker from "react-color";
import { useState } from "react";
import "./changeColorBtn.css";

export default function TopLeftButton({
  backgroundColor,
  textColor,
  handleChangeBackgroundColor,
  handleChangeTextColor,
}) {
  const [displayFirstColorPicker, setDisplayFirstColorPicker] = useState(false);
  const [displaySecondColorPicker, setDisplaySecondColorPicker] =
    useState(false);

  const handleClickFirst = () => {
    setDisplayFirstColorPicker(true);
  };

  const handleFirstClose = () => {
    setDisplayFirstColorPicker(false);
  };

  const handleSecondClick = () => {
    setDisplaySecondColorPicker(true);
  };

  const handleSecondClose = () => {
    setDisplaySecondColorPicker(false);
  };

  return (
    <div className="settingsButtonContainer">
      <button className="settingsButton" onClick={handleClickFirst}>
        <h3 className="settingsButtonText">Change CV-color</h3>
      </button>
      {displayFirstColorPicker ? (
        <div
          style={{
            position: "absolute",
            zIndex: "2",
          }}
        >
          <div
            style={{
              position: "fixed",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
            onClick={handleFirstClose}
          />
          <ChromePicker
            color={backgroundColor}
            onChange={handleChangeBackgroundColor}
          />
        </div>
      ) : null}

      <button className="settingsButton" onClick={handleSecondClick}>
        <h3>Change text color</h3>
      </button>
      {displaySecondColorPicker ? (
        <div
          style={{
            position: "absolute",
            zIndex: "2",
          }}
        >
          <div
            style={{
              position: "fixed",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
            onClick={handleSecondClose}
          />
          <ChromePicker color={textColor} onChange={handleChangeTextColor} />
        </div>
      ) : null}
    </div>
  );
}
