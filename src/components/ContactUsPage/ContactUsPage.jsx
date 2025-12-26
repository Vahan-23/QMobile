import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import ContactUsHeader from './ContactUsHeader';
import ContactUsFooter from './ContactUsFooter';
import representativeImage from './Assets/representative.png';
import chatIcon from '../SupportPage/Assets/chat@2x.png';
import whatsappIcon from '../SupportPage/Assets/wa@2x.png';
import phoneIcon from '../SupportPage/Assets/phone@2x.png';

const ContactUsPage = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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
      <ContactUsHeader />

      {/* Contact Us Section */}
      <section
        className="w-full"
        style={{
          background: 'linear-gradient(to right, rgb(0, 84, 147), rgb(51, 177, 215))',
          paddingTop: 'clamp(60px, 10vw, 120px)',
          paddingBottom: 'clamp(60px, 10vw, 120px)',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)'
        }}
      >
        <div className="max-w-[1895px] mx-auto w-full">
          <h1
            className="text-center font-bold uppercase text-white mb-4"
            style={{
              fontSize: 'clamp(2rem, 6.34vw, 120px)',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              marginBottom: 'clamp(20px, 3vw, 40px)'
            }}
          >
            {t.contactUs || 'CONTACT US'}
          </h1>
          <p
            className="text-center uppercase mb-12"
            style={{
              fontSize: 'clamp(1rem, 2.8vw, 53px)',
              fontWeight: 700,
              color: '#03355c',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              marginBottom: 'clamp(40px, 6vw, 80px)'
            }}
          >
            {t.bestWaysToReachUs || 'BEST WAYS TO REACH US'}
          </p>
          
          {/* Contact Options */}
          <div className="flex justify-center items-center flex-wrap gap-8 md:gap-16">
            {/* Chat */}
            <div className="text-center cursor-pointer transition-transform hover:-translate-y-1">
              <div className="flex items-center justify-center mx-auto mb-4">
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
                className="font-bold uppercase text-white"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                  fontWeight: 700
                }}
              >
                {t.chat}
              </div>
            </div>

            {/* WhatsApp */}
            <div className="text-center cursor-pointer transition-transform hover:-translate-y-1">
              <div className="flex items-center justify-center mx-auto mb-4">
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
                className="font-bold uppercase text-white"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                  fontWeight: 700
                }}
              >
                {t.whatsapp}
              </div>
            </div>

            {/* Call Us */}
            <div className="text-center cursor-pointer transition-transform hover:-translate-y-1">
              <div className="flex items-center justify-center mx-auto mb-4">
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
                className="font-bold uppercase text-white"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                  fontWeight: 700
                }}
              >
                {t.callUs}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leave Us A Message Section */}
      <section
        className="w-full"
        style={{
          backgroundColor: '#ffffff',
          paddingTop: 'clamp(60px, 10vw, 120px)',
          paddingBottom: isMobile ? 'clamp(60px, 10vw, 120px)' : 0,
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)'
        }}
      >
        <div className="max-w-[1895px] mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-0 md:gap-12">
            {/* Representative Image */}
            <div 
              className="w-full md:w-1/2 flex justify-center md:justify-start"
              style={{
                order: isRTL ? 2 : 1
              }}
            >
              <img
                src={representativeImage}
                alt="Customer Service Representative"
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Form */}
            <div 
              className="w-full md:w-1/2"
              style={{
                order: isRTL ? 1 : 2
              }}
            >
              <div
                style={{
                  backgroundColor: '#66c8d5',
                  borderRadius: '12px',
                  padding: 'clamp(30px, 4vw, 50px)',
                  width: '100%'
                }}
              >
                <h2
                  className="font-bold uppercase mb-6"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    color: '#005490',
                    marginBottom: 'clamp(30px, 4vw, 50px)',
                    direction: isRTL ? 'rtl' : 'ltr',
                    fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                  }}
                >
                  {t.leaveUsAMessage || 'LEAVE US A MESSAGE'}
                </h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="fullName"
                      placeholder={t.fullName || 'Full name*'}
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 rounded-lg border-2 border-transparent focus:border-#005490 outline-none"
                      style={{
                        fontSize: 'clamp(14px, 2vw, 18px)',
                        backgroundColor: '#ffffff',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                      }}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <input
                      type="tel"
                      name="phone"
                      placeholder={t.phone || 'Phone*'}
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 rounded-lg border-2 border-transparent focus:border-#005490 outline-none"
                      style={{
                        fontSize: 'clamp(14px, 2vw, 18px)',
                        backgroundColor: '#ffffff',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                      }}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      placeholder={t.email || 'Email'}
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-lg border-2 border-transparent focus:border-#005490 outline-none"
                      style={{
                        fontSize: 'clamp(14px, 2vw, 18px)',
                        backgroundColor: '#ffffff',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                      }}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <textarea
                      name="message"
                      placeholder={t.yourMessage || 'Your message'}
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full p-4 rounded-lg border-2 border-transparent focus:border-#005490 outline-none resize-none"
                      style={{
                        fontSize: 'clamp(14px, 2vw, 18px)',
                        backgroundColor: '#ffffff',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                      }}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full font-bold uppercase text-white py-4 rounded-lg transition-opacity hover:opacity-90"
                    style={{
                      fontSize: 'clamp(14px, 2vw, 18px)',
                      backgroundColor: '#005490',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {t.submitRegistrationRequest || 'SUBMIT REGISTRATION REQUEST'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Connect Section */}
      <section
        className="w-full"
        style={{
          backgroundColor: '#66c8d5',
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
              fontSize: 'clamp(2rem, 5vw, 4.7rem)',
              color: '#005490',
              marginBottom: 'clamp(40px, 6vw, 80px)',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
            }}
          >
            {t.letsConnect || "LET'S CONNECT"}
          </h2>
          
          {/* Social Media Links */}
          <div className="flex justify-center items-center flex-wrap gap-8 md:gap-16">
            {/* Facebook */}
            <div className="text-center cursor-pointer transition-transform hover:-translate-y-1">
              <div
                className="flex items-center justify-center mx-auto mb-4"
                style={{
                  width: 'clamp(100px, 12vw, 200px)',
                  height: 'clamp(100px, 12vw, 200px)',
                  borderRadius: '50%',
                  backgroundColor: '#1977D1',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                }}
              >
                <span
                  style={{
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    color: '#ffffff',
                    fontWeight: 'bold'
                  }}
                >
                  f
                </span>
              </div>
              <div
                className="font-bold uppercase"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                  color: '#005490',
                  fontWeight: 700
                }}
              >
                {t.facebook || 'FACEBOOK'}
              </div>
            </div>

            {/* Instagram */}
            <div className="text-center cursor-pointer transition-transform hover:-translate-y-1">
              <div
                className="flex items-center justify-center mx-auto mb-4"
                style={{
                  width: 'clamp(100px, 12vw, 200px)',
                  height: 'clamp(100px, 12vw, 200px)',
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                }}
              >
                <svg
                  width="60%"
                  height="60%"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div
                className="font-bold uppercase"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                  color: '#005490',
                  fontWeight: 700
                }}
              >
                {t.instagram || 'INSTAGRAM'}
              </div>
            </div>

            {/* TikTok */}
            <div className="text-center cursor-pointer transition-transform hover:-translate-y-1">
              <div
                className="flex items-center justify-center mx-auto mb-4"
                style={{
                  width: 'clamp(100px, 12vw, 200px)',
                  height: 'clamp(100px, 12vw, 200px)',
                  borderRadius: '50%',
                  backgroundColor: '#000000',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                }}
              >
                <svg
                  width="60%"
                  height="60%"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
              <div
                className="font-bold uppercase"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                  color: '#005490',
                  fontWeight: 700
                }}
              >
                {t.tiktok || 'TIKTOK'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <ContactUsFooter />
    </div>
  );
};

export default ContactUsPage;

