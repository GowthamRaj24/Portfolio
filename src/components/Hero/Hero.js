import Button from "../Button/Button";
import heroImage from "../../images/Ellipse1.png";
import linkedin from "../../images/linkedin.png";
import "./Hero.css";
import TyperAnimation from "../Type_animation/Type_animation";

const Hero = () => {
    const HandleClick = () => {
        console.log("clicked");
    }
    return (
        <div className="hero">
            <div className="left-hero">
                <h1><span>I am </span> Gowtham Raju</h1>
                <h2><span>I am a </span><TyperAnimation first="Full Stack Developer" second="ML Engineer" third="ML $ Automation Inter"/></h2>
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
                    <h3>Contact with me</h3>
                    <ul>
                        <li onClick={HandleClick}><img src={linkedin} alt="linkedin" /></li>
                        <li><img src={linkedin} alt="linkedin" /></li>
                        <li><img src={linkedin} alt="linkedin" /></li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Hero;
