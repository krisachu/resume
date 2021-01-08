import React from "react";
import { ReactComponent as Phone } from "../images/phone.svg";
import { ReactComponent as Mail } from "../images/mail.svg";
import { ReactComponent as Location } from "../images/location.svg";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Linkedin } from "../images/linkedin.svg";
import { ReactComponent as Github } from "../images/github.svg";

const Contact = ({ contact }) => {
  return (
    <li className="contact-container">
      <Phone className="phone" />
      <h2 className="contact-information">{contact.phone}</h2>
      <Mail className="mail" />
      <h2 className="contact-information">{contact.email}</h2>
      <Location className="location" />
      <h2 className="contact-information">{contact.location}</h2>
      {/* <Home className="home" />
      <h2 className="contact-information">
        <a target="_blank" href="www.kristinawiik.com">
          {contact.website}
        </a>
      </h2>
      <Linkedin className="linkedin" />
      <h2 className="contact-information">
        <a target="_blank" href="www.linkedin.com/in/wiikkristina">
          {contact.linkedin}
        </a>
      </h2> */}
      <Github className="github" />
      <h2 className="contact-information">
        <a target="_blank" href="www.github.com/krisachu">
          {contact.github}
        </a>
      </h2>
    </li>
  );
};

export default Contact;
