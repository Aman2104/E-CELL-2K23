import React, { useState, useEffect, useRef } from 'react';
import Particles from 'particles-bg';
import '../styles/Landingpage.css';

const LandingPage = () => {
  const [numParticles, setNumParticles] = useState(50);
  const [scrollDirection, setScrollDirection] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const scrollRef = useRef(null);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
    const currentScrollY = window.scrollY;
    if (currentScrollY > scrollY) {
      setScrollDirection('down');
    } else {
      setScrollDirection('up');
    }
    setScrollY(currentScrollY);
  };



  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNumParticles(20);
      } else {
        setNumParticles(50);
      }
    };

    window.addEventListener('resize', handleResize);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const addAnimation = {
    width: '100%',
    animation: scrollDirection === 'down' ? 'swipeLeft 4s both' : 'swipeRight 4s both',

  }
  return (

    <div ref={scrollRef} onScroll={handleScroll} style={{ backgroundColor: '#000000', position: "relative", height: '200vh', width: "100%", overflow: "hidden", }}>
      <Particles
        color='#FFFFFF'
        num={numParticles}
        type='cobweb'
        particleSpeed={0.5}

      />
      <div className='text-container'>
        <div className="spantags" style={addAnimation}>
          <span>Ideate</span>
          <span>Innovate</span>
          <span>Incubate</span>
        </div>
        <div style={{
          opacity: 1 - scrollPosition / (window.innerHeight *0.5),
          transform: `scale(${1 + (scrollPosition / (window.innerHeight *0.5))})`,
          transformOrigin: "50% 80% 0px",
        }} className="container" >
          <h1>The Entrepreneurship Cell</h1>
          <h2 style={{ color: '#ffffff', fontWeight: "bold" }}>UIET Kurukshetra</h2>
          <p>"IDENTIFY YOUR PROBLEMS AND PUT IN ENERGY TO ACCOMPLISH SOLUTIONS."</p>
          <a href="/" className="glowingbtn">Explore</a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
