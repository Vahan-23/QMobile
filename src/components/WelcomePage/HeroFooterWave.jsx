import React from 'react';

const HERO_BG = '#7fd2dd';
const FOOTER_COLOR = '#03355c';

/**
 * SVG wave between hero and footer. Wrapper uses hero bg so the area above
 * the wave curve is hero-colored; the path fills with footer color below the curve.
 */
const HeroFooterWave = () => (
  <div
    className="w-full"
    style={{ lineHeight: 0, marginBottom: -1, backgroundColor: HERO_BG }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      className="w-full block"
      style={{ height: 'clamp(48px, 6vw, 80px)', verticalAlign: 'middle' }}
    >
      <path
        fill={FOOTER_COLOR}
        d="M0 80h1200V40Q900 0 600 40Q300 80 0 40Z"
        transform="translate(600,40) scale(-1,1) translate(-600,-40)"
      />
    </svg>
  </div>
);

export default HeroFooterWave;
