import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';

const AboutUsHeader = ({
  showTitle = false,
  titleKey = 'aboutUs',
  children
}) => {
  const { language, isRTL, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className="w-full text-white bg-transparent relative z-50"
      style={{
        padding: isMobile ? '15px' : '20px 10px',
        fontFamily: "'Rubik', sans-serif",
        overflow: 'visible'
      }}
    >
      <div className="max-w-[1895px] mx-auto w-full" style={{ overflow: 'visible' }}>
        {/* Desktop Navigation Row */}
        <div className="hidden md:flex justify-between items-center w-full" style={{ gap: 'clamp(8px, 2vw, 48px)' }}>
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img
              src={t.logo}
              alt="Qmobile Logo"
              className="w-auto h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 2xl:h-32 max-h-full"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center flex-1 justify-center" style={{ gap: 'clamp(8px, 1.5vw, 32px)', minWidth: 0 }}>
            <a 
              href="/join-us" 
              className="text-white hover:opacity-80 transition-opacity whitespace-nowrap font-light flex-shrink-0"
              style={{ 
                fontSize: 'clamp(16px, 2vw, 36px)',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
              }}
            >
              {t.joinUs}
            </a>
            <a 
              href="/our-story" 
              className="text-white hover:opacity-80 transition-opacity whitespace-nowrap font-light flex-shrink-0"
              style={{ 
                fontSize: 'clamp(16px, 2vw, 36px)',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
              }}
            >
              {t.ourStory}
            </a>
            <a 
              href="/marketplace" 
              className="text-white hover:opacity-80 transition-opacity whitespace-nowrap font-light flex-shrink-0"
              style={{ 
                fontSize: 'clamp(16px, 2vw, 36px)',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
              }}
            >
              {t.marketplace}
            </a>
            <a 
              href="/support" 
              className="text-white hover:opacity-80 transition-opacity whitespace-nowrap font-light flex-shrink-0"
              style={{ 
                fontSize: 'clamp(16px, 2vw, 36px)',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
              }}
            >
              {t.support}
            </a>
            <a 
              href="/blog" 
              className="text-white hover:opacity-80 transition-opacity whitespace-nowrap font-light flex-shrink-0"
              style={{ 
                fontSize: 'clamp(16px, 2vw, 36px)',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
              }}
            >
              {t.blog}
            </a>
            <a 
              href="/account" 
              className="text-white hover:opacity-80 transition-opacity whitespace-nowrap font-light flex-shrink-0"
              style={{ 
                fontSize: 'clamp(16px, 2vw, 36px)',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
              }}
            >
              {t.myAccount}
            </a>
          </div>

          {/* Language Switch */}
          <div className="flex items-center flex-shrink-0">
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-white hover:opacity-80 transition-opacity"
            >
              <img
                src="/Images/2x/switch language icon@2x.png"
                alt="Switch language"
                className="object-contain"
                style={{
                  width: '60px',
                  height: '60px',
                  marginTop: 'clamp(10px, 2vw, 46px)'
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="flex md:hidden justify-between items-center w-full" style={{ minWidth: 0, overflow: 'visible' }}>
          {/* Logo */}
          <div className="flex items-center flex-shrink-0" style={{ minWidth: 0, maxWidth: '50%' }}>
            <img
              src={t.logo}
              alt="Qmobile Logo"
              className="w-auto max-h-full"
              style={{
                height: 'clamp(2.5rem, 8vw, 4rem)',
                maxWidth: '100%',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Right side: Language Switch and Burger */}
          <div className="flex items-center" style={{ gap: 'clamp(8px, 2vw, 16px)' }}>
            {/* Language Switch */}
            <div className="flex items-center flex-shrink-0">
              <button 
                onClick={toggleLanguage}
                className="flex items-center text-white hover:opacity-80 transition-opacity"
                style={{ transform: 'translateY(12px)' }}
              >
                <img
                  src="/Images/2x/switch language icon@2x.png"
                  alt="Switch language"
                  className="object-contain"
                  style={{
                    width: '60px',
                    height: '60px'
                  }}
                />
              </button>
            </div>

            {/* Burger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="flex items-center justify-center text-white hover:opacity-80 transition-opacity flex-shrink-0"
            >
              <img
                src="/Images/2x/hamburger@2x.png"
                alt="Menu"
                className="object-contain"
                style={{
                  width: 'clamp(2rem, 6vw, 2.5rem)',
                  height: 'clamp(2rem, 6vw, 2.5rem)',
                  minWidth: '2rem',
                  minHeight: '2rem'
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col gap-4 pt-4">
              <a 
                href="/join-us" 
                className="text-white hover:opacity-80 transition-opacity font-light text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                }}
              >
                {t.joinUs}
              </a>
              <a 
                href="/our-story" 
                className="text-white hover:opacity-80 transition-opacity font-light text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                }}
              >
                {t.ourStory}
              </a>
              <a 
                href="/marketplace" 
                className="text-white hover:opacity-80 transition-opacity font-light text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                }}
              >
                {t.marketplace}
              </a>
              <a 
                href="/support" 
                className="text-white hover:opacity-80 transition-opacity font-light text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                }}
              >
                {t.support}
              </a>
              <a 
                href="/blog" 
                className="text-white hover:opacity-80 transition-opacity font-light text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                }}
              >
                {t.blog}
              </a>
              <a 
                href="/account" 
                className="text-white hover:opacity-80 transition-opacity font-light text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                }}
              >
                {t.myAccount}
              </a>
            </div>
          </div>
        )}


        {showTitle && (
          <div className="w-full" style={{ marginTop: 'clamp(40px, 8vw, 96px)' }}>
            <h1 
              className="text-center font-bold uppercase"
              style={{ 
                marginBottom: 'clamp(15px, 2vw, 30px)', 
                fontSize: 'clamp(2rem, 5vw, 4.7rem)',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
              }}
            >
              {t[titleKey]?.toUpperCase?.() || ''}
            </h1>
          </div>
        )}

        {children}
      </div>
    </header>
  );
};

export default AboutUsHeader;


