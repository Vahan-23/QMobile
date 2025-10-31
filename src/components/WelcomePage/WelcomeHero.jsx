import React from 'react';
import CountrySelection from './CountrySelection';

const WelcomeHero = () => {
  // Используем encodeURI для правильной обработки пробелов и спецсимволов в пути
  const imagePath = '/Images/01 - Welcome page/welcome2 - Copy.jpg';
  const backgroundImage = encodeURI(imagePath);

  return (
    <section 
      className="relative overflow-hidden min-h-screen"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: '200% auto',
        backgroundPosition: '-460px -660px',
        backgroundRepeat: 'no-repeat',
        width: '100%'
      }}
    >
      {/* Контейнер, высота которого определяется whiteLayer */}
      <div className="relative w-full" style={{ top: 'calc(10rem + 100px)' }}>
        {/* White Layer - определяет высоту страницы */}
        <div className="relative z-[1]" style={{ pointerEvents: 'none' }}>
          <img 
            src="/Images/whiteLayer.png"
            alt=""
            className="w-full h-auto block"
            style={{ display: 'block' }}
          />
        </div>

        {/* Контент с тайским текстом - поверх whiteLayer */}
        <div className="absolute left-0 right-0 z-[2] pt-12 px-12 pb-12 md:pt-8 md:px-8 sm:pt-8 sm:px-8" style={{ top: '60px' , left: '50px' }}>
          <h2 className="text-white text-5xl font-bold mb-2.5 sm:text-[115px] sm:font-thin">
            ยินดีต้อนรับกลับบ้าน
          </h2>
          <p className="text-white cursor-pointer" style={{ fontSize: '1.875rem' }}>Switch language</p>
        </div>

        {/* CountrySelection поверх whiteLayer */}
        <div className="absolute left-0 right-0 z-[2] pt-32 md:pt-24 sm:pt-20" style={{ top: '500px' }}>
          <CountrySelection />
        </div>
      </div>
    </section>
  );
};

export default WelcomeHero;
