import React from 'react'
import './campus.css'
import gallery_1 from '../../assets 1/gallery_1.jpeg'
import gallery_2 from '../../assets 1/gallery_2.jpeg'
import gallery_3 from '../../assets 1/gallery_3.jpg'
import gallery_4 from '../../assets 1/gallery_4.avif'
import dark_arrow from '../../assists/dark-arrow.png'


function Campus() {
  return (
    <div className='campus'>
        <div className='gallery'>
            <img src={gallery_1} alt='' style={{width:"330px",height:"250px"}} />
            <img src={gallery_2} alt='' style={{width:"330px",height:"250px"}} />
            {/* <img src={gallery_3} alt='' style={{width:"300px",height:"250px"}} /> */}
            <img src={gallery_4} alt='' style={{width:"330px",height:"250px"}} />

        </div>
        <button className='btn'><a href='https://www.youtube.com/@10000coders' > See More Here<img src={dark_arrow} alt=''/></a></button>


    </div>
  )
}

export default Campus