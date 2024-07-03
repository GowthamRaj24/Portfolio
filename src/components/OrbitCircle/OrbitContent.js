import { Description } from "@material-ui/icons";
import "./OrbitContent.css";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const OrbitContent = ({title , tech , description}) => {
    useEffect(() => {
        ScrollReveal().reveal(".reveal" , {
            duration: 2500})
    }
    , []);
    return (
        <div className="outer_orbitcontent">
            <h1><span>{title}</span></h1>
            <h4 className="project_description">Project Description :  </h4>
                <ul>
                    {description && description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
           
        </div>
    )
};

export default OrbitContent;