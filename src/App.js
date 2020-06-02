import React, { useState } from "react";
import TextInput from "./TextInput.js";
import AppButton from "./AppButton.js";
import "./App.css";

function App() {
  const [wordQueue, setWordQueue] = useState("Test Test Test");
  const [currentWord, setCurrentWord] = useState("");
  const [correctCount, incrementCorrectCount] = useState(0);
  const [incorrectCount, incrementIncorrectCount] = useState(0);
  const [wpm, setWPM] = useState("0");

  const handleKeyPress = (e) => {
    setCurrentWord(currentWord + e.key);
  };

  const handleTextInputClick = (e) => {
    setCurrentWord(currentWord);
  };

  const handleReset = () => {
    setCurrentWord("Click here to begin");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Typing Test</h1>
        <TextInput
          text={currentWord}
          handleTextInputClick={handleTextInputClick}
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
