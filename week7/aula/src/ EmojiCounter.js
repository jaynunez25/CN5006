import React, { useState, useEffect } from "react";
import Love from './love.png';
import Sad from './sad.png';
import Like from './like.png';

function EmojeeCounter(props) {
  console.log("pic is ", props.pic);

  const [pic, setPic] = useState(Love);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("function called", props.pic);

    if (props.pic === "Love") {
      setPic(Love);
    } 
    else if (props.pic === "like") {
      setPic(Like);
    } 
    else if (props.pic === "sad") {
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
