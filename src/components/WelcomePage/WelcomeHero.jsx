import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import CountrySelection from './CountrySelection';
import heroImage from './pngs/HeroImage.png';
import heroLogo from './pngs/HeroLogo.png';

const HERO_BG = '#7fd2dd';
const TEXT_DARK = '#03355c';

const WelcomeHero = () => {
  const { language, isRTL, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <section
      className="relative overflow-hidden w-full"
      style={{
        backgroundColor: HERO_BG,
        paddingTop: 'clamp(24px, 4vw, 64px)',
        paddingBottom: 'clamp(32px, 5vw, 80px)',
        transform: isRTL ? 'scaleX(-1)' : 'none',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <div
        className="w-full max-w-[1895px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
        style={{
          transform: isRTL ? 'scaleX(-1)' : 'none',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 xl:gap-16">
          {/* Left column: welcome, switch language, country selection */}
          <div
            className="flex-1 flex flex-col min-w-0 order-2 lg:order-1"
            style={{
              alignItems: isRTL ? 'flex-end' : 'flex-start',
              textAlign: isRTL ? 'right' : 'left',
            }}
          >
            <h2
              className="font-light leading-tight"
              style={{
                color: TEXT_DARK,
                fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              }}
            >
              {t.welcomeText}
            </h2>

            <button
              type="button"
              onClick={toggleLanguage}
              className="cursor-pointer bg-transparent border-none p-0 mt-3 sm:mt-4 inline-block text-left"
              style={{
                color: TEXT_DARK,
                fontSize: 'clamp(0.95rem, 1.5vw, 1.25rem)',
                fontWeight: 500,
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                alignSelf: isRTL ? 'flex-end' : 'flex-start',
              }}
            >
              <span className="block">{t.switchLanguage}</span>
              <span
                className="block mt-0.5 h-0.5 rounded-full"
                style={{ backgroundColor: TEXT_DARK, width: '60%', minWidth: 80 }}
                aria-hidden
              />
            </button>

            <div className="mt-6 lg:mt-8 w-full max-w-[600px]">
              <CountrySelection />
            </div>
          </div>

          {/* Right column: Hero logo (Q) with hero image visible inside its circle */}
          <div
            className="flex-1 flex items-center justify-center lg:justify-end order-1 lg:order-2 mb-6 lg:mb-0"
            style={{ minHeight: 'clamp(240px, 40vw, 520px)' }}
          >
            <div className="relative w-full max-w-[min(900px,90vw)] flex items-center justify-center">
              {/* Hero image: circle matches Q hole size, image fills it and is clipped */}
              <div
                className="absolute overflow-hidden rounded-full"
                style={{
                  width: '70%',
                  aspectRatio: '1',
                  left: '50%',
                  top: '50%',
                  transform: isRTL ? 'translate(50%, -50%)' : 'translate(-50%, -50%)',
                }}
              >
                <img
                  src={heroImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }}
                />
              </div>
              {/* Hero logo (Q) on top */}
              <img
                src={heroLogo}
                alt=""
                className="relative z-10 w-full h-auto object-contain"
                style={{
                  maxWidth: 900,
                  width: '100%',
                  transform: isRTL ? 'scaleX(-1)' : 'none',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeHero;
