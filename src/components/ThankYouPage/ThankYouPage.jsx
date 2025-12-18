import React from 'react';
import HomepageHeader from '../Homepage/HomepageHeader';
import MarketplaceFooter from '../Marketplace/MarketplaceFooter';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import '../PaymentPage/PaymentPage.css';

const ThankYouPage = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  // Mock order data
  const orderNumber = '4347';

  // Mock shipping address
  const shippingAddress = {
    street: 'Rothchild 1, Tel Aviv',
    floor: 'Floor 5, entrance #2',
    postalCode: '720000',
    country: 'Israel'
  };

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
            titleKey="thankYouForYourOrder"
            backgroundStyle="linear-gradient(to right, #005490 0%, #32b1d7 100%)"
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full payment-main max-w-[1895px] mx-auto" style={{ paddingTop: 'clamp(20px, 2.5vw, 40px)', paddingLeft: 'clamp(1rem, 2vw, 3rem)', paddingRight: 'clamp(1rem, 2vw, 3rem)', paddingBottom: 0 }}>
        {/* Order Confirmation Section */}
        <section className="w-full mb-10 payment-section">
          <h2
            className="font-bold"
            style={{
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              fontSize: 'clamp(32px, 4.5vw, 72px)',
              color: '#03355c',
              marginBottom: 'clamp(15px, 2vw, 25px)',
              fontWeight: 'bold'
            }}
          >
            {t.orderNumber || 'ORDER #'}{orderNumber}
          </h2>
          
          <p
            style={{
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              fontSize: 'clamp(16px, 2vw, 28px)',
              color: '#03355c',
              marginBottom: 'clamp(10px, 1.5vw, 20px)',
              lineHeight: '1.5'
            }}
          >
            {t.orderConfirmationSent || 'An order confirmation has been sent to your email.'}
          </p>
          
          <p
            style={{
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              fontSize: 'clamp(16px, 2vw, 28px)',
              color: '#03355c',
              marginBottom: 'clamp(20px, 2.5vw, 40px)',
              lineHeight: '1.5'
            }}
          >
            {t.findOrderDetails || 'You can also find your order details and invoice under'}{' '}
            <a
              href="/account"
              style={{
                color: '#03355c',
                fontWeight: 'bold',
                textDecoration: 'underline',
                textDecorationThickness: '2px',
                textUnderlineOffset: '4px'
              }}
            >
              {t.myAccount || 'My Account'}
            </a>
          </p>
        </section>

        {/* Shipping Address Section */}
        <section className="w-full mb-10 payment-section">
          <p
            className="payment-subtitle"
            style={{
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              fontSize: 'clamp(18px, 2.5vw, 32px)',
              color: '#03355c',
              fontWeight: 'bold',
              marginBottom: 'clamp(10px, 1.5vw, 20px)'
            }}
          >
            {t.yourShippingAddress || 'Your shipping address:'}
          </p>

          <div
            className="payment-address-box"
            style={{
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              color: '#03355c',
              backgroundColor: '#f0f0f0',
              padding: 'clamp(12px, 1.5vw, 20px)',
              borderRadius: 'clamp(12px, 1.5vw, 20px)',
              border: '1px solid #03355c',
              width: 'clamp(200px, 33.333%, 33.333%)'
            }}
          >
            <div>{shippingAddress.street}</div>
            <div>{shippingAddress.floor}</div>
            <div>{shippingAddress.postalCode}</div>
            <div>{shippingAddress.country}</div>
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

export default ThankYouPage;

