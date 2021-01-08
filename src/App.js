import React from "react";
import Experience from "./components/Experience";
import Education from "./components/Education";
import About from "./components/About";
import ProgrammingSkill from "./components/ProgrammingSkill";
import SoftwareSkill from "./components/SoftwareSkill";
import Language from "./components/Language";
import Contact from "./components/Contact";
import experience from "./data/experience";
import education from "./data/education";
import programming from "./data/programming";
import software from "./data/software";
import language from "./data/language";
import { ReactComponent as Car } from "./images/car.svg";
import { ReactComponent as Singer } from "./images/singer.svg";
import { ReactComponent as Art } from "./images/art.svg";
import { ReactComponent as Gym } from "./images/gym.svg";
import profilepicture from "./images/profilepicture.jpg";
import contact from "./data/contact";

const App = () => {
  return (
    <div className="grid-container">
      <div className="item-top">
        <div className="profile-section">
          <img
            src={profilepicture}
            alt="profilepicture"
            className="profilepicture"
          />
          <div className="name">
          <h1>Kristina Wiik</h1>
          <h4>Web Development</h4>
          </div>
          <div className="contact-information-section">
            {contact.map((contact) => (
              <Contact key={contact.id} contact={contact} />
            ))}
          </div>
        </div>
      </div>
      <div className="item-left">
        <div>
          <h2>PROGRAMMING SKILLS</h2>
          <hr className="hr-item-left"></hr>
          <div>
            <ul>
              {programming.map((programming) => (
                <ProgrammingSkill
                  key={programming.id}
                  programming={programming}
                />
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h2>SOFTWARE SKILLS</h2>
          <hr className="hr-item-left"></hr>
          <div>
            <ul>
              {software.map((software) => (
                <SoftwareSkill key={software.id} software={software} />
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h2>LANGUAGES</h2>
          <hr className="hr-item-left"></hr>
          <ul>
            {language.map((language) => (
              <Language key={language.id} language={language} />
            ))}
          </ul>
        </div>
        <div>
          <h2>OTHER</h2>
          <hr className="hr-item-left"></hr>
          <div className="other">
            <Car className="car" />
            <p className="car-text">
              Driving licence,<br></br>category B, 2008
            </p>
          </div>
        </div>
        <div>
          <h2>INTERESTS</h2>
          <hr className="hr-item-left"></hr>
          <div className="interests">
            <Singer className="singer" />
            <Art className="art" />
            <Gym className="gym" />
          </div>
        </div>
      </div>
      <div className="item-right">
        <h2>ABOUT ME</h2>
        <hr></hr>
        <About />
        <h2>EDUCATION</h2>
        <hr></hr>
        <ul>
          {education.map((education) => (
            <Education key={education.id} education={education} />
          ))}
        </ul>
        <h2>EXPERIENCE</h2>
        <hr></hr>
        <ul>
          {experience.map((experience) => (
            <Experience key={experience.id} experience={experience} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
