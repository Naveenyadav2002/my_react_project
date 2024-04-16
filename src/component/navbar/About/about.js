

import React from 'react'
import './about.css'
import about_img from '../../../assets 1/about_img.jpg'
import play_icon from '../../../assists/play-icon.png'


function About({setPlayerState}) {
    return (
        <div className='about'>
            <div className='about-left'>
                <img src={about_img} alt='' className='about-img' />
                <img src={play_icon} alt='' className='play-icon'  onClick={()=>{setPlayerState(true)}}/>
            </div>
            <div className='about-right'>
                <h3>ABOUT  INSTITUTION</h3>
                <h2> Nurturing Tommorow's Software's Today</h2>
                <p>It is 100% job assistance program, we focus on building the right quality
                     in your profile and we support until you are placed.Please meet us and we
                      will connect you to our alumni students. You can talk to them and clear your doubts</p>
                <p> With a focus of innovation, hands-on learning, and personalized mentorship
                    our programs prepare aspiring educators to make a meaningful impact in classrooms.
                     </p>
                <p>Whether you aspire to become  a Front-End developer, Back-End Develor, or FullStack Developer
                    our digverse range of programs offers the perfect pathway to achieve your goals
                    and unlock your full potential in shaping the future of Software's</p>
            </div>
        </div>
    )
}

export default About