import React, { useState } from 'react';
import { pxToPosition, pxToResponsive } from './utils/responsive';

const CountrySelection = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOtherCountry, setSelectedOtherCountry] = useState('Thailand');

  const countries = [
    { name: 'Greece', flag: 'greece' },
    { name: 'Germany', flag: 'germany' },
    { name: 'Israel', flag: 'israel' },
    { name: 'United Arab Emirates', flag: 'uae' }
  ];

  const otherCountries = [
    { name: 'Thailand', flag: 'thailand' },
    { name: 'United States', flag: 'usa' },
    { name: 'United Kingdom', flag: 'uk' },
    { name: 'France', flag: 'france' },
    { name: 'Italy', flag: 'italy' },
    { name: 'Spain', flag: 'spain' },
    { name: 'Japan', flag: 'japan' },
    { name: 'Australia', flag: 'australia' }
  ];

  const getFlagStyle = (flagType) => {
    // Все флаги будут использовать изображения, пока синий фон
    return {
      background: '#0066cc'
    };
  };

  // Конкретные позиции из дизайна:
  // padding: 50px слева и справа, max-width: 600px
  // gap между флагами: 153px
  // размер флагов: 190px

  return (
    <main 
      className="relative z-[5]"
      style={{
        paddingLeft: pxToPosition(50, { minPx: 16, maxPx: 50 }),
        paddingRight: pxToPosition(50, { minPx: 16, maxPx: 50 }),
        paddingTop: pxToPosition(56, { minPx: 32, maxPx: 56 }),
        paddingBottom: pxToPosition(56, { minPx: 32, maxPx: 56 })
      }}>
      <div 
        className="w-full"
        style={{ 
          maxWidth: pxToResponsive(600, 80)
        }}>
        <h1 className="drop-shadow-lg" style={{ 
          color: '#03355c',
          fontSize: 'clamp(1.5rem, 4vw, 3.5625rem)',
          lineHeight: 'clamp(1.75rem, 5vw, 4.25rem)',
          fontWeight: '700',
          letterSpacing: 'clamp(2px, 0.3vw, 4px)',
          fontFamily: 'unset',
          marginTop: 'clamp(10px, 2vw, 20px)',
          marginBottom: 0 // Убираем отступ чтобы флаги начинались сразу от текста
        }}>
          WHERE DO YOU<br />CURRENTLY LIVE?
        </h1>

        {/* Сетка стран - конкретные позиции */}
        {/* На мобильных: 2 колонки, на планшетах и выше: 4 колонки с точным gap 153px */}
        <div 
          className="flex items-start mb-8 sm:mb-10 md:mb-12"
          style={{
            marginTop: pxToPosition(40, { minPx: 20, maxPx: 40 }), // Отступ сверху чтобы первый флаг начинался от "CURRENTLY"
            gap: pxToPosition(120, { minPx: 60, maxPx: 120 }), // Еще больше отступ между флагами
            flexWrap: 'wrap'
          }}>
          {countries.map((country, index) => (
            <div
              key={index}
              className="cursor-pointer transition-transform hover:scale-110"
              style={{
                flexShrink: 0,
                width: 'auto'
              }}
              onClick={() => setSelectedCountry(country.name)}
            >
              <div
                className="rounded-full mx-auto border-[2px] sm:border-[3px] border-white overflow-hidden flex items-center justify-center shadow-lg"
                style={{
                  ...getFlagStyle(country.flag),
                  width: pxToResponsive(100, 8), // Размер флагов 100px
                  height: pxToResponsive(100, 8), // Размер флагов 100px
                  marginBottom: pxToPosition(4, { minPx: 2, maxPx: 4 }) // Минимальный отступ под флагом
                }}
              >
                {/* Здесь будет изображение флага */}
              </div>
              <div className="drop-shadow-md font-semibold text-center" style={{ 
                color: '#7b7b7b',
                fontSize: 'clamp(0.65rem, 1.2vw, 0.75rem)', // Уменьшен размер текста
                lineHeight: '1.2'
              }}>
                {country.name}
              </div>
            </div>
          ))}
        </div>

        {/* Dropdown для другой страны */}
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-14">
          <div className="mb-3 sm:mb-4 md:mb-5 drop-shadow-lg" style={{ 
            color: '#03355c', 
            fontSize: 'clamp(1.25rem, 3vw, 2.55rem)', 
            fontWeight: '800' 
          }}>
            PICK ANOTHER COUNTRY
          </div>
          <div className="relative">
            <div 
              className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 border-2 bg-white/90 backdrop-blur-sm cursor-pointer flex items-center gap-2 sm:gap-3 shadow-lg"
              style={{ 
                marginTop: 'clamp(0.5rem, 1.5vw, 1rem)', 
                borderColor: '#03355c', 
                borderRadius: '8px' 
              }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div
                className="rounded-full border-2 border-white overflow-hidden flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(180deg, red 0%, red 33%, white 33%, white 66%, red 66%, red 100%)',
                  width: pxToResponsive(60, 8),
                  height: pxToResponsive(60, 8)
                }}
              ></div>
              <span className="flex-grow truncate" style={{ 
                color: '#03355c', 
                fontSize: 'clamp(1rem, 3vw, 2.625rem)', 
                fontWeight: '500' 
              }}>
                {selectedOtherCountry}
              </span>
              <svg 
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform flex-shrink-0 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{ color: '#03355c' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border-2 shadow-lg z-10 max-h-60 overflow-y-auto" style={{ 
                borderColor: '#03355c', 
                borderRadius: '8px' 
              }}>
                {otherCountries.map((country, index) => (
                  <div
                    key={index}
                    className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 cursor-pointer hover:bg-gray-100 flex items-center gap-2 sm:gap-3"
                    onClick={() => {
                      setSelectedOtherCountry(country.name);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <div
                      className="rounded-full border-2 border-white overflow-hidden flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'linear-gradient(180deg, red 0%, red 33%, white 33%, white 66%, red 66%, red 100%)',
                        width: pxToResponsive(50, 6),
                        height: pxToResponsive(50, 6)
                      }}
                    ></div>
                    <span className="text-gray-800 text-sm sm:text-base">{country.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountrySelection;