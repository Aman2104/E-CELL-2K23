import React, {useState} from 'react'
import collegeImg from '../assets/logos/uiet.png'
import '../styles/about.css'
function About() {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        if(isClicked){
            setIsClicked(false);
        }
        else{
        setIsClicked(true);
        }
      };
  return (
    <>
    <section className="about-us py-3" id="about">
        <div className="container ">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="about-text">
                        <h2 className="text-center">About Us</h2>
                        <p>We, at the Entrepreneurship Cell, share the common belief that India will only emerge as a
                            world power if the youth breaks the shackles of prejudices and inertia that has kept them
                            from starting up. Creating an entrepreneurial ecosystem to provide a platform to individuals
                            with creative minds, ideas and the potential to run a substantial business, is what we
                            strive towards continually. We enable smooth and efficient interaction between its principal
                            components spanning students, faculty, working professionals, aspiring and existing
                            entrepreneurs, mentors, angel investors and venture capitalists.</p>
                            <button className="btn btn-primary" onClick={handleClick}>Google Form</button>
                    </div>
                </div> 
                <div className="col-md-6">
                    <div className="about-img">
                        <img src={collegeImg} alt="E-cell UIET KUK"/>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    <section>
        {isClicked && (
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe5xGeQiI7I3NUYzrbw3_bJMoH__YTEdL-Jb8XxVZpd_EdAPw/viewform?embedded=true" width="100%" style={{height:'100vh'}} frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          )}
    </section>
    </>
    
  )
}

export default About
