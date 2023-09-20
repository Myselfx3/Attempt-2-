import React from 'react';
import './navbar.css';
import logo from '../../assets/Gymlogo.png'



const Navbar = () => {
  return (
    <div className="gym__navbar">
      <div className="gym__navbar-links">
        <div className="gym__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="gym__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#Events">Events</a></p>
          <p><a href="#Team">Team</a></p>
          <p><a href="#About">About</a></p>
          <p><a href="#Contact">Contact Us</a></p>
          <p><a href="tel:000000"><button type="button" className="menubutton"> Call Us</button></a></p>
          


        </div>

      </div>

    </div>
  )
}

export default Navbar
