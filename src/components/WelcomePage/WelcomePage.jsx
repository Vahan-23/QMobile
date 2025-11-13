import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import WelcomeHeader from './WelcomeHeader';
import WelcomeHero from './WelcomeHero';
import WelcomeFooter from './WelcomeFooter';

const WelcomePage = () => {
  const { isRTL } = useLanguage();

  return (
    <div 
      className="font-['Segoe_UI',_'Tahoma',_'Geneva',_'Verdana',_sans-serif] text-[#333] w-full overflow-x-hidden overflow-y-visible"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-[1895px] mx-auto w-full">
          {/* Header */}
          <WelcomeHeader />

          {/* Hero Section (includes CountrySelection inside) */}
          <WelcomeHero />

          {/* Footer */}
          <WelcomeFooter />
      </div>
    </div>
  );
};

export default WelcomePage;
