import React, { useState } from "react";
import TextInput from "./TextInput.js";
import AppButton from "./AppButton.js";
import { generate } from "./WordGenerator.js";
import "./App.css";

function App() {
  const initialWords = generate();
  const [currentChar, setCurrentChar] = useState("");
  const [correctCount, incrementCorrectCount] = useState(0);
  const [incorrectCount, incrementIncorrectCount] = useState(0);
  const [wpm, setWPM] = useState("0");

  const handleKeyPress = (e) => {
    console.log(e.key);
    setCurrentChar(currentChar + e.key);
  };

  const handleReset = () => {
    setCurrentChar("Click here to begin");
  };

  const calculateWPM = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Typing Test</h1>
        <TextInput
          text={currentChar}
          handleKeyPress={handleKeyPress}
        ></TextInput>
        <div className="break"></div>
        <p id="wpm">{wpm} wpm</p>
        <AppButton text={"Reset"} onClick={handleReset}></AppButton>
      </header>
    </div>
  );
}

export default App;
