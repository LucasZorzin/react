import React from 'react';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

import './NavBar.css';
import logo from '../../img/puma.png';
import WidgetCart from '../Cart/CartWidget/CartWidget';

function closeBtn(){
    var navIcon = document.querySelector("#nav-icon");
	var navBar = document.querySelector(".nav-items");
	navIcon.classList.toggle('open');
	navBar.classList.toggle('open-nav')
}

function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container className="container-navbar">
                <div className='row titles'>
                    <NavLink to='/react/' className="col-3 col-md-1"><Navbar.Brand><img className="img-logo" src={logo} alt="logo" /></Navbar.Brand></NavLink>
                    <NavLink to='/react/' className="title col-3 mx-md-3 mx-lg-0 puma-logo-txt">PUMA GUITARS</NavLink>
                </div>
                        <Nav className="me-auto nav-items">
                            <NavLink to='/react/products' activeClassName="active" className="link" onClick={closeBtn}>All Guitars</NavLink>
                            <NavLink to='/react/category/acoustic' activeClassName="active" className="link" onClick={closeBtn}>Acoustic</NavLink>
                            <NavLink to='/react/category/classical' activeClassName="active" className="link" onClick={closeBtn}>Classical</NavLink>
                            <NavLink to='/react/category/electric' activeClassName="active" className="link" onClick={closeBtn}>Electric</NavLink>
                        </Nav>
                <div className='row btn-navbar'>
                        <WidgetCart />
                        <div id="nav-icon" className="nav-icon col-3 mx-2 py-1" onClick={closeBtn}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                </div>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
