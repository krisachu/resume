import React from "react";

const Experience = ({ experience }) => {
    return (
    <li>
        <h3>{experience.title} {experience.startTime} - {experience.endTime}</h3>
        <p>{experience.description} {experience.organization}</p>
    </li>
    )
}

export default Experience;