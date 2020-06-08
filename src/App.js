import React, { useState } from "react";
import useKeyPress from "./useKeyPress.js";
import { currentTime } from "./time.js";
import { generate } from "./wordGenerator.js";
import "./App.css";

function App() {
  // List of hooks
  const words = generate();
  const [leftPadding, setLeftPadding] = useState(
    new Array(30).fill(" ").join(" ")
  );
  const [outgoingChars, setOutgoingChars] = useState("");
  const [currentChar, setCurrentChar] = useState(words.charAt(0));
  const [incomingChars, setIncomingChars] = useState(words.substr(1));
  const [timer, setTimer] = useState();
  const [wpm, setWPM] = useState("0");
  const [typedChars, setTypedChars] = useState("");
  const [accuracy, setAccuracy] = useState("0");
  const [correct, setCorrect] = useState(true);

  // Key press function with callback "key", the pressed key
  // Hooks are used to make appropriate data changes
  useKeyPress((key) => {
    if (!timer) {
      setTimer(currentTime());
    }
    let updatedOutgoingChars = outgoingChars;
    let updatedIncomingChars = incomingChars;
    let updatedTypedChars = typedChars + key;

    if (key === currentChar) {
      setCorrect(true);
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
    } else {
      console.log("test");
      setCorrect(false);
    }
    setTypedChars(updatedTypedChars);
    setAccuracy(
      ((updatedOutgoingChars.length * 100) / updatedTypedChars.length).toFixed(
        2
      )
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>typing test</h1>
        <div className="textInputBase" onKeyPress={useKeyPress}>
          <span className="outgoingText correct-text">
            {(leftPadding + outgoingChars).slice(-30)}
          </span>
          <span className={correct ? "currentChar" : "incorrect-text"}>
            {currentChar}
          </span>
          <span className="incomingText">{incomingChars.substr(0, 30)}</span>
        </div>
        <p id="results">
          {wpm} wpm | {accuracy}% acc
        </p>
      </header>
    </div>
  );
}

export default App;
