import React, { useState, useEffect, useContext } from "react";
import Navhome from "../../components/navbar/Navhome";
import "./home.css";
import { db } from "../../firebase";
import AskForm from "../../components/ask/AskForm";
import { Row, Col, Button, Modal, Carousel } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Doubt from "../../components/alldoubts/Doubt";
import { useHistory } from "react-router-dom";
import { io } from "socket.io-client";
import { UserContext } from "../../context/UserContext";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import Footer from '../../components/footer/Footer'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
const socket = io("https://video-chat-app-hack36.herokuapp.com/");

AOS.init();

const Home = () => {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const [lgShow, setLgShow] = useState(false);
  const [lgShow2, setLgShow2] = useState(false);
  const [user_name, setName] = useState("Kunal Khullar");
  const [edu, setEdu] = useState("Bachelor's");
  const [field, setField] = useState("Web Development");
  const [coach, setCoach] = useState(0);
  const [rating, setRating] = useState(null);
  const [socketId, setSocketId] = useState("");
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
    console.log(Date.now());
  };
  const updateSocketId = async (id) => {
    await db.collection(localStorage.getItem("currentUser")).doc("profile").update({ socketId: id });
  };
  useEffect(() => {
    socket.on("me", (id) => {
      setSocketId(id);
      updateSocketId(id);
    });
  }, [user]);
  useEffect(() => {
    db.collection(localStorage.getItem("currentUser"))
      .doc("profile")
      .get()
      .then(function (doc) {
        setUser(doc.data());
        setName(doc.data().name);
        setEdu(doc.data().qualify);
        setField(doc.data().interest);
        setCoach(doc.data().creds);
        setRating(doc.data().rating);
      });
  }, [setUser]);
  return (
    <div>
      <Modal
        size="lg"
        show={lgShow}
        dialogClassName="modal-40w"
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            All Queries
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time picker"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <Doubt />
        </Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={lgShow2}
        dialogClassName="modal-40w"
        onHide={() => setLgShow2(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Submit your doubt
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AskForm />
        </Modal.Body>
      </Modal>
      <Navhome creds={coach} />
      <div className="profile_section" id="top">
        <Row>
          <Col
            className="col-md-4"
            data-aos="flip-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-cubic"
          >
            <h2>Your Profile</h2>
            <div className="prof">
              <h5>
                Username :<h6>{user_name}</h6>
              </h5>
              <h5>
                Qualification:<h6>{edu}</h6>
              </h5>
              <h5>
                Field of Interest :<h6>{field}</h6>
              </h5>
              <h5>
                Doubts Solved :<h6>0</h6>
              </h5>
              <h5>
                Video id:<h6>{socketId}</h6>
              </h5>
              <Button className="mybtn2">Edit Profile</Button>
              <Button
                onClick={() => history.push("/stream")}
                className="mybtn2"
              >
                Join Meeting
              </Button>
            </div>
          </Col>
          <Col
            id="right"
            className="col-md-8"
            data-aos="flip-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-cubic"
          >
            <h5>Your Sessions{rating}</h5>
            <div className="feedback">
              <Carousel>
                <Carousel.Item>
                  <div className="allfeed">
                    <h3>11th April</h3>
                    <p>Mathematics</p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="allfeed">
                    <h3>24th April</h3>
                    <p>Chemistry</p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="allfeed">
                    <h3>18th April</h3>
                    <p>Data Structures</p>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </div>
      <div className="doubt_coach">
        <Row
          className="opt1"
          id="mid"
          data-aos="fade-down-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-cubic"
        >
          <Col>
            <img
              id="myimg1"
              src="https://image.freepik.com/free-vector/business-idea-generation-plan-development-pensive-man-with-lightbulb-cartoon-character-technical-mindset-entrepreneurial-mind-brainstorming-process_335657-2104.jpg"
              alt=""
            ></img>
          </Col>
          <Col className="rights">
            <h2>Ready to ask?</h2>
            <p>
              Just post your doubt providing the relevant information and one of
              the volunteers will contact you about that.
            </p>
            <Button onClick={setLgShow2} className="mybtn2">
              Go ahead
            </Button>
          </Col>
        </Row>
        <Row
          className="opt2"
          id="mid2"
          data-aos="fade-down-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-cubic"
        >
          <Col>
            <img
              id="myimg1"
              src="https://image.freepik.com/free-vector/online-lecturing-distance-learning-opportunities-self-education-internet-courses-e-learning-technologies_335657-3279.jpg"
              alt=""
            ></img>
          </Col>
          <Col className="rights">
            <h2>Answer a doubt</h2>
            <p>
              From a wide list of doubts, go for the one that is relevant to
              your field and drop the time you are free and a live session will
              be scheduled.
            </p>
            <Button onClick={setLgShow} className="mybtn2">
              Go ahead
            </Button>
          </Col>
        </Row>
    
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
