import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavbarText from 'react-bootstrap/esm/NavbarText';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../context/authContext'
import { NavLink, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import { FaShoppingCart } from "react-icons/fa";



const Nav= () => {
  const [auth, setAuth,
    log, setLog]=useAuth()
  
  const handleLogout = () => {

    setAuth({
      ...auth,
      user: null,
      token: "",
    });
      
    sessionStorage.removeItem("userInfo");
    

  };


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>

      <Navbar.Brand href="/">Ecommerce Site</Navbar.Brand>       

     {/* <NavbarText className="mx-auto">
        <Form.Control
          type="search"
          placeholder="Search"
          aria-label="Search" />
      </NavbarText>
      <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    
    <FaShoppingCart />
    
    <Badge bg="secondary">{10}</Badge>
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <span>Cart is empty!</span>
    </Dropdown.Menu>
  </Dropdown>*/}

          
                      <Button onClick={handleLogout}>
                          Logout
                        </Button>
  
    </Container>
  </Navbar>

  )
}

export default Nav
