import React, { useState } from "react";
import "./Projects.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
    const [modalInfo, setModalInfo] = useState({
        1: {
            title: "Project 1",
            info: "...",
            link: "#",
            github: "#"
        },
        2: {
            title: "Project 2",
            info: "...",
            link: "#",
            github: "#"
        },
        3: {
            title: "Project 3",
            info: "...",
            link: "#",
            github: "#"
        },
        4: {
            title: "Project 4",
            info: "....",
            link: "#",
            github: "#"
        },
        5: {
            title: "Project 5",
            info: "...",
            link: "#",
            github: "#"
        },
        6: {
            title: "Project 6",
            info: "...",
            link: "#",
            github: "#"
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
        document.getElementById("title").innerHTML = modalInfo[id].title;
        document.getElementById("info").innerHTML = modalInfo[id].info;
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
                            src="https://images.unsplash.com/photo-1508124780861-b1687f9a13e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f841d43a63c085e930aa5b6b33e89a9f&auto=format&fit=crop&w=1385&q=80"
                            alt=""
                        />
                        <div className="custom-text">
                            <h3>PROJECT 1</h3>
                            <p>Short Description</p>
                        </div>
                        <div className="custom-button" onClick={(e) => openModal(e.target.parentElement)}>
                            Learn More
                        </div>
                    </div>

                    <div className="custom-item" id="2">
                        <img
                            src="https://images.unsplash.com/photo-1496492352121-593138d42a61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3542849cc0459345e3aa82a90ae51a01&auto=format&fit=crop&w=1350&q=80"
                            alt=""
                        />
                        <div className="custom-text">
                            <h3>PROJECT 2</h3>
                            <p>Short Description</p>
                        </div>
                        <div className="custom-button" onClick={(e) => openModal(e.target.parentElement)}>
                            Learn More
                        </div>
                    </div>

                    <div className="custom-item" id="3">
                        <img
                            src="https://images.unsplash.com/photo-1515215676803-119c88d493cf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=baf00747bfb9fe41ad9af8cf00dbebbf&auto=format&fit=crop&w=1350&q=80"
                            alt=""
                        />
                        <div className="custom-text">
                            <h3>PROJECT 3</h3>
                            <p>Short Description</p>
                        </div>
                        <div className="custom-button" onClick={(e) => openModal(e.target.parentElement)}>
                            Learn More
                        </div>
                    </div>

                    <div className="custom-item" id="4">
                        <img
                            src="https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e3be993a88feed38e4f5374ff3ba115&auto=format&fit=crop&w=1350&q=80g"
                            alt=""
                        />
                        <div className="custom-text">
                            <h3>PROJECT 4</h3>
                            <p>Short Description</p>
                        </div>
                        <div className="custom-button" onClick={(e) => openModal(e.target.parentElement)}>
                            Learn More
                        </div>
                    </div>

                    <div className="custom-item" id="5">
                        <img
                            src="https://images.unsplash.com/photo-1504875427817-937a8a12e167?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd7f399ba43093ead08e7dbf5e083f09&auto=format&fit=crop&w=1434&q=80"
                            alt=""
                        />
                        <div className="custom-text">
                            <h3>PROJECT 5</h3>
                            <p>Short Description</p>
                        </div>
                        <div className="custom-button" onClick={(e) => openModal(e.target.parentElement)}>
                            Learn More
                        </div>
                    </div>

                    <div className="custom-item" id="6">
                        <img
                            src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f758b0379f730e73c03b6153aaad7cf1&auto=format&fit=crop&w=1350&q=80"
                            alt=""
                        />
                        <div className="custom-text">
                            <h3>PROJECT 6</h3>
                            <p>Short Description</p>
                        </div>
                        <div className="custom-button" onClick={(e) => openModal(e.target.parentElement)}>
                            Learn More
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
                            <h3 id="title"></h3>
                            <p id="info">Some text</p>
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
