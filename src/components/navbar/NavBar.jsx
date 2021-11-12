import React from 'react';
import logo from '../../img/Flash.png';
import WidgetCart from '../widgetcart/WidgetCart.jsx'

function NavBar() {
    return (
        <nav className="row">
            <div className="col-8 nav-bar">
                <a href={'index.html'}><img className="nav-bar__logo" src={logo} /></a>
                <a href={'index.html'} className="nav-bar__name">FLASH</a>
            </div>
            <WidgetCart />

        </nav>
    )
}

export default NavBar
