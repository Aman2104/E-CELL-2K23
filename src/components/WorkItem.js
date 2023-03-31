import React from 'react'
import '../styles/work.css'

import { AnimationOnScroll } from 'react-animation-on-scroll'
function WorkItem(props) {
    return (
        <AnimationOnScroll className='benefit-box' animateIn='animate__fadeIn'>
            <i className={`fas ${props.icon}`}></i>
            <h3>{props.statement}</h3>
        </AnimationOnScroll>
    )
}

export default WorkItem
