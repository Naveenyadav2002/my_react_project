
import React, { useState } from 'react'
import "./videoplayer.css"
import video from "../../assets 1/video.mp4"
import video2 from "../../assets 1/video2.mp4"
import video3 from "../../assets 1/video3.mp4"
import video4 from "../../assets 1/video4.mp4"
import video5 from "../../assets 1/video5.mp4"
import video6 from "../../assets 1/video6.mp4"
import Title from '../navbar/title/title'


function VideoPlayer() {

  const [currentVideo,setCurrentVideo]=useState(null)

  const videos=[video,video2,video3,video4,video5,video6]
  
  const handlePlay=(videoElement)=>{
    if(currentVideo!==videoElement){
      if(currentVideo){
        currentVideo.pause()
        currentVideo.currentTime=0
      }
      setCurrentVideo(videoElement)
    }
  }
  

  return (
    <div className='videos'>
    {/* <Title subTitle="review of our" title="PLACED STUDENTS"/> */}
    <span className='span1'>REVIEW OF OUR</span>
    <span className='span2'>PLACED STUDENTS</span>
    {videos.map((eachVideo,index)=>(
     <video 
     key={index} muted controls 
     onPlay={(e)=>handlePlay(e.target)}>
      <source src={eachVideo} type="video/mp4"/>
     </video>
    ))}
    </div>
  )
}

export default VideoPlayer