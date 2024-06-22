import React, { useState, useEffect, useRef } from 'react';
import './FollowBall.css';

const FollowBall = () => {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const targetPosition = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      targetPosition.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setPosition((prevPosition) => {
        const dx = targetPosition.current.x - prevPosition.x;
        const dy = targetPosition.current.y - prevPosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const speed = 0.05; // Adjust speed factor as needed

        return {
          x: prevPosition.x + dx * speed,
          y: prevPosition.y + dy * speed,
        };
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const calculateComplementaryColor = (color) => {
    // Assuming color is in the form "rgb(r, g, b)"
    const rgb = color.match(/\d+/g).map(Number);
    const [r, g, b] = rgb;
    return `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
  };

  const ballBackgroundColor = 'rgba(255, 255, 255, 0.7)';
  const ballBorderColor = calculateComplementaryColor(ballBackgroundColor);

  const ballStyle = {
    left: `${position.x - 25}px`,
    top: `${position.y - 25}px`,
    backgroundColor: ballBackgroundColor,
    borderColor: ballBorderColor,
  };

  return <div className="ball" style={ballStyle}></div>;
};

export default FollowBall;
