import React from 'react'
import '../styles/team.css'
import TeamCard from './TeamCard'
function Team(props) {
    return (
        <section className='py-3'>
            <div className="container">
                <h2 className='text-center mb-3'>{props.heading}</h2>
                <div className="row justify-content-center" style={{gap:"20px"}}>
                    {props.TeamJSon.map((element) => {
                        return (<TeamCard name={element.Name} designation={element.Designation} image={element.Photo} instagram={element.Instagram} twitter={element.Twitter} linkedin={element.LinkedIn} github={element.Github}  key={element.num} />)
                    })}
                </div>

            </div>
        </section>
    )
}

export default Team
