import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import Header404 from './404Header';
import Footer404 from './404Footer';

const Page404 = () => {
  const { isRTL } = useLanguage();

  return (
    <div
      className="font-['Rubik',_sans-serif] text-white w-full overflow-x-hidden overflow-y-visible min-h-screen"
      style={{
        fontFamily: "'Rubik', sans-serif",
        background: 'linear-gradient(to bottom, #22afe4 0%, #005490 100%)'
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-[1895px] mx-auto w-full">
        {/* Header */}
        <Header404 />

        {/* 404 Content Section */}
        <section
          className="w-full flex flex-col items-center justify-center"
          style={{
            minHeight: 'calc(100vh - 200px)',
            paddingTop: 'clamp(40px, 10vw, 100px)',
            paddingBottom: 'clamp(40px, 10vw, 100px)',
            paddingLeft: 'clamp(20px, 5vw, 50px)',
            paddingRight: 'clamp(20px, 5vw, 50px)'
          }}
        >
          {/* 404 Number */}
          <h1
            className="font-bold text-white"
            style={{
              fontSize: 'clamp(120px, 25vw, 300px)',
              lineHeight: '1',
              marginBottom: 'clamp(20px, 4vw, 40px)',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
            }}
          >
            404
          </h1>

          {/* Error Message */}
          <h2
            className="font-bold uppercase text-center mb-8 sm:mb-12"
            style={{
              fontSize: 'clamp(24px, 3vw, 48px)',
              color: '#005291',
              marginBottom: 'clamp(30px, 6vw, 60px)',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              maxWidth: '800px',
              lineHeight: '1.3'
            }}
          >
            WE CAN'T SEEM TO FIND WHAT YOU ARE LOOKING FOR
          </h2>

          {/* Home Button */}
          <Link
            to="/"
            className="inline-block font-semibold uppercase transition-all hover:opacity-90"
            style={{
              fontSize: 'clamp(18px, 2vw, 28px)',
              padding: 'clamp(12px, 2vw, 20px) clamp(30px, 4vw, 50px)',
              background: '#66c8d5',
              color: '#03355c',
              borderRadius: '8px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              textDecoration: 'none'
            }}
          >
            GO TO HOME PAGE
          </Link>
        </section>

        {/* Footer */}
        <Footer404 />
      </div>
    </div>
  );
};

export default Page404;

