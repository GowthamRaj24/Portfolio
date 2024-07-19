import img from "../../images/1710651418599.jpeg";
import img1 from "../../images/1694932621902.jpeg";
import img2 from "../../images/1698219872666.jpeg";

import "./Hackathons.css";
const Hackathons = () => {
    return (
        <>
        <div className="hack-container">
            <div className="hack-item">
                <div className="hack-img">
                    <img src={img1} alt="" height="100px"/>
                </div>
                <div className="hack-content">
                    <div className="hack-inner-content">
                    <div className="hack-title">
                        <u>SMART INDIA HACKATHON</u>
                    </div>
                    <div className="hack-rank">
                        <u>Crowd management using existing CCTV.</u>
                    </div>
                    <div className="hack-description">
                        <ul>
                            <li>We Achieved 1st Place among 25 Teams in Internal Hackathon conducted by GITAM blr.</li>
                            <li>We used computer vision to analyze video streams for crowd behavior and trained our model with a custom dataset to prevent crime.</li>
                            <li>We have used YOLOv8 model for Object detection, real-time analysis and Implemented a Alert System for Crime Prevention.</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>

            <div className="hack-item">
                <div className="hack-img">
                    <img src={img2} alt="" />
                </div>
                <div className="hack-content">
                    <div className="hack-inner-content">
                    <div className="hack-title">
                        <u>HACKFEST 2024 (48 Hrs)</u>
                    </div>
                    <div className="hack-rank">
                        <u>Parking Management System using CV.</u>
                    </div>
                    <div className="hack-description">
                        <ul>
                            <li>We Achieved 2nd Place among 100 Teams for our Machine Learning Integrated project.</li>
                            <li>Built a surveillance Web Application System with cameras by Implementing OpenCV, Augmented Reality.</li>
                            <li>Detecting Empty Parking slots and Automating the Car Parking Process by Navigating to the nearest Avaliable Slot (AR).</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>

            <div className="hack-item">
                <div className="hack-img">
                    <img src={img} alt="" />
                </div>
                <div className="hack-content">
                    <div className="hack-inner-content">
                    <div className="hack-title">
                        <u>GATE 2024 Qualified</u>
                    </div>
                    <div className="hack-rank">
                        <u>AIR - 4559</u>
                    </div>
                    <div className="hack-description">
                        <ul>
                            <li>Secured All India Rank (AIR) 4559 in GATE 2024 in Data Science and Artificial Intelligence.</li>
                            <li>Validated comprehensive knowledge in machine learning, data analysis, and artificial intelligence</li>
                            <li>Proven ability to apply theoretical knowledge to practical scenarios in Data Science and AI</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Hackathons;