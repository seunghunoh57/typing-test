import React, { useState } from "react";
import "./App.css";

function AppButton(props) {
  return (
    <div className="button reset" onClick={props.onClick}>
      {props.text}
    </div>
  );
}

export default AppButton;
