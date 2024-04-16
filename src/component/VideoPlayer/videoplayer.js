import React, { useRef } from 'react'
import './videoplayer.css'
import video from '../../assets 1/video.mp4'


function VideoPlayer({playerstate,setPlayerState}) {
    const player=useRef(null)
    const closePlayer=(e)=>{
        if(e.target===player.current){
            setPlayerState(false)
        }
    }
  return (
    <div className={`video-player ${playerstate ? "":'hide'}`} ref={player} onClick={closePlayer}>
<video src={video} autoplay muted controls style={{width:"400px"}}>

</video>

    </div>
  )
}

export default VideoPlayer