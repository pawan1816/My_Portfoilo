import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CodingCards from "./CodingCards";
import Particle from "../Particle";
import leetcode from "../../Assets/coding/leetcode.png";
import geeksforgeeks from "../../Assets/coding/GeeksForGeeks.png";
import interviewbit from "../../Assets/coding/InterviewBits.png";
import hackerrank from "../../Assets/coding/HackerRank.png";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiHackerrank } from "react-icons/si";
import { FaCode } from "react-icons/fa";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Coding Profile </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here I usualy solve the coding question 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CodingCards
              imgPath={ leetcode  }
              isBlog={false}
              title="Leetcode"
              description="Solved 350+ DSA Question including hard dsa like Graph,Tree,Dynamic Programming"
              ghLink="https://leetcode.com/paikpawan18/"
              symbol=<SiLeetcode />
              profile="Leetcode"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <CodingCards
              imgPath={ geeksforgeeks }
              isBlog={false}
              title="Geeks For Geeks"
              description="solved around 700 dsa question"
              ghLink="https://auth.geeksforgeeks.org/user/paikpawan18"
              symbol=<SiGeeksforgeeks />
              profile="Geeks For Geeks"

              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <CodingCards
              imgPath={ interviewbit  }
              isBlog={false}
              title="InterviewBits"
              description="Master On c++"
              ghLink="https://www.interviewbit.com/profile/pawan-kumar-paik/"
              symbol=<FaCode />
              profile="InterView Bits"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <CodingCards
              imgPath={ hackerrank }
              isBlog={false}
              title="Hacker Rank"
              description="3 star on problem solving,5 star in c++,3 star in java and python"
              ghLink="https://www.hackerrank.com/profile/paikpawan18"
              symbol=<SiHackerrank />
              profile="Hacker Rank"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;