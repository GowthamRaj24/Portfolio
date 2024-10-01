import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import BackgroundAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import "./First.css";
import ThreeComponent from "../components/ThreeComponent/ThreeComponent";
import About from "../components/About/About";
import Content from "../components/WhatIDo/Content";
import { IconCloudDemo } from "../components/Cloud/Cloud";
import { OrbitControls } from "three-stdlib";
import { OrbitingCirclesDemo } from "../components/OrbitCircle/OrbitCircle";
import Button from "../components/Button/Button";
import BlurInDemo from "../components/WhatIDo/BlurInDemo";
import { OrbitingCirclesDemo2 } from "../components/OrbitCircle/OrbitCircle2";
import "../output.css";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Timeline from "../components/Timeline/Timeline";
import Hackathons from "../components/Hackathons/Hackathons";
import github from "../images/Screenshot (386).png";
import leetcode from "../images/Screenshot (387).png";
import gfg from "../images/Screenshot (388).png";
import Footer from "../components/Footer/Footer";
import linkedin from "../images/Screenshot (390).png";


const First = () => {
    useEffect(() => {
        ScrollReveal().reveal(".reveal" , {
            duration: 2500})
    }
    , []);

    const OpenProfile = (url) => {
        window.open(url, "_blank");
    }

    return (
        <>
            <div className="background-animation-container">
            <BackgroundAnimation />
            </div>
            <Header />
            <div className="first" id="home">
                <Hero />
            </div>

            <div className="second">
                
            </div>

            <div className="third" id="services">
                <BlurInDemo text="Services"/>
                <div className="thirdthreejs">
                    <div className="threejs_item reveal-on-scroll">
                        <ThreeComponent />
                    </div>
                </div>
                <div className="about_whatido">
                    <Content className="reveal"/>
                </div>
            </div>

            <div className="fifth" id="skills">
                <BlurInDemo text="Skills" />
                <Skills/>
            </div>

            <div className="fourth" id="projects">
                <div className="project_title">
                <BlurInDemo text="Projects"/>
                </div>
                <div className="projects">
                    <OrbitingCirclesDemo t="G-Buddy" d={["Developed a comprehensive resource-sharing platform that allows students to effortlessly upload and access a wide array of study materials, enhancing their efficiency during exam preparation." ,"Integrated a user-friendly Resume Builder feature designed to assist students in creating polished and professional resumes." , "MongoDB || Express.js || React || Node.js || RestfulAPI || Github || Bootstrap ||"]} className="reveal"/>
                    <OrbitingCirclesDemo2 t="StockSense" d={["Utilized LSTM neural networks to develop a robust stock price forecasting model. The system analyzes historical data to predict future prices accurately, leveraging deep learning techniques for enhanced predictive insights." ," Incorporated Simple Moving Average (SMA) for trend analysis, providing users with Buy or Sell signals based on real-time data. This feature enhances decision-making by identifying optimal trading opportunities." , "Tensorflow || DeepLearning || EDA || Data Collection"]} className="reveal"/>
                    {/* <OrbitingCirclesDemo t="Analysis" d={["" ,"" , ""]} className="reveal"/> */}
                </div>
                <div className="project_gallery">
                    <Projects/>
                </div>
            </div>
                    
            <div className="sixth" id="experience">
                <div className="work_title">
                    <BlurInDemo text="Work Experience"/>
                </div>
                <div className="timeline">
                    <Timeline/>
                </div>
            </div>

            <div className="seventh">
                <div className="hackathon_title">
                    <BlurInDemo text="Achievements"/>
                </div>
                <div className="hack-c">
                <Hackathons/>
                </div>
            </div>
            
            <div className="eigth">
                
                <div className="work_title prof_title">
                    <BlurInDemo text="Profiles"/>
                </div>
                <div className="outer_profiles">
                    
                    <div className="profiles" >
                        <a className="leetcode_proile_a" href="https://github.com/GowthamRaj24" target="_blank"><img src={github} alt="" className="leetcode_profile"></img></a>
                        <h1>Github</h1>
                    </div>
                    

                    <div className="profiles">
                        
                        <a className="leetcode_profile_a linkedin_prof" href="https://www.linkedin.com/in/gowtham-raj-1061a5272/" target="_blank"><img src={linkedin} alt="" className="leetcode_profile" height="100px"></img></a>
                        <h1>Linkedin</h1>
                    </div>

                    <div className="profiles">
                        <a className="leetcode_profile_a" href="https://leetcode.com/u/Gowtham_Raj24/" target="_blank"><img src={leetcode} alt="" className="leetcode_profile"></img></a>
                        <h1>Leetcode</h1>
                    </div>

                    <div className="profiles">
                        
                        <a className="leetcode_profile_a" href="https://www.geeksforgeeks.org/user/gowthamraj24/" target="_blank"><img src={gfg} alt="" className="leetcode_profile"></img></a>
                        <h1>Geek for Geeks</h1>
                    </div>
                    
                </div>
            </div>
            <div className="footer_out">
                <Footer/>
            </div>
        </>
    );
};

export default First;