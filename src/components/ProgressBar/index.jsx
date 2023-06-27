import React from "react";
import "./index.scss";
const ProgressBar = ({}) => {
  const percentage = 50;
  const degree = 45 + percentage * 1.8;
  return (
    <div className="progress">
      <div className="barOverflow">
        <div className="bar" style={{ transform: `rotate(${degree}deg)` }} />
      </div>
      <span>100</span>%
    </div>
  );
};

export default ProgressBar;
