import React from 'react';
import WelcomeHeader from './WelcomeHeader';
import WelcomeHero from './WelcomeHero';
import CountrySelection from './CountrySelection';
import WelcomeFooter from './WelcomeFooter';

const WelcomePage = () => {
  return (
    <div className="font-['Segoe_UI',_'Tahoma',_'Geneva',_'Verdana',_sans-serif] text-[#333]">
      {/* Header */}
      <WelcomeHeader />

      {/* Hero Section (включает CountrySelection внутри) */}
      <WelcomeHero />

      {/* Footer */}
      <WelcomeFooter />
    </div>
  );
};

export default WelcomePage;
