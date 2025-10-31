import React, { useState } from 'react';

const CountrySelection = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = [
    { name: 'Greece', flag: 'greece' },
    { name: 'Germany', flag: 'germany' },
    { name: 'Israel', flag: 'israel' },
    { name: 'United Arab Emirates', flag: 'uae' }
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
          fontWeight: '600'
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
        <div className="mt-10">
          <div className="text-white text-lg font-bold mb-4 drop-shadow-lg">
            PICK ANOTHER COUNTRY
          </div>
          <div className="w-full max-w-[300px] px-5 py-4 text-base border-2 border-white rounded-[5px] bg-white/90 backdrop-blur-sm cursor-pointer flex items-center gap-2.5 shadow-lg">
            <div
              className="w-6 h-4 border border-[#ddd]"
              style={{
                background: 'linear-gradient(180deg, red 0%, red 33%, white 33%, white 66%, red 66%, red 100%)'
              }}
            ></div>
            <span className="text-gray-800">Thailand</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountrySelection;