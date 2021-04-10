import React,{useState} from "react";
import "./AskForm.css";
import { Form, Button } from "react-bootstrap";
import {fireapp,auth,db} from '../../firebase'
const AskForm = () => {
    const [topic,setTopic]=useState("")
    const [description,setDescription]=useState("")
    const [preferences,setPreferences]=useState("")
  return (
    <div> <Form className="form-container">
            <Form.Group controlId="formName">
          <Form.Label>Topic</Form.Label>
          <Form.Control value={topic} onChange={(e)=>{setTopic(e.target.value)}} type="text" />
        
        </Form.Group>
        <Form.Group controlId="formQualifications">
          <Form.Label>Brief Description</Form.Label>
          <Form.Control as="textarea" value={description} onChange={(e)=>{setDescription(e.target.value)}} type="text" />
        </Form.Group>
        <Form.Group controlId="formQualifications">
          <Form.Label>Preferences</Form.Label>
          <Form.Control value={preferences} onChange={(e)=>{setPreferences(e.target.value)}} type="text" />
        </Form.Group>




        <Button className="mybtn"  variant="primary" type="button">
         Submit
        </Button>
      </Form>
    </div>
  );
};

export default AskForm;
