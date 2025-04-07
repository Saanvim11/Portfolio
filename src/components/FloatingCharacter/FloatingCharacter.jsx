import React, { useEffect, useState } from 'react';
import './FloatingCharacter.css';
import butterfly from './butterfly.png'

const FloatingCharacter = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate vertical offset based on scroll
  const verticalOffset = Math.min(scrollY / 5, 100); // Limit max offset

  return (
    <div 
      className="floating-character"
      style={{
        left: `${position.x}%`,
        top: `calc(${position.y}% + ${verticalOffset}px)`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="character"><img src={butterfly} alt="Butterfly" /></div>
    </div>
  );
};

export default FloatingCharacter;