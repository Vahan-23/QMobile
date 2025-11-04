import React from 'react';
import WelcomeHeader from './WelcomeHeader';
import WelcomeHero from './WelcomeHero';
import CountrySelection from './CountrySelection';
import WelcomeFooter from './WelcomeFooter';

const WelcomePage = () => {
  return (
    <div 
      className="font-['Segoe_UI',_'Tahoma',_'Geneva',_'Verdana',_sans-serif] text-[#333] w-full overflow-x-hidden overflow-y-visible"
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
