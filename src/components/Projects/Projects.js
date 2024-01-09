import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Word_Counter from "../../Assets/Projects/WC.png";
import Tempreture from "../../Assets/Projects/TMP.png";
import Stop_Watch from "../../Assets/Projects/ST.png";
import Expese_Tracker from "../../Assets/Projects/ET.png";
import BackGround_changer from "../../Assets/Projects/BGC.png";
import StickyNavbar from "../../Assets/Projects/STKY.png";

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
              imgPath={Expese_Tracker}
              isBlog={false}
              title="Expense Tracker"
              description="It just trake all the record when ever you expend money on any thing, Here used React, JavaScript, HTML, css, Bootstrap, and deployed on git hub."
              ghLink="https://github.com/pawan1816/expence_tracker"
              demoLink="https://pawan1816.github.io/Expense-Tracer/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StickyNavbar}
              isBlog={false}
              title="Sticky navBar"
              description="Simple nav Bar which stick to the to whenever we scrollup and makes webpage very unique. HTML, CSS and JAVASCRIPT used to make it and deployed on github"
              hLink="https://github.com/pawan1816/StickyNavbar"
              demoLink="https://pawan1816.github.io/StickyNavbar/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Stop_Watch}
              isBlog={false}
              title="Stop Watch"
              description="Just tried to copy a stop watch, here javascript and css is the major role for this "
              ghLink="https://github.com/pawan1816/stop_watch"
              demoLink="https://pawan1816.github.io/stop_watch/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BackGround_changer}
              isBlog={false}
              title="BackGround Changer"
              description="it is kind of very interesting thing like whichever you want background you can according to yourselfs "
              ghLink="https://github.com/pawan1816/BackgroundChanger"
              demoLink="https://pawan1816.github.io/BackgroundChanger/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Word_Counter}
              isBlog={false}
              title="Word Counter"
              description="It a kind of logical project where it gives the number of character and number of words as output.implemented ny using HTML,CSS, and for logical JavaScript."
              ghLink="https://github.com/pawan1816/Word-Counter"
              demoLink=" https://pawan1816.github.io/Word-Counter/" 
              //<--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tempreture}
              isBlog={false}
              title="Tempreture Convertor"
              description="Its a tricky problem we just have to apply the celcius to F- formula, used javascript for logic and css and html for visual."
              ghLink="https://github.com/pawan1816/Hotel-booking-webpage"
              demoLink="https://pawan1816.github.io/temperature-Converter/"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
