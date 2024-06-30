import React, { useEffect } from "react";
import BackgroundAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import "./First.css";
import ThreeComponent from "../components/ThreeComponent/ThreeComponent";
import About from "../components/About/About";
import Chatbot from "../components/Chatbot/Chatbot";
import Timeline from "../components/Timeline/Timeline.js";
import { MeteorsDemo } from "../components/Meteors/MeteorsDemo.js";
import {Meteors} from "../components/Meteors/Meteors.tsx";

const First = () => {
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
                    <div className="threejs">
                        <div className="threejs_item">
                            <ThreeComponent />
                        </div>
                    </div>
                <div className="second_bottom">
                    <div className="about">
                        <About />
                    </div>
                </div>
            </div>

            <div className="third">
            </div>


            
        </>
    );
};

export default First;
