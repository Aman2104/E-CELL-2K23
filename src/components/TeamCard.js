import React from 'react'
import '../styles/team.css'
import {AnimationOnScroll} from 'react-animation-on-scroll'
// import ScrollAnimation from 'react-animate-on-scroll';

function TeamCard(props) {
    return (
        <AnimationOnScroll animateIn='slipeLeft' className="card p-3">
            <div className="image">
                <img src={props.image} alt="" />
            </div>
            <div className="details">
                <div className="name">{props.name}</div>
                <div className="designation">{props.designation}</div>
            </div>
            <div className="handles my-2">
                <a href={props.linkedin}>
                    <i className={"fa fa-linkedin " + (props.linkedin!==""? "d-inline-block" :"d-none")} style={{ color: "#0077b5" }}></i>
                </a>
                <a href={props.github}>
                    <i className={"fa fa-github " + (props.github!==""? "d-inline-block" :"d-none")} style={{ color: "#4078c0" }}></i>
                </a>
                <a href={props.instagram}>
                    <i className={"fa fa-instagram " + (props.instagram!==""? "d-inline-block" :"d-none")} ></i>
                </a>
                <a href={props.twitter}>
                    <i className={"fa fa-twitter " + (props.twitter!==""? "d-inline-block" :"d-none")} ></i>
                </a>
            </div>
        </AnimationOnScroll>
    )
}

export default TeamCard
