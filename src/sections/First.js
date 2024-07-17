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
import Globe from "../components/Globe/Globe.tsx";
import github from "../images/Screenshot (386).png";
import leetcode from "../images/Screenshot (387).png";
import gfg from "../images/Screenshot (388).png";

const First = () => {

    useEffect(() => {
        ScrollReveal().reveal(".reveal" , {
            duration: 2500})
    }
    , []);


    return (
        <>
            <div className="background-animation-container">
            <BackgroundAnimation />
            </div>
            <Header />
            <div className="first">
            
                <Hero />
            </div>

            <div className="second">
                {/* <div className="second_bottom">
                    <div className="about">
                        <About />
                    </div>
                </div> */}
            </div>

            <div className="third">
                <BlurInDemo text="Services"/>
                <div className="thirdthreejs">
                    <div className="threejs_item reveal-on-scroll">
                        <ThreeComponent />
                    </div>
                </div>
                <Content className="reveal"/>
            </div>

            <div className="fifth">
                <BlurInDemo text="Skills" />
                <Skills/>
                
            </div>

            <div className="fourth">
                <div className="project_title">
                <BlurInDemo text="Projects"/>
                </div>
                <div className="projects">
                    <OrbitingCirclesDemo t="G-Buddy" d={["Churn Prediciton for businesses to understand and anticipate customer behavior using Logistic Regression Model." ,"Churn Prediciton for businesses to understand and anticipate customer behavior using Logistic Regression Model." , "Churn Prediciton for businesses to understand and anticipate customer behavior using Logistic Regression Model."]} className="reveal"/>
                    <OrbitingCirclesDemo2 t="G-Helper" d={["Churn Prediciton for businesses to understand and anticipate customer behavior using Logistic Regression Model." ,"Churn Prediciton for businesses to understand and anticipate customer behavior using Logistic Regression Model." , "Churn Prediciton for businesses to understand and anticipate customer behavior using Logistic Regression Model."]} className="reveal"/>
                    {/* <OrbitingCirclesDemo t="Analysis" d={["Churn Prediciton for businesses to understand and anticipate customer behavior using Logistic Regression Model." ,"Churn Prediciton for businesses to understand and anticipate customer behavior using Logistic Regression Model." , "Churn Prediciton for businesses to understand and anticipate customer behavior using Logistic Regression Model."]} className="reveal"/> */}
                </div>
                <div className="project_gallery">
                    <Projects/>
                </div>
                <div className="view_more">
                    <a href=""><u>View More></u></a>
                </div>
            </div>
                    
            <div className="sixth">
            <div className="work_title">
                <BlurInDemo text="Work Experience"/>
            </div>
            <div className="timeline">
                <Timeline/>
            </div>
            </div>

            <div className="seventh">
                <div className="hackathon_title">
                    <BlurInDemo text="Hackathons"/>
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
                    
                    <div className="profiles">
                        
                        <a className="github_profile_a"><img src={github} alt="" className="github_profile"></img></a>
                        <h1>Github</h1>
                    </div>
                    <div className="profiles">
                        
                        <a className="leetcode_profile_a" ><img src={leetcode} alt="" className="leetcode_profile"></img></a>
                        <h1>Leetcode</h1>
                    </div>

                    <div className="profiles">
                        
                        <a className="leetcode_profile_a" ><img src={gfg} alt="" className="leetcode_profile"></img></a>
                        <h1>Geek for Geeks</h1>
                    </div>
                    <div className="profiles">
                        
                        <a className="leetcode_profile_a" ><img src={gfg} alt="" className="leetcode_profile"></img></a>
                        <h1>Geek for Geeks</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default First;
