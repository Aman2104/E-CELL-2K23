import Prayas from '../posters/prayas.png';
import Pentathon from '../posters/pentathon.png';
import HackTheFuture from '../posters/hackTheFuture.png';

import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';



function CorouselItem() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1)); //total 3 items hai
    }, 2000); // Change slides every 2 seconds
    return () => clearInterval(interval);
  }, []);


  const googleFormLinks = {
    pentathon : 'https://docs.google.com/forms/d/e/1FAIpQLSfY1TCvDt1qdOrJ7q15cNOG4cY4EhCLtAqhdIMcGeG9-q6Kzw/viewform',
    hackTheFuture:'https://form.jotform.com/240372646371052',
    prayas:'https://forms.gle/ywmkngFE1YLno2EAA'

  }
  const eventsData = [
    {
      id: 1,
      title: 'Pentathon',
      image: Pentathon,
      form: googleFormLinks.pentathon
    },
    {
      id: 2,
      title: 'Hack The Future',
      image: HackTheFuture,
      form: googleFormLinks.hackTheFuture
    },
    {
      id: 3,
      title: 'Prayas',
      image: Prayas,
      form: googleFormLinks.prayas


    }
  ]

  return (
    <section className='py-4'>
      <h2 className='text-center mb-3' style={{ color: '#2553b8', fontSize: "36px", marginBottom: "20px" }}>Upcoming Events</h2>
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
        {eventsData.map((item) => (
          <Carousel.Item key={item.id}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column",
              height: "100vh",
              backgroundColor: "black",
              color: "white",
              padding: "10px"
            
            }}
          >
          <img
              src={item.image}
              style={{  
               width:"400xp",
               height:"450px"

              }}
              alt={item.title}
            />
            <div className="event-details"> 
              <a href={item.form} target="_blank" rel="noreferrer">
                <button className="btn btn-primary">Register Now</button>
              </a>
            </div>
          </div>
          </Carousel.Item>
        ))}

      </Carousel>
    </section>
  );
}



export default CorouselItem;
