import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../assets/logo.jpg';

type NavigationProps = {
  isLoggedIn: boolean;
  logUserOut: () => void;
};

const Navigation: React.FC<NavigationProps> = ({ isLoggedIn, logUserOut }) => {
  return (
    <Navbar bg='black' variant='dark' expand='lg'>
      <Navbar.Brand as={Link} to='/'>
        <img
          src={logo} 
          width='100'
          height='100'
          className='d-inline-block align'
          alt='Logo'
        />
        Fx'tive $olutions
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='navbar' />
      <Navbar.Collapse id='navbar'>
        <Nav className='mr-auto'>
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <NavDropdown title='Programs' id='programs-dropdown'>
            <NavDropdown.Item as={Link} to='/info'>Info</NavDropdown.Item>
            {/* Add more DROPDOWNS later */}
          </NavDropdown>
          <Nav.Link as={Link} to='/contact'>Contact Us</Nav.Link> 
         
        </Nav>
        <Nav className='justify-content-end'>
          {isLoggedIn ? (
            <>
              <Nav.Link onClick={logUserOut}>Logout</Nav.Link>
              <Nav.Link as={Link} to='/strategy'> Student Portal</Nav.Link> 
              {/*FUTURE authenticated user links  */}
            </>
          ) : (
            <>
              <Nav.Link as={Link} to='/login'>Login</Nav.Link>
              <Nav.Link as={Link} to='/signup'>Signup</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;


