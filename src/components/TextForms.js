import React, { useState } from "react";
// useState is important in the project
export default function TextForms(props) {
  const [text, setText] = useState("");
  const [color, setColor] = useState("black");
  const [background, setBackground] = useState("");
  const [font, setFont] = useState("Arial");
  const [align, setAlign] = useState("");

  //ye function text ko UpperCase mein dikhayega!
  const Upclick = () => {
    // console.log("Uppercase was Clicked! " + text);
    let upc = text.toUpperCase();
    setText(upc);
    props.showAlert("Converting to UpperCase!","success")
  };
  //ye function text ko LowerCase mein dikhayega!
  const handOnClick = () => {
    // console.log("LowerCase was Clicked! " + text);
    let upc = text.toLowerCase();
    setText(upc);
    props.showAlert("Converting to LowerCase!","success")
  };

  const OnClear = () => {
    // console.log("LowerCase was Clicked! " + text);
    let upc = "";
    setText(upc);
  };
  const OnRed = () => {
    setColor("red");
  };
  const OnWhite = () => {
    setColor("white");
  };
  const backRed = () => {
    setBackground("red");
  };
  const OnBlue = () => {
    setColor("blue");
  };
  const backBlue = () => {
    setBackground("blue");
  };
  const cFont = () => {
    setFont("Monospace");
  };
  const copyText = () => {
    let text = document.getElementById("box");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges()
  };
  const ceFont = () => {
    setAlign("center");
  };
  //is function ki madad se hum textarea mein text likh skte hai(event)
  const handleOnchange = (event) => {
    // console.log("Text likha ja rha hai");
    setText(event.target.value);
  };
  const ext = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="box"
            value={text}
            style={{
              color: color,
              background: background,
              fontFamily: font,
              textAlign: align,
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
              // eslint-disable-next-line no-dupe-keys
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnchange}
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={Upclick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handOnClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={OnClear}>
          Clear text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={OnRed}>
          change to red
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={OnWhite}>
          change to white
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={OnBlue}>
          change to blue
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={backRed}>
          background red
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={backBlue}>
          background blue
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={cFont}>
          Change font
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={ceFont}>
          Center the text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={copyText}>
          Copy text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={ext}>
          Remove-Extra-Space
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}Word and {text.length}Character
        </p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Nothing to preview."}</p>
      </div>
    </>
  );
}
