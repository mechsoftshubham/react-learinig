import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowClick = () => {
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            placeholder="Enter text here"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === "dark" ? "#042743" : "white", color: props.mode === "dark" ? "white" : "black", caretColor: props.mode === "dark" ? "white" : "black" }}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
          <div className="container">
            {/* convert to uppercase  */}
            <button disabled={text.length === 0} className="btn btn-primary my-3 mx-1" type="submit" onClick={handleUpClick}>
              Convert to Uppercase
            </button>

            {/* convert to lowercase  */}
            <button disabled={text.length === 0} className="btn btn-primary my-3 mx-1" type="submit" onClick={handleLowClick}>
              Convert to Lowercase
            </button>
          </div>
        </div>
      </div>

      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>Your text summary</h1>
        <p>
          {text.split(/\s+/).filter((element) => { return element.length !== 0; }).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0; }).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text === "" ? "Nothing to preview" : text}</p>
      </div>
    </>
  );
}
