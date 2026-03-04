import React from 'react';

const HERO_BOTTOM = '#005490';
const SUPPORT_SECTION_COLOR = '#ffffff';

/**
 * SVG wave between hero and "We are here for you" section.
 * Wrapper uses hero bottom color so the area above the wave is hero-colored;
 * the path fills with support section color below the curve.
 */
const HeroSupportWave = () => (
  <div
    className="w-full block -mt-8 min-[769px]:-mt-[120px]"
    style={{
      lineHeight: 0,
      marginBottom: -1,
      background: 'transparent',
      backgroundColor: 'transparent',
      position: 'relative',
      zIndex: 10
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      className="w-full block"
      style={{ height: 'clamp(35px, 7vw, 96px)', verticalAlign: 'middle' }}
    >
      <path
        fill={SUPPORT_SECTION_COLOR}
        d="M0 80h1200V40Q900 0 600 40Q300 80 0 40Z"
        transform="translate(600,40) scale(-1,1) translate(-600,-40)"
      />
    </svg>
  </div>
);

export default HeroSupportWave;
