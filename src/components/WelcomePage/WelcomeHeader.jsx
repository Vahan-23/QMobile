import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';

const WelcomeHeader = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  return (
    <header className="absolute top-0 left-0 right-0 flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 z-10 bg-transparent">
      <div className="flex items-center">
        <img 
          src={t.logo} 
          alt="Qmobile Logo" 
          className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto"
          style={{
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
          }}
        />
      </div>
      <div 
        className="text-white cursor-pointer text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[3rem]"
        style={{
          direction: isRTL ? 'rtl' : 'ltr',
          fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
        }}
      >
        {t.myAccount}
      </div>
    </header>
  );
};

export default WelcomeHeader;
