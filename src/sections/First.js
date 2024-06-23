import BackgroundAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import "./First.css";
import ThreeComponent from "../components/ThreeComponent/ThreeComponent";
import About from "../components/About/About";
import Chatbot from "../components/Chatbot/Chatbot";

const First = () => {

    return (
        <>
        <div className="background-animation-container">
            <BackgroundAnimation/>
        </div>
        <div className="first">
            <Header/>
            <Hero/>
        </div>
        <div id="second">
            <div className="second">
                <div className="threejs">
                    <div className="threejs_item">
                        <ThreeComponent/>
                    </div>
                </div>
            </div>
            <div className="second_bottom">
                <div className="about">
                    <About/>
                </div>
                <div className="chatbot">
                    <Chatbot />
                </div>
            </div>
        </div>
        </>
    )
}

export default First;
