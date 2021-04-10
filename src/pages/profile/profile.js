import React, { useState, useEffect } from "react";
import Navhome from "../../components/navbar/Navhome";
import "./profile.css";
import { db } from "../../firebase";
import { Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useHistory, useParams } from "react-router-dom";
import { io } from "socket.io-client";
const socket = io("http://localhost:5000");

AOS.init();

const Home = () => {
  const history = useHistory();
  const params = useParams();
  console.log(params);
  const [user_name, setName] = useState("Kunal Khullar");
  const [edu, setEdu] = useState("Bachelor's");
  const [field, setField] = useState("Web Development");
  const [coach, setCoach] = useState(0);
  const [socketId, setSocketId] = useState("");
  useEffect(() => {
    socket.on("me", (id) => setSocketId(id));
  }, []);
  useEffect(() => {
    db.collection(params.id)
      .doc("profile")
      .get()
      .then(function (doc) {
        console.log(doc.data());
        setName(doc.data().name);
        setEdu(doc.data().qualify);
        setField(doc.data().interest);
        setCoach(doc.data().creds);
      });
  }, [params]);
  return (
    <div>
      <Navhome />
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
                Doubts Solved :<h6>{coach}</h6>
              </h5>
              <h5>
                Video id:<h6>{socketId}</h6>
              </h5>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
