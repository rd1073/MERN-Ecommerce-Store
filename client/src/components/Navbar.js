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

      {!auth?.user ? (
                <>
                  
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  
                </>
              ) : (
                <>
                <NavLink to="/profile" className="nav-link">
                      Profile
                    </NavLink>
                   <Button onClick={handleLogout}>
                          Logout
                        </Button>
                </>
              )}
          
                      
  
    </Container>
  </Navbar>

  )
}

export default Nav
