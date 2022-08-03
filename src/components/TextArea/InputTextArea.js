import React, { useState } from "react";

import "./InputTextArea.css";

export default function InputTextArea(props) {
  const [inputText, setInputText] = useState("This is sample text...");
  const [repeatCount, setRepeatCount] = useState(1);
  const [findWord, setFindWord] = useState("");
  const [ReplaceWord, setReplaceWord] = useState("");

  const handleInputTextChange = (event) => {
    setInputText(event.target.value);
  };

  function handleUpperClick() {
    let upperCaseText = inputText.toUpperCase();
    setInputText(upperCaseText);
    // <OutputTextArea text={inputText}/>
  }

  function handleLowerClick() {
    let lowerCaseText = inputText.toLowerCase();
    setInputText(lowerCaseText);
  }

  const handleRepeatCount = (event) => {
    setRepeatCount(event.target.value);
  };

  function handleRepeatText() {
    let repeatedText = inputText.repeat(repeatCount);
    setInputText(repeatedText);
  }

  function handleClearClick() {
    setInputText("");
  }

  const handleFindWord = (event) => {
    setFindWord(event.target.value);
  }

  const handleReplaceWord = (event) => {
    setReplaceWord(event.target.value);
  }

  function handleReplaceEach() {
    let replacedText = inputText.replace(findWord, ReplaceWord);
    setInputText(replacedText);
  }

  return (
    <div className="mb-3">
      {/* Input Text Area UI */}
      <h2 className={`my-2 text-${props.textStyle}`}>Analyze & Manipulate Your Text Below</h2>
      <textarea
        className="mt-4 form-control"
        style={{backgroundColor: props.textStyle==='light'?'grey':'white', color: props.textStyle==='light'?'white':'black'}}
        id="exampleFormControlTextarea1"
        rows="8"
        placeholder="Input Text Here..."
        onChange={handleInputTextChange}
      ></textarea>

      {/* Upper Case Button UI */}
      <input
        type="button"
        value="To Upper Case"
        onClick={handleUpperClick}
        className="mt-4 btn btn-primary"
      />

      {/* Lower Case Button UI */}
      <input
        type="button"
        value="To Lower Case"
        onClick={handleLowerClick}
        className="mt-4 btn btn-primary margin-left"
      />

      {/* Repeat Text Button UI */}
      <div className="mt-4 btn-group margin-left">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={handleRepeatText}
        >
          Repeat Text
        </button>
        <ul className="dropdown-menu">
          <li>
            <div className="dropdown-item">
              <input
                type="text"
                value={repeatCount}
                onChange={handleRepeatCount}
              />{" "}
              Times
            </div>
          </li>
        </ul>
      </div>

            {/* Replace Each Button UI */}
            <div className="mt-4 btn-group margin-left">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={handleReplaceEach}
        >
          Replace Each
        </button>
        <ul className="dropdown-menu">
          <li>
            <div className="dropdown-item">
              <input
                type="text"
                value={findWord}
                placeholder="Find"
                onChange={handleFindWord}
              />{" "}
            </div>
          </li>
          <li>
            <div className="dropdown-item">
              <input
                type="text"
                value={ReplaceWord}
                placeholder="Replace With"
                onChange={handleReplaceWord}
              />{" "}
            </div>
          </li>
        </ul>
      </div>

      {/* Clear Button UI */}
      <input
        type="button"
        value="Clear All"
        onClick={handleClearClick}
        className="mt-4 btn btn-danger margin-left"
      />

      {/* Text Summary and Preview Manipulated Text*/}
      <h4 className={`my-4 text-${props.textStyle}`}>Text Summary</h4>
      <p className={`text-${props.textStyle}`}>
        {inputText.split(" ").length} words {inputText.length} charecters
      </p>
      <h4 className={`my-4 text-${props.textStyle}`}>Preview</h4>
      <textarea
        className="mt-4 form-control"
        id="exampleFormControlTextarea1"
        rows="8"
        style={{backgroundColor: props.textStyle==='light'?'grey':'white', color: props.textStyle==='light'?'white':'black'}}
        placeholder="Output Text Here..."
        value={inputText}
        onChange={handleInputTextChange}
      ></textarea>
    </div>
  );
}
