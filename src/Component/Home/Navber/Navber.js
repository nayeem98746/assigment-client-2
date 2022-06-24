import React from "react";
import Button from '@mui/material/Button';

import { Navbar } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import useAuth from "../../../Hook/UseAuth";
import logo from '../../../Image/logo.png'


const Navber = () => {
  const { user , logOut } = useAuth()
  return (
    <div>
 <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
          <Container>
          <Navbar.Brand  href="/home"> <img width="60%" src={logo} alt="" />   </Navbar.Brand>
          <Navbar.Toggle />
         <Navbar.Collapse className="justify-content-end">
             <Nav.Link as={Link} to="/home">Home</Nav.Link>
             <Nav.Link as={Link} to="/jobsection">Job</Nav.Link>
             <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>




            { user?.email ?
              
              
             <Button onClick={logOut}>
              Logout
             </Button> : 
              <Nav.Link as={Link} to="/login">
               <Button color="inherit">Login</Button>
                
              </Nav.Link> }
            
          
              
      
           
           
            
            <Navbar.Text>
            Signed in as: <a href="#login"></a>
          </Navbar.Text>
    </Navbar.Collapse>
         
          </Container>
        </Navbar>
        
     
    </div>
  );
};

export default Navber;
