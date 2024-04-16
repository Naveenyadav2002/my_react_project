import React, { useRef } from 'react'
import './testimonials.css'
import next_icon from '../../assists/next-icon.png'
import back_icon from '../../assists/back-icon.png'
// import user_1 from '../../assists/user-1.png'
import nav_img from '../../assists/nav.png.JPG'
import user_2 from '../../assists/user-2.png'
import user_3 from '../../assists/user-3.png'
import user_4 from '../../assists/user-4.png'

function Testimonials() {

    const slider = useRef()

    let tx = 0;

    const slideForward = () => {
        if (tx > -75) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }

    return (
        <div className='testimonials'>
            <img src={next_icon} alt='' className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt='' className='back-btn' onClick={slideBackward} />
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={nav_img} alt="" />
                                <div>
                                    <h3>Naveen</h3>
                                    <span>10KCoders, India</span>
                                </div>
                            </div>
                            <p>
                                10kcoders===The Technical teaching here is very clear...In this Institute,Trainers will explain topics in a simple language.
                                Program managers will follow up your status every day.
                                For doubts,they provide Support trainers.Here,support trainers will helps us alot.
                                They will take Mocks up-to-date .Tell us where we have to improve.
                                From my side 10kcoders is the best Institute for freshers
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Praveen</h3>
                                    <span>10KCoders, India</span>
                                </div>
                            </div>
                            <p>
                                "10000 coders stands out as the best coding institute. The trainers' teaching approach is exceptional,
                                making coding concepts easy to grasp. The team's unwavering support during placement ensures a smooth
                                transition to landing a job. From resume building to interview preparation, they provide comprehensive
                                assistance. 10000 coders is not just an institute; it's a pathway to success in the tech industry.
                                Grateful for the top-notch education and dedicated support!"
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Priya</h3>
                                    <span>10KCoders, USA</span>
                                </div>
                            </div>
                            <p>
                                10k Coders is best platform to learn coding from zero level. If we don't have any technical
                                background is ok because they will teach us from basics. And we have communication sessions
                                to improve our communication skills. And problem solving classes to build logical thinking
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Kiran</h3>
                                    <span>10KCoders, Africa</span>
                                </div>
                            </div>
                            <p>
                                I want to take a moment to share my thoughts and feedback regarding my experience with 10000coders.
                                They provided a good environment during the training period, and the supportive faculties were available
                                at all times. Even if we had small doubts, we could clarify them immediately. After the completion of the
                                course, they conducted mock sessions. If we cleared the mocks, they would allow us to proceed to interviews.
                                Even if we failed in interviews, they continued to support us. In one word, they never disappoint.
                            </p>
                        </div>
                    </li>

                </ul>

            </div>

        </div>
    )
}

export default Testimonials 