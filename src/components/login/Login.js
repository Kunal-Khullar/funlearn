import React,{useState} from "react";
import "./login.css";
import { Form, Button } from "react-bootstrap";
// import {fireapp,auth,db} from '../../firebase'
import {useHistory } from 'react-router-dom'
const Login = () => {
  const history = useHistory();
  const [logemail,setLogEmail] = useState("")
  const [logpass,setLogPass] = useState("")
  var uid="";
  const loginuser = async () =>{
    console.log(logemail,logpass)
  }
  return (
    <div>
      <Form className="form-container">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={logemail} type="email" placeholder="Enter email" onChange={(e)=>{setLogEmail(e.target.value)}} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={logpass} onChange={(e)=>{setLogPass(e.target.value)}} placeholder="Password" />
        </Form.Group>

        <Button className="mybtn" onClick={loginuser} variant="primary" type="button">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
