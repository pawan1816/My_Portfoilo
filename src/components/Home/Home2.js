import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/animation2.gif";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A Short Story about <span className="purple"> Me </span> and my <span className="purple"> Codoing </span> journey
            </h1>
            <p className="home-about-body">
              From the very begining of my 11th standard, I always curous about computer and Programming Languge,where i learn <span className="purple"> C++ </span> at very first time. That time i learned about c++ syntex,oops and basic programing.
              <br />
              <br />
              After 12th SomeHow I am not able to crack the jee mains,But i never lose hope and instead to taking gap year I decidede to take admission on private collage, and that is LPU.
              <br />
              <br />
              After taking admission in LPU I have learn <b className="purple">Java </b>in 1st year, <b className="purple">DSA</b> in 2nd year.
              I have also taken a course of DSA Self Placed form geeksforgeeks where i have more then <b className="purple">700+ DSA </b>question on summer term of end of 2nd year.
              On the same time i have also taken <b className="purple">web development course and training</b> from internshala, where i score more then 70% in the final test.where i learned <b className="purple">HTML </b> , <b className="purple">CSS</b> , 
              <b className="purple">JavaScript </b>,<b className="purple">Bootstrap</b>,<b className="purple">PHP </b> and <b className="purple">React</b>.
              <br />
              <br />
               During 3rd year, 5th semester I learn <b className="purple">Data Science</b>, Because of specialization in Data Science.
               And my Minor is <b className="purple">Cyber Security Law</b>.
              <br />
              <br />
              During my 6th and 7th semester I learned <b className="purple">NLP Natural Language Processing</b>, <b className="purple">Machine Learning</b>, <b className="purple">Deep Learning</b> and <b className="purple">Big Data</b>.
              <br />
              <br />
              Now I am currently coding on various plateform like leetcode,geeksforgeeks,hackerrank,etc.
              Till Now I have solved <b className="purple">350+ DSA </b> question on leetcode and <b className="purple">750+ DSA </b>question on geeksforgeeks.
              <br/>
              <br/>
              <h4>At the Last <b className="purple">NEVER GIVE UP....</b></h4>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Here is Social medial Links</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/pawan1816"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/PaikPawan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pawan-kumar-paik/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pa_w_an__7/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
