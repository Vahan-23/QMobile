import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { pxToPosition, pxToResponsive } from './utils/responsive';

const CountrySelection = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOtherCountry, setSelectedOtherCountry] = useState('Thailand');
  const dropdownRef = useRef(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });

  // Обновить позицию dropdown
  const updateDropdownPosition = () => {
    if (isDropdownOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8, // +8 для небольшого отступа
        left: rect.left,
        width: rect.width
      });
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      updateDropdownPosition();
      const handleScroll = () => updateDropdownPosition();
      const handleResize = () => updateDropdownPosition();
      window.addEventListener('scroll', handleScroll, true);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('scroll', handleScroll, true);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isDropdownOpen]);

  // Маппинг стран на ISO коды для флагов
  const countryCodeMap = {
    'Greece': 'GR',
    'Germany': 'DE',
    'Israel': 'IL',
    'United Arab Emirates': 'AE',
    'Thailand': 'TH',
    'United States': 'US',
    'United Kingdom': 'GB',
    'France': 'FR',
    'Italy': 'IT',
    'Spain': 'ES',
    'Japan': 'JP',
    'Australia': 'AU'
  };

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

  // Получить URL флага из интернета
  const getFlagUrl = (countryName) => {
    const code = countryCodeMap[countryName];
    if (code) {
      return `https://flagcdn.com/w320/${code.toLowerCase()}.png`;
    }
    return null;
  };

  // Закрывать dropdown при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Проверяем, что клик был не по dropdown списку
        const dropdownList = document.querySelector('[data-dropdown-list]');
        if (!dropdownList || !dropdownList.contains(event.target)) {
          setIsDropdownOpen(false);
        }
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Конкретные позиции из дизайна:
  // padding: 50px слева и справа, max-width: 600px
  // gap между флагами: 153px
  // размер флагов: 190px

  return (
    <main 
      className="relative"
      style={{
        zIndex: 1000, // Высокий z-index чтобы dropdown был впереди футера
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
                className="rounded-full mx-auto border-[2px] sm:border-[3px] border-white overflow-hidden flex items-center justify-center shadow-lg bg-gray-200"
                style={{
                  width: pxToResponsive(100, 8), // Размер флагов 100px
                  height: pxToResponsive(100, 8), // Размер флагов 100px
                  marginBottom: pxToPosition(4, { minPx: 2, maxPx: 4 }) // Минимальный отступ под флагом
                }}
              >
                <img 
                  src={getFlagUrl(country.name)}
                  alt={`${country.name} flag`}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '50%' }}
                  onError={(e) => {
                    // Если загрузка флага не удалась, показываем синий фон
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = '#0066cc';
                  }}
                />
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
        <div style={{ marginTop: pxToPosition(60, { minPx: 30, maxPx: 60 }) }}>
          <div className="mb-3 sm:mb-4 md:mb-5 drop-shadow-lg" style={{ 
            color: '#03355c', 
            fontSize: 'clamp(1.25rem, 3vw, 2.55rem)', 
            fontWeight: '800',
            marginBottom: pxToPosition(10, { minPx: 5, maxPx: 10 }) // Уменьшен отступ снизу
          }}>
            PICK ANOTHER COUNTRY
          </div>
          <div className="relative" style={{ zIndex: 10000, isolation: 'isolate' }}>
            <div 
              ref={dropdownRef}
              className="border-2 bg-white/90 backdrop-blur-sm cursor-pointer flex items-center gap-2 shadow-lg"
              style={{ 
                width: pxToResponsive(304, 38), // Уменьшено на 20%
                padding: pxToPosition(4, { minPx: 3, maxPx: 4 }), // Еще более компактный padding
                borderColor: '#03355c', 
                borderRadius: '8px' 
              }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div
                className="rounded-full border-2 border-white overflow-hidden flex items-center justify-center flex-shrink-0 bg-gray-200"
                style={{
                  width: pxToResponsive(22, 3),
                  height: pxToResponsive(22, 3),
                  marginLeft: pxToPosition(6, { minPx: 3, maxPx: 6 }) // Флаг сдвинут чуть вправо
                }}
              >
                <img 
                  src={getFlagUrl(selectedOtherCountry)}
                  alt={`${selectedOtherCountry} flag`}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '50%' }}
                  onError={(e) => {
                    // Если загрузка флага не удалась, показываем градиентный фон
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(180deg, red 0%, red 33%, white 33%, white 66%, red 66%, red 100%)';
                  }}
                />
              </div>
              <span className="flex-grow truncate" style={{ 
                color: '#03355c', 
                fontSize: 'clamp(1.5rem, 4vw, 2.75rem)', 
                fontWeight: '500' 
              }}>
                {selectedOtherCountry}
              </span>
              <svg 
                className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform flex-shrink-0 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{ color: '#03355c' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {isDropdownOpen && createPortal(
              <div 
                data-dropdown-list
                className="fixed bg-white border-2 shadow-lg max-h-60 overflow-y-auto" 
                style={{ 
                  top: `${dropdownPosition.top}px`,
                  left: `${dropdownPosition.left}px`,
                  width: dropdownPosition.width || pxToResponsive(304, 38),
                  borderColor: '#03355c', 
                  borderRadius: '8px',
                  zIndex: 10000 // Очень высокий z-index чтобы быть поверх всего
                }}>
                {otherCountries.map((country, index) => (
                  <div
                    key={index}
                    className="cursor-pointer hover:bg-gray-100 flex items-center gap-2 sm:gap-3"
                    style={{
                      padding: pxToPosition(8, { minPx: 6, maxPx: 8 }) // Компактный padding
                    }}
                    onClick={() => {
                      setSelectedOtherCountry(country.name);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <div
                      className="rounded-full border-2 border-white overflow-hidden flex items-center justify-center flex-shrink-0 bg-gray-200"
                      style={{
                        width: pxToResponsive(22, 3),
                        height: pxToResponsive(22, 3)
                      }}
                    >
                      <img 
                        src={getFlagUrl(country.name)}
                        alt={`${country.name} flag`}
                        className="w-full h-full object-cover"
                        style={{ borderRadius: '50%' }}
                        onError={(e) => {
                          // Если загрузка флага не удалась, показываем градиентный фон
                          e.target.style.display = 'none';
                          e.target.parentElement.style.background = 'linear-gradient(180deg, red 0%, red 33%, white 33%, white 66%, red 66%, red 100%)';
                        }}
                      />
                    </div>
                    <span className="text-gray-800 text-sm sm:text-base">{country.name}</span>
                  </div>
                ))}
              </div>,
              document.body
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountrySelection;