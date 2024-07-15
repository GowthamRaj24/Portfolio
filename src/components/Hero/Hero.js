import React, { useEffect, useState } from 'react';
import './Hero.css';
import Button from '../Button/Button';
import heroImage from '../../images/Ellipse1.png';
import linkedin from '../../images/linkedin.png';
import TyperAnimation from '../Type_animation/Type_animation';
import "animate.css";
import { BorderLight } from '../BorderLight/BorderLight.tsx';
import { DockDemo } from '../ContactsDock/DemoDock.js';
import Meteors from '../Meteors/Meteors.tsx';


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
        <div className="hero animate__animated" id="hero" style={{ transform: `scale(${1 - scrollY * 0.001})` }}>
            
            <div className="left-hero animate__animated animate__fadeIn animate__slower">
                <h1><span>I am </span> Gowtham Raju</h1>
                <h2 className='hero_sub'><span>I am </span><TyperAnimation first="Full Stack Developer" second="ML Engineer" third="ML & Automation Engineer" /></h2>
                <p className='hero_description'>I am a highly motivated individual pursuing Bachelor of Technology at GITAM University.
                    <br />Currently, I am actively seeking an internship opportunity to further enrich my practical understanding of the field.</p>
                <div className="hero_button">
                    <Button>Resume</Button>
                    <Button>Hire Me</Button>
                </div>
            </div>
            <div className="right-hero animate__animated animate__fadeIn animate__slower">
                <div className="image animate__animated animate__fadeIn animate__slower">
                    <img src={heroImage} alt="heroImage" />
                </div>

                <div className="contacts" >
                    <div className='dock'>
                        <DockDemo/>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}

export default Hero;
