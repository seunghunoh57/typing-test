import React, { useState, useEffect } from "react";
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
	const [seconds, setSeconds] = useState(60);
	const [timerActive, setTimerActive] = useState(false);
	const [timer, setTimer] = useState();
	const [wpm, setWPM] = useState("0");
	const [typedChars, setTypedChars] = useState("");
	const [accuracy, setAccuracy] = useState("0");
	const [correct, setCorrect] = useState(true);

	useEffect(() => {
		let interval = null;
		if (timerActive) {
			if (seconds <= 0) {
				clearInterval(interval);
				setTimerActive(false);
			}
			interval = setInterval(() => {
				setSeconds((seconds) => seconds - 1);
			}, 1000);
		} else if (!timerActive && seconds !== 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [timerActive, seconds]);

	// Key press function with callback "key", the pressed key
	// Hooks are used to make appropriate data changes
	useKeyPress((key) => {
		if (!timerActive && key === "Enter") {
			setTimerActive(true);
			setSeconds(60);
			setTimer(currentTime);
		}
		let updatedOutgoingChars = outgoingChars;
		let updatedIncomingChars = incomingChars;
		let updatedTypedChars = typedChars + key;

		if (timerActive) {
			if (key === currentChar) {
				console.log(key, key.length);
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
					let timeElapsed = currentTime() - timer;
					setWPM(
						(updatedOutgoingChars.length / ((5 * timeElapsed) / 60000)).toFixed(
							2
						)
					);
				}
			} else {
				setCorrect(false);
			}
			setTypedChars(updatedTypedChars);
			setAccuracy(
				(
					(updatedOutgoingChars.length * 100) /
					updatedTypedChars.length
				).toFixed(2)
			);
		}
	});

	return (
		<div className="App">
			<header className="AppHeader">
				<h1>typing test</h1>
				<div className="textInputBase" onKeyPress={useKeyPress}>
					<span className="outgoingText correctText">
						{(leftPadding + outgoingChars).slice(-30)}
					</span>
					<span className={correct ? "currentChar" : "incorrectText"}>
						{currentChar}
					</span>
					<span className="incomingText">{incomingChars.substr(0, 30)}</span>
				</div>
				<p id="results">
					{wpm} wpm | {accuracy}% acc
				</p>
				<p>{seconds}s</p>
			</header>
		</div>
	);
}

export default App;
