import React from 'react';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
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
                    <a href='/react/'><Navbar.Brand><img className="img-logo" src={logo} /></Navbar.Brand></a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to='/react/' activeClassName="active" className="link">Unisex</NavLink>
                            <NavLink to='/react/category/women' activeClassName="active" className="link">Women</NavLink>
                            <NavLink to='/react/category/men' activeClassName="active" className="link">Men</NavLink>
                            <NavLink to='/react/category/kids' activeClassName="active" className="link">Kids</NavLink>
                        </Nav>
                        <WidgetCart />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
