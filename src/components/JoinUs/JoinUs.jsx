import React, { useState, useMemo, useEffect } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 768
  );
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

  useEffect(() => {
    const updateIsMobile = () => {
      const width = window.innerWidth;
      setViewportWidth(width);
      setIsMobile(width <= 768);
    };

    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  const constrainedWidth = Math.min(Math.max(viewportWidth, 290), 768);
  const interpolationProgress =
    constrainedWidth <= 290
      ? 0
      : constrainedWidth >= 768
      ? 1
      : (constrainedWidth - 290) / (768 - 290);
  const lerp = (min, max) => min + (max - min) * interpolationProgress;
  const testimonialBodyFontSizeMobile = `${lerp(14, 40)}px`;
  const testimonialNameFontSizeMobile = `${lerp(16, 36)}px`;
  const testimonialOriginFontSizeMobile = `${lerp(9, 20)}px`;
  const testimonialFlagSizeMobile = `${lerp(44, 80)}px`;
  const testimonialArrowSizeMobile = `${lerp(17, 40)}px`;

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
               paddingBottom: isMobile ? 'clamp(240px, calc(40px + 8vw + 200px), 280px)' : '0', // +200px для мобильной версии
               paddingLeft: 'clamp(20px, 6vw, 80px)',
               paddingRight: 'clamp(20px, 6vw, 80px)',
               minHeight: isMobile ? 'auto' : 'clamp(400px, 50vw, 800px)',
               height: isMobile ? 'auto' : 'clamp(477px, 62.03vw, 1152px)' // При ширине 769px высота = 477px (477/769 = 62.03vw)
             }}
           >
             <div className="max-w-[1895px] mx-auto w-full relative">
               {isMobile ? (
                 /* Мобильная версия: колонка с выравниванием по левому краю */
                 <div className="flex flex-col items-start gap-6 relative z-10">
                   {/* JOIN US */}
                   <h1
                     className="font-bold uppercase text-white self-center"
                     style={{
                       fontSize: 'clamp(28px, 10.42vw, 80px)', // При ширине 768px = 80px (максимальное значение)
                       lineHeight: '1.1',
                       textAlign: 'center',
                       direction: isRTL ? 'rtl' : 'ltr',
                       fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                     }}
                   >
                     {t.joinUsTitle || 'JOIN US'}
                   </h1>

                   {/* Картинка */}
                   <div
                     style={{
                       width: '100%',
                       maxWidth: 'clamp(300px, 85vw, 600px)',
                       margin: '0 auto'
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

                   {/* 2453 MILES NEVER FELT SO CLOSE */}
                   <h2
                     className="font-bold uppercase text-white"
                     style={{
                       fontSize: 'clamp(28px, 9.11vw, 70px)', // При ширине 768px = 70px (максимальное значение)
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

                   {/* Stay truly connected... */}
                   <p
                     className="text-white"
                     style={{
                       fontSize: 'clamp(16px, 5.99vw, 46px)', // При ширине 768px = 46px (максимальное значение)
                       textAlign: isRTL ? 'right' : 'left',
                       lineHeight: '1.5',
                       direction: isRTL ? 'rtl' : 'ltr',
                       fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                     }}
                   >
                     <span style={{ display: 'block' }}>
                       Stay truly connected with your loved ones,
                     </span>
                     <span style={{ display: 'block' }}>
                       as if you were right there.
                     </span>
                   </p>
                 </div>
               ) : (
                 /* Десктоп версия: оригинальная структура */
                 <>
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

                   {/* Flex контейнер: row для десктопа */}
                   <div 
                     className="flex flex-row items-start gap-8 lg:gap-16 relative z-10" 
                     style={{ minHeight: 0 }}
                   >
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
                     <div 
                       className="flex-1"
                       style={{
                         position: 'relative',
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
                 </>
               )}
             </div>
      </section>
         </div>
       </div>

       {/* Features Section */}
       <section
         className="w-full"
         style={{
          paddingTop: isMobile ? 0 : 'clamp(0px, 8vw, 80px)',
          marginTop: isMobile ? '-200px' : 0, // На мобильной версии поднимаем выше, чтобы выйти на первую секцию
          paddingBottom: isMobile ? '60px' : 0,
          paddingLeft: 'clamp(20px, 6vw, 80px)',
          paddingRight: 'clamp(20px, 6vw, 80px)',
           background: 'transparent',
           position: isMobile ? 'relative' : 'static',
           zIndex: isMobile ? 3 : 'auto'
         }}
       >
         <div className="max-w-[1895px] mx-auto w-full">
          <div className={isMobile ? "flex flex-col gap-12 items-center" : "grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start"}>
             {isMobile ? (
               <>
                 {/* Мобильная версия: сначала блок с услугами - по центру */}
                 <div
                   style={{
                     background: '#f0f0f0',
                     padding: 'clamp(13px, calc(-19px + 4.17vw), 60px)',
                     border: '1px solid #e0e0e0',
                     width: '100%',
                     maxWidth: '100%',
                     borderRadius: '28px',
                     boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.08), 0 14px 28px rgba(0, 0, 0, 0.14)',
                     margin: '0 auto',
                     marginTop: 'clamp(-40px, -5vw, -20px)', // Поднимаем блок выше
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
                          width: 'clamp(80px, 15.63vw, 120px)', // При ширине 768px = 120px (максимальное значение)
                          height: 'clamp(80px, 15.63vw, 120px)', // При ширине 768px = 120px (максимальное значение)
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
                          fontSize: 'clamp(15px, 4.43vw, 34px)', // При ширине 768px = 34px (максимальное значение)
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
                          width: 'clamp(80px, 15.63vw, 120px)', // При ширине 768px = 120px (максимальное значение)
                          height: 'clamp(80px, 15.63vw, 120px)', // При ширине 768px = 120px (максимальное значение)
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
                          fontSize: 'clamp(15px, 4.43vw, 34px)', // При ширине 768px = 34px (максимальное значение)
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
                          width: 'clamp(80px, 15.63vw, 120px)', // При ширине 768px = 120px (максимальное значение)
                          height: 'clamp(80px, 15.63vw, 120px)', // При ширине 768px = 120px (максимальное значение)
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
                          fontSize: 'clamp(15px, 4.43vw, 34px)', // При ширине 768px = 34px (максимальное значение)
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
                          width: 'clamp(80px, 15.63vw, 120px)', // При ширине 768px = 120px (максимальное значение)
                          height: 'clamp(80px, 15.63vw, 120px)', // При ширине 768px = 120px (максимальное значение)
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
                          fontSize: 'clamp(15px, 4.43vw, 34px)', // При ширине 768px = 34px (максимальное значение)
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
                          width: 'clamp(80px, 15.63vw, 120px)', // При ширине 768px = 120px (максимальное значение)
                          height: 'clamp(80px, 15.63vw, 120px)', // При ширине 768px = 120px (максимальное значение)
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
                          fontSize: 'clamp(15px, 4.43vw, 34px)', // При ширине 768px = 34px (максимальное значение)
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
                          fontSize: 'clamp(21px, 5.73vw, 44px)', // При ширине 768px = 44px (максимальное значение)
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

                 {/* Мобильная версия: потом текст - по центру */}
                 <div
                   style={{
                     textAlign: 'center'
                   }}
                 >
                   <h2
                     className="font-bold uppercase text-[#005490]"
                     style={{
                       fontSize: 'clamp(28px, 7.16vw, 55px)', // При ширине 768px = 55px (максимальное значение)
                       marginBottom: 'clamp(20px, 4vw, 50px)',
                       lineHeight: '1.2',
                       textAlign: 'center',
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
                      fontSize: 'clamp(28px, 7.16vw, 55px)', // При ширине 768px = 55px (максимальное значение)
                       marginBottom: 'clamp(30px, 5vw, 60px)',
                       lineHeight: '1.2',
                       textAlign: 'center',
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
                   {/* Мобильная версия: кнопка - по центру внизу */}
                   <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                     <button
                       className="uppercase font-semibold text-white rounded-full transition hover:opacity-90"
                       style={{
                         backgroundColor: '#67c9d6',
                        color: '#03355c',
                        padding: '0 clamp(32px, 5vw, 80px)',
                        fontSize: 'clamp(16px, 5.21vw, 40px)', // При ширине 768px = 40px (максимальное значение)
                        minWidth: 'clamp(280px, calc(-7px + 37.3vw), 700px)', // При ширине 769px = 280px, при 1895px = 700px
                        height: 'clamp(50px, 11.72vw, 90px)', // При ширине 768px = 90px (максимальное значение)
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
                 </div>
               </>
             ) : (
               <>
                 {/* Десктоп версия: сначала текст и кнопка (левая колонка) */}
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

                 {/* Десктоп версия: потом блок с услугами (правая колонка) */}
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
               </>
             )}
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
                  fontSize: isMobile ? 'clamp(24px, 8.2vw, 63px)' : 'clamp(24px, calc(3px + 2.75vw), 55px)', // При ширине 768px = 63px для мобильной версии
                    direction: isRTL ? 'rtl' : 'ltr',
                    fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
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
                            height: isMobile ? 'clamp(46px, 11.72vw, 90px)' : 'clamp(46px, calc(23px + 3vw), 96px)', // При ширине 768px = 90px для мобильной версии
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
                fontSize: isMobile ? 'clamp(18px, 4.95vw, 38px)' : 'clamp(18px, 2.34vw, 44px)', // При ширине 768px = 38px для мобильной версии
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
              {isMobile ? (
                /* Мобильная версия: все инпуты в одной колонке в правильном порядке */
                <div className="flex flex-col" style={{ gap: 'clamp(1rem, calc(-11px + 3.55vw), 3.5rem)' }}>
                  {/* First Name */}
                  <div
                    className="flex gap-4"
                  style={{ 
                    flexDirection: isMobile ? 'column' : (isRTL ? 'row-reverse' : 'row'), 
                    alignItems: isMobile ? 'stretch' : 'center',
                    justifyContent: isMobile ? 'flex-start' : 'space-between'
                  }}
                  >
                    <label
                      className="font-semibold text-[#03355c]"
                      style={{
                        fontSize: isMobile ? 'clamp(13px, calc(-13px + 6.38vw), 36px)' : 'clamp(13px, 1.7vw, 32px)', // При ширине 768px = 36px для мобильной версии
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: isMobile ? '100%' : '200px',
                        marginBottom: isMobile ? '0.5rem' : 0,
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
                        fontSize: isMobile ? 'clamp(13px, calc(-13px + 6.9vw), 40px)' : 'clamp(13px, 1.7vw, 32px)', // При ширине 768px = 40px для мобильной версии
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: isMobile ? '100%' : 'clamp(165px, 21.45vw, 420px)',
                        flex: isMobile ? 'none' : '0 0 clamp(165px, 21.45vw, 420px)',
                      paddingTop: 'clamp(0.25rem, 0.8vw, 0.75rem)',
                      paddingBottom: 'clamp(0.25rem, 0.8vw, 0.75rem)'
                      }}
                    />
                  </div>

                  {/* Last Name - для мобильной версии идет вторым */}
                  <div
                    className="flex gap-4"
                  style={{ 
                    flexDirection: isMobile ? 'column' : (isRTL ? 'row-reverse' : 'row'), 
                    alignItems: isMobile ? 'stretch' : 'center',
                    justifyContent: isMobile ? 'flex-start' : 'space-between'
                  }}
                  >
                    <label
                      className="font-semibold text-[#03355c]"
                      style={{
                        fontSize: isMobile ? 'clamp(13px, calc(-13px + 6.38vw), 36px)' : 'clamp(13px, 1.7vw, 32px)', // При ширине 768px = 36px для мобильной версии
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: isMobile ? '100%' : '200px',
                        marginBottom: isMobile ? '0.5rem' : 0,
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
                        fontSize: isMobile ? 'clamp(13px, calc(-13px + 6.9vw), 40px)' : 'clamp(13px, 1.7vw, 32px)', // При ширине 768px = 40px для мобильной версии
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: isMobile ? '100%' : 'clamp(165px, 21.45vw, 420px)',
                        flex: isMobile ? 'none' : '0 0 clamp(165px, 21.45vw, 420px)',
                        paddingTop: 'clamp(0.25rem, 0.8vw, 0.75rem)',
                        paddingBottom: 'clamp(0.25rem, 0.8vw, 0.75rem)'
                      }}
                    />
                  </div>

                  {/* Employee Name - для мобильной версии идет третьим */}
                  <div
                    className="flex gap-4"
                  style={{ 
                    flexDirection: isMobile ? 'column' : (isRTL ? 'row-reverse' : 'row'), 
                    alignItems: isMobile ? 'stretch' : 'center',
                    justifyContent: isMobile ? 'flex-start' : 'space-between'
                  }}
                  >
                    <label
                      className="font-semibold text-[#03355c]"
                      style={{
                        fontSize: isMobile ? 'clamp(13px, calc(-13px + 6.38vw), 36px)' : 'clamp(13px, 1.7vw, 32px)', // При ширине 768px = 36px для мобильной версии
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: isMobile ? '100%' : '200px',
                        marginBottom: isMobile ? '0.5rem' : 0,
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
                        fontSize: isMobile ? 'clamp(13px, calc(-13px + 6.9vw), 40px)' : 'clamp(13px, 1.7vw, 32px)', // При ширине 768px = 40px для мобильной версии
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: isMobile ? '100%' : 'clamp(165px, 21.45vw, 420px)',
                        flex: isMobile ? 'none' : '0 0 clamp(165px, 21.45vw, 420px)',
                      paddingTop: 'clamp(0.25rem, 0.8vw, 0.75rem)',
                      paddingBottom: 'clamp(0.25rem, 0.8vw, 0.75rem)'
                      }}
                    />
                  </div>

                  {/* Passport Number - для мобильной версии идет четвертым */}
                  <div
                    className="flex gap-4"
                  style={{ 
                    flexDirection: isMobile ? 'column' : (isRTL ? 'row-reverse' : 'row'), 
                    alignItems: isMobile ? 'stretch' : 'center',
                    justifyContent: isMobile ? 'flex-start' : 'space-between'
                  }}
                  >
                    <label
                      className="font-semibold text-[#03355c]"
                      style={{
                        fontSize: isMobile ? 'clamp(13px, calc(-13px + 6.38vw), 36px)' : 'clamp(13px, 1.7vw, 32px)', // При ширине 768px = 36px для мобильной версии
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: isMobile ? '100%' : '200px',
                        marginBottom: isMobile ? '0.5rem' : 0,
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
                        fontSize: isMobile ? 'clamp(13px, calc(-13px + 6.9vw), 40px)' : 'clamp(13px, 1.7vw, 32px)', // При ширине 768px = 40px для мобильной версии
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: isMobile ? '100%' : 'clamp(165px, 21.45vw, 420px)',
                        flex: isMobile ? 'none' : '0 0 clamp(165px, 21.45vw, 420px)',
                        paddingTop: 'clamp(0.25rem, 0.8vw, 0.75rem)',
                        paddingBottom: 'clamp(0.25rem, 0.8vw, 0.75rem)'
                      }}
                    />
                  </div>

                  {/* Phone - для мобильной версии идет пятым */}
                  <div
                    className="flex gap-4"
                  style={{ 
                    flexDirection: isMobile ? 'column' : (isRTL ? 'row-reverse' : 'row'), 
                    alignItems: isMobile ? 'stretch' : 'center',
                    justifyContent: isMobile ? 'flex-start' : 'space-between'
                  }}
                  >
                    <label
                      className="font-semibold text-[#03355c]"
                      style={{
                        fontSize: isMobile ? 'clamp(13px, calc(-13px + 6.38vw), 36px)' : 'clamp(13px, 1.7vw, 32px)', // При ширине 768px = 36px для мобильной версии
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: isMobile ? '100%' : '200px',
                        marginBottom: isMobile ? '0.5rem' : 0,
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
                        fontSize: isMobile ? 'clamp(13px, calc(-13px + 6.9vw), 40px)' : 'clamp(13px, 1.7vw, 32px)', // При ширине 768px = 40px для мобильной версии
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: isMobile ? '100%' : 'clamp(165px, 21.45vw, 420px)',
                        flex: isMobile ? 'none' : '0 0 clamp(165px, 21.45vw, 420px)',
                      paddingTop: 'clamp(0.25rem, 0.8vw, 0.75rem)',
                      paddingBottom: 'clamp(0.25rem, 0.8vw, 0.75rem)'
                      }}
                    />
                  </div>

                  {/* Email - для мобильной версии идет шестым */}
                  <div
                    className="flex gap-4"
                  style={{ 
                    flexDirection: isMobile ? 'column' : (isRTL ? 'row-reverse' : 'row'), 
                    alignItems: isMobile ? 'stretch' : 'center',
                    justifyContent: isMobile ? 'flex-start' : 'space-between'
                  }}
                  >
                    <label
                      className="font-semibold text-[#03355c]"
                      style={{
                        fontSize: isMobile ? 'clamp(13px, calc(-13px + 6.38vw), 36px)' : 'clamp(13px, 1.7vw, 32px)', // При ширине 768px = 36px для мобильной версии
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: isMobile ? '100%' : '200px',
                        marginBottom: isMobile ? '0.5rem' : 0,
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
                      fontSize: isMobile ? 'clamp(13px, calc(-13px + 8.2vw), 50px)' : 'clamp(13px, 1.7vw, 32px)', // При ширине 768px = 50px для мобильной версии
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: isMobile ? '100%' : 'clamp(165px, 21.45vw, 420px)',
                        flex: isMobile ? 'none' : '0 0 clamp(165px, 21.45vw, 420px)',
                        paddingTop: 'clamp(0.25rem, 0.8vw, 0.75rem)',
                        paddingBottom: 'clamp(0.25rem, 0.8vw, 0.75rem)'
                      }}
                    />
                  </div>

                  {/* Origin Country - для мобильной версии идет седьмым */}
                  <div
                    className="flex gap-4"
                  style={{ 
                    flexDirection: isMobile ? 'column' : (isRTL ? 'row-reverse' : 'row'), 
                    alignItems: isMobile ? 'stretch' : 'center',
                    justifyContent: isMobile ? 'flex-start' : 'space-between'
                  }}
                  >
                    <label
                      className="font-semibold text-[#03355c]"
                      style={{
                        fontSize: isMobile ? 'clamp(13px, calc(-13px + 6.38vw), 36px)' : 'clamp(13px, 1.7vw, 32px)', // При ширине 768px = 36px для мобильной версии
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                        width: isMobile ? '100%' : '200px',
                        marginBottom: isMobile ? '0.5rem' : 0,
                        textAlign: isRTL ? 'right' : 'left',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {t.joinUsOriginCountry || 'Origin country'}
                    </label>
                  <div
                    className="relative flex-1"
                    style={{
                      width: isMobile ? '100%' : '100%',
                      minWidth: isMobile ? 'auto' : '165px',
                      maxWidth: isMobile ? '100%' : '420px',
                      flex: isMobile ? 'none' : '1 1 165px'
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setIsCountryOpen(prev => !prev)}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005490] flex items-center justify-between bg-white"
                      style={{
                        fontSize: isMobile ? 'clamp(13px, calc(-13px + 6.9vw), 40px)' : 'clamp(13px, 1.7vw, 32px)', // При ширине 768px = 40px для мобильной версии
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

                  {/* Submit Button - для мобильной версии идет последним */}
                  <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <button
                      type="submit"
                      className="uppercase font-bold text-white rounded-full transition hover:opacity-90"
                      style={{
                        backgroundColor: '#005490',
                        padding: 'clamp(16px, 2.5vw, 24px)',
                        fontSize: 'clamp(13px, calc(-13px + 6.13vw), 34px)', // При ширине 768px = 34px для мобильной версии, минимум 13px
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
              ) : (
                /* Десктоп версия: две колонки */
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                  style={{ gap: 'clamp(1rem, calc(1rem + (100vw - 769px) * 0.06), 5rem)' }}
                >
                  {/* Left column */}
                  <div className="flex flex-col" style={{ paddingLeft: 0, paddingRight: 0, gap: 'clamp(1rem, calc(-11px + 3.55vw), 3.5rem)' }}> {/* При ширине 769px = 1rem, при 1895px = 3.5rem */}
                    {/* First Name */}
                    <div
                      className="flex gap-4"
                    style={{ 
                      flexDirection: isRTL ? 'row-reverse' : 'row', 
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
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
                      className="flex gap-4"
                    style={{ 
                      flexDirection: isRTL ? 'row-reverse' : 'row', 
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
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
                      className="flex gap-4"
                    style={{ 
                      flexDirection: isRTL ? 'row-reverse' : 'row', 
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
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
                      className="flex gap-4"
                    style={{ 
                      flexDirection: isRTL ? 'row-reverse' : 'row', 
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
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
                      className="flex gap-4"
                    style={{ 
                      flexDirection: isRTL ? 'row-reverse' : 'row', 
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
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
                      className="flex gap-4"
                    style={{ 
                      flexDirection: isRTL ? 'row-reverse' : 'row', 
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
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
                      className="flex gap-4"
                    style={{ 
                      flexDirection: isRTL ? 'row-reverse' : 'row', 
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
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
              )}
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
                fontSize: isMobile ? 'clamp(20px, calc(-20px + 8.85vw), 48px)' : 'clamp(20px, calc(4px + 2.13vw), 44px)', // При ширине 768px = 48px для мобильной версии, при 769px = 20px, при 1895px = 44px для десктоп
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
               paddingInline: isMobile
                 ? 'clamp(20px, 9vw, 80px)'
                 : 'clamp(20px, 6vw, 80px)'
             }}
           >
            <p
              className="text-center font-bold"
              style={{
                fontSize: isMobile ? testimonialBodyFontSizeMobile : '40px',
                color: '#005392'
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
                 width: isMobile ? testimonialArrowSizeMobile : '40px',
                 height: isMobile ? testimonialArrowSizeMobile : '40px',
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
                   width: isMobile ? testimonialArrowSizeMobile : '40px',
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
                 paddingInline: isMobile
                   ? 'clamp(20px, 9vw, 80px)'
                   : 'clamp(20px, 6vw, 80px)'
               }}
             >
               <h4
                 className="text-center"
                 style={{
                   fontSize: isMobile ? testimonialNameFontSizeMobile : '36px',
                   color: '#04365d',
                   letterSpacing: '0.1em'
                 }}
               >
                 {currentTestimonial.name}
               </h4>
               <p
                 className="text-center"
                 style={{
                   fontSize: isMobile ? testimonialOriginFontSizeMobile : '20px',
                   color: '#04365d',
                   letterSpacing: '0.03em'
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
                       width: isMobile ? testimonialFlagSizeMobile : '80px',
                       height: isMobile ? testimonialFlagSizeMobile : '80px',
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
                 width: isMobile ? testimonialArrowSizeMobile : '40px',
                 height: isMobile ? testimonialArrowSizeMobile : '40px',
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
                   width: isMobile ? testimonialArrowSizeMobile : '40px',
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
