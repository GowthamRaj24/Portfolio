import "./Header.css";
import React from "react";
import Button from "../Button/Button";
import "animate.css";

const Header = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        var offset = -70;
        const position = element.offsetTop + offset;
        console.log(position);
        window.scrollTo({
            top: position,
            behavior: "smooth",
        });
    };

    return (
        <div id="head">
            <header className="animate__animated animate__fadeInDown">
                <span id="header_title">
                    <h3>My Portfolio</h3>
                </span>
                <ul id="header_items">
                    <li id="header_item" className="hover-animation active">
                        <a href="#home" onClick={() => scrollToSection("home")}>
                            Home
                        </a>
                    </li>
                    <li id="header_item" className="hover-animation">
                        <a href="#about" onClick={() => scrollToSection("services")}>
                            Services
                        </a>
                    </li>
                    <li id="header_item" className="hover-animation">
                        <a href="#skills" onClick={() => scrollToSection("skills")}>
                            Skills
                        </a>
                    </li>
                    <li id="header_item" className="hover-animation">
                        <a href="#projects" onClick={() => scrollToSection("projects")}>
                            Projects
                        </a>
                    </li>
                    <li id="header_item" className="hover-animation">
                        <a href="#experience" onClick={() => scrollToSection("experience")}>
                            Experience
                        </a>
                    </li>
                </ul>
                <span id="hire_me_button">
                    <Button hire={true}>Hire Me</Button>
                </span>
            </header>
        </div>
    );
};

export default Header;
