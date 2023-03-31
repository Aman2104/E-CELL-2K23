import React from 'react'
import { Link } from 'react-scroll'
function Footer() {
  return (
    <section style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-4 mb-3">
              <h5>Links</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">About</Link></li>
                <li className="nav-item mb-2"><Link to="/gallery" className="nav-link p-0 text-muted">Gallery</Link></li>
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Contact</Link></li>
              </ul>
            </div>


            <div className="col-md-5 offset-md-1 mb-3">
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
