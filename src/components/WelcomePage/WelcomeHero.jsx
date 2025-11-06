import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import CountrySelection from './CountrySelection';
import { pxToPosition, pxToResponsive, adaptivePercent } from './utils/responsive';

const WelcomeHero = () => {
  const { language, isRTL, toggleLanguage } = useLanguage();
  const t = translations[language];

  // Use encodeURI to properly handle spaces and special characters in the path
  const imagePath = t.backgroundImage;
  const backgroundImage = encodeURI(imagePath);

  // Calculate background position - adjust for RTL to maintain visual balance
  // For RTL, we adjust the horizontal position to mirror the visual composition
  const backgroundPositionX = isRTL 
    ? 'clamp(24%, 24vw, 24%)' // Adjusted position for RTL (mirrored)
    : 'clamp(27%, 76vw, 76%)'; // Original position for LTR

  // Specific positions from the design (base width 1895px)
  // Thai text: top: 260px (from whiteLayer start), left: 50px
  // CountrySelection: top: 500px (from whiteLayer start)
  // Background image starts from the top, but visible part of the image is almost from the center

  return (
    <section 
      className="relative overflow-hidden w-full"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: '207%',
        backgroundPosition: `${backgroundPositionX} 138%`,
        backgroundRepeat: 'no-repeat',
        paddingTop: 'clamp(120px, 10.5541vw, 200px)',
        // Mirror only the background image for RTL to maintain visual balance
        transform: isRTL ? 'scaleX(-1)' : 'none',
        transition: 'transform 0.3s ease-in-out' // Smooth transition when switching languages
      }}
    >
      {/* Container, height is determined by whiteLayer */}
      {/* Counter-transform to restore normal content direction */}
      <div 
        className="relative w-full"
        style={{
          transform: isRTL ? 'scaleX(-1)' : 'none',
          transition: 'transform 0.3s ease-in-out' // Smooth transition
        }}
      >
        {/* White Layer - determines page height, starts slightly below paddingTop */}
        <div 
          className="relative z-[1]" 
          style={{ 
            pointerEvents: 'none',
            marginTop: pxToPosition(50, { minPx: 30, maxPx: 50 }) // Small offset to lower whiteLayer slightly
          }}>
          <img 
            src={t.whiteLayer}
            alt=""
            className="w-full h-auto block"
            style={{ 
              display: 'block',
              transform: isRTL ? 'scaleX(-1)' : 'none',
              transition: 'transform 0.3s ease-in-out'
            }}
          />
        </div>

        {/* Container for welcome text - positioned above whiteLayer */}
        {/* Positions: top position (min 220px), left/right position (min 50px) */}
        <div 
          className="absolute z-[2] thai-text-container" 
          style={{ 
            top: pxToPosition(180, { minPx: 50, maxPx: 180 }), // Top position (min 220px)
            ...(isRTL ? { right: pxToPosition(80, { minPx: 30, maxPx: 80 }) } : { left: pxToPosition(80, { minPx: 30, maxPx: 80 }) }), // Left/Right position (min 50px)
            maxWidth: 'calc(100% - ' + pxToPosition(80, { minPx: 30, maxPx: 80 }) + ' - 20px)',
            textAlign: isRTL ? 'right' : 'left'
          }}>
          <h2 className="text-white mb-2.5"
              style={{ 
                fontSize: 'clamp(2rem, 8vw, 7rem)',
                lineHeight: '1.1',
                fontWeight: '300', // Reduced font-weight from default (min 400, now 300)
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.6), 0 4px 12px rgba(0, 0, 0, 0.5), 0 6px 16px rgba(0, 0, 0, 0.4)', // Text shadow
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
              }}>
            {t.welcomeText}
          </h2>
          <p 
            className="cursor-pointer" 
            onClick={toggleLanguage}
            style={{ 
              fontSize: 'clamp(1rem, 2.2vw, 2rem)', // Font size adjusted for better display
              marginTop: pxToPosition(30, { minPx: 15, maxPx: 30 }), // Margin top adjustment
              fontWeight: '500', // Reduced font-weight (min bold/700, now 500)
              color: '#e2e2e2', // Light gray color
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6), 0 2px 6px rgba(0, 0, 0, 0.5), 0 3px 8px rgba(0, 0, 0, 0.4)', // Text shadow
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
            }}>
            {t.switchLanguage}
          </p>
        </div>

        {/* CountrySelection positioned above whiteLayer */}
        {/* Position from design: top: 500px from whiteLayer start */}
        <div 
          className="absolute left-0 right-0 z-[2] country-selection-container" 
          style={{ 
            top: pxToPosition(500, { minPx: 200, maxPx: 500 })
          }}>
          <CountrySelection />
        </div>
      </div>
    </section>
  );
};

export default WelcomeHero;
