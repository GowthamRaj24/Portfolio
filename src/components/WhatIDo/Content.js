import ScrollReveal from "scrollreveal";
import "./Content.css";
import React, { useEffect } from 'react';
import WOW from 'wowjs';
import { BorderLight } from "../BorderLight/BorderLight.tsx";

const Content = () => {
    
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
    }, []);
    return(
        <div className="boxes">
               <div className="relative wow box animated slideInRight">
                  <img src=""/>
                  <div className="content">
                      <h1 >Full Stack Development</h1><br/>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                  </div>
                  {/* <BorderLight size={300} duration={12} delay={90} /> */}
               </div>
               <div className="box">
                 <img src=""/>
                 <div className="content">
                     <div className="contenticon">
                        
                     </div>
                     <h1>ML Engineering</h1><br/>
                     <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                         of classical Latin literature from 45 BC .
                     </p>
                 </div>
                 {/* <BorderLight size={300} duration={12} delay={90} /> */}
              </div>
              <div className="box">
                 <img src=""/>
                 <div className="content">
                     <h1>Competitive Programmer</h1><br/>
                     <p>
                        It is a long established fact that a reader will be distracted by the readable content of
                         a page when looking at its layout.
                     </p>
                 </div>
                 {/* <BorderLight size={300} duration={12} delay={90} /> */}
              </div>
              
           </div>
    )}
export default Content;