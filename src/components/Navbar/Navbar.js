import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
    const [color, setColor] = useState("green");
    const [state, setState] = useState("Play");
    const toggle = () => {
      setColor((prevColor) =>
        prevColor === "green" ? "red" : "green"
      );
      setState((prevState) =>
        prevState === "Play" ? "Pause" :"Play"
      );
    };
  return (
    <div className="Navbar">
      <h1>Size of Array :</h1>
      <input type="number" maxLength="2"></input>
      <h1>Algorithm : </h1>
      <label for="options"></label>
      <select id="options" name="options">
        <option value="option1">Bubble Sort</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
      </select>
      <button className="play-pause" onClick={toggle} style={{backgroundColor:color}}>
        <h2>{state}</h2>
      </button>
      <button className="fbf">
        <h2>Next</h2>
      </button>
    </div>
  );
}
