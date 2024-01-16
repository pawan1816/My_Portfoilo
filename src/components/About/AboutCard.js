import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { CgMail } from "react-icons/cg";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            This is <span className="purple">Pawan Kumar Paik </span> 
            {/* <br />
            I am currently employed as a software developer at Juspay. */}
            <br />
            Currently studying in <span className="purple">Lovely Professional university Integrated with Upgrade</span><br/>
            Degree <span className="purple">Btech (CSE)</span><br/>
            Specialization In <span className="purple">Data Science, Artificial intelligence and Machine Learning</span><br/>
            Final Year student <span className="purple"> 8th semester</span><br/>
            Gmail:- <span className="purple">paikpawan18@gmail.com</span><br/>
            Phone No:- <span className="purple">+91 6203277906</span><br/>
            Current Address:- <span className="purple">Phagwara,Punjab,India</span><br/>
            HomeTown Address:- <span className="purple">Ranchi,Jharkhand,India</span><br/>
            Language:- <span className="purple">Hindi,English</span><br/>
            <br />
            Hobbies
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket, Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Leasoning Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Consistency is the fruit of the tree of success. The more you do something effectively and with a goal in mind, the better you will get at it and the more you will feel fulfilled. "{"  :- Dan O'abrin"}
          </p>
          <footer className="blockquote-footer">Pawan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
