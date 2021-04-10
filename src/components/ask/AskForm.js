import React, { useState, useContext } from "react";
import "./AskForm.css";
import { Form, Button } from "react-bootstrap";
import { fireapp, auth, db } from "../../firebase";
import { UserContext } from "../../context/UserContext";
const AskForm = () => {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [preferences, setPreferences] = useState("");
  const { user } = useContext(UserContext);
  const submitDoubt = async () => {
    try {
      if (topic && description && preferences) {
        await db.collection("doubts").add({
          topic,
          description,
          preferences,
          solvedate: "",
          uid: localStorage.getItem("currentUser"),
          user: user.name,
          solved: false,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {" "}
      <Form className="form-container">
        <Form.Group controlId="formName">
          <Form.Label>Topic</Form.Label>
          <Form.Control
            value={topic}
            onChange={(e) => {
              setTopic(e.target.value);
            }}
            type="text"
          />
        </Form.Group>
        <Form.Group controlId="formQualifications">
          <Form.Label>Brief Description</Form.Label>
          <Form.Control
            as="textarea"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            type="text"
          />
        </Form.Group>
        <Form.Group controlId="formQualifications">
          <Form.Label>Preferences</Form.Label>
          <Form.Control
            value={preferences}
            onChange={(e) => {
              setPreferences(e.target.value);
            }}
            type="text"
          />
        </Form.Group>

        <Button
          onClick={submitDoubt}
          className="mybtn"
          variant="primary"
          type="button"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AskForm;
