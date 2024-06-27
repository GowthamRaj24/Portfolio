import React, { useEffect } from "react";
import BackgroundAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import "./First.css";
import ThreeComponent from "../components/ThreeComponent/ThreeComponent";
import About from "../components/About/About";
import Chatbot from "../components/Chatbot/Chatbot";
import Globe from "../components/Globe/Globe.tsx";
import { BorderLight } from "../components/BorderLight/BorderLight.tsx";

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

            <div id="second">
                <div className="second">
                    <div className="threejs">
                        <div className="threejs_item">
                            <ThreeComponent />
                        </div>
                    </div>
                </div>
                <div className="second_bottom">
                    <div className="about">
                        <About />
                    </div>
                    <div className="chatbot">
                        <Chatbot />
                    </div>
                </div>
            </div>

            <div className="third">
                <div className="third_left">
                    <BorderLight size={250} duration={12} delay={9} />
                </div>

                <div className="third_right">
                    <BorderLight size={250} duration={12} delay={9} />
                </div>
            </div>

            <div className="fourth">
                <Globe className="globe"/>
            </div>
        </>
    );
};

export default First;
