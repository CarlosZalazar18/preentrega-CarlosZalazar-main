// NavBar.js

import React from 'react';
import CartWidget from './CartWidget'; // Importa el componente CartWidget
import './Navbar.css'; // Importa el archivo de estilos CSS
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
            <Link 
                to="/"
            >
                <span className="logo">TechMart</span>
            </Link>
                
            </div>
            <ul className="nav-links">
                <NavLink to="/">Productos</NavLink>
                <NavLink to="/initial">inicio</NavLink>
                <NavLink to="/contact">Contacto</NavLink>
            </ul>
            <div className="cart-container">
                <CartWidget /> {}
            </div>
        </nav>
    );
};

export default NavBar;


