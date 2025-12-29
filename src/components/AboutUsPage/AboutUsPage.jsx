import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import AboutUsHeader from './AboutUsHeader';
import AboutUsFooter from './AboutUsFooter';

// Import images from Assets folder
import qLogo from './Assets/Q.png';
import up1Image from './Assets/up1.png';
import down2Image from './Assets/down2.png';
import up3Image from './Assets/up3.png';
import down4Image from './Assets/down4.png';
import circlesImage from './Assets/circles.png';
import fromToImage from './Assets/from-to.png';
import glocalImage from './Assets/Glocal.png';
import personalTouchImage from './Assets/personal-touch.png';
import activeEvolutionImage from './Assets/active-evolution.png';

const AboutUsPage = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  return (
    <div
      className="font-['Rubik',_sans-serif] text-white w-full overflow-x-hidden overflow-y-visible min-h-screen"
      style={{
        fontFamily: "'Rubik', sans-serif",
        background: 'linear-gradient(to bottom, #22afe4 0%, #005490 100%)'
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-[1895px] mx-auto w-full">
        {/* Header */}
        <AboutUsHeader />

        {/* ABOUT Q Section */}
        <section
          className="w-full text-center"
          style={{
            paddingTop: '0',
            paddingBottom: '0',
            paddingLeft: '0',
            paddingRight: '0'
          }}
        >
          <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
            <h1
              className="font-bold text-white uppercase"
              style={{
                fontSize: 'clamp(63px, 4.6vw + 27.6px, 115px)',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
              }}
            >
              ABOUT
            </h1>
            <img
              src={qLogo}
              alt="Q Logo"
              style={{
                height: 'clamp(67px, 4.3vw + 26.9px, 115px)',
                width: 'auto'
              }}
            />
          </div>
          <p
            className="text-white mx-auto"
            style={{
              fontSize: 'clamp(16px, 2.31vw + -1.78px, 42px)',
              lineHeight: '1.6',
              width: '80%',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              whiteSpace: 'pre-line'
            }}
          >
            The world's leading glocal mobile provider,{'\n'}where every foreign worker feels at home everywhere through seamless,{'\n'}culturally attuned connectivity
          </p>
        </section>

        {/* FROM VISION TO MISSION Section */}
        <section
          className="w-full relative"
          style={{
            paddingTop: '0',
            paddingBottom: '0',
            paddingLeft: '0',
            paddingRight: '0',
            opacity: '0.9'
          }}
        >
          <div className="relative" style={{ width: '100%', overflow: 'visible' }}>
            {/* FROM VISION TO MISSION Image */}
            <img
              src={fromToImage}
              alt="From Vision to Mission"
              className="w-full h-auto"
              style={{ width: '100%', height: 'auto' }}
            />
            
            {/* Text overlay - First */}
            <div 
              className="absolute"
              style={{
                right: '10%',
                top: '40%',
                width: '40%'
              }}
            >
              <p
                className="text-white"
                style={{
                  fontSize: 'clamp(15px, 1.953vw - 0.01px, 37px)',
                  lineHeight: '1.6',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                  whiteSpace: 'pre-line'
                }}
              >
                Q Mobile pioneers the glocal revolution in{'\n'}telecommunications, empowering foreign{'\n'}workers to stay deeply connected with their{'\n'}roots while thriving in their host countries
              </p>
            </div>

            {/* Text overlay - Second */}
            <div 
              className="absolute"
              style={{
                right: '25%'
              }}
            >
              <p
                className="text-white"
                style={{
                  fontSize: 'clamp(15px, 1.953vw - 0.01px, 37px)',
                  lineHeight: '1.6',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                  whiteSpace: 'pre-line',
                  textAlign: 'center'
                }}
              >
                Through our glocal approach, Q Mobile transforms the{'\n'}foreign worker experience by connecting them to{'\n'}everything they miss while empowering their journey abroad
              </p>
            </div>
          </div>
        </section>

        {/* OUR APPROACH Section */}
        <section
          className="w-full relative"
          style={{
            paddingTop: 'clamp(200px, 13.3vw + 97.7px, 350px)',
            paddingBottom: '0',
            paddingLeft: '0',
            paddingRight: '0'
          }}
        >
          <h2
            className="text-center font-bold uppercase mb-12 md:mb-16"
            style={{
              fontSize: 'clamp(80px, 8.44vw + 15.1px, 175px)',
              marginBottom: 'clamp(40px, 6vw, 80px)',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              color: '#005291'
            }}
          >
            OUR APPROACH
          </h2>

          <div className="max-w-6xl mx-auto relative">
            {/* Images Row */}
            <div className="flex flex-nowrap justify-center items-center mb-8 md:mb-12">
              <img
                src={up1Image}
                alt=""
                className="w-auto h-auto"
                style={{ maxHeight: 'clamp(260px, 39.1vw - 40.7px, 700px)' }}
              />
              <img
                src={down2Image}
                alt=""
                className="w-auto h-auto"
                style={{ maxHeight: 'clamp(260px, 39.1vw - 40.7px, 700px)' }}
              />
              <img
                src={up3Image}
                alt=""
                className="w-auto h-auto"
                style={{ maxHeight: 'clamp(260px, 39.1vw - 40.7px, 700px)' }}
              />
              <img
                src={down4Image}
                alt=""
                className="w-auto h-auto"
                style={{ maxHeight: 'clamp(260px, 39.1vw - 40.7px, 700px)' }}
              />
            </div>
          </div>
        </section>

        {/* OUR VALUES Section */}
        <section
          className="w-full"
          style={{
            paddingTop: '0',
            paddingBottom: '60px',
            paddingLeft: '0',
            paddingRight: '0'
          }}
        >
          <h2
            className="text-center font-bold uppercase mb-12 md:mb-16"
            style={{
              fontSize: 'clamp(80px, 8.44vw + 15.1px, 175px)',
              marginBottom: 'clamp(40px, 6vw, 80px)',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              color: '#66c8d5'
            }}
          >
            OUR VALUES
          </h2>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Glocal Excellence */}
            <div className="text-center">
              <div
                className="mb-6 flex justify-center"
                style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
              >
                <img
                  src={glocalImage}
                  alt="Glocal Excellence"
                  className="w-auto h-auto"
                  style={{ maxWidth: 'clamp(64px, 8vw, 96px)', maxHeight: 'clamp(64px, 8vw, 96px)' }}
                />
              </div>
              <h3
                className="font-bold uppercase mb-4"
                style={{
                  fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
                  marginBottom: 'clamp(16px, 2vw, 24px)',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                  color: '#66c8d5'
                }}
              >
                GLOCAL EXCELLENCE
              </h3>
              <p
                className="text-white"
                style={{
                  fontSize: 'clamp(17px, 0.71vw + 11.54px, 25px)',
                  fontWeight: '600',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                }}
              >
                Meeting global standards for security, transparency, and ethics. Delivering localized expertise and customized solutions
              </p>
            </div>

            {/* Personal Touch & Human-Centered */}
            <div className="text-center">
              <div
                className="mb-6 flex justify-center"
                style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
              >
                <img
                  src={personalTouchImage}
                  alt="Personal Touch"
                  className="w-auto h-auto"
                  style={{ maxWidth: 'clamp(64px, 8vw, 96px)', maxHeight: 'clamp(64px, 8vw, 96px)' }}
                />
              </div>
              <h3
                className="font-bold uppercase mb-4"
                style={{
                  fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
                  marginBottom: 'clamp(16px, 2vw, 24px)',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                  color: '#66c8d5'
                }}
              >
                PERSONAL TOUCH & HUMAN-CENTERED
              </h3>
              <p
                className="text-white"
                style={{
                  fontSize: 'clamp(17px, 0.71vw + 11.54px, 25px)',
                  fontWeight: '600',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                }}
              >
                Your language, your comfort - Breaking down language barriers. People-first, tech-enabled. Creating warmth and understanding in digital interactions
              </p>
            </div>

            {/* Active Evolution */}
            <div className="text-center">
              <div
                className="mb-6 flex justify-center"
                style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
              >
                <img
                  src={activeEvolutionImage}
                  alt="Active Evolution"
                  className="w-auto h-auto"
                  style={{ maxWidth: 'clamp(64px, 8vw, 96px)', maxHeight: 'clamp(64px, 8vw, 96px)' }}
                />
              </div>
              <h3
                className="font-bold uppercase mb-4"
                style={{
                  fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
                  marginBottom: 'clamp(16px, 2vw, 24px)',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                  color: '#66c8d5'
                }}
              >
                ACTIVE EVOLUTION
              </h3>
              <p
                className="text-white"
                style={{
                  fontSize: 'clamp(17px, 0.71vw + 11.54px, 25px)',
                  fontWeight: '600',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                }}
              >
                Constantly moving forward, Leading change, driving progress, Always advancing, never settling
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <AboutUsFooter />
      </div>
    </div>
  );
};

export default AboutUsPage;

