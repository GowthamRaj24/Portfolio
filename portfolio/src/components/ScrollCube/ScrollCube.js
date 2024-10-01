import "./ScrollCube.css";
import React, { useState, useEffect } from 'react';

const ScrollCube = ({ children }) => {

    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const scroll =
          window.scrollY / (document.body.offsetHeight - window.innerHeight);
        setScrollPercentage(scroll);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


  return (
    <>
    <div className="progress">
    </div>

    <div className="cube-wrap">
        <div className="cube">
            <div className="side top"></div>
            <div className="side bottom"></div>
            <div className="side front"></div>
            <div className="side back"></div>
            <div className="side left"></div>
            <div className="side right"></div>
        </div>
    </div>
    </>
  );
}
export default ScrollCube;