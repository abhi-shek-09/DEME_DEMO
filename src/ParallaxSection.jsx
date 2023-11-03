import React, { useEffect } from 'react';
import { jarallax } from 'jarallax';

const ParallaxSection = ({ imageSrc, children }) => {
  useEffect(() => {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.5,
      imgWidth: 1366,
      imgHeight: 768,
    });
  }, []);

  return (
    <div className="jarallax" style={{ backgroundImage: `url(${imageSrc})` }}>
      {children}
    </div>
  );
};

export default ParallaxSection;
