import React, { useState, useMemo } from 'react';
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
import photoAir from './Assets/photoAir.jpeg';
import qDarkBlue from './Assets/q_dark_blue@2x.png';

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
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonialSlides = useMemo(() => {
    const countries = t.countries || {};

    return [
      {
        body: t.joinUsTestimonialText || "Staying connected with my family back home means everything. This mobile plan made it easy and affordable to call and video chat without worrying about the cost. It's been a lifeline.",
        name: t.joinUsTestimonialName || 'Nok Supansa',
        origin: t.joinUsTestimonialOrigin || 'Originally from Thailand | Lives in Israel',
        flags: [
          { code: 'th', label: countries.thailand || 'Thailand' },
          { code: 'il', label: countries.israel || 'Israel' }
        ]
      },
      {
        body: t.joinUsTestimonialText2 || t.joinUsTestimonialText || "Staying connected with my family back home means everything. This mobile plan made it easy and affordable to call and video chat without worrying about the cost. It's been a lifeline.",
        name: t.joinUsTestimonialName2 || t.joinUsTestimonialName || 'Nok Supansa',
        origin: t.joinUsTestimonialOrigin2 || t.joinUsTestimonialOrigin || 'Originally from Thailand | Lives in Israel',
        flags: [
          { code: 'il', label: countries.israel || 'Israel' },
          { code: 'th', label: countries.thailand || 'Thailand' }
        ]
      }
    ];
  }, [t]);

  const currentTestimonial =
    testimonialSlides[activeTestimonial] ?? testimonialSlides[0];

  const goToPreviousTestimonial = () => {
    setActiveTestimonial(prev => {
      const nextIndex = (prev - 1 + testimonialSlides.length) % testimonialSlides.length;
      return nextIndex;
    });
  };

  const goToNextTestimonial = () => {
    setActiveTestimonial(prev => {
      const nextIndex = (prev + 1) % testimonialSlides.length;
      return nextIndex;
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const countryFlagMap = {
    Thailand: 'th',
    Philippines: 'ph',
    India: 'in',
    Nepal: 'np',
    Other: 'un' // generic flag for "Other"
  };

  const getFlagUrl = (country) => {
    const code = countryFlagMap[country];
    return code ? `https://flagcdn.com/w40/${code}.png` : null;
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
          paddingBottom: 0,
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
                  fontSize: 'clamp(16px, calc(5px + 1.42vw), 32px)', // При ширине 769px = 16px, при 1895px = 32px
                  minWidth: 'clamp(280px, calc(-7px + 37.3vw), 700px)', // При ширине 769px = 280px, при 1895px = 700px
                  height: 'clamp(34px, calc(-8px + 5.42vw), 95px)', // При ширине 769px = 34px, при 1895px = 95px
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
                marginRight: '0',
                position: 'relative',
                zIndex: 2
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

      {/* Photo Section */}
      <section
        className="w-full"
        style={{
          padding: 0,
          background: '#ffffff',
          marginTop: 'clamp(-70px, -3.7vw, 0px)',
          border: 'none'
        }}
      >
        <div className="max-w-[1895px] mx-auto w-full">
          <img
            src={photoAir}
            alt="Travel"
            style={{
              width: '100%',
              height: 'auto',
              border: 'none',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>
      </section>

       {/* Registration Form Section */}
       <section
         className="w-full"
         style={{
          paddingTop: 0,
          paddingBottom: 'clamp(60px, 10vw, 120px)',
          paddingLeft: 'clamp(40px, 4vw, 80px)',
          paddingRight: 'clamp(40px, 4vw, 80px)',
          background: 'transparent',
          marginTop: 'clamp(-100px, -5vw, 0px)',
          position: 'relative',
          zIndex: 3
         }}
       >
        <div
          className="max-w-[1895px] mx-auto w-full"
          style={{
            background: '#67c9d6',
            paddingTop: 'clamp(25px, 6vw, 65px)',
            paddingBottom: 'clamp(40px, 6vw, 80px)',
            paddingLeft: 'clamp(10px, calc(10px + (100vw - 769px) * 0.062), 80px)',
            paddingRight: 'clamp(10px, calc(10px + (100vw - 769px) * 0.062), 80px)',
            borderRadius: '25px'
          }}
        >
          <div className="w-full mx-auto">
              <div className="flex items-center gap-4 mb-6" style={{ justifyContent: 'center' }}>
                <h2
                  className="font-bold uppercase text-[#03355c]"
                  style={{
                  fontSize: 'clamp(24px, calc(3px + 2.75vw), 55px)',
                    direction: isRTL ? 'rtl' : 'ltr',
                    fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    flexWrap: 'wrap'
                  }}
                >
                  {(() => {
                    const text = t.joinUsFamilyTitle || 'JOIN THE Q MOBILE FAMILY';
                    const idx = text.indexOf('Q');
                    if (idx === -1) return text;
                    const before = text.slice(0, idx);
                    const after = text.slice(idx + 1);
                    return (
                      <>
                        <span>{before}</span>
                        <img
                          src={qDarkBlue}
                          alt="Q"
                          style={{
                            height: 'clamp(46px, calc(23px + 3vw), 96px)',
                            width: 'auto',
                            display: 'inline-block'
                          }}
                        />
                        <span>{after}</span>
                      </>
                    );
                  })()}
                </h2>
              </div>

             <p
              className="mb-8"
               style={{
                fontSize: 'clamp(18px, 2.34vw, 44px)',
                width: '100%',
                textAlign: 'center',
                color: '#03355c',
                direction: isRTL ? 'rtl' : 'ltr',
                 fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
               }}
             >
               {t.joinUsFormInstructions || 'Please submit your details, and one of our representatives will contact you in your native language.'}
             </p>

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl"
              style={{ padding: 0 }}
            >
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
                style={{ gap: 'clamp(1rem, calc(1rem + (100vw - 769px) * 0.06), 5rem)' }}
              >
                {/* Left column */}
                <div className="flex flex-col" style={{ paddingLeft: 0, paddingRight: 0, gap: 'clamp(1rem, calc(-11px + 3.55vw), 3.5rem)' }}> {/* При ширине 769px = 1rem, при 1895px = 3.5rem */}
                  {/* First Name */}
                  <div
                    className="flex items-center gap-4"
                  style={{ flexDirection: isRTL ? 'row-reverse' : 'row', justifyContent: 'space-between' }}
                  >
                    <label
                      className="font-semibold text-[#03355c]"
                      style={{
                        fontSize: 'clamp(13px, 1.7vw, 32px)',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: '200px',
                        marginBottom: 0,
                        textAlign: isRTL ? 'right' : 'left',
                        whiteSpace: 'nowrap'
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
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005490]"
                      style={{
                        fontSize: 'clamp(13px, 1.7vw, 32px)',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: 'clamp(165px, 21.45vw, 420px)',
                        flex: '0 0 clamp(165px, 21.45vw, 420px)',
                      paddingTop: 'clamp(0.25rem, 0.8vw, 0.75rem)',
                      paddingBottom: 'clamp(0.25rem, 0.8vw, 0.75rem)'
                      }}
                    />
                  </div>

                  {/* Employee Name */}
                  <div
                    className="flex items-center gap-4"
                  style={{ flexDirection: isRTL ? 'row-reverse' : 'row', justifyContent: 'space-between' }}
                  >
                    <label
                      className="font-semibold text-[#03355c]"
                      style={{
                        fontSize: 'clamp(13px, 1.7vw, 32px)',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: '200px',
                        marginBottom: 0,
                        textAlign: isRTL ? 'right' : 'left',
                        whiteSpace: 'nowrap'
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
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005490]"
                      style={{
                        fontSize: 'clamp(13px, 1.7vw, 32px)',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: 'clamp(165px, 21.45vw, 420px)',
                        flex: '0 0 clamp(165px, 21.45vw, 420px)',
                      paddingTop: 'clamp(0.25rem, 0.8vw, 0.75rem)',
                      paddingBottom: 'clamp(0.25rem, 0.8vw, 0.75rem)'
                      }}
                    />
                  </div>

                  {/* Phone */}
                  <div
                    className="flex items-center gap-4"
                  style={{ flexDirection: isRTL ? 'row-reverse' : 'row', justifyContent: 'space-between' }}
                  >
                    <label
                      className="font-semibold text-[#03355c]"
                      style={{
                        fontSize: 'clamp(13px, 1.7vw, 32px)',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: '200px',
                        marginBottom: 0,
                        textAlign: isRTL ? 'right' : 'left',
                        whiteSpace: 'nowrap'
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
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005490]"
                      style={{
                        fontSize: 'clamp(13px, 1.7vw, 32px)',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: 'clamp(165px, 21.45vw, 420px)',
                        flex: '0 0 clamp(165px, 21.45vw, 420px)',
                      paddingTop: 'clamp(0.25rem, 0.8vw, 0.75rem)',
                      paddingBottom: 'clamp(0.25rem, 0.8vw, 0.75rem)'
                      }}
                    />
                  </div>

                  {/* Origin Country */}
                  <div
                    className="flex items-center gap-4"
                  style={{ flexDirection: isRTL ? 'row-reverse' : 'row', justifyContent: 'space-between' }}
                  >
                    <label
                      className="font-semibold text-[#03355c]"
                      style={{
                        fontSize: 'clamp(13px, 1.7vw, 32px)',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: '200px',
                        marginBottom: 0,
                        textAlign: isRTL ? 'right' : 'left',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {t.joinUsOriginCountry || 'Origin country'}
                    </label>
                  <div
                    className="relative flex-1"
                    style={{
                      width: '100%',
                      minWidth: '165px',
                      maxWidth: '420px',
                      flex: '1 1 165px'
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setIsCountryOpen(prev => !prev)}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005490] flex items-center justify-between bg-white"
                      style={{
                        fontSize: 'clamp(13px, 1.7vw, 32px)',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        background: '#ffffff',
                        width: '100%',
                        paddingTop: 'clamp(0.25rem, 0.8vw, 0.75rem)',
                        paddingBottom: 'clamp(0.25rem, 0.8vw, 0.75rem)'
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {getFlagUrl(formData.originCountry) && (
                          <img
                            src={getFlagUrl(formData.originCountry)}
                            alt={formData.originCountry}
                            style={{ width: 'clamp(26px, 5vw, 36px)', height: 'clamp(26px, 5vw, 36px)', objectFit: 'cover', borderRadius: '50%' }}
                          />
                        )}
                        {formData.originCountry}
                      </span>
                      <span style={{ fontSize: '20px' }}>▾</span>
                    </button>

                    {isCountryOpen && (
                      <div
                        className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10"
                        style={{ maxHeight: '240px', overflowY: 'auto' }}
                      >
                        {['Thailand', 'Philippines', 'India', 'Nepal', 'Other'].map((country) => (
                          <button
                            key={country}
                            type="button"
                            onClick={() => {
                              setFormData(prev => ({ ...prev, originCountry: country }));
                              setIsCountryOpen(false);
                            }}
                      className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-3 bg-white"
                            style={{
                              fontSize: 'clamp(13px, 1.7vw, 24px)',
                              direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        paddingTop: 'clamp(0.25rem, 0.8vw, 0.75rem)',
                        paddingBottom: 'clamp(0.25rem, 0.8vw, 0.75rem)'
                            }}
                          >
                            {getFlagUrl(country) && (
                              <img
                                src={getFlagUrl(country)}
                                alt={country}
                                style={{ width: 'clamp(22px, 4vw, 32px)', height: 'clamp(22px, 4vw, 32px)', objectFit: 'cover', borderRadius: '50%' }}
                              />
                            )}
                            {country}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  </div>
                </div>

                {/* Right column */}
                <div className="flex flex-col" style={{ paddingLeft: 0, paddingRight: 0, gap: 'clamp(1rem, calc(-11px + 3.55vw), 3.5rem)' }}> {/* При ширине 769px = 1rem, при 1895px = 3.5rem */}
                  {/* Last Name */}
                  <div
                    className="flex items-center gap-4"
                  style={{ flexDirection: isRTL ? 'row-reverse' : 'row', justifyContent: 'space-between' }}
                  >
                    <label
                      className="font-semibold text-[#03355c]"
                      style={{
                        fontSize: 'clamp(13px, 1.7vw, 32px)',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: '200px',
                        marginBottom: 0,
                        textAlign: isRTL ? 'right' : 'left',
                        whiteSpace: 'nowrap'
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
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005490]"
                      style={{
                        fontSize: 'clamp(13px, 1.7vw, 32px)',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: 'clamp(165px, 21.45vw, 420px)',
                        flex: '0 0 clamp(165px, 21.45vw, 420px)',
                        paddingTop: 'clamp(0.25rem, 0.8vw, 0.75rem)',
                        paddingBottom: 'clamp(0.25rem, 0.8vw, 0.75rem)'
                      }}
                    />
                  </div>

                  {/* Passport Number */}
                  <div
                    className="flex items-center gap-4"
                  style={{ flexDirection: isRTL ? 'row-reverse' : 'row', justifyContent: 'space-between' }}
                  >
                    <label
                      className="font-semibold text-[#03355c]"
                      style={{
                        fontSize: 'clamp(13px, 1.7vw, 32px)',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: '200px',
                        marginBottom: 0,
                        textAlign: isRTL ? 'right' : 'left',
                        whiteSpace: 'nowrap'
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
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005490]"
                      style={{
                        fontSize: 'clamp(13px, 1.7vw, 32px)',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: 'clamp(165px, 21.45vw, 420px)',
                        flex: '0 0 clamp(165px, 21.45vw, 420px)',
                        paddingTop: 'clamp(0.25rem, 0.8vw, 0.75rem)',
                        paddingBottom: 'clamp(0.25rem, 0.8vw, 0.75rem)'
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div
                    className="flex items-center gap-4"
                  style={{ flexDirection: isRTL ? 'row-reverse' : 'row', justifyContent: 'space-between' }}
                  >
                    <label
                      className="font-semibold text-[#03355c]"
                      style={{
                        fontSize: 'clamp(13px, 1.7vw, 32px)',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: '200px',
                        marginBottom: 0,
                        textAlign: isRTL ? 'right' : 'left',
                        whiteSpace: 'nowrap'
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
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005490]"
                      style={{
                      fontSize: 'clamp(13px, 1.7vw, 32px)',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: 'clamp(165px, 21.45vw, 420px)',
                        flex: '0 0 clamp(165px, 21.45vw, 420px)',
                        paddingTop: 'clamp(0.25rem, 0.8vw, 0.75rem)',
                        paddingBottom: 'clamp(0.25rem, 0.8vw, 0.75rem)'
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <div style={{ display: 'flex', justifyContent: isRTL ? 'flex-start' : 'flex-end' }}>
                    <button
                      type="submit"
                      className="uppercase font-bold text-white rounded-full transition hover:opacity-90"
                      style={{
                        backgroundColor: '#005490',
                        padding: 'clamp(16px, 2.5vw, 24px)',
                        fontSize: 'clamp(16px, 2vw, 24px)',
                        border: 'none',
                        cursor: 'pointer',
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: '100%'
                      }}
                    >
                      {t.joinUsSubmitRegistration || 'SUBMIT REGISTRATION REQUEST'}
                    </button>
                  </div>
                </div>
              </div>
             </form>
           </div>
         </div>
       </section>

       {/* Testimonial Section */}
       <section
         className="relative overflow-hidden"
         style={{
           background: 'transparent',
           paddingTop: 0,
           paddingBottom: 'clamp(60px, 8vw, 120px)'
         }}
       >
         <div className="max-w-[1895px] mx-auto w-full">
           <div className="w-full mx-auto text-center mb-8">
             <h2
               className="font-bold uppercase"
               style={{
                 fontSize: 'clamp(20px, calc(4px + 2.13vw), 44px)', // При ширине 769px = 20px, при 1895px = 44px
                 color: '#03355c',
                 direction: isRTL ? 'rtl' : 'ltr',
                 fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
               }}
             >
               {t.joinUsTestimonialTitle || 'WE BRING HEARTS CLOSER, EVEN WHEN MILES APART'}
             </h2>
           </div>

           <div
             className="flex flex-col items-center mx-auto"
             style={{
               gap: '0.1rem',
               maxWidth: '1260px',
               width: '100%',
               paddingInline: 'clamp(20px, 6vw, 80px)'
             }}
           >
             <p
               className="text-center font-bold"
               style={{
                 fontSize: 'clamp(18px, 2.5vw, 40px)',
                 color: '#005392',
                 direction: isRTL ? 'rtl' : 'ltr',
                 fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
               }}
             >
               {currentTestimonial.body}
             </p>
           </div>

           <div
             className="relative w-full"
             style={{
               marginTop: '20px'
             }}
           >
             <button
               type="button"
               onClick={goToPreviousTestimonial}
               onKeyDown={event => {
                 if (event.key === 'Enter' || event.key === ' ') {
                   event.preventDefault();
                   goToPreviousTestimonial();
                 }
               }}
               aria-label={t.homeTestimonialPrevLabel || 'Previous testimonial'}
               style={{
                 position: 'absolute',
                 left: '30px',
                 top: '50%',
                 transform: 'translateY(-50%)',
                 width: 'clamp(17px, 2.11vw, 40px)',
                 height: 'clamp(17px, 2.11vw, 40px)',
                 padding: 0,
                 border: 'none',
                 background: 'transparent',
                 cursor: 'pointer',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center'
               }}
             >
               <img
                 src="/Images/2x/arrow_left@2x.png"
                 alt=""
                 style={{
                   width: 'clamp(17px, 2.11vw, 40px)',
                   height: 'auto'
                 }}
               />
             </button>
             <div
               className="flex flex-col items-center mx-auto"
               style={{
                 gap: '0.1rem',
                 maxWidth: '1260px',
                 width: '100%',
                 paddingInline: 'clamp(20px, 6vw, 80px)'
               }}
             >
               <h4
                 className="text-center"
                 style={{
                   fontSize: 'clamp(16px, 1.9vw, 36px)',
                   color: '#04365d',
                   letterSpacing: '0.1em',
                   direction: isRTL ? 'rtl' : 'ltr',
                   fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                 }}
               >
                 {currentTestimonial.name}
               </h4>
               <p
                 className="text-center"
                 style={{
                   fontSize: 'clamp(14px, 1.06vw, 20px)',
                   color: '#04365d',
                   letterSpacing: '0.03em',
                   direction: isRTL ? 'rtl' : 'ltr',
                   fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                 }}
               >
                 {currentTestimonial.origin}
               </p>
               <div
                 className="flex items-center justify-center"
                 style={{
                   gap: '1.75rem',
                   marginTop: '20px'
                 }}
               >
                 {currentTestimonial.flags.map(flag => (
                   <div
                     key={flag.code}
                     className="rounded-full overflow-hidden"
                     style={{
                       width: 'clamp(44px, 4.22vw, 80px)',
                       height: 'clamp(44px, 4.22vw, 80px)',
                       border: '0.5px solid #000000',
                       boxShadow: '0 8px 20px rgba(3, 53, 92, 0.15)'
                     }}
                   >
                     <img
                       src={`https://flagcdn.com/w80/${flag.code.toLowerCase()}.png`}
                       alt={flag.label}
                       style={{
                         width: '100%',
                         height: '100%',
                         objectFit: 'cover'
                       }}
                     />
                   </div>
                 ))}
               </div>
             </div>
             <button
               type="button"
               onClick={goToNextTestimonial}
               onKeyDown={event => {
                 if (event.key === 'Enter' || event.key === ' ') {
                   event.preventDefault();
                   goToNextTestimonial();
                 }
               }}
               aria-label={t.homeTestimonialNextLabel || 'Next testimonial'}
               style={{
                 position: 'absolute',
                 right: '30px',
                 top: '50%',
                 transform: 'translateY(-50%)',
                 width: 'clamp(17px, 2.11vw, 40px)',
                 height: 'clamp(17px, 2.11vw, 40px)',
                 padding: 0,
                 border: 'none',
                 background: 'transparent',
                 cursor: 'pointer',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center'
               }}
             >
               <img
                 src="/Images/2x/arrow_right@2x.png"
                 alt=""
                 style={{
                   width: 'clamp(17px, 2.11vw, 40px)',
                   height: 'auto'
                 }}
               />
             </button>
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
           className="uppercase font-semibold transition hover:opacity-90"
           style={{
             backgroundColor: '#67c9d6',
             color: '#03355c',
             padding: 'clamp(16px, 2.5vw, 24px) clamp(48px, 8vw, 120px)',
             fontSize: 'clamp(19px, calc(2px + 2.22vw), 44px)', // При ширине 769px = 19px, при 1895px = 44px
             minWidth: 'clamp(280px, calc(-10px + 37.74vw), 705px)', // При ширине 769px = 280px, при 1895px = 705px
             borderRadius: 'clamp(25px, 2.22vw, 50px)', // При ширине 769px = 25px, при 1895px = 50px
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
