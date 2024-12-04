import React, { useEffect, useState } from 'react';
import './courses.css';
import Title from '../navbar/title/title';

function Courses() {
    const [content, setContent] = useState(null);
    const [active, setActive] = useState("month1")



    const handle1 = () => {
        setActive("month1")
        setContent(
            <div>
                <b className='b'>Master HTML, CSS, and Bootstrap for responsive web design, while learning to manage code with
                    GitHub and deploy on AWS. Improve communication and aptitude skills, complete a mini project,
                    participate in a mock interview, attend coding workshops, and experience a sample drive for
                    real-world placement preparation.</b>
                <ul className='ul'>
                    <li>HTML/CSS</li>
                    <li>BOOTSTRAP</li>
                    <li>GITHUB/AWS</li>
                    <li>COMMUNICATION/APTITUDE</li>
                    <li>1 MINI PROJECT</li>
                    <li>MOCK-INTERVIEW-1</li>
                    <li> SAMPLE DRIVE</li>
                    <li>CODING WORKSHOPS</li>
                    
                </ul>
            </div>
        );
    };

    const handle3 = () => {
        setActive("month3")
        setContent(
            <div>
                <div> <b className='b'>Build proficiency in JavaScript and SQL for database management, while working on two mini
                    projects to enhance practical skills. Improve problem-solving abilities through coding workshops
                    and prepare for placements with second mock interviews.</b></div>

                <div>
                    <ul className='ul'>
                        <li>JAVA SCRIPTS</li>
                        <li>SQL [DATA BASE]</li>
                        <li>2 MINI PROJECTS</li>
                        <li>CODING WORKSHOPS</li>
                        <li>PROBLEM SOLVING</li>
                        <li>MOCK INTERVIEW - 2</li>
                    </ul>
                </div>
            </div>
        );
    };

    const handle5 = () => {
        setActive("month5")
        setContent(
            <>
                <div>
                    <b className='b'>
                        Focus on creating responsive web designs that adapt to different devices. Learn to develop fluid grids,
                        use media queries, and optimize images. Implement mobile-first design strategies and understand progressive
                        enhancement for a better user experience.
                    </b>
                </div>
                <div>
                    <ul className='ul'>
                        <li>REACT JS</li>
                        <li>NODE JS</li>
                        <li>REDUX</li>
                        <li>1 MAJOR PROJECT</li>
                        <li>CODING WORKSHOPS</li>
                        <li>APTITUDE</li>
                        <li>MOCK INTERVIEW - 3</li>
                    </ul>
                </div>
            </>
        );
    };

    const handle7 = () => {
        setActive("month7")
        setContent(
            <>
                <div>
                    <b className='b'>
                        Develop expertise in React.js, Node.js, and Redux while working on a major project to demonstrate your skills.
                        Enhance problem-solving through coding workshops, improve aptitude, and prepare for placements with three mock interviews.
                    </b>
                </div>
                <div>
                    <ul className='ul'>
                        <li>PROJECT REVIEW</li>
                        <li>COMMUNICATION PROBLEM SOLVING APTITUDE</li>
                        <li>FINAL-MOCK INTERVIEW</li>
                    </ul>
                </div>
            </>
        );
    };

    const handlePlacement = () => {
        setActive("placement")
        setContent(<div>
            <b className='b'>
                Enhance your profile to align with job requirements for smoother screening and better visibility.
                Prepare for stand-up calls and live interviews by refining your skills and practicing relevant scenarios.
            </b>
            <div>
                <ul className='ul'>
                    <li>PROFILE UPDATE</li>
                    <li>Screening & Stand-Up Calls</li>
                    <li>LIVE INTERVIEWS</li>
                </ul>
            </div>
        </div>
        );
    };

    return (
        <>
        {/* <h1>Course Details</h1> */}
        <Title subTitle="Month wise" title="Course Details"/>
            <div className='main-div'>
                <p className={`month1 ${active === "month1" ? "active1" : ""}`} onClick={handle1}>Month 1 & 2</p>
                <p className={`month3 ${active === "month3" ? "active2" : ""}`} onClick={handle3}>Month 3 & 4</p>
                <p className={`month5 ${active === "month5" ? "active3" : ""}`} onClick={handle5}>Month 5 & 6</p>
                <p className={`month7 ${active === "month7" ? "active4" : ""}`} onClick={handle7}>Month 7 & 8</p>
                <p className={`placement ${active === "placement" ? "active5" : ""}`} onClick={handlePlacement}>Placement</p>

                <div className='content-box'>
                    {content ? content : 
                    <div>
                        <b className='b'>Master HTML, CSS, and Bootstrap for responsive web design, while learning to manage code with
                            GitHub and deploy on AWS. Improve communication and aptitude skills, complete a mini project,
                            participate in a mock interview, attend coding workshops, and experience a sample drive for
                            real-world placement preparation.</b>
                        <ul className='ul'>
                            <li>HTML/CSS</li>
                            <li>BOOTSTRAP</li>
                            <li>GITHUB/AWS</li>
                            <li>COMMUNICATION/APTITUDE</li>
                            <li>1 MINI PROJECT</li>
                            <li>MOCK-INTERVIEW-1</li>
                            <li> SAMPLE DRIVE</li>
                            <li>CODING WORKSHOPS</li>
                        </ul>
                    </div>
                    }
                </div>

            </div>
        </>
    );
}

export default Courses;
