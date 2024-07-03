import "./Chatbot.css";
import React, { useEffect, useState } from "react";
import "./Chatbot.css";
import logo from "../../images/chatbot.png";
import arrow from "../../images/down-arrow.png";
import WOW from "wowjs";
import "animate.css";

const Chatbot = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        const maxScroll = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        const currentScroll = window.scrollY;
        const scale = Math.min(1, 0.8 + currentScroll / maxScroll);
        setScrollY(scale);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="wow second_chatbot animate__animated " style={{ transform: `scale(${scrollY})` }}>
                <div className="chatbot_header">
                    <span className="chatbot_logo"><img src={logo} alt="Random Image" /></span>
                    <h4 className="chatbot_title">Chatbot</h4>
                    <span className="chatbot_arrow"><img src={arrow} alt="Random Image" /></span>
                </div>
                <div className="chatbot_body">
                </div>
                <div className="chatbot_footer">
                    <input type="text" placeholder="   Ask About me..." />
                </div>
            </div>
        </>
    );
}

export default Chatbot;
