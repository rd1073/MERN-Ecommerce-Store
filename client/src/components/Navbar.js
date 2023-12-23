import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavbarText from 'react-bootstrap/esm/NavbarText';
import Form from 'react-bootstrap/Form';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import { FaShoppingCart } from "react-icons/fa";


const Nav= () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/">Ecommerce Site</Navbar.Brand>
       

      <NavbarText className="mx-auto">
        <Form.Control
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </NavbarText>
      <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
    <FaShoppingCart />
    <Badge bg="secondary">{10}</Badge>
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <span>Cart is empty!</span>
       
    </Dropdown.Menu>
  </Dropdown>
  <Button>Login/Register</Button>
    </Container>
  </Navbar>

  )
}

export default Nav
