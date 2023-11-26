import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll'
import '../styles/navbar.css';
import Logo from '../assets/logos/ecell_logo.png';
import pdf from '../assets/posters/SIH 2023 Notice.pdf';
const ScrollLink = Scroll.Link

function Navbar() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  }

  const handleLinkClick = () => {
    setIsChecked(false);
  }
  const handleAboutLinkClick = () => {
    setIsChecked(false);
    setTimeout(() => {
      const aboutElement = document.getElementById('about');
      if (aboutElement) {
        aboutElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1000);
  }
  const handleContactLinkClick = () => {
    setIsChecked(false);
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1000);
  }

  return (
    <header>
      <nav className="container">
        <div className="logo">
          <Link to="/" onClick={handleLinkClick}>
            <img style={{ height: "80px", padding: "0px" }} src={Logo} alt="" />
          </Link>
        </div>
        <input type="checkbox" id="toggle" checked={isChecked} onChange={handleToggle} />
        <label htmlFor="toggle" className="toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="/" onClick={handleLinkClick}>Home</Link>
          </li>
          <li>
            {/* <ScrollLink to="about" smooth={true} duration={500} onClick={handleLinkClick}>About</ScrollLink> */}
            <Link to="/" onClick={handleAboutLinkClick}>About</Link>
          </li>
          <li>
            <Link to="/pastevents" onClick={handleLinkClick}>Past Events</Link>
          </li>
          <li>
            <Link to="/gallery" onClick={handleLinkClick}>Gallery</Link>
          </li>
          <li>
            <Link to="/iic" onClick={handleLinkClick}>IIC/CIC</Link>
          </li>
          <li>
            <Link to={pdf} target={'_blank'} rel="noreferrer" onClick={handleLinkClick}>SIH Notice</Link>
          </li>
          <li>
            <Link to="/" onClick={handleContactLinkClick}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;