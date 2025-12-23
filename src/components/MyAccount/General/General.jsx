import React, { useState, useEffect } from 'react';
import HomepageHeader from '../../Homepage/HomepageHeader';
import MarketplaceFooter from '../../Marketplace/MarketplaceFooter';
import { useLanguage } from '../../../contexts/LanguageContext';
import { translations } from '../../../translations';
import qLogo from './Assets/Q.png';
import underlineImage from './Assets/underline@2x.png';

const General = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const [isMobile, setIsMobile] = useState(false);

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
    notesForCourier: ''
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
                style={{
                  fontSize: isMobile ? 'clamp(24px, 7vw, 40px)' : 'clamp(32px, 3vw, 55px)',
                  color: '#03355c',
                  marginBottom: isMobile ? 'clamp(25px, 6vw, 40px)' : 'clamp(40px, 3vw, 60px)',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                }}
              >
                {t.generalInformation || 'GENERAL INFORMATION'}
              </h2>
            </div>
          </div>

          {/* Gray background container for all subsections - full width */}
          <div
            style={{
              backgroundColor: '#ededed',
              padding: isMobile ? 'clamp(20px, 5vw, 30px)' : 'clamp(25px, 3vw, 40px)',
              marginLeft: isMobile ? `calc(-1 * clamp(15px, 3vw, 25px))` : `calc(-1 * clamp(30px, 3vw, 50px))`,
              marginRight: isMobile ? `calc(-1 * clamp(15px, 3vw, 25px))` : `calc(-1 * clamp(30px, 3vw, 50px))`,
              paddingLeft: isMobile ? 'clamp(15px, 3vw, 25px)' : 'clamp(30px, 3vw, 50px)',
              paddingRight: isMobile ? 'clamp(15px, 3vw, 25px)' : 'clamp(30px, 3vw, 50px)'
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
                style={{
                  fontSize: isMobile ? 'clamp(24px, 7vw, 40px)' : 'clamp(32px, 3vw, 55px)',
                  color: '#666666',
                  marginBottom: isMobile ? 'clamp(25px, 6vw, 40px)' : 'clamp(40px, 3vw, 60px)',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                }}
              >
                {t.billingInformation || 'BILLING INFORMATION'}
              </h2>
            </div>

            <div style={{ marginTop: isMobile ? 'clamp(40px, 8vw, 60px)' : 'clamp(60px, 5vw, 80px)' }}>
              <h2
                className="font-bold uppercase"
                style={{
                  fontSize: isMobile ? 'clamp(24px, 7vw, 40px)' : 'clamp(32px, 3vw, 55px)',
                  color: '#666666',
                  marginBottom: isMobile ? 'clamp(25px, 6vw, 40px)' : 'clamp(40px, 3vw, 60px)',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                }}
              >
                {t.orderHistory || 'ORDER HISTORY'}
              </h2>
            </div>

            <div style={{ marginTop: isMobile ? 'clamp(40px, 8vw, 60px)' : 'clamp(60px, 5vw, 80px)' }}>
              <h2
                className="font-bold uppercase"
                style={{
                  fontSize: isMobile ? 'clamp(24px, 7vw, 40px)' : 'clamp(32px, 3vw, 55px)',
                  color: '#666666',
                  marginBottom: isMobile ? 'clamp(25px, 6vw, 40px)' : 'clamp(40px, 3vw, 60px)',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
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
    </div>
  );
};

export default General;
