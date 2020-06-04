import React from "react";
import "./App.css";

function TextInput(props) {
  const handleFocus = (e) => {
    e.target.placeholder = "";
  };

  const handleBlur = (e) => {
    e.target.placeholder = "Click here to begin";
  };

  return (
    <div className="textInputBase">
      <input
        type="text"
        placeholder={"Click here to begin"}
        className="textInputBox"
        onKeyPress={props.handleKeyPress}
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></input>
    </div>
  );
}

export default TextInput;
