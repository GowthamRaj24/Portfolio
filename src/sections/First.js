import BackgroundAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import "./First.css";
import ThreeComponent from "../components/ThreeComponent/ThreeComponent";

const First = () => {
    return (
        <>
        <BackgroundAnimation/>
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
                <div className="second_about">
                </div>
                <div className="chatbot">
                </div>

            </div>
            
        </div>
        </>
    )
}

export default First;