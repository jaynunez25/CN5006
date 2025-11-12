import React from 'react';
import './App.css';

function AppColor(props) {
  function greetUser(e) {
    document.body.style.background = e.target.value;
    alert("Welcome Mr " + document.getElementById(props.color).value);
  }

  return (
    <div className="App" style={{ backgroundColor: 'powderblue', color: 'black', padding: '20px', margin: '10px' }}>
      <h1>{props.heading}</h1>
      <p style={{ color: 'blue', fontSize: '20px', fontFamily: 'Arial' }}>
        How to create function component.
      </p>
      <label className="label" id="lbl">{props.lbl}</label>
      <input id={props.color} type="text" />
      <button value={props.color} onClick={greetUser}>
        Colour me {props.color}
      </button>
    </div>
  );
}

export default AppColor;
