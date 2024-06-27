import "./Header.css";
import React from "react";
import Button from "../Button/Button";
import "animate.css";


const Header = () => {

    return (
        <div id="head" >
            <header className="animate__animated animate__fadeInDown">
                <span id="header_title"><h3>My Portfolio</h3></span>
                <ul id="header_items">
                    <li id="header_item" className="hover-animation active"><a href="#home">Home</a></li>
                    <li id="header_item" className="hover-animation"><a href="#about">About</a></li>
                    <li id="header_item" className="hover-animation"><a href="#skills">Skills</a></li>
                    <li id="header_item" className="hover-animation"><a href="#projects">Projects</a></li>
                    <li id="header_item" className="hover-animation"><a href="#contact">Experience</a></li>
                </ul>
                <span id="hire_me_button">
                    <Button>Hire Me</Button>
                </span>
            </header>
        </div>
    );
}
export default Header;