import Button from "../Button/Button";
import heroImage from "../../images/Ellipse1.png";
import linkedin from "../../images/linkedin.png";
import "./Hero.css";
import TyperAnimation from "../Type_animation/Type_animation";
import "animate.css";

const Hero = () => {
    const HandleClick = () => {
        console.log("clicked");
    }
    return (
        <div  className="hero animate__animated animate__backInDown animate__fast">
            <div className="left-hero animate__animated animate__fadeIn animate__slow animate__delay-1s">
                <h1><span>I am </span> Gowtham Raju</h1>
                <h2><span>I am a </span><TyperAnimation first="Full Stack Developer" second="ML Engineer" third="ML $ Automation Inter"/></h2>
                <p> I am a highly motivated individual pursuing Bachelor of Technology in GITAM University.
                <br/><br/>Currently, I am actively seeking an internship opportunity to further enrich my practical understanding of the field.</p>
                <div className="hero_button animate__animated animate__fadeInLeft animate__slow animate__delay-1s">
                    <Button>Download CV</Button>
                    <Button>Hire Me</Button>
                </div>
                
            </div>
            <div className="right-hero animate__animated animate__fadeIn animate__slow animate__delay-1s">
                <div className="image">
                    <img className="animate__animated animate__fadeIn animate__slow animate__delay-1s" src={heroImage} alt="heroImage" />
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
