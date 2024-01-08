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
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/pawan1816/expence_tracker"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StickyNavbar}
              isBlog={false}
              title="Sticky navBar"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              hLink="https://github.com/pawan1816/StickyNavbar"
              demoLink="https://pawan1816.github.io/StickyNavbar/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Stop_Watch}
              isBlog={false}
              title="Stop Watch"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              g
              ghLink="https://github.com/pawan1816/stop_watch"
              demoLink="https://pawan1816.github.io/stop_watch/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BackGround_changer}
              isBlog={false}
              title="BackGround Changer"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/pawan1816/BackgroundChanger"
              demoLink="https://pawan1816.github.io/BackgroundChanger/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Word_Counter}
              isBlog={false}
              title="Word Counter"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
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
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
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
