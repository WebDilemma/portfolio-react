import React, { useRef, useState } from "react";
import "./Navbar.styles.css";
import Logo from "../../Assets/wd_logo_nav.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();
  const [showNav, setShowNav] = useState(false);

  const handleNavbar = () => {
    setShowNav(!showNav);
  };

  return (
    <nav ref={navRef} className="navbar">
      <div className="navbar__logoContainer">
        <a href="/">
          <img id="logoImg" className="navbar__logoImg" src={Logo} alt="logo" />
        </a>
      </div>
      <div className="navbar__burgerBtn" onClick={handleNavbar}>
        <i className={showNav ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={showNav ? "navbar__nav active" : "navbar__nav"}>
        <Link to="/" onClick={handleNavbar}>
          <li>Home</li>
        </Link>
        <Link to="/portfolio" onClick={handleNavbar}>
          <li>Portfolio</li>
        </Link>

        <Link to="/about" onClick={handleNavbar}>
          <li>about</li>
        </Link>
        <Link
          className="navbar__specialCase"
          to="/contact"
          onClick={handleNavbar}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
