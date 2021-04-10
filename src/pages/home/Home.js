import React,{useState} from 'react'
import Navhome from '../../components/navbar/Navhome'
import './home.css'

import AskForm from '../../components/ask/AskForm'
import {Row,Col, Button,Modal,Carousel} from 'react-bootstrap'
import AOS from "aos";
import "aos/dist/aos.css";
import Doubt from '../../components/alldoubts/Doubt'
AOS.init();
const Home = () => {
    const [lgShow, setLgShow] = useState(false);
    const [lgShow2, setLgShow2] = useState(false);
    const [user_name,setName] = useState("Kunal Khullar");
    const [edu,setEdu] = useState("Bachelor's");
    const [field,setField] = useState("Web Development");
    const [coach,setCoach] = useState(0)
    const [rating,setRating] = useState(4)
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
        <Doubt/>
        

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
            <Navhome />
            <div className="profile_section" id="top">
                <Row>
                    <Col className="col-md-4" 
                    data-aos="flip-right"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-cubic"
                    >
                    <h2>Your Profile</h2>
                    <div className="prof">
                        <h5>Username :<h6>{user_name}</h6></h5>
                        <h5>Qualification:<h6>{edu}</h6></h5>
                        <h5>Field of Interest :<h6>{field}</h6></h5>
                        <h5>Doubts Solved :<h6>{coach}</h6></h5>
                        <Button className="mybtn2">Edit Profile</Button>
                        <Button className="mybtn2">Join Meeting</Button>
                    </div>
                    </Col>
                    <Col id="right" className="col-md-8"
                    data-aos="flip-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-cubic"
                    >
                        <h2>Reviews</h2>
                        <h5>Rating : {rating}</h5>
                        <div className="feedback">
                        <Carousel>
  <Carousel.Item>
    <div className="allfeed">
        <h3>User Name</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  
  </Carousel.Item>
  <Carousel.Item>
   <div className="allfeed">
   <h3>User Name</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
   </div>

    
  </Carousel.Item>
  <Carousel.Item>
    <div className="allfeed">
    <h3>User Name</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>

    
  </Carousel.Item>
</Carousel>
                        </div>
                     
                    </Col>
                </Row>
            </div>
            <div className="doubt_coach" >
                <Row className="opt1" id="mid"
                data-aos="fade-down-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
                >
                <Col >
                        <img id="myimg1" src="https://image.freepik.com/free-vector/business-idea-generation-plan-development-pensive-man-with-lightbulb-cartoon-character-technical-mindset-entrepreneurial-mind-brainstorming-process_335657-2104.jpg" alt=""></img>
                    </Col>
                    <Col className="rights">
                      <h2>Ready to ask?</h2>
                      <p>Just post your doubt providing the relevant information and one of the volunteers will contact you about that.</p>
                      <Button onClick={setLgShow2} className="mybtn2">Go ahead</Button>
                    </Col>
                   
                </Row>
                <Row className="opt2" id="mid2"
                data-aos="fade-down-left"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
                >
                <Col >
                        <img id="myimg1" src="https://image.freepik.com/free-vector/online-lecturing-distance-learning-opportunities-self-education-internet-courses-e-learning-technologies_335657-3279.jpg" alt=""></img>
                    </Col>
                    <Col className="rights">
                      <h2>Answer a doubt</h2>
                      <p>From a wide list of doubts, go for the one that is relevant to your field and drop the time you are free and a live session will be scheduled.</p>
                      <Button onClick={setLgShow} className="mybtn2">Go ahead</Button>
                    </Col>
                   
                </Row>
            </div>
        </div>
    )
}

export default Home
