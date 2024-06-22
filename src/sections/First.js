import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import "./First.css";
import Background_animation from "../components/Background_animation/Background_animation";
const First = () => {
    return (
        <>
            <div className="first">
                <Background_animation />
                <Header />
                <Hero/>


            </div>
        </>
    )
}

export default First;