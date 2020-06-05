import React, { useState } from "react";
import AppButton from "./AppButton.js";
import useKeyPress from "./useKeyPress.js";
import { generate } from "./WordGenerator.js";
import "./App.css";

function App() {
  const words = generate();
  const [leftPadding, setLeftPadding] = useState(
    new Array(40).fill(" ").join(" ")
  );
  const [outgoingChars, setOutgoingChars] = useState("");
  const [currentChar, setCurrentChar] = useState(words.charAt(0));
  const [incomingChars, setIncomingChars] = useState(words.substr(1));
  const [timer, setTimer] = useState();
  const [wordCount, setWordCount] = useState(0);
  const [wpm, setWPM] = useState("0");

  useKeyPress((key) => {
    console.log(key);
    let updatedOutgoingChars = outgoingChars;
    let updatedIncomingChars = incomingChars;

    if (key === currentChar) {
      if (leftPadding.length > 0) {
        setLeftPadding(leftPadding.substring(1));
      }
      updatedOutgoingChars += currentChar;
      setOutgoingChars(updatedOutgoingChars);

      setCurrentChar(incomingChars.charAt(0));
      updatedIncomingChars = incomingChars.substring(1);
      if (updatedIncomingChars.split(" ").length < 10) {
        updatedIncomingChars += " " + generate();
      }
      setIncomingChars(updatedIncomingChars);
    }
  });

  const calculateWPM = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Typing Test</h1>
        <div className="textInputBase" onKeyPress={useKeyPress}>
          <span className="outgoingText correct-text">
            {(leftPadding + outgoingChars).slice(-40)}
          </span>
          <span className="currentChar">{currentChar}</span>
          <span className="incomingText">{incomingChars.substr(0, 40)}</span>
        </div>
        <div className="break"></div>
        <p id="wpm">{wpm} wpm</p>
      </header>
    </div>
  );
}

export default App;
