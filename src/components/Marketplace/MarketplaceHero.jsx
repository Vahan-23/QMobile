import React from 'react';

const MarketplaceHero = () => {
  return (
    <section
      className="w-full bg-[#03355c] text-white"
      style={{
        padding: 'clamp(30px, 4vw, 60px) clamp(16px, 2.6vw, 50px)',
        fontFamily: "'Rubik', sans-serif"
      }}
    >
      <div className="max-w-[1895px] mx-auto">
        <h1 
          className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold uppercase"
          style={{ marginBottom: '30px' }}
        >
          MARKETPLACE
        </h1>
      </div>
    </section>
  );
};

export default MarketplaceHero;
