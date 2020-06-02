import React, { useState } from "react";
import "./App.css";

function TextInput(props) {
  const handleFocus = (e) => {
    console.log("test");
  };

  return (
    <div className="textInputBase">
      <input
        type="text"
        placeholder={"Click here to begin"}
        className="textInputText"
        onClick={props.handleTextInputClick}
        onFocus={handleFocus}
      ></input>
    </div>
  );
}

export default TextInput;
