import React, { useState, useEffect } from "react";
import Clouds from './Clouds.png';
import Sun from './Sun.png';
import Rain from './Rain.png';

function EmojeeCounter(props) {
  console.log("pic is ", props.pic);

  const [pic, setPic] = useState(Rain);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("function called", props.pic);

    if (props.pic === "Rain") {
      setPic(Love);
    } 
    else if (props.pic === "Clouds") {
      setPic(Like);
    } 
    else if (props.pic === "Sun") {
      setPic(Sad);
    }
  }, [props.pic]);

  const ClickHandle = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <p>
        {props.pic} <span></span>
        <button onClick={ClickHandle}>{count}</button>
        <img src={pic} alt="" />
      </p>
    </div>
  );
}

export default EmojeeCounter;
