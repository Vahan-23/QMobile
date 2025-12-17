import React, { useState } from 'react';
import HomepageHeader from '../Homepage/HomepageHeader';
import MarketplaceFooter from '../Marketplace/MarketplaceFooter';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import welcomeScreenImage from './Assets/welcomeScreen.png';
import unlimitedCallsIcon from './Assets/Unlimited.png';
import highSpeedIcon from './Assets/speed_internet.png';
import simCardIcon from './Assets/sim_card.png';
import smsIcon from './Assets/SMS_in_Israel.png';
import supportIcon from './Assets/Support.png';

const JoinUs = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    employeeName: '',
    passportNumber: '',
    phone: '',
    email: '',
    originCountry: 'Thailand'
  });

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
      className="font-['Rubik',_sans-serif] text-[#03355c] bg-white min-h-screen overflow-x-hidden"
      style={{
        fontFamily: "'Rubik', sans-serif"
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header with Hero Section */}
      <div
        style={{
          background: 'linear-gradient(to bottom, #32b1d7 0%, #005490 100%)'
        }}
      >
        <div className="max-w-[1895px] mx-auto w-full">
          <HomepageHeader
            showTitle={false}
            backgroundStyle="transparent"
          />
          
           {/* Hero Section - продолжение header */}
           {/* 
             Адаптивная верстка: все значения масштабируются относительно базовой ширины 1895px
             Используются vw единицы для пропорционального масштабирования как при zoom браузера
             clamp() обеспечивает плавную адаптацию на разных размерах экрана
           */}
           <section
             className="relative w-full"
             style={{
               paddingTop: 'clamp(20px, 4vw, 60px)',
               paddingBottom: '0',
               paddingLeft: 'clamp(20px, 6vw, 80px)',
               paddingRight: 'clamp(20px, 6vw, 80px)',
               minHeight: 'clamp(400px, 50vw, 800px)',
               height: 'clamp(477px, 62.03vw, 1152px)' // При ширине 769px высота = 477px (477/769 = 62.03vw)
             }}
           >
             <div className="max-w-[1895px] mx-auto w-full relative">
               {/* Welcome Screen Image - абсолютно позиционирован, не влияет на текст */}
               <div
                 style={{
                   position: 'absolute',
                   left: '50%',
                   transform: 'translate(-50%, 0)',
                   zIndex: 1,
                   width: 'clamp(600px, 85vw, 1600px)',
                   pointerEvents: 'none'
                 }}
               >
                 <img
                   src={welcomeScreenImage}
                   alt="Welcome screen"
                   style={{
                     width: '100%',
                     height: 'auto',
                     objectFit: 'contain',
                     display: 'block'
                   }}
                 />
               </div>

               {/* Flex контейнер: всегда row для предотвращения скачков */}
               <div className="flex flex-row items-start gap-8 lg:gap-16 relative z-10" style={{ minHeight: 0 }}>
                 {/* Left side - Text */}
                 <div
                   className="flex-1"
                   style={{
                     textAlign: isRTL ? 'right' : 'left',
                     color: '#ffffff',
                     marginLeft: isRTL ? '0' : 'clamp(40px, 8vw, 120px)',
                     marginRight: isRTL ? 'clamp(40px, 8vw, 120px)' : '0',
                     flexShrink: 0,
                     minWidth: 0
                   }}
                 >
                   <h1
                     className="font-bold uppercase"
                     style={{
                       fontSize: 'clamp(28px, 5.46vw, 120px)', // При ширине 769px = 42px (42/769 = 5.46vw)
                       marginBottom: 'clamp(20px, 4vw, 60px)',
                       lineHeight: '1.1',
                       direction: isRTL ? 'rtl' : 'ltr',
                       fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                     }}
                   >
                     {t.joinUsTitle || 'JOIN US'}
                   </h1>
                 </div>

                 {/* Right side - Text */}
                 {/* Wrapper для стабильного позиционирования независимо от flex-direction */}
                 <div 
                   className="flex-1"
                   style={{
                     position: 'relative',
                     // Применяем сдвиг к wrapper, а не к внутреннему контенту
                     left: isRTL 
                       ? 'clamp(0px, calc(22.96vw - 235.2px), 0px)' 
                       : 'clamp(-200px, calc(-22.96vw + 235.2px), 0px)'
                   }}
                 >
                   <div
                     style={{
                       display: 'flex',
                       flexDirection: 'column',
                       alignItems: isRTL ? 'flex-end' : 'flex-start',
                       gap: 'clamp(20px, 4vw, 40px)',
                       marginTop: 'clamp(200px, 34.3vw, 650px)'
                     }}
                   >
                   <h2
                     className="font-bold uppercase text-white"
                     style={{
                       fontSize: 'clamp(28px, 4.75vw, 90px)',
                       textAlign: isRTL ? 'right' : 'left',
                       lineHeight: '1.2',
                       direction: isRTL ? 'rtl' : 'ltr',
                       fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                     }}
                   >
                     {t.joinUsHeroDistance ? (
                       <>
                         <span style={{ whiteSpace: 'nowrap', display: 'block' }}>
                           {t.joinUsHeroDistance.split(' FELT SO CLOSE')[0]}
                         </span>
                         <span style={{ whiteSpace: 'nowrap', display: 'block' }}>
                           FELT SO <span style={{ color: '#66c8d5' }}>CLOSE</span>
                         </span>
                       </>
                     ) : (
                       <>
                         <span style={{ whiteSpace: 'nowrap', display: 'block' }}>
                           2453 MILES NEVER
                         </span>
                         <span style={{ whiteSpace: 'nowrap', display: 'block' }}>
                           FELT SO <span style={{ color: '#66c8d5' }}>CLOSE</span>
                         </span>
                       </>
                     )}
                   </h2>

                   <p
                     className="text-white"
                     style={{
                       fontSize: 'clamp(16px, 2.5vw, 32px)',
                       textAlign: isRTL ? 'right' : 'left',
                       lineHeight: '1.5',
                       maxWidth: 'clamp(300px, 31.66vw, 600px)',
                       direction: isRTL ? 'rtl' : 'ltr',
                       fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                     }}
                   >
                     <>
                       <span style={{ whiteSpace: 'nowrap', display: 'block' }}>
                         Stay truly connected with your loved ones,
                       </span>
                       <span style={{ whiteSpace: 'nowrap', display: 'block' }}>
                         as if you were right there.
                       </span>
                     </>
                   </p>
                   </div>
                 </div>
               </div>
             </div>
           </section>
         </div>
       </div>

       {/* Features Section */}
       <section
         className="w-full"
         style={{
          paddingTop: 'clamp(0px, 8vw, 80px)',
          paddingBottom: 'clamp(60px, 10vw, 150px)',
          paddingLeft: 'clamp(20px, 6vw, 80px)',
          paddingRight: 'clamp(20px, 6vw, 80px)',
           background: '#ffffff'
         }}
       >
         <div className="max-w-[1895px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
             {/* Left side - CTA */}
            <div
              style={{
                textAlign: isRTL ? 'right' : 'left',
                marginLeft: isRTL ? '0' : '0',
                marginRight: isRTL ? '0' : '0'
              }}
            >
              <h2
                className="font-bold uppercase text-[#005490]"
                style={{
                  fontSize: 'clamp(28px, 4.16vw, 72px)',
                  marginBottom: 'clamp(20px, 4vw, 50px)',
                  lineHeight: '1.2',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                  color: '#005490'
                }}
              >
                {(() => {
                  const baseText = t.joinUsStayConnected || 'STAY CONNECTED WITH FAMILY AND FRIENDS.';
                  const text = baseText.trim().endsWith('.') ? baseText.trim() : `${baseText.trim()}.`;
                  const phrase = 'WITH FAMILY AND FRIENDS';
                  const idx = text.indexOf(phrase);
                  if (idx === -1) return text;
                  const before = text.slice(0, idx);
                  const after = text.slice(idx + phrase.length);
                  return (
                    <>
                      {before}
                      <span style={{ color: '#03355c', display: 'block' }}>
                        {phrase}
                        {after}
                      </span>
                    </>
                  );
                })()}
              </h2>
               <h2
                 className="font-bold uppercase text-[#005490]"
                 style={{
                  fontSize: 'clamp(28px, 4.16vw, 72px)',
                   marginBottom: 'clamp(30px, 5vw, 60px)',
                   lineHeight: '1.2',
                   direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                  color: '#005490'
                 }}
               >
                {(() => {
                  const baseText = t.joinUsEverywhere || 'EVERYWHERE YOU GO.';
                  const text = baseText.trim().endsWith('.') ? baseText.trim() : `${baseText.trim()}.`;
                  const phrase = 'YOU GO';
                  const idx = text.indexOf(phrase);
                  if (idx === -1) return text;
                  const before = text.slice(0, idx).trimEnd();
                  const phraseWithAfter = text.slice(idx).trim();
                  return (
                    <>
                      <span>{before}</span>
                      <span style={{ color: '#03355c', display: 'block' }}>
                        {phraseWithAfter}
                      </span>
                    </>
                  );
                })()}
               </h2>
               <button
                 className="uppercase font-semibold text-white rounded-full transition hover:opacity-90"
                 style={{
                   backgroundColor: '#67c9d6',
                  color: '#03355c',
                  padding: '0 clamp(32px, 5vw, 80px)',
                  fontSize: 'clamp(19px, 2.5vw, 32px)',
                  minWidth: 'clamp(280px, calc(-7px + 37.3vw), 700px)',
                  height: 'clamp(34px, calc(-7px + 5.5vw), 95px)',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  borderRadius: '40px',
                   cursor: 'pointer',
                   direction: isRTL ? 'rtl' : 'ltr',
                   fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                 }}
               >
                 {t.joinUsDiscoverPlans || 'DISCOVER OUR PLANS'}
               </button>
             </div>

            {/* Right side - Service Offerings Card */}
            <div
              className="bg-white"
              style={{
                padding: 'clamp(13px, calc(-19px + 4.17vw), 60px)',
                border: '1px solid #e0e0e0',
                width: '100%',
                maxWidth: '665px',
                background: '#f0f0f0',
                borderRadius: '28px',
                boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.08), 0 14px 28px rgba(0, 0, 0, 0.14)',
                marginLeft: '0',
                marginRight: '0'
              }}
            >
               <div className="grid grid-cols-2 gap-6 lg:gap-8">
                 {/* Service Item 1 */}
                 <div className="flex flex-col items-center text-center">
                   <div
                     className="mb-4"
                     style={{
                      width: 'clamp(60px, 8vw, 110px)',
                      height: 'clamp(60px, 8vw, 110px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                     }}
                   >
                    <img
                      src={unlimitedCallsIcon}
                      alt="Unlimited calls in Israel"
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                   </div>
                   <p
                    style={{
                      fontSize: 'clamp(15px, 2vw, 32px)',
                      fontWeight: 700,
                      color: '#03355c',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                   >
                     {t.joinUsUnlimitedCalls || 'Unlimited calls in Israel'}
                   </p>
                 </div>

                 {/* Service Item 2 */}
                 <div className="flex flex-col items-center text-center">
                   <div
                     className="mb-4"
                     style={{
                      width: 'clamp(60px, 8vw, 110px)',
                      height: 'clamp(60px, 8vw, 110px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                     }}
                   >
                    <img
                      src={simCardIcon}
                      alt="Free sim card"
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                   </div>
                   <p
                    style={{
                      fontSize: 'clamp(15px, 2vw, 32px)',
                      fontWeight: 700,
                      color: '#03355c',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                   >
                     {t.joinUsFreeSim || 'Free sim card'}
                   </p>
                 </div>

                 {/* Service Item 3 */}
                 <div className="flex flex-col items-center text-center">
                   <div
                     className="mb-4"
                     style={{
                      width: 'clamp(60px, 8vw, 110px)',
                      height: 'clamp(60px, 8vw, 110px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                     }}
                   >
                    <img
                      src={highSpeedIcon}
                      alt="200GB High speed internet"
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                   </div>
                   <p
                    style={{
                      fontSize: 'clamp(15px, 2vw, 32px)',
                      fontWeight: 700,
                      color: '#03355c',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                   >
                     {t.joinUsHighSpeedInternet || '200GB High speed internet'}
                   </p>
                 </div>

                 {/* Service Item 4 */}
                 <div className="flex flex-col items-center text-center">
                   <div
                     className="mb-4"
                     style={{
                      width: 'clamp(60px, 8vw, 110px)',
                      height: 'clamp(60px, 8vw, 110px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                     }}
                   >
                    <img
                      src={smsIcon}
                      alt="Unlimited SMS in Israel"
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                   </div>
                   <p
                    style={{
                      fontSize: 'clamp(15px, 2vw, 32px)',
                      fontWeight: 700,
                      color: '#03355c',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                   >
                     {t.joinUsUnlimitedSMS || 'Unlimited SMS in Israel'}
                   </p>
                 </div>

                 {/* Service Item 5 */}
                 <div className="flex flex-col items-center text-center">
                   <div
                     className="mb-4"
                     style={{
                      width: 'clamp(60px, 8vw, 110px)',
                      height: 'clamp(60px, 8vw, 110px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                     }}
                   >
                    <img
                      src={supportIcon}
                      alt="Support in your native language"
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                   </div>
                   <p
                    style={{
                      fontSize: 'clamp(15px, 2vw, 32px)',
                      fontWeight: 700,
                      color: '#03355c',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                   >
                     {t.joinUsSupportNative || 'Support in your native language'}
                   </p>
                 </div>

                 {/* Service Item 6 - Price */}
                 <div className="flex flex-col items-center text-center">
                   <p
                     className="font-bold"
                     style={{
                      fontSize: 'clamp(21px, calc(5.3px + 2.04vw), 44px)',
                       color: '#03355c',
                       direction: isRTL ? 'rtl' : 'ltr',
                       fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                       marginTop: 'clamp(20px, 3vw, 40px)'
                     }}
                   >
                     {t.joinUsStartingFrom || 'Starting from 69 ILS / Month'}
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Registration Form Section */}
       <section
         className="w-full"
         style={{
           padding: 'clamp(60px, 10vw, 120px) clamp(20px, 6vw, 80px)',
           background: '#67c9d6'
         }}
       >
         <div className="max-w-[1895px] mx-auto w-full">
           <div className="max-w-4xl mx-auto">
             <div className="flex items-center gap-4 mb-6" style={{ justifyContent: isRTL ? 'flex-end' : 'flex-start' }}>
               <img
                 src={t.logo}
                 alt="Q mobile"
                 style={{
                   height: 'clamp(30px, 4vw, 60px)',
                   width: 'auto'
                 }}
               />
               <h2
                 className="font-bold uppercase text-[#005490]"
                 style={{
                   fontSize: 'clamp(32px, 5vw, 64px)',
                   direction: isRTL ? 'rtl' : 'ltr',
                   fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                 }}
               >
                 {t.joinUsFamilyTitle || 'JOIN THE Q MOBILE FAMILY'}
               </h2>
             </div>

             <p
               className="text-[#005490] mb-8"
               style={{
                 fontSize: 'clamp(16px, 2.5vw, 28px)',
                 direction: isRTL ? 'rtl' : 'ltr',
                 fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
               }}
             >
               {t.joinUsFormInstructions || 'Please submit your details, and one of our representatives will contact you in your native language.'}
             </p>

             <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* First Name */}
                 <div>
                   <label
                     className="block mb-2 font-semibold text-[#03355c]"
                     style={{
                       fontSize: 'clamp(14px, 1.8vw, 20px)',
                       direction: isRTL ? 'rtl' : 'ltr',
                       fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                     }}
                   >
                     {t.joinUsFirstName || 'First name'} *
                   </label>
                   <input
                     type="text"
                     name="firstName"
                     value={formData.firstName}
                     onChange={handleInputChange}
                     required
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005490]"
                     style={{
                       fontSize: 'clamp(14px, 1.8vw, 18px)',
                       direction: isRTL ? 'rtl' : 'ltr',
                       fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                     }}
                   />
                 </div>

                 {/* Last Name */}
                 <div>
                   <label
                     className="block mb-2 font-semibold text-[#03355c]"
                     style={{
                       fontSize: 'clamp(14px, 1.8vw, 20px)',
                       direction: isRTL ? 'rtl' : 'ltr',
                       fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                     }}
                   >
                     {t.joinUsLastName || 'Last name'} *
                   </label>
                   <input
                     type="text"
                     name="lastName"
                     value={formData.lastName}
                     onChange={handleInputChange}
                     required
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005490]"
                     style={{
                       fontSize: 'clamp(14px, 1.8vw, 18px)',
                       direction: isRTL ? 'rtl' : 'ltr',
                       fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                     }}
                   />
                 </div>

                 {/* Employee Name */}
                 <div>
                   <label
                     className="block mb-2 font-semibold text-[#03355c]"
                     style={{
                       fontSize: 'clamp(14px, 1.8vw, 20px)',
                       direction: isRTL ? 'rtl' : 'ltr',
                       fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                     }}
                   >
                     {t.joinUsEmployeeName || 'Employee name'} *
                   </label>
                   <input
                     type="text"
                     name="employeeName"
                     value={formData.employeeName}
                     onChange={handleInputChange}
                     required
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005490]"
                     style={{
                       fontSize: 'clamp(14px, 1.8vw, 18px)',
                       direction: isRTL ? 'rtl' : 'ltr',
                       fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                     }}
                   />
                 </div>

                 {/* Passport Number */}
                 <div>
                   <label
                     className="block mb-2 font-semibold text-[#03355c]"
                     style={{
                       fontSize: 'clamp(14px, 1.8vw, 20px)',
                       direction: isRTL ? 'rtl' : 'ltr',
                       fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                     }}
                   >
                     {t.joinUsPassportNumber || 'Passport number'} *
                   </label>
                   <input
                     type="text"
                     name="passportNumber"
                     value={formData.passportNumber}
                     onChange={handleInputChange}
                     required
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005490]"
                     style={{
                       fontSize: 'clamp(14px, 1.8vw, 18px)',
                       direction: isRTL ? 'rtl' : 'ltr',
                       fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                     }}
                   />
                 </div>

                 {/* Phone */}
                 <div>
                   <label
                     className="block mb-2 font-semibold text-[#03355c]"
                     style={{
                       fontSize: 'clamp(14px, 1.8vw, 20px)',
                       direction: isRTL ? 'rtl' : 'ltr',
                       fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                     }}
                   >
                     {t.joinUsPhone || 'Phone'} *
                   </label>
                   <input
                     type="tel"
                     name="phone"
                     value={formData.phone}
                     onChange={handleInputChange}
                     required
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005490]"
                     style={{
                       fontSize: 'clamp(14px, 1.8vw, 18px)',
                       direction: isRTL ? 'rtl' : 'ltr',
                       fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                     }}
                   />
                 </div>

                 {/* Email */}
                 <div>
                   <label
                     className="block mb-2 font-semibold text-[#03355c]"
                     style={{
                       fontSize: 'clamp(14px, 1.8vw, 20px)',
                       direction: isRTL ? 'rtl' : 'ltr',
                       fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                     }}
                   >
                     {t.joinUsEmail || 'Email'} *
                   </label>
                   <input
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleInputChange}
                     required
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005490]"
                     style={{
                       fontSize: 'clamp(14px, 1.8vw, 18px)',
                       direction: isRTL ? 'rtl' : 'ltr',
                       fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                     }}
                   />
                 </div>

                 {/* Origin Country */}
                 <div className="md:col-span-2">
                   <label
                     className="block mb-2 font-semibold text-[#03355c]"
                     style={{
                       fontSize: 'clamp(14px, 1.8vw, 20px)',
                       direction: isRTL ? 'rtl' : 'ltr',
                       fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                     }}
                   >
                     {t.joinUsOriginCountry || 'Origin country'}
                   </label>
                   <select
                     name="originCountry"
                     value={formData.originCountry}
                     onChange={handleInputChange}
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005490]"
                     style={{
                       fontSize: 'clamp(14px, 1.8vw, 18px)',
                       direction: isRTL ? 'rtl' : 'ltr',
                       fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                     }}
                   >
                     <option value="Thailand">Thailand</option>
                     <option value="Philippines">Philippines</option>
                     <option value="India">India</option>
                     <option value="Nepal">Nepal</option>
                     <option value="Other">Other</option>
                   </select>
                 </div>
               </div>

               <button
                 type="submit"
                 className="w-full mt-8 uppercase font-bold text-white rounded-full transition hover:opacity-90"
                 style={{
                   backgroundColor: '#005490',
                   padding: 'clamp(16px, 2.5vw, 24px)',
                   fontSize: 'clamp(16px, 2.5vw, 24px)',
                   border: 'none',
                   cursor: 'pointer',
                   direction: isRTL ? 'rtl' : 'ltr',
                   fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                 }}
               >
                 {t.joinUsSubmitRegistration || 'SUBMIT REGISTRATION REQUEST'}
               </button>
             </form>
           </div>
         </div>
       </section>

       {/* Testimonial Section */}
       <section
         className="w-full"
         style={{
           padding: 'clamp(60px, 10vw, 120px) clamp(20px, 6vw, 80px)',
           background: '#ffffff'
         }}
       >
         <div className="max-w-[1895px] mx-auto w-full">
           <div className="max-w-4xl mx-auto text-center">
             <h2
               className="font-bold uppercase text-[#005490] mb-8"
               style={{
                 fontSize: 'clamp(32px, 5vw, 64px)',
                 direction: isRTL ? 'rtl' : 'ltr',
                 fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
               }}
             >
               {t.joinUsTestimonialTitle || 'WE BRING HEARTS CLOSER, EVEN WHEN MILES APART'}
             </h2>

             <div className="relative">
               {/* Navigation Arrows */}
               <button
                 type="button"
                 className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
                 style={{
                   left: 'clamp(-40px, -5vw, -60px)'
                 }}
                 aria-label="Previous testimonial"
               >
                 <img
                   src="/Images/2x/arrow_left@2x.png"
                   alt="Previous"
                   style={{
                     width: 'clamp(30px, 4vw, 50px)',
                     height: 'auto'
                   }}
                 />
               </button>

               <div className="px-12">
                 <p
                   className="text-[#005490] mb-6"
                   style={{
                     fontSize: 'clamp(18px, 2.5vw, 32px)',
                     lineHeight: '1.6',
                     direction: isRTL ? 'rtl' : 'ltr',
                     fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                   }}
                 >
                   {t.joinUsTestimonialText || "Staying connected with my family back home means everything. This mobile plan made it easy and affordable to call and video chat without worrying about the cost. It's been a lifeline."}
                 </p>

                 <p
                   className="font-bold text-[#005490] mb-2"
                   style={{
                     fontSize: 'clamp(20px, 3vw, 36px)',
                     direction: isRTL ? 'rtl' : 'ltr',
                     fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                   }}
                 >
                   {t.joinUsTestimonialName || 'Nok Supansa'}
                 </p>

                 <p
                   className="text-[#005490] mb-4"
                   style={{
                     fontSize: 'clamp(14px, 2vw, 20px)',
                     direction: isRTL ? 'rtl' : 'ltr',
                     fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                   }}
                 >
                   {t.joinUsTestimonialOrigin || 'Originally from Thailand | Lives in Israel'}
                 </p>

                 {/* Flags */}
                 <div className="flex justify-center gap-4">
                   <div
                     className="rounded-full overflow-hidden"
                     style={{
                       width: 'clamp(40px, 5vw, 60px)',
                       height: 'clamp(40px, 5vw, 60px)',
                       border: '1px solid #000000'
                     }}
                   >
                     <img
                       src="https://flagcdn.com/w80/th.png"
                       alt="Thailand"
                       style={{
                         width: '100%',
                         height: '100%',
                         objectFit: 'cover'
                       }}
                     />
                   </div>
                   <div
                     className="rounded-full overflow-hidden"
                     style={{
                       width: 'clamp(40px, 5vw, 60px)',
                       height: 'clamp(40px, 5vw, 60px)',
                       border: '1px solid #000000'
                     }}
                   >
                     <img
                       src="https://flagcdn.com/w80/il.png"
                       alt="Israel"
                       style={{
                         width: '100%',
                         height: '100%',
                         objectFit: 'cover'
                       }}
                     />
                   </div>
                 </div>
               </div>

               <button
                 type="button"
                 className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
                 style={{
                   right: 'clamp(-40px, -5vw, -60px)'
                 }}
                 aria-label="Next testimonial"
               >
                 <img
                   src="/Images/2x/arrow_right@2x.png"
                   alt="Next"
                   style={{
                     width: 'clamp(30px, 4vw, 50px)',
                     height: 'auto'
                   }}
                 />
               </button>
             </div>
           </div>
         </div>
       </section>

       {/* Call to Action Button */}
       <section
         className="w-full flex justify-center"
         style={{
           padding: 'clamp(40px, 6vw, 80px) clamp(20px, 6vw, 80px)',
           background: '#ffffff'
         }}
       >
         <button
           className="uppercase font-semibold text-white rounded-full transition hover:opacity-90"
           style={{
             backgroundColor: '#67c9d6',
             color: '#000000',
             padding: 'clamp(16px, 2.5vw, 24px) clamp(48px, 8vw, 120px)',
             fontSize: 'clamp(18px, 2.5vw, 32px)',
             border: 'none',
             cursor: 'pointer',
             direction: isRTL ? 'rtl' : 'ltr',
             fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
           }}
         >
           {t.joinUsReadyToConnect || 'READY TO CONNECT?'}
         </button>
       </section>

       {/* Footer */}
       <div className="max-w-[1895px] mx-auto w-full">
         <MarketplaceFooter />
       </div>
     </div>
   );
 };

 export default JoinUs;
