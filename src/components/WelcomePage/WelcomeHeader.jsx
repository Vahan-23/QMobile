import React from 'react';

const WelcomeHeader = () => {
  return (
    <header className="absolute top-0 left-0 right-0 flex justify-between items-center px-12 py-5 z-10 md:px-12 sm:px-8 bg-transparent">
      <div className="flex items-center">
        <img 
          src="/Qmobile_Logo.png" 
          alt="Qmobile Logo" 
          className="h-24 w-auto"
          style={{
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
          }}
        />
      </div>
      <div className="text-white text-[3rem] cursor-pointer">My Account</div>
    </header>
  );
};

export default WelcomeHeader;
