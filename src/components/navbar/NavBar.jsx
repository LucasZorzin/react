import React from 'react';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';

import './NavBar.css';
import logo from '../../img/puma.png';
import WidgetCart from '../Cart/CartWidget/CartWidget';

function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container className="container-navbar">
                    <Navbar.Brand href="index.html"><img className="img-logo" src={logo}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#women">Women</Nav.Link>
                    <Nav.Link href="#men">Men</Nav.Link>
                    <Nav.Link href="#kids">Kids</Nav.Link>
                    <NavDropdown title="Sport" id="basic-nav-dropdown" renderMenuOnMount={true}>
                        <NavDropdown.Item href="#">Running</NavDropdown.Item>
                        <NavDropdown.Item href="#">Training</NavDropdown.Item>
                        <NavDropdown.Item href="#">Soccer</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <WidgetCart />
                    </Navbar.Collapse>
                    
                </Container>
                
                
            </Navbar>
        </>

    )
}

export default NavBar
