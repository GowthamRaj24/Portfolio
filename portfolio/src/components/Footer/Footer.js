
import "./Footer.css";
import { DockDemo } from "../ContactsDock/DemoDock";

const Footer = () => {
    return (
        <footer class="footer">
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <span>About my Portfolio</span>
      Developed this personal portfolio website using React, incorporating elements from Magic UI and Material-UI for a modern and responsive design. Feel free to reach out if you have any suggestions or need assistance.
    </p>
    
  </div>
  <div class="footer-center col-md-4 col-sm-6">

    <div>
      <i class="fa fa-phone"></i>
      <p>Personal Details</p>
    </div>

    <DockDemo github="https://github.com/GowthamRaj24" arr={["github" , "leetcode" , "linkedin" ]}/>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
    <h2>Gowtham Raj's <span>Portfolio</span></h2>
    <p class="menu">
      <a href="#" id="home"> Home</a> |
      <a href="#" id="services"> Services</a> |
      <a href="#"> Portfolio</a> |
      <a href="#"> News</a> |
      <a href="#"> Contact</a>
    </p>
    <p class="name"> Done by Gowtham &copy; 2024</p>
  </div>
</footer>
    );
};

export default Footer;