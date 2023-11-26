import React from 'react'
import iiclogo from '../assets/logos/IIC_logo.png'
import ciclogo from '../assets/logos/cic_logo.png'
import cic_flow from '../assets/logos/cic_flow.png'
import cic_policy from '../assets/posters/CIC_Policy.pdf'
import { Container, Row, Col } from 'react-bootstrap'
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
            "description": "To conduct various innovation and entrepreneurship-related activities, identify and reward innovations and share success stories of successful entrepreneurs to create an eco-system of innovations and entrepreneurship in the institute.",
            "icon": "fas fa-rocket"
        },
        {
            "id": 2,
            "description": "Organize periodic workshops/ seminars/ interactions with entrepreneurs, investors, professionals and create a mentor pool for student innovators.",
            "icon": "fas fa-trophy"
        },
        {
            "id": 3,
            "description": "Organize Hackathons, idea competition, mini-challenges etc. with the involvement of industries.",
            "icon": "fas fa-chalkboard-teacher"
        },
        {
            "id": 4,
            "description": "To provide space, research facilites, mentoring support and conducive environment to the incubatees to nurture & transform their innovative ideas into marketable products/services.",
            "icon": "fas fa-lightbulb"
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
                            <p className="lead">Institution's Innovation Council (IIC) is established in the institute with an objective to foster the culture of innovation, encourage, inspire and nurture young students by supporting them to work with new ideas and transform them into prototypes.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="about">
                <Container>
                    <Row className="align-items-center">
                        <Col md="4" className="order-md-1">
                            <img src={ciclogo} alt="IIC Logo" className="iic-logo" style={{ 'margin': 'auto' }} />
                        </Col>
                        <Col md="8" className="order-md-2">
                            <h2>COMMUNITY INCUBATION CENTRE (CIC)</h2>
                            <p className="lead">Community Incubation centre (CIC) is established in the institute by the support of Kurukshetra University and Department of Information Technology Electronics and Communication (DITEC), Haryana to foster and support innovations and potential enterpreneurs to build scalable and sustainable enterprise.</p>
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
                    <div className="d-flex justify-content-center flex-wrap" style={{ 'gap': '30px' }}>
                        <a className="btn btn-primary" href='https://myoohr.com/' target='_blank' type="button">Institution Innovation and Startup Policy (IISP)</a>
                        <a className="btn btn-primary" href={cic_policy} target='_blank' type="button">Apply Online for Community Incubation Centre</a>
                    </div>
                </div>
            </section>
            <section className="incubatedProcess py-3">
                <div className="container text-center">
                    <h2 className='mb-3'>INCUBATION PROCESS</h2>
                    <img className='cic' src={cic_flow} alt="cic_flow" />
                </div>
            </section>
            <section className="incubated py-3" id="incubstart">
                <div className="container text-center">
                    <h2 className='mb-3'>Incubated Startups</h2>
                    <a className="btn btn-primary" href='https://myoohr.com/' target='_blank' type="button">Oohr Innovation Pvt. Ltd.</a>
                </div>
            </section>
        </div>
    )
}

export default IIC
