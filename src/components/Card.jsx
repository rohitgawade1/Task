import React, { useState } from "react";
import "./card.css";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const Card = ({ que1, que2, que3 }) => {
  const arr = [que1, que2, que3];

  const [count, setCount] = useState(0);
    // var i = 1;
  const handleNext = () => {
    if (count < 2) {
        setCount(count+1)
    }
  };

  const handlePrevious = () => {
    if (count > 0) {
        setCount(count-1)
    }
  };
  return (
    <MathJaxContext>
      <div className="Card">
        <h1 className="heading">Question {count+1}</h1>
        <MathJax>
          {arr[count]}
        </MathJax>
        <div className="btns">
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default Card;
