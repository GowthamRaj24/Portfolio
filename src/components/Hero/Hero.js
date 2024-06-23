import React, { useEffect, useState } from 'react';
import './Hero.css';
import Button from '../Button/Button';
import heroImage from '../../images/Ellipse1.png';
import linkedin from '../../images/linkedin.png';
import TyperAnimation from '../Type_animation/Type_animation';

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="hero" style={{ transform: `scale(${1 - scrollY * 0.001})` }}>
            <div className="left-hero animate__animated animate__fadeIn animate__slower">
                <h1><span>I am </span> Gowtham Raju</h1>
                <h2><span>I am a </span><TyperAnimation first="Full Stack Developer" second="ML Engineer" third="ML & Automation Engineer" /></h2>
                <p>I am a highly motivated individual pursuing Bachelor of Technology at GITAM University.
                    <br /><br />Currently, I am actively seeking an internship opportunity to further enrich my practical understanding of the field.</p>
                <div className="hero_button animate__animated animate__fadeInRight animate__slower">
                    <Button>Download CV</Button>
                    <Button>Hire Me</Button>
                </div>
            </div>
            <div className="right-hero animate__animated animate__fadeIn animate__slower">
                <div className="image animate__animated animate__fadeIn animate__slower">
                    <img src={heroImage} alt="heroImage" />
                </div>
                <div className="contacts">
                    <h3>Contact with me</h3>
                    <ul>
                        <li><img src={linkedin} alt="linkedin" /></li>
                        <li><img src={linkedin} alt="linkedin" /></li>
                        <li><img src={linkedin} alt="linkedin" /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Hero;
