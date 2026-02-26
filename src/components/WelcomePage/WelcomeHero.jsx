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
        paddingTop: 'clamp(48px, 8vw, 80px)',
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
          {/* 1–6: welcome, switch, country selection — first on mobile, left on desktop */}
          <div
            className={`flex-1 flex flex-col min-w-0 order-1 items-center text-center ${isRTL ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}
          >
            <h2
              className="font-light leading-tight"
              style={{
                color: TEXT_DARK,
                fontSize: 'clamp(30px, 4vw, 90px)',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              }}
            >
              {t.welcomeText}
            </h2>

            <button
              type="button"
              onClick={toggleLanguage}
              className={`cursor-pointer bg-transparent border-none p-0 mt-2 sm:mt-3 inline-block self-center ${isRTL ? 'lg:self-end' : 'lg:self-start'}`}
              style={{
                color: '#005392',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                fontWeight: 500,
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              }}
            >
              <span className="block">{t.switchLanguage}</span>
              <span
                className="block mt-0.5 h-0.5 rounded-full mx-auto lg:mx-0"
                style={{ backgroundColor: '#005392', width: '60%', minWidth: 80 }}
                aria-hidden
              />
            </button>

            <div
              className="w-full max-w-[600px] lg:max-w-[600px]"
              style={{ marginTop: 'clamp(32px, 15vw, 190px)' }}
            >
              <CountrySelection />
            </div>
          </div>

          {/* 7: Hero logo — last on mobile (centered), right on desktop */}
          <div
            className="flex-1 flex items-center justify-center order-2 lg:justify-end mb-6 lg:mb-0 mt-8 lg:mt-0"
            style={{ minHeight: 'clamp(200px, 40vw, 520px)' }}
          >
            <div
              className="relative w-full flex items-center justify-center"
              style={{ maxWidth: 'clamp(140px, 48vw, 900px)' }}
            >
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
                  maxWidth: 'clamp(140px, 48vw, 900px)',
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
