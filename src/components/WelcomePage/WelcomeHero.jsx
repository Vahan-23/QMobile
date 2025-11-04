import React from 'react';
import CountrySelection from './CountrySelection';
import { pxToPosition, pxToResponsive, adaptivePercent } from './utils/responsive';

const WelcomeHero = () => {
  // Используем encodeURI для правильной обработки пробелов и спецсимволов в пути
  const imagePath = '/Images/01 - Welcome page/welcome2 - Copy.jpg';
  const backgroundImage = encodeURI(imagePath);

  // Конкретные позиции из дизайна (базовая ширина 1895px)
  // Тайский текст: top: 260px (от начала whiteLayer), left: 50px
  // CountrySelection: top: 500px (от начала whiteLayer)
  // Фоновое изображение начинается с верху, но видимая часть картинки почти с центра

  return (
    <section 
      className="relative overflow-hidden w-full"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: '207%',
        backgroundPosition: 'clamp(27%, 76vw, 76%) 138%',
        backgroundRepeat: 'no-repeat',
        paddingTop: 'clamp(120px, 10.5541vw, 200px)'
      }}
    >
      {/* Контейнер, высота которого определяется whiteLayer */}
      <div className="relative w-full">
        {/* White Layer - определяет высоту страницы, начинается чуть ниже paddingTop */}
        <div 
          className="relative z-[1]" 
          style={{ 
            pointerEvents: 'none',
            marginTop: pxToPosition(50, { minPx: 30, maxPx: 50 }) // Небольшой отступ чтобы опустить whiteLayer чуть ниже
          }}>
          <img 
            src="/Images/whiteLayer.png"
            alt=""
            className="w-full h-auto block"
            style={{ display: 'block' }}
          />
        </div>

        {/* Контент с тайским текстом - поверх whiteLayer */}
        {/* Позиции: поднят выше и сдвинут вправо адаптивно */}
        <div 
          className="absolute z-[2] thai-text-container" 
          style={{ 
            top: pxToPosition(180, { minPx: 50, maxPx: 180 }), // Поднят еще выше (было 220px)
            left: pxToPosition(80, { minPx: 30, maxPx: 80 }), // Сдвинут вправо (было 50px)
            maxWidth: 'calc(100% - ' + pxToPosition(80, { minPx: 30, maxPx: 80 }) + ' - 20px)'
          }}>
          <h2 className="text-white mb-2.5"
              style={{ 
                fontSize: 'clamp(2rem, 8vw, 7rem)',
                lineHeight: '1.1',
                fontWeight: '300', // Уменьшен font-weight еще больше (было 400, стало 300)
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.6), 0 4px 12px rgba(0, 0, 0, 0.5), 0 6px 16px rgba(0, 0, 0, 0.4)' // Темноватая тень
              }}>
            ยินดีต้อนรับกลับบ้าน
          </h2>
          <p className="cursor-pointer" 
             style={{ 
               fontSize: 'clamp(1rem, 2.2vw, 2rem)', // Увеличен размер на пару пикселей
               marginTop: pxToPosition(30, { minPx: 15, maxPx: 30 }), // Опущен еще ниже
               fontWeight: '500', // Меньше font-weight (было bold/700, стало 500)
               color: '#e2e2e2', // Сероватый цвет
               textShadow: '0 1px 4px rgba(0, 0, 0, 0.6), 0 2px 6px rgba(0, 0, 0, 0.5), 0 3px 8px rgba(0, 0, 0, 0.4)' // Темноватая тень
             }}>
            Switch language
          </p>
        </div>

        {/* CountrySelection поверх whiteLayer */}
        {/* Точная позиция: top: 500px от начала whiteLayer */}
        <div 
          className="absolute left-0 right-0 z-[2] country-selection-container" 
          style={{ 
            top: pxToPosition(500, { minPx: 200, maxPx: 500 })
          }}>
          <CountrySelection />
        </div>
      </div>
    </section>
  );
};

export default WelcomeHero;
