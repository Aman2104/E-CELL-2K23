import React from 'react';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll'
import '../styles/navbar.css';
import Logo from '../assets/logos/ecell_logo.png';
import pdf from '../assets/posters/Hired Members Notice.pdf';


const ScrollLink = Scroll.Link

function Navbar() {
  return (
    <header >
      <nav className='container'>
        <div className="logo"><Link To="/">
          <img style={{height:"80px", padding:"0px"}} src={Logo} alt="" /></Link></div>
        <input type="checkbox" id="toggle" />
        <label htmlFor="toggle" className="toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </label>
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
          <li><Link to="/pastevents">Past Events</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/iic">IIC</Link></li>
          <li><Link to={pdf} target={'_blank'} rel="noreferrer">Interview Result</Link></li>
          <li><Link to="/">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;