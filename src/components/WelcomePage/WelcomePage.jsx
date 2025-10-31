import React, { useEffect, useState } from 'react';
import WelcomeHeader from './WelcomeHeader';
import WelcomeHero from './WelcomeHero';
import CountrySelection from './CountrySelection';
import WelcomeFooter from './WelcomeFooter';

const WelcomePage = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const baseWidth = 1895;
      const currentWidth = window.innerWidth;
      const calculatedScale = Math.min(currentWidth / baseWidth, 1);
      setScale(calculatedScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div 
      className="font-['Segoe_UI',_'Tahoma',_'Geneva',_'Verdana',_sans-serif] text-[#333] flex justify-center items-start"
      style={{
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'visible'
      }}
    >
      <div
        style={{
          width: '1895px',
          transform: `scale(${scale})`,
          transformOrigin: 'top center'
        }}
      >
        <div className="font-['Segoe_UI',_'Tahoma',_'Geneva',_'Verdana',_sans-serif] text-[#333]">
          {/* Header */}
          <WelcomeHeader />

          {/* Hero Section (включает CountrySelection внутри) */}
          <WelcomeHero />

          {/* Footer */}
          <WelcomeFooter />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
