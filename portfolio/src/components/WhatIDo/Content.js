import ScrollReveal from "scrollreveal";
import "./Content.css";
import React, { useEffect } from 'react';
import WOW from 'wowjs';
import { BorderLight } from "../BorderLight/BorderLight.tsx";
import fullstack from "../../images/0_M4bxiCIjcTK-2Xr6.jpg";
import ml from "../../images/ml_whatido.jpeg";
import cp from "../../images/cp_whatido.jpg";
const Content = () => {
    
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
    }, []);
    return(
        <div className="boxes">
               <div className="box">
                <img src={ml} />
                 <div className="content">
                     <div className="contenticon">
                        
                     </div>
                     <h1>ML Engineer</h1><br/>
                     <ul className="content_points">
                        <li>Implemented Time Series models with Real World Data through Q-Learning, LSTM ,Reinforcement Models.</li>
                        <li>Worked on Real-Time Data, Reports and Compoter Vision</li>
                        <li>Prepared a Report on Product Idea which will Primarily use ML and AI to solve real world business problems.</li>
                     </ul>
                 </div>
                 {/* <BorderLight size={300} duration={12} delay={90} /> */}
              </div>
               <div className="box">
                <img src={fullstack} className="full_img"/>
                 <div className="content">
                     <div className="contenticon">
                        
                     </div>
                     <h1>Full Stack Developer</h1><br/>
                     <ul className="content_points">
                        <li>Developed dynamic, responsive web applications using MongoDB, Express.js, React, and Node.js</li>
                        <li>Designed and implemented RESTful APIs to handle data exchanges between the frontend and backend.</li>
                        <li>Worked with version control systems like Git for efficient code management and collaboration.</li>
                     </ul>
                 </div>
                 {/* <BorderLight size={300} duration={12} delay={90} /> */}
              </div>
              <div className="box">
                 <img src={cp} className="cp_img"/>
                 <div className="content">
                     <h1>Competitive Programmer</h1><br/>
                     <ul className="content_points">
                        <li>Participated in and excelled at numerous coding competitions on platforms like Codeforces, LeetCode..</li>
                        <li>Proficient in various programming languages including C++, Python, and Java.</li>
                        <li>Developed problem-solving skills by tackling complex algorithmis.</li>
                     </ul>
                 </div>
                 {/* <BorderLight size={300} duration={12} delay={90} /> */}
              </div>
              
           </div>
    )}
export default Content;