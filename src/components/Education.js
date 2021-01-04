import React from "react";

const Education = ({ education }) => {
    return (
        <li>
            <h3>{education.school} {education.startTime} - {education.endTime}</h3>
            <p>{education.degree}</p>  
        </li>
    )
}

export default Education;