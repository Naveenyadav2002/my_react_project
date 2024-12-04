import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/navbar';
import Naveen from './component/navbar/naveen/naveen';
import Programs from './component/navbar/programs/programs';
import Title from './component/navbar/title/title';
import About from './component/navbar/About/about';
import Campus from './component/Campus/campus';
import Testimonials from './component/Testimonials/testimonials';
import { Component, useState } from 'react';
import Contact from './component/Contact/contact';
import Footer from './component/Footer/footer';
import VideoPlayer from './component/VideoPlayer/videoplayer';
import Founders from './component/Founders/founders';


function App() {
  const [playerstate,setPlayerState]=useState(false)


  return (
    <>
    <Navbar/>
    <Naveen/>
    <div className='container'>
      <Title subTitle='Our Program' title='what we offer'/>
    <Programs/>
    
    <About setPlayerState={setPlayerState}/>
    <Title subTitle='Gallery' title='Campus Photos'/>
    <Campus/>
    <Founders/>
    <Title subTitle='testmonials' title='what students says'/>
    <Testimonials/>
    <Title subTitle='Contact Us' title='Get in touch'/>
     <Contact/>
     <Footer/>
     <VideoPlayer playerstate={playerstate} setPlayerState={setPlayerState}/>
    </div>
    
    </>
  );
}

export default App;
