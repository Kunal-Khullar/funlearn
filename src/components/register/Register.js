import React, { useState } from "react";
import "./register.css";
import { Form, Button } from "react-bootstrap";
import { fireapp, auth, db } from "../../firebase";
import { useHistory } from "react-router-dom";
const Register = () => {
  const history = useHistory();
  const [name1, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [interests, setInterests] = useState("");
  const registeruser = async () => {
    if (name1 != "" && email != "" && password != "") {
      var uid = "";
      if (
        password.length > 5 &&
        email.includes("@") &&
        email.includes(".com")
      ) {
        try {
          if (await auth.createUserWithEmailAndPassword(email, password)) {
            db.collection(email).doc("profile").set({
              name: name1,
              email: email,
              phone: mobile,
              qualify: qualifications,
              interest: interests,
            });
          }
        } catch (err) {
          alert(err);
        }
        try {
          if (await auth.signInWithEmailAndPassword(email, password)) {
            var user = fireapp.auth().currentUser;
            if (user != null) {
              uid = user.email;
              localStorage.setItem("currentUser", uid);

              console.log(localStorage.getItem("currentUser"));
              history.push("/home");
            }
          }
        } catch (error) {
          alert(error);
        }
      }
    } else {
      alert("Please enter all the fields");
    }
  };
  return (
    <div>
      {" "}
      <Form className="form-container">
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name1}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="formMobile">
          <Form.Label>Mobile No</Form.Label>
          <Form.Control
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
            type="text"
          />
        </Form.Group>
        <Form.Group controlId="formQualifications">
          <Form.Label>Qualifications</Form.Label>
          <Form.Control
            value={qualifications}
            onChange={(e) => {
              setQualifications(e.target.value);
            }}
            type="text"
            placeholder="ex Bachelors, Masters, High School etc "
          />
        </Form.Group>
        <Form.Group controlId="formInterests">
          <Form.Label>Interests</Form.Label>
          <Form.Control
            value={interests}
            onChange={(e) => {
              setInterests(e.target.value);
            }}
            type="text"
            placeholder="ex Mathematics, Science, App Development etc"
          />
        </Form.Group>

        <Button
          className="mybtn"
          onClick={registeruser}
          variant="primary"
          type="button"
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default Register;
