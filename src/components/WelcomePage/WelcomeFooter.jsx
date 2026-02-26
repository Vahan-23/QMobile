import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import footerLogo from './pngs/logoFooter.png';

const FOOTER_BG = '#03355c';

const WelcomeFooter = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const links = [
    { href: '/terms-conditions', label: t.termsConditions },
    { href: '/privacy-policy', label: t.privacyPolicy },
    { href: '/cookies-policy', label: t.cookiesPolicy },
    { href: '/support', label: t.support },
  ];

  return (
    <footer
      className="text-white w-full flex items-center"
      style={{
        backgroundColor: FOOTER_BG,
        minHeight: 'clamp(100px, 25vw, 260px)',
        maxHeight: 'clamp(100px, 25vw, 260px)',
      }}
    >
      <div className="w-full max-w-[1895px] mx-auto px-3 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6">
        <div
          className="flex flex-row items-center justify-between gap-2 sm:gap-6"
          style={{
            flexDirection: isRTL ? 'row-reverse' : 'row',
            direction: isRTL ? 'rtl' : 'ltr',
          }}
        >
          <a href="/" className="flex-shrink-0" aria-label="Q mobile home">
            <img
              src={footerLogo}
              alt="Q mobile"
              className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>
          <nav
            className="flex flex-wrap items-center gap-x-1 sm:gap-x-2 gap-y-0"
            style={{
              justifyContent: isRTL ? 'flex-start' : 'flex-end',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              fontSize: 'clamp(12px, 2.2vw, 38px)',
            }}
          >
            {links.map((link, index) => (
              <span key={link.href}>
                {index > 0 && (
                  <span className="mx-1.5" aria-hidden style={{ color: '#7fd2dd' }}>
                    •
                  </span>
                )}
                <a
                  href={link.href}
                  className="text-white no-underline hover:underline focus:outline-none focus:underline"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default WelcomeFooter;
