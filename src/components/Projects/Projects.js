import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import emotion from "../../Assets/Projects/emotion.png";

import gradglide from "../../Assets/Projects/gradglide.png";
import TermTalk from "../../Assets/Projects/termtalk.png";
import survey from "../../Assets/Projects/survey.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gradglide}
              isBlog={false}
              title="GradGlide | HTML, CSS, React, Node.js, MongoDB"
              description="Engineered a comprehensive full-stack internship hub specifically designed for university students. GradGlide streamlines the internship application process by providing an intuitive and user-friendly platform that connects students with opportunities tailored to their academic background and career goals. Leveraging modern web technologies, the platform enhances user engagement through a responsive design and dynamic features, resulting in a 25% increase in user interaction.

"
              ghLink="https://github.com/CLEMENT-ALOYSIUS-2347219/GradGlide"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TermTalk}
              isBlog={false}
              title="TermTalk AI | LangChain, LLaMA 2, Beautiful Soup, Streamlit"
              description="Architected an AI-driven platform that demystifies website terms and conditions by offering users clear, natural language explanations. This innovative solution leverages advanced AI models and web scraping techniques to transform complex legal jargon into accessible information, significantly enhancing user trust and transparency. The platform's intuitive interface and accurate interpretations have led to a 30% increase in user confidence and engagement."


              ghLink=""
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={survey}
              isBlog={false}
              title="Survey Management System | Java, Swing"
              description="Developed a robust Windows-based application designed to create and manage surveys efficiently. The system automates data collection and analysis, leading to a 40% reduction in manual processing time. With a user-friendly interface, it empowers organizational administrators to streamline survey-related tasks while providing participants with an intuitive experience. This solution enhances survey administration, promotes data-driven decision-making, and simplifies the overall process for both administrators and users."


              ghLink="https://github.com/2347253/Survey-Management-System-Swing"
              demoLink=""
            />
          </Col>




          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/CLEMENT-ALOYSIUS-2347219/Mood-Tracker.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
