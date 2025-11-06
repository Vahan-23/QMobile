import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { pxToPosition, pxToResponsive } from './utils/responsive';

const CountrySelection = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOtherCountry, setSelectedOtherCountry] = useState('Thailand');
  const dropdownRef = useRef(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });

  // Update dropdown position for Portal
  const updateDropdownPosition = () => {
    if (isDropdownOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8, // getBoundingClientRect already accounts for scroll
        left: isRTL ? rect.right - rect.width : rect.left, // Adjust for RTL
        width: rect.width
      });
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      updateDropdownPosition();
      const handleScroll = () => updateDropdownPosition();
      const handleResize = () => updateDropdownPosition();
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isDropdownOpen, isRTL]);

  // Mapping countries to ISO codes for flags
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

  // Country keys for translations
  const countryKeys = {
    'Greece': 'greece',
    'Germany': 'germany',
    'Israel': 'israel',
    'United Arab Emirates': 'uae',
    'Thailand': 'thailand',
    'United States': 'usa',
    'United Kingdom': 'uk',
    'France': 'france',
    'Italy': 'italy',
    'Spain': 'spain',
    'Japan': 'japan',
    'Australia': 'australia'
  };

  const countries = [
    { name: 'Greece', flag: 'greece', key: 'greece' },
    { name: 'Germany', flag: 'germany', key: 'germany' },
    { name: 'Israel', flag: 'israel', key: 'israel' },
    { name: 'United Arab Emirates', flag: 'uae', key: 'uae' }
  ];

  const otherCountries = [
    { name: 'Thailand', flag: 'thailand', key: 'thailand' },
    { name: 'United States', flag: 'usa', key: 'usa' },
    { name: 'United Kingdom', flag: 'uk', key: 'uk' },
    { name: 'France', flag: 'france', key: 'france' },
    { name: 'Italy', flag: 'italy', key: 'italy' },
    { name: 'Spain', flag: 'spain', key: 'spain' },
    { name: 'Japan', flag: 'japan', key: 'japan' },
    { name: 'Australia', flag: 'australia', key: 'australia' }
  ];

  // Get translated country name
  const getCountryName = (countryName) => {
    const key = countryKeys[countryName];
    return key ? t.countries[key] : countryName;
  };

  // Get flag URL from the internet
  const getFlagUrl = (countryName) => {
    const code = countryCodeMap[countryName];
    if (code) {
      return `https://flagcdn.com/w320/${code.toLowerCase()}.png`;
    }
    return null;
  };

  // Close dropdown when clicking outside its area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Check that click was not on dropdown list
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

  // Specific positions from design:
  // padding: 50px left and right, max-width: 600px
  // gap between flags: 153px
  // dropdown flags: 190px

  return (
    <main 
      className="relative"
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
        <h1 
          className="drop-shadow-lg" 
          style={{ 
            color: '#03355c',
            fontSize: 'clamp(1.2rem, 3vw, 2.5rem)',
            lineHeight: 'clamp(1.4rem, 3.5vw, 3rem)',
            fontWeight: '700',
            letterSpacing: 'clamp(2px, 0.3vw, 4px)',
            fontFamily: isRTL ? 'Arial, sans-serif' : 'unset',
            marginTop: 'clamp(10px, 2vw, 20px)',
            marginBottom: pxToPosition(25, { minPx: 15, maxPx: 25 }), // Gap between title and flags
            direction: isRTL ? 'rtl' : 'ltr',
            textAlign: isRTL ? 'right' : 'left',
            whiteSpace: 'pre-line'
          }}>
          {t.whereDoYouLive}
        </h1>

        {/* Flags row - specific positions from design */}
        {/* Flags and columns: at 560px width responsive, positioned and sized */}
        <div 
          className="flex items-start mb-2 sm:mb-3 md:mb-4 flags-row-mobile"
          style={{
            marginTop: pxToPosition(20, { minPx: 15, maxPx: 20 }), // Gap between title and flags
            gap: pxToPosition(120, { minPx: 60, maxPx: 120 }), // Gap between flags
            flexWrap: 'nowrap' // Prevent wrapping, keep flags in a row
          }}>
          {countries.map((country, index) => (
            <div
              key={index}
              className="cursor-pointer transition-transform hover:scale-110 flag-item"
              style={{
                flexShrink: 0,
                width: 'auto'
              }}
              onClick={() => setSelectedCountry(country.name)}
            >
              <div
                className="rounded-full mx-auto border-[1px] sm:border-[2px] border-white overflow-hidden flex items-center justify-center shadow-lg bg-gray-200 flag-item"
                style={{
                  width: pxToResponsive(65, 5), // Responsive flag size, base 65px
                  height: pxToResponsive(65, 5), // Responsive flag size, base 65px
                  marginBottom: pxToPosition(4, { minPx: 2, maxPx: 4 }) // Gap between flag and text
                }}
              >
                <img 
                  src={getFlagUrl(country.name)}
                  alt={`${country.name} flag`}
                  className="w-full h-full object-cover flag-item"
                  style={{ borderRadius: '50%' }}
                  onError={(e) => {
                    // If flag image failed to load, hide it and set background
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = '#0066cc';
                  }}
                />
              </div>
              <div 
                className="drop-shadow-md font-semibold text-center flag-text" 
                style={{ 
                  color: '#7b7b7b',
                  fontSize: 'clamp(0.65rem, 1.2vw, 0.75rem)', // Responsive text size
                  lineHeight: '1.2',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                }}>
                {getCountryName(country.name)}
              </div>
            </div>
          ))}
        </div>

        {/* Dropdown section for other countries */}
        <div style={{ marginTop: pxToPosition(25, { minPx: 15, maxPx: 25 }) }}>
          <div 
            className="mb-3 sm:mb-4 md:mb-5 drop-shadow-lg" 
            style={{ 
              color: '#03355c', 
              fontSize: 'clamp(1rem, 2.5vw, 2rem)', 
              fontWeight: '800',
              marginBottom: pxToPosition(10, { minPx: 5, maxPx: 10 }), // Responsive margin bottom
              direction: isRTL ? 'rtl' : 'ltr',
              textAlign: isRTL ? 'right' : 'left',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
            }}>
            {t.pickAnotherCountry}
          </div>
          <div className="relative" style={{ zIndex: 1000 }}>
            <div 
              ref={dropdownRef}
              className="border-2 bg-white/90 backdrop-blur-sm cursor-pointer flex items-center gap-2 shadow-lg"
              style={{ 
                width: 'clamp(55vw, 16.0422vw, 304px)',
                padding: 'clamp(3px, 0.211082vw, 4px)',
                borderColor: '#03355c', 
                borderRadius: '8px',
                flexDirection: isRTL ? 'row-reverse' : 'row'
              }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div
                className="rounded-full border-2 border-white overflow-hidden flex items-center justify-center flex-shrink-0 bg-gray-200"
                style={{
                  width: pxToResponsive(32, 4),
                  height: pxToResponsive(32, 4),
                  ...(isRTL ? { marginRight: pxToPosition(6, { minPx: 3, maxPx: 6 }) } : { marginLeft: pxToPosition(6, { minPx: 3, maxPx: 6 }) }) // Flag position
                }}
              >
                <img 
                  src={getFlagUrl(selectedOtherCountry)}
                  alt={`${selectedOtherCountry} flag`}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '50%' }}
                  onError={(e) => {
                    // If flag image failed to load, hide it and set gradient background
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(180deg, red 0%, red 33%, white 33%, white 66%, red 66%, red 100%)';
                  }}
                />
              </div>
              <span 
                className="flex-grow truncate" 
                style={{ 
                  color: '#03355c', 
                  fontSize: 'clamp(1.5rem, 4vw, 2.75rem)', 
                  fontWeight: '500',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                  textAlign: isRTL ? 'right' : 'left'
                }}>
                {getCountryName(selectedOtherCountry)}
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
                  width: dropdownPosition.width || 'clamp(55vw, 16.0422vw, 304px)',
                  borderColor: '#03355c', 
                  borderRadius: '8px',
                  zIndex: 10000 // High z-index for Portal
                }}>
                {otherCountries.map((country, index) => (
                  <div
                    key={index}
                    className="cursor-pointer hover:bg-gray-100 flex items-center gap-2 sm:gap-3"
                    style={{
                      padding: pxToPosition(8, { minPx: 6, maxPx: 8 }) // Item padding
                    }}
                    onClick={() => {
                      setSelectedOtherCountry(country.name);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <div
                      className="rounded-full border-2 border-white overflow-hidden flex items-center justify-center flex-shrink-0 bg-gray-200"
                      style={{
                        width: pxToResponsive(32, 4),
                        height: pxToResponsive(32, 4)
                      }}
                    >
                      <img 
                        src={getFlagUrl(country.name)}
                        alt={`${country.name} flag`}
                        className="w-full h-full object-cover"
                        style={{ borderRadius: '50%' }}
                        onError={(e) => {
                          // If flag image failed to load, hide it and set gradient background
                          e.target.style.display = 'none';
                          e.target.parentElement.style.background = 'linear-gradient(180deg, red 0%, red 33%, white 33%, white 66%, red 66%, red 100%)';
                        }}
                      />
                    </div>
                    <span 
                      className="text-gray-800 text-sm sm:text-base"
                      style={{
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                      }}
                    >
                      {getCountryName(country.name)}
                    </span>
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