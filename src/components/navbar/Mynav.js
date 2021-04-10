import React,{useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './navbar.css'
import Login from '../login/Login'
const Mynav = () => {
 
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
             Sign In to your account
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
         <Login></Login>
         {/* <Register/> */}
          </Modal.Body>
        </Modal>
       <Navbar className="navbar" bg="clear" expand="lg">
       <Navbar.Brand href="#home" >React-Bootstrap</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="mr-auto" style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
       <Nav.Link className='navlink' href="#top">About</Nav.Link>
       <Nav.Link className='navlink' href="#mid">Services</Nav.Link>
       <Nav.Link className='navlink' href="#bot">How It Works?</Nav.Link>
       </Nav>
       <Button onClick={setLgShow(true)}variant="outline-light">Log In</Button>
       </Navbar.Collapse>
       </Navbar>
       </div>
    );
  
   
    }
export default Mynav
