import React,{useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import './navhome.css'
const Navhome = () => {
 
    const [creds,setCreds] = useState(0);
  
    return (
      <div>
      
        
    
      
       <Navbar className="navbar" bg="clear" expand="lg">
       <Navbar.Brand href="#home" >TeachToLearn</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="mr-auto" style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
       <Nav.Link className='navlink' href="#top">Profile</Nav.Link>
       <Nav.Link className='navlink' href="#mid">Ask a doubt</Nav.Link>
       <Nav.Link className='navlink' href="#mid2">Coach</Nav.Link>
       <Nav.Link className='navlink' href="#bot">My sessions</Nav.Link>
       </Nav>
       <p>Your Credits: <span>{creds}</span></p>
       </Navbar.Collapse>
       </Navbar>
       </div>
    );
  
   
    }
export default Navhome
