import React from "react";
import BackgroundAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import "./First.css";
import ThreeComponent from "../components/ThreeComponent/ThreeComponent";
import About from "../components/About/About";
import ScrollReveal from "scrollreveal";
import WhatIDo from "../components/WhatIDo/WhatIDo";
import Content from "../components/WhatIDo/Content";
import { IconCloudDemo } from "../components/Cloud/Cloud";

const First = () => {
    ScrollReveal().reveal(".about", {
        duration: 2000,
        origin: "bottom",
        distance: "100px",
        easing: "cubic-bezier(.37,.01,.74,1)",
        opacity: 0.3,
        scale: 0.5
      });
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
                    {/* <div className="threejs">
                        <div className="threejs_item">
                            <ThreeComponent />
                        </div>
                    </div> */}
                <div className="second_bottom">
                    <div className="about">
                        <About />
                    </div>
                </div>
            </div>

            <div className="third">
                <WhatIDo/>
                    <div className="thirdthreejs">
                        <div className="threejs_item">
                            <ThreeComponent />
                        </div>
                    </div>
                <Content/>
            </div>

            <div className="fourth">
                <div className="fourth_left">
                    <IconCloudDemo />
                </div>
            </div>

            
        </>
    );
};

export default First;
