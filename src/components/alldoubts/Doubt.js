import React,{useState} from 'react'
import './doubt.css'
import {Row,Col,Button} from 'react-bootstrap'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Doubt = () => {
    return (
        <div>
            <div className="doubt_container">
                <div className="dout">
                    <Row>
                        <h2>Topics</h2>
                        <h4>USername</h4>
                    </Row>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

                    </p>
                    <Button className="mybtn">Contact</Button>
                </div>
                <div className="dout">
                    <Row>
                        <h2>Topics</h2>
                        <h4>USername</h4>
                    </Row>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

                    </p>
                    <Button className="mybtn">Contact</Button>
                </div>
                <div className="dout">
                    <Row>
                        <h2>Topics</h2>
                        <h4>USername</h4>
                    </Row>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

                    </p>
                    <Button className="mybtn">Contact</Button>
                </div>
                <div className="dout">
                    <Row>
                        <h2>Topics</h2>
                        <h4>USername</h4>
                    </Row>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

                    </p>
                    <Button className="mybtn">Contact</Button>
                </div>
            </div>
        </div>
    )
}

export default Doubt
