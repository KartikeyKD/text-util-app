import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPER CASE", "success");
  };
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied!","success");
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#181818", color: props.mode === "light" ? "black" : "white",
            }}
            onChange={handleOnChange}
            id="textBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UPPER CASE
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
          Convert to lower case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-2 "
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        {" "}
        <h3>Text Summary</h3>
        <p>
          {text.split(/\s+/).filter((element)=>{
            return element.length!==0
          }).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{
            return element.length!==0
          }).length} Minutes to read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Enter text in above text box to preview "}</p>
      </div>
    </>
  );
}
