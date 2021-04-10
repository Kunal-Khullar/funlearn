import React, { useState } from "react";
import Mynav from "../../components/navbar/Mynav";
import "./landing.css";
import { Row, Col, Button, Modal } from "react-bootstrap";
import Footer from '../../components/footer/Footer'
import Login from '../../components/login/Login'

const Landing = () => {
  return (
    
    <div>
  <Mynav/>
  
      <div
        className="top_container"
        id="top"
       
      >
        <Row>
          <Col>
            <h1>
              Experience <span id="span1">learning</span>
              on your own <span id="span2">terms.</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
            <Button variant="outline-light">
              Register
            </Button>
          </Col>
          <Col>
          <img src={gifImage} alt=""></img>
          </Col>
        </Row>
      </div>
      <div className="mid_container" id="mid">
        <Row>
          <Col>
            <div
              className="services"
              
            >
              <div className="imgcontainer1">
                <img src="https://img.icons8.com/dusk/64/000000/e-learning.png" />
              </div>
              <div className="des">
                <h2>Learn</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry ever since the 1500s.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div
              className="services"
             
            >
              <div className="imgcontainer2">
                <img src="https://img.icons8.com/plasticine/100/000000/teacher.png" />
              </div>
              <div className="des">
                <h2>Teach</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry ever since the 1500s.
                </p>
                {/* 
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
              </div>
            </div>
          </Col>
          <Col>
            <div
              className="services"
          
            >
              <div className="imgcontainer3">
                <img src="https://img.icons8.com/flat-round/64/000000/three-stars.png" />
              </div>
              <div className="des">
                <h2>Grow</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry ever since the 1500s.
                </p>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
              </div>
            </div>
          </Col>
        </Row>
      </div>
     <Footer></Footer>
     
    </div>
  );
};

export default Landing;
