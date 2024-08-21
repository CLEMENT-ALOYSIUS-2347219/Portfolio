import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Clement Aloysius G </span>
            from <span className="purple"> Christ University , Bengaluru </span> currently pusuing my <span className="purple"> MCA </span>.
            <br />
            A passionate front-end developer with a strong focus on creating intuitive and responsive user interfaces..
            
            With a solid foundation in computer science and extensive experience in front-end technologies, I am dedicated to enhancing user experiences through innovative design and development. My expertise lies in building engaging, user-friendly applications and contributing to teams driven by a desire to push the boundaries of web development.
            <br />
            
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Batmiton
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Clement</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
