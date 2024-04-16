import React from 'react'
import './naveen.css'
import dark_arrow from "../../../assists/dark-arrow.png"

function Naveen() {
    return (
        <div className='hero container' >
            <div className='hero-text'>
                <h1>We Ensure better Teaching for better World </h1>
                <p>Our Cutting-Edge curriculum is designed to
                    empower students with the knowledge, skills ,
                    and experiences needed to excel in the dynemic
                    field education</p>
                <button className='btn'><a href='https://10000coders.co/'>Explore more<img src={dark_arrow} /></a></button>
            </div>

        </div>
    )
}

export default Naveen