import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import SupportHeader from './SupportHeader';
import SupportFooter from './SupportFooter';
import heroImage from './Assets/hero.jpg';
import callIcon from './Assets/call@2x.png';
import simIcon from './Assets/sim@2x.png';
import internetIcon from './Assets/internet@2x.png';
import billingIcon from './Assets/billing@2x.png';
import userIcon from './Assets/user@2x.png';
import settingsIcon from './Assets/settings@2x.png';
import chatIcon from './Assets/chat@2x.png';
import whatsappIcon from './Assets/wa@2x.png';
import phoneIcon from './Assets/phone@2x.png';

const SupportPage = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(0);

  const categories = [
    { id: 'calls', icon: callIcon, name: t.supportCalls || 'CALLS', articles: 9 },
    { id: 'sim', icon: simIcon, name: t.supportSim || 'SIM', articles: 3 },
    { id: 'connectivity', icon: internetIcon, name: t.supportConnectivity || 'CONNECTIVITY', articles: 5 },
    { id: 'billing', icon: billingIcon, name: t.supportBilling || 'BILLING AND ORDERS', articles: 7 },
    { id: 'account', icon: userIcon, name: t.supportAccount || 'ACCOUNT AND PRIVACY', articles: 12 },
    { id: 'settings', icon: settingsIcon, name: t.supportSettings || 'GENERAL SETTINGS', articles: 16 }
  ];

  const faqs = [
    { id: 0, question: t.supportFaq1 || 'QUESTION TITLE', answer: t.supportFaq1Answer || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 1, question: t.supportFaq2 || 'QUESTION TITLE', answer: t.supportFaq2Answer || 'Answer text here...' },
    { id: 2, question: t.supportFaq3 || 'QUESTION TITLE', answer: t.supportFaq3Answer || 'Answer text here...' },
    { id: 3, question: t.supportFaq4 || 'QUESTION TITLE', answer: t.supportFaq4Answer || 'Answer text here...' },
    { id: 4, question: t.supportFaq5 || 'QUESTION TITLE', answer: t.supportFaq5Answer || 'Answer text here...' },
    { id: 5, question: t.supportFaq6 || 'QUESTION TITLE', answer: t.supportFaq6Answer || 'Answer text here...' },
    { id: 6, question: t.supportFaq7 || 'QUESTION TITLE', answer: t.supportFaq7Answer || 'Answer text here...' }
  ];

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div
      className="font-['Rubik',_sans-serif] text-[#333] w-full overflow-x-hidden overflow-y-visible bg-white min-h-screen"
      style={{
        fontFamily: "'Rubik', sans-serif"
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <SupportHeader />

      {/* Hero Section */}
      <section 
        className="hidden md:block relative w-full"
        style={{
          backgroundColor: '#f5f5f5'
        }}
      >
        <div className="w-full max-w-[1895px] mx-auto">
          {/* Desktop Hero with Image - shown only on desktop */}
          <div 
            className="hidden md:block relative w-full"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img 
              src={heroImage} 
              alt="Support Hero" 
              className="w-full h-auto"
              style={{
                display: 'block',
                width: '100%',
                height: 'auto'
              }}
            />
            <h1 
              className="absolute font-bold uppercase"
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                color: '#03355c',
                letterSpacing: '0.05em',
                top: 'clamp(20px, 4vw, 60px)',
                left: isRTL ? 'auto' : 'clamp(20px, 5vw, 80px)',
                right: isRTL ? 'clamp(20px, 5vw, 80px)' : 'auto',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                textShadow: '2px 2px 4px rgba(255, 255, 255, 0.8)'
              }}
            >
              {t.supportTitle || 'SUPPORT'}
            </h1>
            <p 
              className="absolute text-center"
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                color: '#03355c',
                bottom: 'clamp(20px, 3vw, 40px)',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
                paddingLeft: 'clamp(20px, 5vw, 80px)',
                paddingRight: 'clamp(20px, 5vw, 80px)',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                textShadow: '2px 2px 4px rgba(255, 255, 255, 0.8)'
              }}
            >
              {t.supportTagline || 'Keeps you connected with the ones who matter most.'}
            </p>
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section 
        className="w-full text-center mx-auto"
        style={{
          maxWidth: '1895px',
          backgroundColor: '#66c8d5',
          paddingTop: 'clamp(60px, 10vw, 120px)',
          paddingBottom: 'clamp(60px, 10vw, 120px)',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)'
        }}
      >
          <h2 
            className="font-bold uppercase"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 92px)',
              color: '#005490',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
            }}
          >
            {t.needHelp || 'NEED HELP?'}
          </h2>
          <p 
            className="mb-12"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 54px)',
              fontWeight: 600,
              color: '#03355c',
              marginBottom: 'clamp(40px, 6vw, 80px)',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
            }}
          >
            {t.weAreHereForYouText || 'WE ARE HERE FOR YOU'}
          </p>
          <div className="flex justify-center items-center flex-wrap gap-8 md:gap-16">
            {/* Chat */}
            <div className="text-center cursor-pointer transition-transform hover:-translate-y-1">
              <div 
                className="flex items-center justify-center mx-auto mb-4"
              >
                <img 
                  src={chatIcon} 
                  alt="Chat" 
                  style={{ 
                    width: 'clamp(100px, 12vw, 200px)', 
                    height: 'clamp(100px, 12vw, 200px)',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div 
                className="font-bold uppercase"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                  color: '#03355c',
                  fontWeight: 700
                }}
              >
                {t.chat}
              </div>
            </div>

            {/* WhatsApp */}
            <div className="text-center cursor-pointer transition-transform hover:-translate-y-1">
              <div 
                className="flex items-center justify-center mx-auto mb-4"
              >
                <img 
                  src={whatsappIcon} 
                  alt="WhatsApp" 
                  style={{ 
                    width: 'clamp(100px, 12vw, 200px)', 
                    height: 'clamp(100px, 12vw, 200px)',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div 
                className="font-bold uppercase"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                  color: '#03355c',
                  fontWeight: 700
                }}
              >
                {t.whatsapp}
              </div>
            </div>

            {/* Call Us */}
            <div className="text-center cursor-pointer transition-transform hover:-translate-y-1">
              <div 
                className="flex items-center justify-center mx-auto mb-4"
              >
                <img 
                  src={phoneIcon} 
                  alt="Call" 
                  style={{ 
                    width: 'clamp(100px, 12vw, 200px)', 
                    height: 'clamp(100px, 12vw, 200px)',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div 
                className="font-bold uppercase"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                  color: '#03355c',
                  fontWeight: 700
                }}
              >
                {t.callUs}
              </div>
            </div>
          </div>
      </section>

      {/* Guides Section */}
      <section 
        className="w-full"
        style={{
          backgroundColor: '#ffffff',
          paddingTop: 'clamp(60px, 10vw, 120px)',
          paddingBottom: 'clamp(60px, 10vw, 120px)',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)'
        }}
      >
        <div className="max-w-[1895px] mx-auto w-full">
          <h2 
            className="text-center font-bold uppercase"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 92px)',
              color: '#005490',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
            }}
          >
            {t.guides || 'GUIDES'}
          </h2>
          <p 
            className="text-center mb-12"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 54px)',
              fontWeight: 600,
              color: '#03355c',
              marginBottom: 'clamp(40px, 6vw, 80px)',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
            }}
          >
            {t.troubleshootAtFingers || 'TROUBLESHOOT AT YOUR FINGERS'}
          </p>

          {/* Search Bar */}
          <div 
            className="mb-16"
            style={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto clamp(40px, 6vw, 80px)'
            }}
          >
            <div 
              className="relative"
              style={{
                display: 'flex',
                alignItems: 'center',
                border: '2px solid #005490',
                borderRadius: '8px',
                padding: 'clamp(12px, 2vw, 20px)',
                backgroundColor: '#fff'
              }}
            >
              <input
                type="text"
                placeholder={t.searchPlaceholder || 'WHAT ARE YOU LOOKING FOR?'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 outline-none"
                style={{
                  fontSize: 'clamp(12px, 2.5vw, 30px)',
                  fontWeight: 600,
                  color: '#5e5e5e',
                  border: 'none',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                }}
              />
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#005490" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{
                  width: 'clamp(20px, 3vw, 30px)',
                  height: 'clamp(20px, 3vw, 30px)',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="cursor-pointer transition-all hover:shadow-lg"
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  padding: 'clamp(20px, 3vw, 40px)',
                  textAlign: 'center',
                  minHeight: 'clamp(200px, 25vw, 300px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 'clamp(15px, 2vw, 25px)'
                }}
              >
                <img 
                  src={category.icon} 
                  alt={category.name}
                  style={{
                    width: 'clamp(80px, 12vw, 150px)',
                    height: 'clamp(80px, 12vw, 150px)',
                    objectFit: 'contain'
                  }}
                />
                <div>
                  <h3 
                    className="font-bold uppercase mb-2"
                    style={{
                      fontSize: 'clamp(1rem, 2.5vw, 32px)',
                      color: '#03355c',
                      marginBottom: 'clamp(8px, 1vw, 12px)',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {category.name}
                  </h3>
                  <p 
                    style={{
                      fontSize: 'clamp(1rem, 2.5vw, 32px)',
                      fontWeight: 600,
                      color: '#666',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {category.articles} {t.articles || 'articles'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        className="w-full"
        style={{
          backgroundColor: '#f5f5f5',
          paddingTop: 'clamp(60px, 10vw, 120px)',
          paddingBottom: 'clamp(60px, 10vw, 120px)',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)'
        }}
      >
        <div className="max-w-[1895px] mx-auto w-full">
          <h2 
            className="text-center font-bold uppercase mb-12"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 95px)',
              color: '#005490',
              marginBottom: 'clamp(40px, 6vw, 80px)',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
            }}
          >
            {t.faq || 'FAQ'}
          </h2>
          <div className="mx-auto" style={{ width: '90%', maxWidth: '90%' }}>
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="mb-4"
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                  style={{
                    direction: isRTL ? 'rtl' : 'ltr',
                    fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                  }}
                >
                  <span 
                    className="font-semibold"
                    style={{
                      fontSize: 'clamp(1rem, 2.5vw, 33px)',
                      color: expandedFaq === faq.id ? '#005291' : '#5e5e5e',
                      flex: 1
                    }}
                  >
                    {faq.question}
                  </span>
                  <span 
                    style={{
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                      color: '#005490',
                      fontWeight: 'bold',
                      marginLeft: isRTL ? '0' : '20px',
                      marginRight: isRTL ? '20px' : '0'
                    }}
                  >
                    {expandedFaq === faq.id ? '×' : '+'}
                  </span>
                </button>
                {expandedFaq === faq.id && (
                  <div 
                    className="p-6 pt-0"
                    style={{
                      fontSize: 'clamp(1rem, 2.5vw, 32px)',
                      color: '#666',
                      lineHeight: '1.6',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <SupportFooter />
    </div>
  );
};

export default SupportPage;

