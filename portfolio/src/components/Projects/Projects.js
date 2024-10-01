import React, { useState } from "react";
import "./Projects.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
    const [modalInfo, setModalInfo] = useState({
        1: {
            title: "Spam Classifier",
            info: `The classifier uses natural language processing (NLP) techniques and machine learning algorithms to distinguish between spam and non-spam messages. `,
            link: "https://github.com/GowthamRaj24/Spam-Classifier",
            github: "https://github.com/GowthamRaj24/Spam-Classifier"
        },
        2: {
            title: "Customer Churn Prediction",
            info: "The goal was to predict customer churn rates based on a variety of features, including customer demographics, banking activities, and historical transaction data.",
            link: "https://github.com/GowthamRaj24/PROJECT_Churn_Prediction",
            github: "https://github.com/GowthamRaj24/PROJECT_Churn_Prediction"
        },
        3: {
            title: "Market Segmentation",
            info: "Market segmentation is a critical strategy in marketing and business that involves dividing a broad target market into subsets of consumers who have common needs, preferences, or characteristics. ",
            link: "https://github.com/GowthamRaj24/FEYNN_LABS",
            github: "https://github.com/GowthamRaj24/FEYNN_LABS"
        },
        4: {
            title: "Personal Portfolio",
            info: "A personal portfolio typically showcases my skills, projects, achievements, and experiences in a structured and compelling manner, highlighting my capabilities, practical applications of my knowledge, significant milestones, and professional journey.",
            link: "https://github.com/GowthamRaj24/Portfolio",
            github: "https://github.com/GowthamRaj24/Portfolio"
        },
        5: {
            title: "House Price Prediction",
            info: "Developed a machine learning model to predict house prices based on various features such as location, size, number of bedrooms, and other relevant attributes. This project leverages data analysis and advanced predictive algorithms to provide accurate price estimates.",
            link: "https://github.com/GowthamRaj24/Real-estate-prices",
            github: "https://github.com/GowthamRaj24/Real-estate-prices"
        },
        6: {
            title: "Car Price Estimation",
            info: "Developed a machine learning model to estimate car prices based on various features such as brand, model, year, mileage, fuel type, and other relevant attributes. This project aims to provide accurate price estimates for cars in the used car market.",
            link: "https://github.com/GowthamRaj24/Car_Prediction_Amount",
            github: "https://github.com/GowthamRaj24/Car_Prediction_Amount"
        }
    });

    const openModal = (project) => {
        const id = project.id;
        const img = project.getElementsByTagName("img")[0].src;
        fillOut(id, img);
        const modal = document.getElementById("preview");
        modal.style.display = "block";
        document.getElementsByClassName("custom-modal-content")[0].classList.add("scale");
    };

    const fillOut = (id, img) => {
        document.getElementById("pro_title").innerHTML = modalInfo[id].title;
        document.getElementById("pro_info").innerHTML = modalInfo[id].info;
        document.getElementById("img").src = img;
        document.getElementById("live").onclick = function () {
            window.open(modalInfo[id].link, "_blank");
        };
        document.getElementById("github").onclick = function () {
            window.open(modalInfo[id].github, "_blank");
        };
    };

    const closeModal = () => {
        const modal = document.getElementById("preview");
        modal.style.display = "none";
    };

    const handleOutsideClick = (event) => {
        const modal = document.getElementById("preview");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    return (
        <>
            <section className="custom-section">

                <div className="custom-container">
                    <div className="custom-item" id="1">
                        <img
                            src="https://editor.analyticsvidhya.com/uploads/32086heading.jpeg"
                            alt=""
                        />
                        <div className="custom-text">
                            <h3>Spam Classifier</h3>
                            <p>The classifier uses natural language processing (NLP) techniques and machine learning algorithms to distinguish between spam and non-spam messages.</p>
                        </div>
                        <div className="custom-button" onClick={(e) => openModal(e.target.parentElement)}>
                            Open
                        </div>
                    </div>

                    <div className="custom-item" id="2">
                        <img
                            src="https://daxg39y63pxwu.cloudfront.net/images/blog/churn-models/Customer_Churn_Prediction_Models_in_Machine_Learning.png"
                            alt=""
                        />
                        <div className="custom-text">
                            <h3>Customer Churn Prediction</h3>
                            <p>The goal was to predict customer churn rates based on a variety of features, including customer demographics, banking activities, and historical transaction data.</p>
                        </div>
                        <div className="custom-button" onClick={(e) => openModal(e.target.parentElement)}>
                            Open
                        </div>
                    </div>

                    <div className="custom-item" id="3">
                        <img
                            src="https://useinsider.com/assets/media/2022/03/market-segmentation-feature.png"
                            alt=""
                            height="100%"
                            width="100%"
                        />
                        <div className="custom-text">
                            <h3>Market Segmentation</h3>
                            <p>Market segmentation is a critical strategy in marketing and business that involves dividing a broad target market into subsets of consumers who have common needs, preferences, or characteristics. </p>
                        </div>
                        <div className="custom-button" onClick={(e) => openModal(e.target.parentElement)}>
                            Open
                        </div>
                    </div>

                    <div className="custom-item" id="4">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/011/067/273/non_2x/portfolio-button-portfolio-speech-bubble-portfolio-colorful-web-banner-illustration-vector.jpg"
                            alt=""
                            height="120%"
                            width="100%"

                        />
                        <div className="custom-text">
                            <h3>Personal Portfolio</h3>
                            <p>A personal portfolio typically showcases my skills, projects, achievements, and experiences in a structured and compelling manner, highlighting my capabilities, practical applications of my knowledge, significant milestones, and professional journey.</p>
                        </div>
                        <div className="custom-button" onClick={(e) => openModal(e.target.parentElement)}>
                            Open
                        </div>
                    </div>

                    <div className="custom-item" id="5">
                        <img
                            src="https://miro.medium.com/v2/resize:fit:804/1*D6s2K1y7kjE14swcgITB1w.png"
                            alt=""
                        />
                        <div className="custom-text">
                            <h3>House Price Prediction</h3>
                            <p>Developed a machine learning model to predict house prices based on various features such as location, size, number of bedrooms, and other relevant attributes. This project leverages data analysis and advanced predictive algorithms to provide accurate price estimates.</p>
                        </div>
                        <div className="custom-button" onClick={(e) => openModal(e.target.parentElement)}>
                            Open
                        </div>
                    </div>

                    <div className="custom-item" id="6">
                        <img
                            src="https://www.carz4sale.in/pictures/static/used-car-valuation.png"
                            alt=""
                        />
                        <div className="custom-text">
                            <h3>Car Price Estimation</h3>
                            <p>Developed a machine learning model to estimate car prices based on various features such as brand, model, year, mileage, fuel type, and other relevant attributes. This project aims to provide accurate price estimates for cars in the used car market.</p>
                        </div>
                        <div className="custom-button" onClick={(e) => openModal(e.target.parentElement)}>
                            Open
                        </div>
                    </div>
                </div>

                <div id="preview" className="custom-modal" onClick={handleOutsideClick}>
                    <div className="custom-modal-content">
                        
                        <img id="img" src="" alt="" />
                        <div id="details">
                            <span className="custom-close" onClick={closeModal}>
                                &times;
                            </span>
                                <h3 id="pro_title"></h3>
                                <p id="pro_info">Some text</p>
                                <div className="custom-button" id="live">
                                    View
                                </div>
                                <i className="fab fa-github-square" id="github">
                                    <FontAwesomeIcon icon={faGithubSquare} className="github-icon" />
                                </i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
