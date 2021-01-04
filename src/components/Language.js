import React, { useState, useEffect } from "react";
import { ReactComponent as Star } from "../images/star.svg";
import times from "lodash/times";

const Language = ({ language }) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <li className="skill-container">
      <p className="skill-name-language"> {language.name} </p>
      <div className="progress">
        {times(5, (i) => {
          const filledStar = language.level >= i + 1;
          return (
            <Star
              className={`star ${filledStar && hasLoaded ? " filledStar" : ""}`}
              style={{ animationDelay: `${i / 4}s` }}>
            </Star>
          );
        })}
      </div>
    </li>
  );
};

export default Language;
