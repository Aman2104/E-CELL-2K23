import React from 'react'
import '../styles/pastevents.css'
import event1 from '../assets/past events/event1.png'
import event2 from '../assets/past events/event2.png'
import event3 from '../assets/past events/event3.png'
import event4 from '../assets/past events/event4.png'
import event5 from '../assets/past events/event5.png'
import event6 from '../assets/past events/event6.png'
import event7 from '../assets/past events/event7.png'
import event8 from '../assets/past events/event8.png'
import event9 from '../assets/past events/event9.png'
import event10 from '../assets/past events/event10.png'
import event11 from '../assets/past events/event11.png'
import event12 from '../assets/past events/event12.png'
import event13 from '../assets/past events/event13.png'
import event14 from '../assets/past events/event14.png'
import event15 from '../assets/past events/event15.png'
import event16 from '../assets/past events/event16.png'
import event17 from '../assets/past events/event17.png'
import event18 from '../assets/past events/event18.png'
import event19 from '../assets/past events/event19.png'
import event20 from '../assets/past events/event20.png'
import event21 from '../assets/past events/event21.png'
import event22 from '../assets/past events/event22.png'
import event23 from '../assets/past events/event23.png'
import event24 from '../assets/past events/event24.png'
import event25 from '../assets/past events/event25.png'
import event26 from '../assets/past events/event26.png'
import event27 from '../assets/past events/event27.png'
import event28 from '../assets/past events/event28.png'
import event29 from '../assets/past events/event29.png'
import event30 from '../assets/past events/event30.png'
function PastEvents() {


  const events = [
    { name: 'UIA HACKATHON -LOGO CONTEST', date: '14th Oct,2022', image: `${event1}` },
    { name: 'IPR AND PATENT FILING', date: '1st Oct,2022', image: `${event2}` },
    { name: 'NATIONAL BIO ENTREPRENEURSHIP COMPETITION', date: '', image: `${event3}` },
    { name: 'Exposure to the Incubators in India and their Role in Startups Support', date: '30th May,2022', image: `${event4}` },
    { name: 'Integrated Marketing and Sales Strategy', date: '28th May,2022', image: `${event5}` },
    { name: 'WORKSHOP ON BUSINESS MODEL CANVAS DEVELOPMENT', date: '26th May,2022', image: `${event6}` },
    { name: 'SOLUTION ROOM', date: '21th May,2022', image: `${event7}` },
    { name: 'SHARK TANK UIET', date: '', image: `${event8}` },
    { name: 'INNOVATIVE PROJECT EXHIBITION', date: '', image: `${event9}` },
    { name: 'IPR SESSION', date: '21st April,2022', image: `${event10}` },
    { name: 'MSME SESSION', date: '23rd March,2022', image: `${event11}` },
    { name: 'ENTREPRENEURSHIP,SKILLS, ATTITUDE AND BEHAVIOUR DEVELOPMENT', date: '12th March,2022', image: `${event12}` },
    { name: 'HOW TO MAKE A PRODUCT FIT FOR MARKET', date: '11th March,2022', image: `${event13}` },
    { name: 'SIH', date: '5th March,2022', image: `${event14}` },
    { name: 'ALUMNI TALKS', date: '7th January,2022', image: `${event15}` },
    { name: 'MOTIVATIONAL SESSION BY SUCCESSFUL ENTREPRENEUR', date: '4th December,2021', image: `${event16}` },
    { name: 'QUIZATHON', date: '14th November,2021', image: `${event17}` },
    { name: 'LOGO DESIGNING', date: '28 September,2021', image: `${event18}` },
    { name: 'MANTHAN', date: '24th September,2021', image: `${event19}` },
    { name: 'OPD', date: '18th September,2021', image: `${event20}` },
    { name: 'EN-ACT Week 2021', date: '2-7 June,2021', image: `${event21}` },
    { name: "StartUp's Initial Execution", date: '12th May,2021', image: `${event22}` },
    { name: 'Planning Career in Entrepreneurship?', date: '6th April,2021', image: `${event23}` },
    { name: 'Workshop on Business Model Canvas', date: '19-20 March,2021', image: `${event24}` },
    { name: 'Storytelling on an Entrepreneur/Startup', date: '19th March,2021', image: `${event25}` },
    { name: 'Online Innovation Contest-2020', date: '27-28 November,2020', image: `${event26}` },
    { name: 'What is Startup and Entrepreneurship?', date: '11th November,2020', image: `${event27}` },
    { name: 'Workshop on Innovation and Entrepreneurship Development', date: '27th October,2020', image: `${event28}` },
    { name: 'SIH WINNERS', date: '15th October,2020', image: `${event29}` },
    { name: 'ORIENTATION', date: '27th October,2019', image: `${event30}` },
  ]
  return (
    <div className="container my-4">
      <h2 className='text-center mb-3'>Past Events</h2>
      <div className="event-container container">
        {events.map(event => (
          <div className="event-card" key={event.name}>
            <img src={event.image} alt={event.name} />
            <div class="event-details">
              <p><strong>{event.name}</strong></p>
              <p>{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PastEvents
