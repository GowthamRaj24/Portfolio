import "./second.css";
import ThreeComponent from "../components/ThreeComponent/ThreeComponent";

const Second = () => {
    return (
        <div id="second">
            <div className="threejs">
                <div className="threejs_item">
                    <ThreeComponent/>
                </div>
            </div>
        </div>
    );
}
export default Second;