import React from 'react'
import iiclogo from '../assets/logos/IIC_logo.png'
import {Container , Row, Col} from 'react-bootstrap'
import WorkItem from './WorkItem'
import '../styles/iic.css'
import '../styles/work.css'

function IIC() {

    const focus = [
        {
            "id": 1,
            "description": "To create a vibrant local innovation eco-system and establish a start-up supporting mechanism in the institute.",
            "icon": "fas fa-lightbulb"
        },
        {
            "id": 2,
            "description": "To prepare institute for Atal Ranking of Institutions on Innovation Achievements (ARIIA) framework.",
            "icon": "fas fa-trophy"
        },
        {
            "id": 3,
            "description": "To establish function ecosystem for scouting ideas and pre-incubation of ideas.",
            "icon": "fas fa-search"
        },
        {
            "id": 4,
            "description": "To develop better cognitive ability for technology students.",
            "icon": "fas fa-brain"
        }
    ]



    const functions = [
        {
            "id": 1,
            "description": "To conduct various innovation and entrepreneurship-related activities prescribed by Central MIC and self-driven activities in a time bound fashion.",
            "icon": "fas fa-cog"
        },
        {
            "id": 2,
            "description": "Identify and reward innovations and share success stories.",
            "icon": "fas fa-award"
        },
        {
            "id": 3,
            "description": "Organize general measure of enterprising tendency (GET) test for identifying young innovators and entrepreneurs.",
            "icon": "fas fa-clipboard-check"
        },
        {
            "id": 4,
            "description": "Organize periodic workshops/seminars/ interactions with entrepreneurs, investors, professionals and create a mentor pool for student innovators.",
            "icon": "fas fa-users"
        },
        {
            "id": 5,
            "description": "Network with peers and national entrepreneurship development organizations.",
            "icon": "fas fa-network-wired"
        },
        {
            "id": 6,
            "description": "To highlight innovative projects carried out by institution's faculty and students.",
            "icon": "fas fa-project-diagram"
        },
        {
            "id": 7,
            "description": "Organize Hackathons, idea competition, mini-challenges etc. with the involvement of industries.",
            "icon": "fas fa-code"
        }
    ]




    return (
        <div>
            <section className="about">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="4">
                            <img src={iiclogo} alt="IIC Logo" className="iic-logo" />
                        </Col>
                        <Col md="8">
                            <h2>INSTITUTION'S INNOVATION COUNCIL (IIC)</h2>
                            <h3>UIET KURUKSHETRA UNIVERSITY</h3>
                            <p className="lead">It's a mandate of MoE's Innovation Cell (MIC) to establish Institution's Innovation Council (IIC) in an institute for systematically fostering the culture of innovation, encourage, inspire and nurture young students by supporting them to work with new ideas and transform them into prototypes. Institution Innovation Council (IIC), UIET, KUK is established to promote innovation through multitudinous modes leading to an innovation promotion eco-system in the campus.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="benefits py-3" id="work">
                <div className="container">
                    <h2 className='mb-3'>Major Focus of IIC</h2>
                    <div className="row justify-content-center">
                        {focus.map((element) => {
                            return (<WorkItem icon={element.icon} key={element.icon} statement={element.description} />)
                        })}
                    </div>
                </div>
            </section>
            <section className="benefits py-3" id="work">
                <div className="container">
                    <h2 className='mb-3'>Functions of IIC</h2>
                    <div className="row justify-content-center">
                        {functions.map((element) => {
                            return (<WorkItem icon={element.icon} key={element.icon} statement={element.description} />)
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default IIC
