import React, { useState } from 'react';

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

  return (
    <main className="px-12 py-14 relative z-[5] md:px-10 sm:px-8 sm:py-10">
      <div className="max-w-[600px]">
        <h1 className="mb-10 drop-shadow-lg" style={{ 
          color: '#03355c',
          fontSize: '3.875rem',
          lineHeight: '4.25rem',
          fontWeight: '700',
          letteSpacing: '4px',
          fontFamily: 'unset'
        }}>
          WHERE DO YOU<br />CURRENTLY LIVE?
        </h1>

        {/* Сетка стран */}
        <div className="flex flex-row mb-12 items-end flex-nowrap" style={{ gap: '153px' }}>
          {countries.map((country, index) => (
            <div
              key={index}
              className="text-center cursor-pointer transition-transform hover:scale-110 flex-shrink-0"
              onClick={() => setSelectedCountry(country.name)}
            >
              <div
                className="rounded-full mx-auto mb-4 border-[3px] border-white overflow-hidden flex items-center justify-center shadow-lg"
                style={{
                  ...getFlagStyle(country.flag),
                  width: '190px',
                  height: '190px'
                }}
              >
                {/* Здесь будет изображение флага */}
              </div>
              <div className="text-sm drop-shadow-md font-semibold" style={{ color: '#7b7b7b' }}>{country.name}</div>
            </div>
          ))}
        </div>

        {/* Dropdown для другой страны */}
        <div className="mt-10" style={{ marginTop: '3.5rem' }}>
          <div className="mb-5 drop-shadow-lg" style={{ color: '#03355c', fontSize: '2.55rem', fontWeight: '800' }}>
            PICK ANOTHER COUNTRY
          </div>
          <div className="relative">
            <div 
              className="w-full px-6 py-5 border-2 bg-white/90 backdrop-blur-sm cursor-pointer flex items-center gap-3 shadow-lg"
              style={{ minWidth: '350px', marginTop: '1rem', borderColor: '#03355c', borderRadius: '8px' }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div
                className="rounded-full border-2 border-white overflow-hidden flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(180deg, red 0%, red 33%, white 33%, white 66%, red 66%, red 100%)',
                  width: '60px',
                  height: '60px'
                }}
              ></div>
              <span className="flex-grow" style={{ color: '#03355c', fontSize: '42px', fontWeight: '500' }}>{selectedOtherCountry}</span>
              <svg 
                className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{ color: '#03355c' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border-2 shadow-lg z-10 max-h-60 overflow-y-auto" style={{ minWidth: '350px', borderColor: '#03355c', borderRadius: '8px' }}>
                {otherCountries.map((country, index) => (
                  <div
                    key={index}
                    className="px-6 py-4 cursor-pointer hover:bg-gray-100 flex items-center gap-3"
                    onClick={() => {
                      setSelectedOtherCountry(country.name);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <div
                      className="rounded-full border-2 border-white overflow-hidden flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'linear-gradient(180deg, red 0%, red 33%, white 33%, white 66%, red 66%, red 100%)',
                        width: '50px',
                        height: '50px'
                      }}
                    ></div>
                    <span className="text-gray-800">{country.name}</span>
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