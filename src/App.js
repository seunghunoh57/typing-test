import React, { useState } from "react";
import useKeyPress from "./useKeyPress.js";
import { currentTime } from "./time.js";
import { generate } from "./wordGenerator.js";
import "./App.css";

function App() {
  const words = generate();
  const [leftPadding, setLeftPadding] = useState(
    new Array(30).fill(" ").join(" ")
  );
  const [outgoingChars, setOutgoingChars] = useState("");
  const [currentChar, setCurrentChar] = useState(words.charAt(0));
  const [incomingChars, setIncomingChars] = useState(words.substr(1));
  const [timer, setTimer] = useState();
  const [wpm, setWPM] = useState("0");
  // const [accuracy, setAccuracy] = useState("0");

  useKeyPress((key) => {
    if (!timer) {
      setTimer(currentTime());
    }
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

      if (currentChar === " ") {
        const timeInMins = (currentTime() - timer) / 60000.0;
        setWPM((updatedOutgoingChars.length / (5 * timeInMins)).toFixed(2));
      }
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Typing Test</h1>
        <div className="textInputBase" onKeyPress={useKeyPress}>
          <span className="outgoingText correct-text">
            {(leftPadding + outgoingChars).slice(-30)}
          </span>
          <span className="currentChar">{currentChar}</span>
          <span className="incomingText">{incomingChars.substr(0, 30)}</span>
        </div>
        <p id="wpm">{wpm} wpm</p>
      </header>
    </div>
  );
}

export default App;
