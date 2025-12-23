import React, { useState, useEffect } from 'react';
import HomepageHeader from '../Homepage/HomepageHeader';
import MarketplaceFooter from '../Marketplace/MarketplaceFooter';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import landscapeImage from './Assets/landscape.jpg';

const LoginPage = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const [isMobile, setIsMobile] = useState(false);
  const [passportNumber, setPassportNumber] = useState('');

  useEffect(() => {
    const updateIsMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
    };

    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - send code to phone
    console.log('Sending code for passport:', passportNumber);
  };

  return (
    <div
      className="font-['Rubik',_sans-serif] text-[#03355c] bg-white min-h-screen overflow-x-hidden"
      style={{
        fontFamily: "'Rubik', sans-serif"
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header with Title Section */}
      <div
        className="max-w-[1895px] mx-auto w-full"
        style={{
          background: 'linear-gradient(to bottom, #32b1d7 0%, #005490 100%)'
        }}
      >
        <div className="w-full">
          <HomepageHeader
            showTitle={false}
            backgroundStyle="transparent"
          />
          
          {/* MY ACCOUNT Title */}
          <section
            className="relative w-full"
            style={{
              paddingTop: 'clamp(20px, 3vw, 40px)',
              paddingBottom: 'clamp(30px, 5vw, 60px)',
              paddingLeft: 'clamp(20px, 6vw, 80px)',
              paddingRight: 'clamp(20px, 6vw, 80px)'
            }}
          >
            <div className="max-w-[1895px] mx-auto w-full text-center">
              <h1
                className="font-bold uppercase text-white"
                style={{
                  fontSize: isMobile ? 'clamp(28px, 10vw, 60px)' : 'clamp(40px, 5vw, 90px)',
                  lineHeight: '1.1',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                }}
              >
                {t.myAccountTitle || 'MY ACCOUNT'}
              </h1>
            </div>
          </section>
        </div>
      </div>

      {/* Sign In Section with Background Image */}
      <div className="max-w-[1895px] mx-auto w-full">
        <section
          className="relative w-full"
          style={{
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Background Image - full width, maintains aspect ratio */}
          <img
            src={landscapeImage}
            alt=""
            style={{
              width: '100%',
              height: isMobile ? 'clamp(400px, 60vh, 600px)' : 'auto',
              minHeight: isMobile ? 'clamp(400px, 60vh, 600px)' : 'auto',
              display: 'block',
              objectFit: 'cover'
            }}
          />
          
          {/* Overlay with Sign In Card */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingTop: isMobile ? 'clamp(20px, 8vw, 60px)' : 'clamp(40px, 5vw, 80px)',
              paddingLeft: 'clamp(20px, 5vw, 60px)',
              paddingRight: 'clamp(20px, 5vw, 60px)'
            }}
          >
        {/* Sign In Card */}
        <div
          style={{
            background: '#67c9d6',
            borderRadius: '25px',
            padding: isMobile ? 'clamp(25px, 8vw, 50px)' : 'clamp(30px, 4vw, 60px)',
            width: '100%',
            maxWidth: isMobile ? '600px' : '905px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
          }}
        >
          <h2
            className="font-bold uppercase text-center"
            style={{
              fontSize: isMobile ? 'clamp(24px, 7vw, 40px)' : 'clamp(28px, 3vw, 55px)',
              color: '#03355c',
              marginBottom: isMobile ? 'clamp(20px, 6vw, 35px)' : 'clamp(25px, 3vw, 40px)',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
            }}
          >
            {t.signInTitle || 'SIGN IN'}
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Passport Number Input */}
            <div style={{ marginBottom: isMobile ? 'clamp(20px, 6vw, 35px)' : 'clamp(25px, 3vw, 40px)', maxWidth: '725px', width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
              <input
                type="text"
                name="passportNumber"
                value={passportNumber}
                onChange={(e) => setPassportNumber(e.target.value)}
                placeholder={t.loginPassportPlaceholder || 'Enter your passport number to login'}
                required
                className="w-full border border-gray-300 rounded-lg focus:outline-none focus:border-[#005490]"
                style={{
                  fontSize: isMobile ? 'clamp(10px, 3vw, 18px)' : 'clamp(16px, 1.5vw, 27px)',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                  padding: isMobile ? 'clamp(8px, 2.5vw, 24px) clamp(10px, 3vw, 25px)' : 'clamp(12px, 2vw, 24px) clamp(15px, 2.5vw, 30px)',
                  backgroundColor: '#ffffff',
                  color: '#666666',
                  borderRadius: '10px',
                  border: 'none',
                  fontWeight: 700,
                  minHeight: isMobile ? 'clamp(48px, 8vw, 70px)' : 'clamp(56px, 4vw, 70px)',
                  boxSizing: 'border-box',
                  textAlign: 'center'
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full uppercase text-white transition hover:opacity-90"
              style={{
                backgroundColor: '#005490',
                padding: isMobile ? 'clamp(10px, 4vw, 20px)' : 'clamp(16px, 2vw, 22px)',
                fontSize: 'clamp(12px, 4vw, 36px)',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                fontWeight: 100
              }}
            >
              {t.sendCodeToPhone || 'SEND CODE TO YOUR PHONE'}
            </button>
          </form>
          </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="max-w-[1895px] mx-auto w-full">
        <MarketplaceFooter />
      </div>
    </div>
  );
};

export default LoginPage;

