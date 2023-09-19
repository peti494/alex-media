import React from 'react';
import './Footer.css'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';




function Footer() {
  return(
  

  <div className="footer">
    
    <div className="footer-title">
    <h1>
        Polgár Alex
    </h1>
    </div>
    <div className="footer-social-media">
    <FaFacebook />
    <FaInstagram />
    <FaYoutube />
    </div>
    <div className="footer-rights" >
        <p>Polgar Alex Media © Minden Jog fenntartva</p>
        
    </div>

  </div>


  
  );
}

export default Footer;