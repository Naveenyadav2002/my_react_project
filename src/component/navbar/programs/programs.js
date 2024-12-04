import React from 'react'
import "./programs.css"
import program_1 from '../../../assets 1/program_1.webp'
import program_2 from '../../../assets 1/program_2.jpeg'
import program_3 from '../../../assets 1/program_3.jpeg'
import program_icon_1 from '../../../assets 1/program_icon_1.webp'
import program_icon_2 from '../../../assets 1/program_icon_2.png'
import program_icon_3 from '../../../assets 1/program_icon_3.jpg'
import { useNavigate } from 'react-router-dom'
function Programs() {
const navigate=useNavigate()

const handleFront=()=>{
    navigate('./frontEnd')
}

const handleBack=()=>{
    navigate('./backEnd')
}


const handleFull=()=>{
    navigate('/fullStack')
}
    return (
        <div className='programs'>
            <div className='program'>
                <img src={program_1} alt="" style={{width:"",height:"250px"}} />
                <div className='caption'>
                    <img src={program_icon_1} alt="" style={{width:"100px"}} onClick={handleFront}/>
                    <p>Front-End</p>
                </div>
            </div>
            <div className='program'>
                <img src={program_2} alt="" style={{width:"",height:"250px"}}/>
                <div className='caption'>
                    <img src={program_icon_2} alt="" style={{width:"100px"}} onClick={handleBack}/>
                    <p>Back-End</p>

                </div>
            </div>
            <div className='program'>
                <img src={program_3} alt="" style={{width:"",height:"250px"}}/>
                <div className='caption'>
                    <img src={program_icon_3} alt="" style={{width:"100px"}} onClick={handleFull} />
                    <p>FullStack Development</p>

                </div>
            </div>
        </div>
    )
}

export default Programs