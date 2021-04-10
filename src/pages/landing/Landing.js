import React, { useState } from "react";
import Mynav from "../../components/navbar/Mynav";
import "./landing.css";
import Register from "../../components/register/Register";
import gifImage from "./learning.gif";
import Footer from "../../components/footer/Footer";
// import Login from '../../components/login/Login'
import { fireapp, auth, db } from "../../firebase";
import { Row, Col, Button, Modal } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Landing = () => {
  const [lgShow, setLgShow] = useState(false);
  return (
    <div>
      <Modal
        size="lg"
        show={lgShow}
        dialogClassName="modal-40w"
        onHide={() => setLgShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Create an account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Register />
        </Modal.Body>
      </Modal>
      <Mynav />
      <div
        className="top_container"
        id="top"
        data-aos="flip-down"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
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
            <Button onClick={() => setLgShow(true)} variant="outline-light">
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
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-cubic"
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
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-cubic"
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
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-cubic"
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
      <div className="bot_container" id="bot">
        <div className="steps">
          <Row>
            <Col
              data-aos="zoom-out-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-cubic"
            >
              <h1>Ask your Doubts</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </Col>
            <Col>
              <img
                id="img1"
                src="https://image.freepik.com/free-vector/online-courses-concept_23-2148533386.jpg"
                alt=""
              ></img>
            </Col>
          </Row>
        </div>
        <div className="steps">
          <Row>
            <Col>
              <img
                id="img2"
                src="https://image.freepik.com/free-vector/online-learning-concept-illustration_114360-4755.jpg"
                alt=""
              ></img>
            </Col>
            <Col
              data-aos="zoom-out-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-cubic"
            >
              <h1>Resolve others' issues.</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </Col>
          </Row>
        </div>
        <div className="steps">
          <Row>
            <Col
              data-aos="zoom-out-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-cubic"
            >
              <h1>Get feedback</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </Col>
            <Col>
              <img
                id="img3"
                src="https://image.freepik.com/free-vector/online-survey-analysis-electronic-data-collection-digital-research-tool-computerized-study-analyst-considering-feedback-results-analyzing-info_335657-2385.jpg"
                alt=""
              ></img>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
