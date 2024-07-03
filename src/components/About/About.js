import "./About.css";
import React, { useEffect, useState } from "react";
import { BorderLight } from "../BorderLight/BorderLight.tsx";

const About = () => {
    const phone = "+91 9491226619";
    const email = "mgowthamraj9491@gmail.com";
    const Degree = "B.Tech in CSE (AI & ML)";
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        const maxScroll = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        const currentScroll = window.scrollY;
        const scale = Math.min(1.5, 1 + currentScroll / maxScroll);
        setScrollY(scale);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="second_about" style={{ transform: `scale(${scrollY})` }}>
            <h1>About Me</h1>
            <ul>
                <li>I am a full stack developer who is passionate about creating interactive web applications.</li>
                <li>I have experience in developing and designing websites using HTML, CSS, JavaScript, React, Node.js, and MongoDB.</li>
                <li>I am also proficient in using tools such as Git, GitHub, and Heroku.</li>
                <li>I am always eager to learn new technologies and improve my skills.</li>
            </ul>
            <div className="contact_info">
                <h4>Phone :<span>{phone}</span></h4>
                <h4>Email :<span>{email}</span></h4>
                <h4>Degree :<span>{Degree}</span></h4>
            </div>
            {/* <BorderLight size={300} duration={12} delay={20} /> */}
        </div>
    )
}
export default About;