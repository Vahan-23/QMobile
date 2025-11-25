import React from 'react';
import HomepageHeader from '../Homepage/HomepageHeader';
import MarketplaceFooter from '../Marketplace/MarketplaceFooter';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import '../PaymentPage/PaymentPage.css';
import errorIcon from './errorIcon.png';

const ErrorPage = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  return (
    <div
      className="font-['Rubik',_sans-serif] text-[#03355c] bg-white min-h-screen overflow-x-hidden payment-page"
      style={{
        fontFamily: "'Rubik', sans-serif"
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div
        style={{
          background: 'linear-gradient(to right, #005490 0%, #32b1d7 100%)'
        }}
      >
        <div className="max-w-[1895px] mx-auto w-full">
          <HomepageHeader
            titleKey="thereWasAProblem"
            backgroundStyle="linear-gradient(to right, #005490 0%, #32b1d7 100%)"
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full payment-main max-w-[1895px] mx-auto" style={{ paddingTop: 'clamp(20px, 2.5vw, 40px)', paddingLeft: 'clamp(1rem, 2vw, 3rem)', paddingRight: 'clamp(1rem, 2vw, 3rem)', paddingBottom: 0 }}>
        {/* Error Message Section */}
        <section className="w-full mb-10 payment-section">
          <div
            style={{
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              marginBottom: 'clamp(20px, 2.5vw, 40px)'
            }}
          >
            <p
              style={{
                fontSize: 'clamp(28px, 4vw, 56px)',
                color: '#ed122d',
                fontWeight: 'bold',
                marginBottom: 'clamp(15px, 2vw, 30px)',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}
            >
              <img 
                src={errorIcon} 
                alt="Error icon" 
                style={{ 
                  width: 'clamp(48px, 5.5vw, 80px)',
                  height: 'clamp(48px, 5.5vw, 80px)',
                  objectFit: 'contain'
                }} 
              />
              {t.sorryThereWasAnIssue || 'SORRY, THERE WAS AN ISSUE PROCESSING YOUR ORDER'}
            </p>
            
            <p
              style={{
                fontSize: 'clamp(20px, 2.5vw, 36px)',
                color: '#03355c',
                marginBottom: 'clamp(25px, 3vw, 50px)',
                lineHeight: '1.5'
              }}
            >
              {t.pleaseContactSupport || 'Please contact our'}{' '}
              <a
                href="/support"
                style={{
                  color: '#03355c',
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                  textDecorationThickness: '2px',
                  textUnderlineOffset: '4px'
                }}
              >
                {t.supportCenter || 'Support Center'}
              </a>
              {' '}{t.toHelpCompleteOrder || 'so we can help you complete your order'}
            </p>

            <button
              style={{
                backgroundColor: '#03355c',
                color: 'white',
                padding: 'clamp(16px, 2vw, 28px) clamp(32px, 4vw, 56px)',
                borderRadius: '50px',
                border: 'none',
                fontSize: 'clamp(18px, 2.2vw, 32px)',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#022a47'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#03355c'}
              onClick={() => window.location.href = '/support'}
            >
              {t.contactSupport || 'CONTACT SUPPORT'}
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <div className="max-w-[1895px] mx-auto w-full">
        <MarketplaceFooter />
      </div>
    </div>
  );
};

export default ErrorPage;
