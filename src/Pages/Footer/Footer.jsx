import React from 'react';
import './Footer.css'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { NavLink } from "react-router-dom";



function Footer() {
  return(
  

  <div className="footer">
    
    <div className="footer-title">
    <h1>
        Polgár Alex
    </h1>
    </div>
    <div className="footer-social-navigation">
    <div className="footer-social-media">
    <FaFacebook />
    <FaInstagram />
    <FaYoutube />
    </div>
    <div className="footer-navigations">
    <NavLink to="/">Kezdőlap</NavLink>
    <NavLink to="/reference">Referencia</NavLink>
    <NavLink to="/references/wedding">Referencia - Esküvő</NavLink>
    <NavLink to="/references/portrait">Referencia - Portré</NavLink>
    <NavLink to="/references/marketing">Referencia - Marketing</NavLink>
    <NavLink to="/contact">Kapcsolat</NavLink>
    </div></div>
    <div className="footer-rights" >
        <p>Polgar Alex Media © Minden Jog fenntartva</p>
        
    </div>

  </div>


  
  );
}

export default Footer;