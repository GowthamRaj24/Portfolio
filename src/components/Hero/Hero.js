import Button from "../Button/Button";
import heroImage from "../../images/Ellipse1.png";
import ellipse from "../../images/Ellipse8.png";
import linkedin from "../../images/linkedin.png";
import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero">
            <div className="left-hero">
                <h1>I am Gowtham Raju</h1>
                <h2>I am a Full Stack Developer</h2>
                <p> I am a highly motivated individual pursuing Bachelor of Technology in GITAM University.
                <br/><br/>Currently, I am actively seeking an internship opportunity to further enrich my practical understanding of the field.</p>
                <div className="hero_button">
                    <Button>Download CV</Button>
                    <Button>Hire Me</Button>
                </div>
                
            </div>
            <div className="right-hero">
                <div className="image">
                    <img src={heroImage} alt="heroImage" />
                </div>
                <div className="contacts">
                    <h3>Contacts</h3>
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
