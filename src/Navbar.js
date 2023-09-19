import { useRef } from "react";
import { FaTimes } from 'react-icons/fa';
import "./nav.css";
import { NavLink } from "react-router-dom";
import HamburgerIcon from "./HamburgerIcon";
/* import {ReactComponent as Logo} from './Img/SVG/polgar_logo_1.svg'
import {ReactComponent as Logo2} from './Img/SVG/polgar_logo2.svg' */
import {ReactComponent as Logo3} from './Img/SVG/logo3.svg'

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header id="navbar">
      <div className="navbar-sub">
        <div>
          <Logo3 className="logo-svg" />
        </div>
        <nav ref={navRef}>
          
          <button onClick={showNavbar}>
            <NavLink to="/">Kezdőlap</NavLink>
          </button>
          <button onClick={showNavbar}>
            <NavLink to="/references">Referencia</NavLink>
          </button>
          <button  onClick={showNavbar}>
            <NavLink to="/contact">Kapcsolat</NavLink>
          </button>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
          
        {/*   <button className="nav-social-icons">
          < FaInstagram  />
          <FaFacebook />
          </button> */}
        

        </nav>
        
        


        <button className="nav-btn" onClick={showNavbar}>
          <HamburgerIcon/>
        </button>
      </div>
    </header>
  );
}
export default Navbar;