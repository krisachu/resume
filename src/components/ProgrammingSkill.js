import React, { useState, useEffect } from 'react';


const ProgrammingSkill = ({ programming }) => {

const [hasLoaded, setHasLoaded] = useState(false)

useEffect(() => {
    setHasLoaded(true) 
  }, [])

  return (
    <li className="skill-container">
      <p className="skill-name-programming"> {programming.language} </p>
      <div className="skill-bar-base">
        <div className={`skill-bar-filler ${programming.id}`}
          style={{ width: hasLoaded ? `${programming.level}%` : 0 }} >
        </div>
      </div>
    </li>
  );
};

export default ProgrammingSkill;
