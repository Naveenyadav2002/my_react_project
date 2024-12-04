import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Programs from './component/navbar/programs/programs';
import FrontendLanguages from './component/frontEnd/frontEnd';
import BackendCourses from './component/backEnd/backEnd';
import VideoPlayer from './component/VideoPlayer/videoplayer';
import FullstackPrograms from "./component/fullStacks/fullStack";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
            <Routes>
               <Route  path="/" element={<App/>}/>
                <Route path="/programs" element={<Programs/>}/>
                <Route path="/frontEnd" element={<FrontendLanguages/>}/>
                <Route path="/backEnd" element={<BackendCourses/>}/>
                <Route path="/fullStack" element={<FullstackPrograms/>}/>
                <Route path='/videoPlayer' element={<VideoPlayer/>}/>
               
            </Routes>
        </Router>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
