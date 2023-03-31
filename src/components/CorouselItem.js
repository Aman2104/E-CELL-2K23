import Image1 from '../assets/posters/IncubationAgreement.png'
import Image2 from '../assets/posters/IncubationAgreement2.png'
import Image3 from '../assets/posters/Kavach.png'

import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CorouselItem() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index === 2 ? 0 : index + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='py-4'>
      <h2 className='text-center mb-3' style={{ color: '#2553b8', fontSize: "36px", marginBottom: "20px" }}>RECENT</h2>
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={Image1} alt="Slide 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Image2} alt="Slide 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-50" style={{ margin: 'auto' }} src={Image3} alt="Slide 3" />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}



export default CorouselItem;
