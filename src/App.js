import React, { useState } from "react";
import TextInput from "./TextInput.js";
import "./App.css";

function App() {
  const [wordQueue, setWordQueue] = useState("Test Test Test");
  const [currentWord, setCurrentWord] = useState("Here");
  const [correctCount, incrementCorrectCount] = useState(0);
  const [incorrectCount, incrementIncorrectCount] = useState(0);

  const handleKeyPress = (e) => {
    setCurrentWord(currentWord + "e");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Typing Test</h1>
        <p className="correct-text" onClick={handleKeyPress}>
          {currentWord}
        </p>
        <TextInput></TextInput>
        <p>Reset</p>
      </header>
    </div>
  );
}

export default App;
