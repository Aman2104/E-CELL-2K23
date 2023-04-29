import React from 'react'
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll'
import Logo from '../assets/logos/ecell_logo.png';

const ScrollLink = Scroll.Link

function Footer() {
  const handleAboutLinkClick = () => {
    setTimeout(() => {
      const aboutElement = document.getElementById('about');
      if (aboutElement) {
        aboutElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1000);
  }
  const handleContactLinkClick = () => {
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1000);
  }


  return (
    <section style={{ backgroundColor: '#444444', color:'white' }}>
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-md-3 col-6 mb-3">
              <img src={Logo} style={{ width: '200px', }} alt="" />
            </div>
            <div className="col-md-4 mb-3 col-6 text-center">
              <h5>Links</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0" style={{'color': 'white'}}>Home</Link></li>
                <li className="nav-item mb-2"><Link to="/" onClick={handleAboutLinkClick} className="nav-link p-0" style={{'color': 'white'}}>About</Link></li>
                <li className="nav-item mb-2"><Link to="/gallery" className="nav-link p-0" style={{'color': 'white'}}>Gallery</Link></li>
                <li className="nav-item mb-2"><Link to="/" onClick={handleContactLinkClick} className="nav-link p-0" style={{'color': 'white'}}>Contact</Link></li>
              </ul>
            </div>
            <div className="col-md-5 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                  <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Footer
