import React, { useState, useEffect } from 'react';
import HomepageHeader from '../../Homepage/HomepageHeader';
import MarketplaceFooter from '../../Marketplace/MarketplaceFooter';
import { useLanguage } from '../../../contexts/LanguageContext';
import { translations } from '../../../translations';
import qLogo from './Assets/Q.png';
import underlineImage from './Assets/underline@2x.png';
import productPlaceholder from './Assets/product_placeholder@2x.png';

const General = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('general');
  const [expandedOrder, setExpandedOrder] = useState(null);

  useEffect(() => {
    const updateIsMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
    };

    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  // Mock data - в реальном приложении это будет из API
  const accountData = {
    packageName: 'GOLD',
    monthlyPrice: '150 ILS',
    nextBillingCycle: '03/06/2025',
    dataUsed: '20GB',
    dataTotal: '40GB',
    fullName: 'John Doe',
    originCountry: 'Thailand',
    preferredLanguage: 'คนไทย (Thai)',
    passportNumber: '9999999999',
    phoneNumber: '+66-0000-4403',
    email: 'johndoe@gmail.com',
    streetName: 'Rothchild 12',
    city: 'Tel Aviv',
    country: 'Israel',
    notesForCourier: '',
    creditCard: '5326********2222',
    creditCardExp: '5/29',
    invoices: [
      { number: '#2532', date: '01/02/2025', total: '150 NIS' },
      { number: '#2522', date: '01/01/2025', total: '150 NIS' },
      { number: '#2518', date: '01/12/2024', total: '150 NIS' },
      { number: '#2505', date: '01/11/2024', total: '150 NIS' }
    ],
    orders: [
      { 
        number: '#2532', 
        date: '01/02/2025', 
        total: '345 NIS', 
        status: 'In progress',
        items: [
          { name: 'iPhone 13, 128gb', price: '200 NIS', quantity: 1, total: '200 NIS' },
          { name: 'Safety phone bundle', price: '145 NIS', quantity: 1, total: '145 NIS' }
        ],
        deliveryInfo: 'Your package should arrive in 3-5 business days'
      },
      { 
        number: '#2522', 
        date: '01/01/2025', 
        total: '150 NIS', 
        status: 'Shipped',
        items: [
          { name: 'iPhone 13, 128gb', price: '100 NIS', quantity: 1, total: '100 NIS' },
          { name: 'Safety phone bundle', price: '50 NIS', quantity: 1, total: '50 NIS' }
        ],
        deliveryInfo: 'Your package should arrive in 3-5 business days'
      },
      { 
        number: '#2518', 
        date: '21/12/2024', 
        total: '3350 NIS', 
        status: 'Shipped',
        items: [
          { name: 'iPhone 13, 128gb', price: '320 NIS', quantity: 10, total: '3200 NIS' },
          { name: 'Safety phone bundle', price: '150 NIS', quantity: 1, total: '150 NIS' }
        ],
        deliveryInfo: 'Your package should arrive in 3-5 business days'
      },
      { 
        number: '#2505', 
        date: '01/11/2024', 
        total: '245 NIS', 
        status: 'Completed',
        items: [
          { name: 'iPhone 13, 128gb', price: '150 NIS', quantity: 1, total: '150 NIS' },
          { name: 'Safety phone bundle', price: '95 NIS', quantity: 1, total: '95 NIS' }
        ],
        deliveryInfo: 'Your package should arrive in 3-5 business days'
      },
      { 
        number: '#2495', 
        date: '11/10/2024', 
        total: '150 NIS', 
        status: 'Completed',
        items: [
          { name: 'iPhone 13, 128gb', price: '100 NIS', quantity: 1, total: '100 NIS' },
          { name: 'Safety phone bundle', price: '50 NIS', quantity: 1, total: '50 NIS' }
        ],
        deliveryInfo: 'Your package should arrive in 3-5 business days'
      }
    ]
  };

  const countryFlagMap = {
    'Thailand': 'TH',
    'Greece': 'GR',
    'Germany': 'DE',
    'Israel': 'IL',
    'United Arab Emirates': 'AE',
    'United States': 'US',
    'United Kingdom': 'GB',
    'France': 'FR',
    'Italy': 'IT',
    'Spain': 'ES',
    'Japan': 'JP',
    'Australia': 'AU'
  };

  const getFlagUrl = (country) => {
    const code = countryFlagMap[country];
    if (code) {
      return `https://flagcdn.com/w40/${code.toLowerCase()}.png`;
    }
    return null;
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

      {/* Main Content Section */}
      <div className="max-w-[1895px] mx-auto w-full">
        <section
          className="relative w-full"
          style={{
            paddingTop: isMobile ? 'clamp(30px, 8vw, 60px)' : 'clamp(60px, 5vw, 100px)',
            paddingBottom: isMobile ? 'clamp(30px, 8vw, 60px)' : 'clamp(60px, 5vw, 100px)',
            paddingLeft: isMobile ? 'clamp(15px, 3vw, 25px)' : 'clamp(30px, 3vw, 50px)',
            paddingRight: isMobile ? 'clamp(15px, 3vw, 25px)' : 'clamp(30px, 3vw, 50px)',
            backgroundColor: '#ffffff'
          }}
        >
          {/* Content Container */}
          <div
            style={{
              maxWidth: isMobile ? '100%' : '1200px',
              margin: 0
            }}
          >
            {/* GENERAL INFORMATION Section */}
            <div style={{ marginBottom: isMobile ? 'clamp(40px, 8vw, 60px)' : 'clamp(60px, 5vw, 80px)' }}>
              <h2
                className="font-bold uppercase"
                onClick={() => setActiveSection(activeSection === 'general' ? null : 'general')}
                style={{
                  fontSize: isMobile ? 'clamp(24px, 7vw, 40px)' : 'clamp(32px, 3vw, 55px)',
                  color: activeSection === 'general' ? '#03355c' : '#666666',
                  marginBottom: isMobile ? 'clamp(25px, 6vw, 40px)' : 'clamp(40px, 3vw, 60px)',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
              >
                {t.generalInformation || 'GENERAL INFORMATION'}
              </h2>
            </div>
          </div>

          {/* Gray background container for all subsections - full width */}
          {activeSection === 'general' && (
            <div
              style={{
                backgroundColor: '#ededed',
                padding: isMobile ? 'clamp(20px, 5vw, 30px)' : 'clamp(25px, 3vw, 40px)',
                marginLeft: isMobile ? `calc(-1 * clamp(15px, 3vw, 25px))` : `calc(-1 * clamp(30px, 3vw, 50px))`,
                marginRight: isMobile ? `calc(-1 * clamp(15px, 3vw, 25px))` : `calc(-1 * clamp(30px, 3vw, 50px))`,
                paddingLeft: isMobile ? 'clamp(15px, 3vw, 25px)' : 'clamp(30px, 3vw, 50px)',
                paddingRight: isMobile ? 'clamp(15px, 3vw, 25px)' : 'clamp(30px, 3vw, 50px)',
                animation: 'fadeIn 0.5s ease-in',
                overflow: 'hidden'
              }}
            >
            {/* Content inside gray block */}
            <div>
                {/* YOUR PACKAGE Subsection */}
              <h3
                className="font-bold uppercase"
                style={{
                  fontSize: isMobile ? 'clamp(18px, 5vw, 28px)' : 'clamp(24px, 2.5vw, 46px)',
                  color: '#03355c',
                  marginBottom: isMobile ? 'clamp(20px, 5vw, 30px)' : 'clamp(25px, 3vw, 35px)',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                }}
              >
                {t.yourPackage || 'YOUR PACKAGE'}
              </h3>
              <div
                style={{
                  backgroundColor: '#005291',
                  borderRadius: '15px',
                  padding: isMobile ? 'clamp(20px, 5vw, 30px)' : 'clamp(25px, 3vw, 40px)',
                  marginBottom: isMobile ? 'clamp(25px, 6vw, 40px)' : 'clamp(35px, 4vw, 50px)',
                  maxWidth: '500px',
                  width: '100%'
                }}
              >
                {/* Q Logo and GOLD in one row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: isMobile ? 'clamp(15px, 4vw, 25px)' : 'clamp(20px, 2.5vw, 30px)',
                    marginBottom: 'clamp(15px, 3vw, 25px)',
                    flexDirection: isRTL ? 'row-reverse' : 'row'
                  }}
                >
                  <img
                    src={qLogo}
                    alt="Q"
                    style={{
                      width: isMobile ? 'clamp(50px, 12vw, 80px)' : 'clamp(60px, 4vw, 100px)',
                      height: isMobile ? 'clamp(50px, 12vw, 80px)' : 'clamp(60px, 4vw, 100px)',
                      objectFit: 'contain'
                    }}
                  />
                  <div
                    style={{
                      fontSize: isMobile ? 'clamp(20px, 6vw, 32px)' : 'clamp(24px, 2.5vw, 40px)',
                      fontWeight: 700,
                      color: '#66c8d5',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {accountData.packageName}
                  </div>
                </div>
                
                {/* Other information below */}
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontSize: isMobile ? 'clamp(16px, 4vw, 24px)' : 'clamp(18px, 2vw, 28px)',
                      fontWeight: 400,
                      color: '#ffffff',
                      marginBottom: 'clamp(6px, 0.8vw, 10px)',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {accountData.monthlyPrice} / MONTH
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? 'clamp(14px, 3.5vw, 20px)' : 'clamp(16px, 1.5vw, 24px)',
                      fontWeight: 400,
                      color: '#ffffff',
                      marginBottom: 'clamp(6px, 0.8vw, 10px)',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    Next billing cycle at {accountData.nextBillingCycle}
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? 'clamp(14px, 3.5vw, 20px)' : 'clamp(16px, 1.5vw, 24px)',
                      fontWeight: 400,
                      color: '#ffffff',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {accountData.dataUsed} of {accountData.dataTotal} been used so far
                  </div>
                </div>
              </div>

              {/* Divider line */}
              <div
                style={{
                  height: '2px',
                  backgroundColor: '#87d1db',
                  marginBottom: isMobile ? 'clamp(25px, 6vw, 40px)' : 'clamp(35px, 4vw, 50px)',
                  marginTop: isMobile ? 'clamp(25px, 6vw, 40px)' : 'clamp(35px, 4vw, 50px)',
                  marginLeft: isMobile ? `calc(-1 * clamp(15px, 3vw, 25px))` : `calc(-1 * clamp(30px, 3vw, 50px))`,
                  marginRight: isMobile ? `calc(-1 * clamp(15px, 3vw, 25px))` : `calc(-1 * clamp(30px, 3vw, 50px))`,
                  width: `calc(100% + ${isMobile ? 'clamp(30px, 6vw, 50px)' : 'clamp(60px, 6vw, 100px)'})`
                }}
              />

              {/* PERSONAL DETAILS Subsection */}
              <div style={{ marginBottom: isMobile ? 'clamp(25px, 6vw, 40px)' : 'clamp(35px, 4vw, 50px)' }}>
                <h3
                  className="font-bold uppercase"
                  style={{
                    fontSize: isMobile ? 'clamp(18px, 5vw, 28px)' : 'clamp(24px, 2.5vw, 46px)',
                    color: '#03355c',
                    marginBottom: isMobile ? 'clamp(20px, 5vw, 30px)' : 'clamp(25px, 3vw, 35px)',
                    direction: isRTL ? 'rtl' : 'ltr',
                    fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                  }}
                >
                  {t.personalDetails || 'PERSONAL DETAILS'}
                </h3>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: isMobile ? 'clamp(15px, 4vw, 25px)' : 'clamp(30px, 4vw, 60px)',
                    maxWidth: isMobile ? '100%' : '1200px'
                  }}
                >
                  {/* Left Column */}
                  <div>
                    <div
                      style={{
                        marginBottom: 'clamp(12px, 2vw, 20px)',
                        fontSize: isMobile ? 'clamp(14px, 3.5vw, 20px)' : 'clamp(16px, 1.5vw, 30px)',
                        color: '#03355c',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                      }}
                    >
                      <strong>{t.fullName || 'Full name'}:</strong> {accountData.fullName}
                    </div>
                    <div
                      style={{
                        marginBottom: 'clamp(12px, 2vw, 20px)',
                        fontSize: isMobile ? 'clamp(14px, 3.5vw, 20px)' : 'clamp(16px, 1.5vw, 30px)',
                        color: '#03355c',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <strong>{t.originCountry || 'Origin country'}:</strong> {accountData.originCountry}
                      {getFlagUrl(accountData.originCountry) && (
                        <img
                          src={getFlagUrl(accountData.originCountry)}
                          alt={accountData.originCountry}
                          style={{ 
                            width: isMobile ? 'clamp(20px, 4vw, 28px)' : 'clamp(24px, 2vw, 32px)', 
                            height: isMobile ? 'clamp(20px, 4vw, 28px)' : 'clamp(24px, 2vw, 32px)', 
                            borderRadius: '50%',
                            objectFit: 'cover'
                          }}
                        />
                      )}
                    </div>
                    <div
                      style={{
                        fontSize: isMobile ? 'clamp(14px, 3.5vw, 20px)' : 'clamp(16px, 1.5vw, 30px)',
                        color: '#03355c',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                      }}
                    >
                      <strong>{t.preferredLanguage || 'Preferred language'}:</strong> {accountData.preferredLanguage}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <div
                      style={{
                        marginBottom: 'clamp(12px, 2vw, 20px)',
                        fontSize: isMobile ? 'clamp(14px, 3.5vw, 20px)' : 'clamp(16px, 1.5vw, 30px)',
                        color: '#03355c',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                      }}
                    >
                      <strong>{t.joinUsPassportNumber || 'Passport number'}:</strong> {accountData.passportNumber}
                    </div>
                    <div
                      style={{
                        marginBottom: 'clamp(12px, 2vw, 20px)',
                        fontSize: isMobile ? 'clamp(14px, 3.5vw, 20px)' : 'clamp(16px, 1.5vw, 30px)',
                        color: '#03355c',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                      }}
                    >
                      <strong>{t.joinUsPhone || 'Phone number'}:</strong> {accountData.phoneNumber}
                    </div>
                    <div
                      style={{
                        fontSize: isMobile ? 'clamp(14px, 3.5vw, 20px)' : 'clamp(16px, 1.5vw, 30px)',
                        color: '#03355c',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                      }}
                    >
                      <strong>{t.joinUsEmail || 'Email'}:</strong> {accountData.email}
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider line */}
              <div
                style={{
                  height: '2px',
                  backgroundColor: '#87d1db',
                  marginBottom: isMobile ? 'clamp(25px, 6vw, 40px)' : 'clamp(35px, 4vw, 50px)',
                  marginTop: isMobile ? 'clamp(25px, 6vw, 40px)' : 'clamp(35px, 4vw, 50px)',
                  marginLeft: isMobile ? `calc(-1 * clamp(15px, 3vw, 25px))` : `calc(-1 * clamp(30px, 3vw, 50px))`,
                  marginRight: isMobile ? `calc(-1 * clamp(15px, 3vw, 25px))` : `calc(-1 * clamp(30px, 3vw, 50px))`,
                  width: `calc(100% + ${isMobile ? 'clamp(30px, 6vw, 50px)' : 'clamp(60px, 6vw, 100px)'})`
                }}
              />

              {/* SHIPPING ADDRESS Subsection */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: isMobile ? 'clamp(20px, 5vw, 30px)' : 'clamp(25px, 3vw, 35px)'
                  }}
                >
                  <h3
                    className="font-bold uppercase"
                    style={{
                      fontSize: isMobile ? 'clamp(18px, 5vw, 28px)' : 'clamp(24px, 2.5vw, 46px)',
                      color: '#03355c',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {t.shippingAddress || 'SHIPPING ADDRESS'}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                    <button
                      style={{
                        fontSize: isMobile ? 'clamp(14px, 3.5vw, 18px)' : 'clamp(16px, 1.5vw, 30px)',
                        color: '#03355c',
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        fontWeight: 600
                      }}
                    >
                      {t.edit || 'EDIT'}
                    </button>
                    <img
                      src={underlineImage}
                      alt="underline"
                      style={{
                        width: isMobile ? 'clamp(30px, 6vw, 40px)' : 'clamp(35px, 3vw, 40px)',
                        height: 'auto',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: isMobile ? 'clamp(15px, 4vw, 25px)' : 'clamp(30px, 4vw, 60px)',
                    maxWidth: isMobile ? '100%' : '1200px'
                  }}
                >
                  {/* Left Column */}
                  <div>
                    <div
                      style={{
                        marginBottom: 'clamp(12px, 2vw, 20px)',
                        fontSize: isMobile ? 'clamp(14px, 3.5vw, 20px)' : 'clamp(16px, 1.5vw, 30px)',
                        color: '#03355c',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                      }}
                    >
                      <strong>{t.streetName || 'Street name'}:</strong> {accountData.streetName}
                    </div>
                    <div
                      style={{
                        marginBottom: 'clamp(12px, 2vw, 20px)',
                        fontSize: isMobile ? 'clamp(14px, 3.5vw, 20px)' : 'clamp(16px, 1.5vw, 30px)',
                        color: '#03355c',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                      }}
                    >
                      <strong>{t.city || 'City'}:</strong> {accountData.city}
                    </div>
                    <div
                      style={{
                        fontSize: isMobile ? 'clamp(14px, 3.5vw, 20px)' : 'clamp(16px, 1.5vw, 30px)',
                        color: '#03355c',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                      }}
                    >
                      <strong>{t.country || 'Country'}:</strong> {accountData.country}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <div
                      style={{
                        fontSize: isMobile ? 'clamp(14px, 3.5vw, 20px)' : 'clamp(16px, 1.5vw, 30px)',
                        color: '#03355c',
                        marginBottom: 'clamp(8px, 1vw, 12px)',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                      }}
                    >
                      <strong>{t.notesForCourier || 'Notes for courier'}:</strong>
                    </div>
                    <textarea
                      value={accountData.notesForCourier}
                      readOnly
                      style={{
                        width: '100%',
                        minHeight: isMobile ? 'clamp(80px, 20vw, 120px)' : 'clamp(100px, 12vw, 150px)',
                        padding: 'clamp(10px, 2vw, 15px)',
                        fontSize: isMobile ? 'clamp(14px, 3.5vw, 18px)' : 'clamp(16px, 1.5vw, 20px)',
                        border: '1px solid #e0e0e0',
                        borderRadius: '10px',
                        backgroundColor: '#ffffff',
                        color: '#666666',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        resize: 'vertical'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            </div>
          )}

          {/* Content Container for other sections */}
          <div
            style={{
              maxWidth: isMobile ? '100%' : '1200px',
              margin: 0
            }}
          >
            {/* Other Sections Titles */}
            <div style={{ marginTop: isMobile ? 'clamp(40px, 8vw, 60px)' : 'clamp(60px, 5vw, 80px)' }}>
              <h2
                className="font-bold uppercase"
                onClick={() => setActiveSection(activeSection === 'billing' ? null : 'billing')}
                style={{
                  fontSize: isMobile ? 'clamp(24px, 7vw, 40px)' : 'clamp(32px, 3vw, 55px)',
                  color: activeSection === 'billing' ? '#03355c' : '#666666',
                  marginBottom: isMobile ? 'clamp(25px, 6vw, 40px)' : 'clamp(40px, 3vw, 60px)',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
              >
                {t.billingInformation || 'BILLING INFORMATION'}
              </h2>
            </div>
          </div>

          {/* BILLING INFORMATION Content - full width */}
          {activeSection === 'billing' && (
            <div
              style={{
                backgroundColor: '#ededed',
                padding: isMobile ? 'clamp(20px, 5vw, 30px)' : 'clamp(25px, 3vw, 40px)',
                marginLeft: isMobile ? `calc(-1 * clamp(15px, 3vw, 25px))` : `calc(-1 * clamp(30px, 3vw, 50px))`,
                marginRight: isMobile ? `calc(-1 * clamp(15px, 3vw, 25px))` : `calc(-1 * clamp(30px, 3vw, 50px))`,
                paddingLeft: isMobile ? 'clamp(15px, 3vw, 25px)' : 'clamp(30px, 3vw, 50px)',
                paddingRight: isMobile ? 'clamp(15px, 3vw, 25px)' : 'clamp(30px, 3vw, 50px)',
                animation: 'fadeIn 0.5s ease-in',
                overflow: 'hidden'
              }}
            >
              {/* Red Alert Box - full width */}
              <div
                style={{
                  backgroundColor: '#f44444',
                  borderRadius: '10px',
                  padding: isMobile ? 'clamp(15px, 4vw, 20px)' : 'clamp(20px, 2.5vw, 25px)',
                  marginBottom: isMobile ? 'clamp(25px, 6vw, 40px)' : 'clamp(35px, 4vw, 50px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(12px, 2vw, 20px)',
                  flexDirection: isRTL ? 'row-reverse' : 'row'
                }}
              >
                <div
                  style={{
                    fontSize: isMobile ? 'clamp(24px, 6vw, 32px)' : 'clamp(28px, 3vw, 36px)',
                    color: '#ffffff'
                  }}
                >
                  🔔
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: isMobile ? 'clamp(14px, 3.5vw, 18px)' : '32px',
                      color: '#ffffff',
                      marginBottom: 'clamp(8px, 1vw, 12px)',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {t.billingAlertText || 'Please contact our service team about your payment to continue receiving communication and internet services.'}
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? 'clamp(14px, 3.5vw, 18px)' : '32px',
                      color: '#ffffff',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {t.contactOurTeam || 'CONTACT OUR TEAM'}
                  </div>
                </div>
              </div>

              {/* Content inside gray block */}
              <div
                style={{
                  maxWidth: isMobile ? '100%' : '1200px'
                }}
              >
                {/* YOUR PAYMENT METHODS */}
                <div style={{ marginBottom: isMobile ? 'clamp(30px, 7vw, 50px)' : 'clamp(40px, 4vw, 60px)' }}>
                  <h3
                    className="font-bold uppercase"
                    style={{
                      fontSize: isMobile ? 'clamp(18px, 5vw, 28px)' : 'clamp(24px, 2.5vw, 46px)',
                      color: '#03355c',
                      marginBottom: isMobile ? 'clamp(20px, 5vw, 30px)' : 'clamp(25px, 3vw, 35px)',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {t.yourPaymentMethods || 'YOUR PAYMENT METHODS'}
                  </h3>
                  <div
                    style={{
                      fontSize: isMobile ? 'clamp(14px, 3.5vw, 20px)' : 'clamp(16px, 1.5vw, 30px)',
                      color: '#03355c',
                      marginBottom: 'clamp(12px, 2vw, 20px)',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    <div style={{ marginBottom: 'clamp(8px, 1vw, 12px)' }}>
                      <strong>{t.yourCreditCard || 'Your credit card:'}</strong>
                    </div>
                    <div>
                      {accountData.creditCard} <span style={{ marginLeft: 'clamp(15px, 2vw, 25px)' }}>EXP: {accountData.creditCardExp}</span>
                      <span
                        style={{
                          marginLeft: 'clamp(15px, 2vw, 25px)',
                          color: '#03355c',
                          cursor: 'pointer',
                          textDecoration: 'underline',
                          fontWeight: 600
                        }}
                      >
                        {t.change || 'Change'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider line - full width */}
              <div
                style={{
                  height: '2px',
                  backgroundColor: '#87d1db',
                  marginBottom: isMobile ? 'clamp(25px, 6vw, 40px)' : 'clamp(35px, 4vw, 50px)',
                  marginTop: isMobile ? 'clamp(25px, 6vw, 40px)' : 'clamp(35px, 4vw, 50px)',
                  marginLeft: isMobile ? `calc(-1 * clamp(15px, 3vw, 25px) - clamp(15px, 3vw, 25px))` : `calc(-1 * clamp(30px, 3vw, 50px) - clamp(30px, 3vw, 50px))`,
                  marginRight: isMobile ? `calc(-1 * clamp(15px, 3vw, 25px) - clamp(15px, 3vw, 25px))` : `calc(-1 * clamp(30px, 3vw, 50px) - clamp(30px, 3vw, 50px))`,
                  width: `calc(100% + ${isMobile ? 'clamp(60px, 12vw, 100px)' : 'clamp(120px, 12vw, 200px)'})`
                }}
              />

              {/* Content inside gray block */}
              <div
                style={{
                  maxWidth: isMobile ? '100%' : '1200px'
                }}
              >
                {/* INVOICES */}
                <div>
                  <h3
                    className="font-bold uppercase"
                    style={{
                      fontSize: isMobile ? 'clamp(18px, 5vw, 28px)' : 'clamp(24px, 2.5vw, 46px)',
                      color: '#03355c',
                      marginBottom: isMobile ? 'clamp(20px, 5vw, 30px)' : 'clamp(25px, 3vw, 35px)',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {t.invoices || 'INVOICES'}
                  </h3>
                  
                  {/* Desktop Table */}
                  {!isMobile && (
                    <div style={{ overflowX: 'auto' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                          <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
                            <th
                              style={{
                                textAlign: 'left',
                                padding: 'clamp(12px, 1.5vw, 20px)',
                                fontSize: 'clamp(16px, 1.8vw, 24px)',
                                color: '#03355c',
                                fontWeight: 600,
                                direction: isRTL ? 'rtl' : 'ltr',
                                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                              }}
                            >
                              {t.invoiceNumber || 'Invoice number'}
                            </th>
                            <th
                              style={{
                                textAlign: 'left',
                                padding: 'clamp(12px, 1.5vw, 20px)',
                                fontSize: 'clamp(16px, 1.8vw, 24px)',
                                color: '#03355c',
                                fontWeight: 600,
                                direction: isRTL ? 'rtl' : 'ltr',
                                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                              }}
                            >
                              {t.date || 'Date'}
                            </th>
                            <th
                              style={{
                                textAlign: 'left',
                                padding: 'clamp(12px, 1.5vw, 20px)',
                                fontSize: 'clamp(16px, 1.8vw, 24px)',
                                color: '#03355c',
                                fontWeight: 600,
                                direction: isRTL ? 'rtl' : 'ltr',
                                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                              }}
                            >
                              {t.total || 'Total'}
                            </th>
                            <th
                              style={{
                                textAlign: 'left',
                                padding: 'clamp(12px, 1.5vw, 20px)',
                                fontSize: 'clamp(16px, 1.8vw, 24px)',
                                color: '#03355c',
                                fontWeight: 600,
                                direction: isRTL ? 'rtl' : 'ltr',
                                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                              }}
                            >
                              {t.downloadInvoice || 'Download invoice'}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {accountData.invoices.map((invoice, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid #e0e0e0' }}>
                              <td
                                style={{
                                  padding: 'clamp(12px, 1.5vw, 20px)',
                                  fontSize: 'clamp(16px, 1.8vw, 22px)',
                                  color: '#03355c',
                                  direction: isRTL ? 'rtl' : 'ltr',
                                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                                }}
                              >
                                {invoice.number}
                              </td>
                              <td
                                style={{
                                  padding: 'clamp(12px, 1.5vw, 20px)',
                                  fontSize: 'clamp(16px, 1.8vw, 22px)',
                                  color: '#03355c',
                                  direction: isRTL ? 'rtl' : 'ltr',
                                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                                }}
                              >
                                {invoice.date}
                              </td>
                              <td
                                style={{
                                  padding: 'clamp(12px, 1.5vw, 20px)',
                                  fontSize: 'clamp(16px, 1.8vw, 22px)',
                                  color: '#03355c',
                                  direction: isRTL ? 'rtl' : 'ltr',
                                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                                }}
                              >
                                {invoice.total}
                              </td>
                              <td
                                style={{
                                  padding: 'clamp(12px, 1.5vw, 20px)',
                                  direction: isRTL ? 'rtl' : 'ltr',
                                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                                }}
                              >
                                <span style={{ fontSize: 'clamp(18px, 2vw, 24px)', cursor: 'pointer' }}>📄</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Mobile List */}
                  {isMobile && (
                    <div>
                      {accountData.invoices.map((invoice, index) => (
                        <div
                          key={index}
                          style={{
                            borderBottom: '1px solid #e0e0e0',
                            padding: 'clamp(15px, 4vw, 20px) 0',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: isRTL ? 'row-reverse' : 'row'
                          }}
                        >
                          <div>
                            <div
                              style={{
                                fontSize: 'clamp(16px, 4vw, 22px)',
                                color: '#03355c',
                                fontWeight: 600,
                                marginBottom: 'clamp(4px, 1vw, 8px)',
                                direction: isRTL ? 'rtl' : 'ltr',
                                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                              }}
                            >
                              {invoice.number}
                            </div>
                            <div
                              style={{
                                fontSize: 'clamp(14px, 3.5vw, 20px)',
                                color: '#03355c',
                                direction: isRTL ? 'rtl' : 'ltr',
                                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                              }}
                            >
                              {invoice.date} • {invoice.total}
                            </div>
                          </div>
                          <span style={{ fontSize: 'clamp(20px, 5vw, 28px)', cursor: 'pointer' }}>📄</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              </div>
            )}

          {/* Content Container for other sections */}
          <div
            style={{
              maxWidth: isMobile ? '100%' : '1200px',
              margin: 0
            }}
          >

            <div style={{ marginTop: isMobile ? 'clamp(40px, 8vw, 60px)' : 'clamp(60px, 5vw, 80px)' }}>
              <h2
                className="font-bold uppercase"
                onClick={() => setActiveSection(activeSection === 'order-history' ? null : 'order-history')}
                style={{
                  fontSize: isMobile ? 'clamp(24px, 7vw, 40px)' : 'clamp(32px, 3vw, 55px)',
                  color: activeSection === 'order-history' ? '#03355c' : '#666666',
                  marginBottom: isMobile ? 'clamp(25px, 6vw, 40px)' : 'clamp(40px, 3vw, 60px)',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
              >
                {t.orderHistory || 'ORDER HISTORY'}
              </h2>
            </div>
          </div>

          {/* ORDER HISTORY Content - full width */}
          {activeSection === 'order-history' && (
            <div
              style={{
                backgroundColor: '#ededed',
                padding: isMobile ? 'clamp(20px, 5vw, 30px)' : 'clamp(25px, 3vw, 40px)',
                marginLeft: isMobile ? `calc(-1 * clamp(15px, 3vw, 25px))` : `calc(-1 * clamp(30px, 3vw, 50px))`,
                marginRight: isMobile ? `calc(-1 * clamp(15px, 3vw, 25px))` : `calc(-1 * clamp(30px, 3vw, 50px))`,
                paddingLeft: isMobile ? 'clamp(15px, 3vw, 25px)' : 'clamp(30px, 3vw, 50px)',
                paddingRight: isMobile ? 'clamp(15px, 3vw, 25px)' : 'clamp(30px, 3vw, 50px)',
                animation: 'fadeIn 0.5s ease-in',
                overflow: 'hidden'
              }}
            >
              {/* Content inside gray block */}
              <div
                style={{
                  maxWidth: isMobile ? '100%' : '1200px'
                }}
              >
                {/* YOUR RECENT ORDERS */}
                <div style={{ marginBottom: isMobile ? 'clamp(30px, 7vw, 50px)' : 'clamp(40px, 4vw, 60px)' }}>
                  <h3
                    className="font-bold uppercase"
                    style={{
                      fontSize: isMobile ? 'clamp(18px, 5vw, 28px)' : 'clamp(24px, 2.5vw, 46px)',
                      color: '#03355c',
                      marginBottom: isMobile ? 'clamp(20px, 5vw, 30px)' : 'clamp(25px, 3vw, 35px)',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {t.yourRecentOrders || 'YOUR RECENT ORDERS'}
                  </h3>
                  
                  {/* Desktop Table */}
                  {!isMobile && (
                    <div style={{ overflowX: 'auto' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                          <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
                            <th
                              style={{
                                textAlign: 'left',
                                padding: 'clamp(12px, 1.5vw, 20px)',
                                fontSize: 'clamp(16px, 1.8vw, 24px)',
                                color: '#03355c',
                                fontWeight: 600,
                                direction: isRTL ? 'rtl' : 'ltr',
                                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                              }}
                            >
                              {t.orderNumber || 'Order number'}
                            </th>
                            <th
                              style={{
                                textAlign: 'left',
                                padding: 'clamp(12px, 1.5vw, 20px)',
                                fontSize: 'clamp(16px, 1.8vw, 24px)',
                                color: '#03355c',
                                fontWeight: 600,
                                direction: isRTL ? 'rtl' : 'ltr',
                                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                              }}
                            >
                              {t.date || 'Date'}
                            </th>
                            <th
                              style={{
                                textAlign: 'left',
                                padding: 'clamp(12px, 1.5vw, 20px)',
                                fontSize: 'clamp(16px, 1.8vw, 24px)',
                                color: '#03355c',
                                fontWeight: 600,
                                direction: isRTL ? 'rtl' : 'ltr',
                                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                              }}
                            >
                              {t.total || 'Total'}
                            </th>
                            <th
                              style={{
                                textAlign: 'left',
                                padding: 'clamp(12px, 1.5vw, 20px)',
                                fontSize: 'clamp(16px, 1.8vw, 24px)',
                                color: '#03355c',
                                fontWeight: 600,
                                direction: isRTL ? 'rtl' : 'ltr',
                                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                              }}
                            >
                              {t.status || 'Status'}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {accountData.orders.map((order, index) => (
                            <React.Fragment key={index}>
                              <tr 
                                style={{ 
                                  borderBottom: '1px solid #e0e0e0',
                                  backgroundColor: expandedOrder === index ? '#f5f5f5' : 'transparent',
                                  cursor: 'pointer'
                                }}
                                onClick={() => setExpandedOrder(expandedOrder === index ? null : index)}
                              >
                                <td
                                  style={{
                                    padding: 'clamp(12px, 1.5vw, 20px)',
                                    fontSize: 'clamp(16px, 1.8vw, 22px)',
                                    color: '#03355c',
                                    direction: isRTL ? 'rtl' : 'ltr',
                                    fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                                  }}
                                >
                                  {order.number}
                                </td>
                                <td
                                  style={{
                                    padding: 'clamp(12px, 1.5vw, 20px)',
                                    fontSize: 'clamp(16px, 1.8vw, 22px)',
                                    color: '#03355c',
                                    direction: isRTL ? 'rtl' : 'ltr',
                                    fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                                  }}
                                >
                                  {order.date}
                                </td>
                                <td
                                  style={{
                                    padding: 'clamp(12px, 1.5vw, 20px)',
                                    fontSize: 'clamp(16px, 1.8vw, 22px)',
                                    color: '#03355c',
                                    fontWeight: expandedOrder === index ? 700 : 400,
                                    direction: isRTL ? 'rtl' : 'ltr',
                                    fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                                  }}
                                >
                                  {order.total}
                                </td>
                                <td
                                  style={{
                                    padding: 'clamp(12px, 1.5vw, 20px)',
                                    fontSize: 'clamp(16px, 1.8vw, 22px)',
                                    color: '#03355c',
                                    fontWeight: expandedOrder === index ? 700 : 400,
                                    direction: isRTL ? 'rtl' : 'ltr',
                                    fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                                  }}
                                >
                                  {order.status}
                                </td>
                              </tr>
                              {expandedOrder === index && (
                                <tr>
                                  <td colSpan="4" style={{ padding: 'clamp(20px, 2.5vw, 30px)', backgroundColor: '#ffffff', borderBottom: '1px solid #e0e0e0' }}>
                                    {order.items.length > 0 && order.items.map((item, itemIndex) => (
                                      <div
                                        key={itemIndex}
                                        style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: 'clamp(12px, 2vw, 20px)',
                                          marginBottom: itemIndex < order.items.length - 1 ? 'clamp(15px, 2vw, 20px)' : 'clamp(15px, 2vw, 20px)',
                                          flexDirection: isRTL ? 'row-reverse' : 'row'
                                        }}
                                      >
                                        <img
                                          src={productPlaceholder}
                                          alt={item.name}
                                          style={{
                                            width: 'clamp(40px, 4vw, 60px)',
                                            height: 'clamp(40px, 4vw, 60px)',
                                            objectFit: 'contain'
                                          }}
                                        />
                                        <div style={{ flex: 1 }}>
                                          <div
                                            style={{
                                              fontSize: 'clamp(16px, 1.8vw, 22px)',
                                              color: (item.name.includes('iPhone 13, 128gb') || item.name.includes('Safety phone bundle')) ? '#000000' : '#03355c',
                                              textDecoration: (item.name.includes('iPhone 13, 128gb') || item.name.includes('Safety phone bundle')) ? 'underline' : 'none',
                                              marginBottom: 'clamp(4px, 0.5vw, 8px)',
                                              direction: isRTL ? 'rtl' : 'ltr',
                                              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                                            }}
                                          >
                                            {item.name}
                                          </div>
                                          <div
                                            style={{
                                              fontSize: 'clamp(14px, 1.5vw, 18px)',
                                              color: '#666666',
                                              direction: isRTL ? 'rtl' : 'ltr',
                                              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                                            }}
                                          >
                                            <span style={{ color: '#000000' }}>{item.price} x {item.quantity} {t.credits || 'credits'}</span> ({t.total || 'Total'} {item.total})
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                    {order.deliveryInfo && (
                                      <div
                                        style={{
                                          marginTop: 'clamp(15px, 2vw, 20px)',
                                          paddingTop: 'clamp(15px, 2vw, 20px)',
                                          borderTop: '1px solid #e0e0e0'
                                        }}
                                      >
                                        <div
                                          style={{
                                            fontSize: 'clamp(14px, 1.5vw, 18px)',
                                            color: '#666666',
                                            marginBottom: 'clamp(8px, 1vw, 12px)',
                                            direction: isRTL ? 'rtl' : 'ltr',
                                            fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                                          }}
                                        >
                                          {order.deliveryInfo}
                                        </div>
                                        <div
                                          style={{
                                            fontSize: 'clamp(14px, 1.5vw, 18px)',
                                            color: '#03355c',
                                            cursor: 'pointer',
                                            textDecoration: 'underline',
                                            fontWeight: 600,
                                            direction: isRTL ? 'rtl' : 'ltr',
                                            fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                                          }}
                                        >
                                          {t.trackOrder || 'Track order'}
                                        </div>
                                      </div>
                                    )}
                                  </td>
                                </tr>
                              )}
                            </React.Fragment>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Mobile List */}
                  {isMobile && (
                    <div>
                      {accountData.orders.map((order, index) => (
                        <div key={index}>
                          <div
                            style={{
                              borderBottom: '1px solid #e0e0e0',
                              padding: 'clamp(15px, 4vw, 20px) 0',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'flex-start',
                              flexDirection: isRTL ? 'row-reverse' : 'row',
                              backgroundColor: expandedOrder === index ? '#f5f5f5' : 'transparent',
                              cursor: 'pointer'
                            }}
                            onClick={() => setExpandedOrder(expandedOrder === index ? null : index)}
                          >
                            <div style={{ flex: 1 }}>
                              <div
                                style={{
                                  fontSize: 'clamp(16px, 4vw, 22px)',
                                  color: '#03355c',
                                  fontWeight: expandedOrder === index ? 700 : 600,
                                  marginBottom: 'clamp(4px, 1vw, 8px)',
                                  direction: isRTL ? 'rtl' : 'ltr',
                                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                                }}
                              >
                                {order.number}
                              </div>
                              <div
                                style={{
                                  fontSize: 'clamp(14px, 3.5vw, 20px)',
                                  color: '#03355c',
                                  marginBottom: 'clamp(4px, 1vw, 8px)',
                                  direction: isRTL ? 'rtl' : 'ltr',
                                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                                }}
                              >
                                {order.date} • {order.total}
                              </div>
                              <div
                                style={{
                                  fontSize: 'clamp(14px, 3.5vw, 18px)',
                                  color: '#03355c',
                                  direction: isRTL ? 'rtl' : 'ltr',
                                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                                }}
                              >
                                {order.status}
                              </div>
                            </div>
                          </div>
                          {expandedOrder === index && (
                            <div style={{ padding: 'clamp(15px, 4vw, 20px)', backgroundColor: '#ffffff', borderBottom: '1px solid #e0e0e0' }}>
                              {order.items.length > 0 && order.items.map((item, itemIndex) => (
                                <div
                                  key={itemIndex}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'clamp(12px, 2vw, 20px)',
                                    marginBottom: itemIndex < order.items.length - 1 ? 'clamp(15px, 2vw, 20px)' : 'clamp(15px, 2vw, 20px)',
                                    flexDirection: isRTL ? 'row-reverse' : 'row'
                                  }}
                                >
                                  <img
                                    src={productPlaceholder}
                                    alt={item.name}
                                    style={{
                                      width: 'clamp(40px, 6vw, 60px)',
                                      height: 'clamp(40px, 6vw, 60px)',
                                      objectFit: 'contain'
                                    }}
                                  />
                                  <div style={{ flex: 1 }}>
                                    <div
                                      style={{
                                        fontSize: 'clamp(16px, 4vw, 22px)',
                                        color: (item.name.includes('iPhone 13, 128gb') || item.name.includes('Safety phone bundle')) ? '#000000' : '#03355c',
                                        textDecoration: (item.name.includes('iPhone 13, 128gb') || item.name.includes('Safety phone bundle')) ? 'underline' : 'none',
                                        marginBottom: 'clamp(4px, 0.5vw, 8px)',
                                        direction: isRTL ? 'rtl' : 'ltr',
                                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                                      }}
                                    >
                                      {item.name}
                                    </div>
                                    <div
                                      style={{
                                        fontSize: 'clamp(14px, 3.5vw, 18px)',
                                        color: '#666666',
                                        direction: isRTL ? 'rtl' : 'ltr',
                                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                                      }}
                                    >
                                      <span style={{ color: '#000000' }}>{item.price} x {item.quantity} {t.credits || 'credits'}</span> ({t.total || 'Total'} {item.total})
                                    </div>
                                  </div>
                                </div>
                              ))}
                              {order.deliveryInfo && (
                                <div
                                  style={{
                                    marginTop: 'clamp(15px, 2vw, 20px)',
                                    paddingTop: 'clamp(15px, 2vw, 20px)',
                                    borderTop: '1px solid #e0e0e0'
                                  }}
                                >
                                  <div
                                    style={{
                                      fontSize: 'clamp(14px, 3.5vw, 18px)',
                                      color: '#666666',
                                      marginBottom: 'clamp(8px, 1vw, 12px)',
                                      direction: isRTL ? 'rtl' : 'ltr',
                                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                                    }}
                                  >
                                    {order.deliveryInfo}
                                  </div>
                                  <div
                                    style={{
                                      fontSize: 'clamp(14px, 3.5vw, 18px)',
                                      color: '#03355c',
                                      cursor: 'pointer',
                                      textDecoration: 'underline',
                                      fontWeight: 600,
                                      direction: isRTL ? 'rtl' : 'ltr',
                                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                                    }}
                                  >
                                    {t.trackOrder || 'Track order'}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Content Container for other sections */}
          <div
            style={{
              maxWidth: isMobile ? '100%' : '1200px',
              margin: 0
            }}
          >
            <div style={{ marginTop: isMobile ? 'clamp(40px, 8vw, 60px)' : 'clamp(60px, 5vw, 80px)' }}>
              <h2
                className="font-bold uppercase"
                onClick={() => setActiveSection(activeSection === 'account-settings' ? null : 'account-settings')}
                style={{
                  fontSize: isMobile ? 'clamp(24px, 7vw, 40px)' : 'clamp(32px, 3vw, 55px)',
                  color: activeSection === 'account-settings' ? '#03355c' : '#666666',
                  marginBottom: isMobile ? 'clamp(25px, 6vw, 40px)' : 'clamp(40px, 3vw, 60px)',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
              >
                {t.accountSettings || 'ACCOUNT SETTINGS'}
              </h2>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="max-w-[1895px] mx-auto w-full">
        <MarketplaceFooter />
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default General;
