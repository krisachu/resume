import React, { useState, useEffect } from "react";
import times from "lodash/times";

const SoftwareSkill = ({ software }) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <li className="skill-container">
      <p className="skill-name-software"> {software.name} </p>
      <div className="progress">
        {times(5, (i) => {
          const filledDot = software.level >= i + 1;
          return (
            <span
              className={`dot ${filledDot && hasLoaded ? " filledDot" : ""}`}
              style={{ animationDelay: `${i / 4}s` } } key={i}>
            </span>
          );
        })}
      </div>
    </li>
  );
};

export default SoftwareSkill;
