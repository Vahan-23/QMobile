import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';

const TEXT_DARK = '#03355c';
const DROPDOWN_BG = '#e8e8e8';
const DROPDOWN_BORDER = '#555';

const CountrySelection = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOtherCountry, setSelectedOtherCountry] = useState('Thailand');
  const dropdownRef = useRef(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });

  const updateDropdownPosition = useCallback(() => {
    if (isDropdownOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8,
        left: rect.left,
        width: rect.width,
      });
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    if (isDropdownOpen) {
      updateDropdownPosition();
      window.addEventListener('scroll', updateDropdownPosition);
      window.addEventListener('resize', updateDropdownPosition);
      return () => {
        window.removeEventListener('scroll', updateDropdownPosition);
        window.removeEventListener('resize', updateDropdownPosition);
      };
    }
  }, [isDropdownOpen, updateDropdownPosition]);

  const countryCodeMap = {
    Greece: 'GR',
    Germany: 'DE',
    Israel: 'IL',
    'United Arab Emirates': 'AE',
    Thailand: 'TH',
    'United States': 'US',
    'United Kingdom': 'GB',
    France: 'FR',
    Italy: 'IT',
    Spain: 'ES',
    Japan: 'JP',
    Australia: 'AU',
  };

  const countryKeys = {
    Greece: 'greece',
    Germany: 'germany',
    Israel: 'israel',
    'United Arab Emirates': 'uae',
    Thailand: 'thailand',
    'United States': 'usa',
    'United Kingdom': 'uk',
    France: 'france',
    Italy: 'italy',
    Spain: 'spain',
    Japan: 'japan',
    Australia: 'australia',
  };

  const countries = [
    { name: 'Greece', key: 'greece' },
    { name: 'Germany', key: 'germany' },
    { name: 'Israel', key: 'israel' },
    { name: 'United Arab Emirates', key: 'uae' },
  ];

  const otherCountries = [
    { name: 'Thailand', key: 'thailand' },
    { name: 'United States', key: 'usa' },
    { name: 'United Kingdom', key: 'uk' },
    { name: 'France', key: 'france' },
    { name: 'Italy', key: 'italy' },
    { name: 'Spain', key: 'spain' },
    { name: 'Japan', key: 'japan' },
    { name: 'Australia', key: 'australia' },
  ];

  const getCountryName = (countryName) => {
    const key = countryKeys[countryName];
    return key ? t.countries[key] : countryName;
  };

  const getFlagUrl = (countryName) => {
    const code = countryCodeMap[countryName];
    return code ? `https://flagcdn.com/w320/${code.toLowerCase()}.png` : null;
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!isDropdownOpen || !dropdownRef.current?.contains(e.target)) {
        const list = document.querySelector('[data-dropdown-list]');
        if (!list?.contains(e.target)) setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  const flagSize = 'clamp(45px, 6vw, 115px)';

  return (
    <div className="relative w-full">
      <h2
        className={`font-bold uppercase tracking-wide mt-6 text-center lg:text-left ${isRTL ? 'lg:text-right' : ''}`}
        style={{
          color: TEXT_DARK,
          fontSize: 'clamp(20px, 5vw, 35px)',
          lineHeight: 1.3,
          fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
          direction: isRTL ? 'rtl' : 'ltr',
        }}
      >
        {t.whereDoYouLive.replace(/\n/g, ' ')}
      </h2>

      <div
        className={`flex flex-nowrap mt-4 justify-center overflow-x-auto lg:overflow-visible ${isRTL ? 'lg:justify-end' : 'lg:justify-start'}`}
        style={{ gap: 'clamp(12px, 5vw, 95px)' }}
      >
        {countries.map((country, index) => (
          <button
            key={country.name}
            type="button"
            onClick={() => setSelectedCountry(country.name)}
            className="flex flex-col items-center cursor-pointer border-0 bg-transparent p-0 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-full"
            style={{ flexShrink: 0 }}
          >
            <div
              className="rounded-full overflow-hidden flex items-center justify-center bg-gray-200 border-2 border-white shadow"
              style={{ width: flagSize, height: flagSize }}
            >
              <img
                src={getFlagUrl(country.name)}
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = '#0066cc';
                }}
              />
            </div>
            <span
              className="font-semibold mt-1.5 text-center"
              style={{
                color: TEXT_DARK,
                fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              }}
            >
              {getCountryName(country.name)}
            </span>
          </button>
        ))}
      </div>

      <h2
        className={`font-bold uppercase tracking-wide mb-2 text-center lg:text-left ${isRTL ? 'lg:text-right' : ''}`}
        style={{
          color: TEXT_DARK,
          fontSize: 'clamp(18px, 4vw, 28px)',
          marginTop: 'clamp(32px, 10vw, 90px)',
          fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
          direction: isRTL ? 'rtl' : 'ltr',
        }}
      >
        {t.pickAnotherCountry}
      </h2>

      <div className={`relative mt-2 flex justify-center lg:justify-start ${isRTL ? 'lg:justify-end' : ''}`} style={{ zIndex: 1000 }}>
        <div
          ref={dropdownRef}
          role="button"
          tabIndex={0}
          onClick={() => setIsDropdownOpen((v) => !v)}
          onKeyDown={(e) => e.key === 'Enter' && setIsDropdownOpen((v) => !v)}
          className="flex items-center gap-2 cursor-pointer rounded-lg border-2 px-3 py-2 w-full max-w-[304px]"
          style={{
            backgroundColor: DROPDOWN_BG,
            borderColor: DROPDOWN_BORDER,
          }}
        >
          <div
            className="rounded-full overflow-hidden flex-shrink-0 bg-gray-200 border border-gray-300"
            style={{ width: 28, height: 28 }}
          >
            <img
              src={getFlagUrl(selectedOtherCountry)}
              alt=""
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.style.background = '#0066cc';
              }}
            />
          </div>
          <span
            className="flex-1 truncate font-medium"
            style={{
              color: '#333',
              fontSize: 'clamp(0.95rem, 2vw, 1.25rem)',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              textAlign: isRTL ? 'right' : 'left',
            }}
          >
            {getCountryName(selectedOtherCountry)}
          </span>
          <svg
            className={`flex-shrink-0 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke={DROPDOWN_BORDER}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {isDropdownOpen &&
          createPortal(
            <div
              data-dropdown-list
              className="fixed rounded-lg border-2 shadow-lg max-h-60 overflow-y-auto py-1"
              style={{
                top: dropdownPosition.top,
                left: dropdownPosition.left,
                width: dropdownPosition.width || 304,
                backgroundColor: '#fff',
                borderColor: DROPDOWN_BORDER,
                zIndex: 10000,
              }}
            >
              {otherCountries.map((country) => (
                <button
                  key={country.name}
                  type="button"
                  onClick={() => {
                    setSelectedOtherCountry(country.name);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 cursor-pointer border-0 bg-transparent text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  style={{
                    direction: isRTL ? 'rtl' : 'ltr',
                    fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                  }}
                >
                  <div
                    className="rounded-full overflow-hidden flex-shrink-0 bg-gray-200 border border-gray-300"
                    style={{ width: 24, height: 24 }}
                  >
                    <img
                      src={getFlagUrl(country.name)}
                      alt=""
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.style.background = '#0066cc';
                      }}
                    />
                  </div>
                  <span className="text-gray-800 text-sm">{getCountryName(country.name)}</span>
                </button>
              ))}
            </div>,
            document.body
          )}
      </div>
    </div>
  );
};

export default CountrySelection;
