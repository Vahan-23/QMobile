import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import headerLogo from './pngs/logoQmob.png';

const WelcomeHeader = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  return (
    <header
      className="w-full flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 z-10"
      style={{ backgroundColor: '#7fd2dd' }}
    >
      <div className="flex items-center">
        <img
          src={headerLogo}
          alt="Qmobile Logo"
          className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
        />
      </div>
      <div
        className="cursor-pointer text-base sm:text-lg md:text-xl lg:text-2xl font-medium"
        style={{
          color: '#03355c',
          direction: isRTL ? 'rtl' : 'ltr',
          fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
        }}
      >
        {t.myAccount}
      </div>
    </header>
  );
};

export default WelcomeHeader;
