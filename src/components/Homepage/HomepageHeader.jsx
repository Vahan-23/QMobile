import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';

const HomepageHeader = ({
  showTitle = true,
  titleKey = 'marketplace',
  children,
  backgroundStyle
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
      className="w-full text-white overflow-x-hidden"
      style={{
        padding: '0px 0px',
        fontFamily: "'Rubik', sans-serif",
        background: backgroundStyle ?? 'transparent'
      }}
    >
      <div
        className="max-w-[1895px] mx-auto w-full"
        style={{ padding: '30px' }}
      >
        {/* Desktop Navigation Row */}
        <div className="hidden md:flex justify-between items-center w-full gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 min-w-0">
            <img
              src={t.logo}
              alt="Qmobile Logo"
              className="w-auto h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 2xl:h-32 max-h-full"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center flex-nowrap justify-center flex-1 min-w-0 nav-links-gap">
            <a 
              href="#" 
              className="text-white hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink font-light"
              style={{ 
                fontSize: 'clamp(16px, 2vw, 36px)',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
              }}
            >
              {t.joinUs}
            </a>
            <a 
              href="#" 
              className="text-white hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink font-light"
              style={{ 
                fontSize: 'clamp(16px, 2vw, 36px)',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
              }}
            >
              {t.ourStory}
            </a>
            <a 
              href="#" 
              className="text-white hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink font-light"
              style={{ 
                fontSize: 'clamp(16px, 2vw, 36px)',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
              }}
            >
              {t.marketplace}
            </a>
            <a 
              href="#" 
              className="text-white hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink font-light"
              style={{ 
                fontSize: 'clamp(16px, 2vw, 36px)',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
              }}
            >
              {t.support}
            </a>
            <a 
              href="#" 
              className="text-white hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink font-light"
              style={{ 
                fontSize: 'clamp(16px, 2vw, 36px)',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
              }}
            >
              {t.blog}
            </a>
            <a 
              href="#" 
              className="text-white hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink font-light"
              style={{ 
                fontSize: 'clamp(16px, 2vw, 36px)',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
              }}
            >
              {t.myAccount}
            </a>

            {/* Language Switch */}
            <div className="flex items-center flex-shrink-0 ml-1 sm:ml-2">
              <button 
                onClick={toggleLanguage}
                className="flex items-center text-white hover:opacity-80 transition-opacity"
              >
                <img
                  src="/Images/2x/switch language icon@2x.png"
                  alt="Switch language"
                  className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24"
                  style={{
                    marginTop: 'clamp(10px, 2vw, 46px)'
                  }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="flex md:hidden justify-between items-center w-full">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img
              src={t.logo}
              alt="Qmobile Logo"
              className="w-auto h-16 max-h-full"
            />
          </div>

          {/* Right side: Language Switch and Burger */}
          <div className="flex items-center gap-4">
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
                    width: '5rem',
                    height: '5rem'
                  }}
                />
              </button>
            </div>

            {/* Burger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            >
              <img
                src="/Images/2x/hamburger@2x.png"
                alt="Menu"
                className="object-contain"
                style={{
                  width: '2.5rem',
                  height: '2.5rem'
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
                href="#" 
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
                href="#" 
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
                href="#" 
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
                href="#" 
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
                href="#" 
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
                href="#" 
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

export default HomepageHeader;


