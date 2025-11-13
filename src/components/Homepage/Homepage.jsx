import React, { useEffect, useMemo, useState } from 'react';
import HomepageHeader from './HomepageHeader';
import homepageDesktopHero from './HomePageHero.png';
import homepageMobileHero from './homePageMobilehero.png';
import homepageMobileBanner from './Assets/homepage_mobile_banner.png';
import { ReactComponent as QKeepingText } from './q_IS_keeping.svg';
import MarketplaceFooter from '../Marketplace/MarketplaceFooter';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
const productPresets = [
  { id: 1, pricePerUnit: 320, quantity: 10, total: 3200, image: null },
  { id: 2, pricePerUnit: 320, quantity: 10, total: 3200, image: null },
  { id: 3, pricePerUnit: 320, quantity: 10, total: 3200, image: null },
  { id: 4, pricePerUnit: 420, quantity: 12, total: 5040, image: null }
];

const Homepage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 768
  );
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { language, isRTL } = useLanguage();
  const t = translations[language];

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
  const mobileWelcomeFontSize = `${lerp(21, 46)}px`;

  const testimonialSlides = useMemo(() => {
    const countries = t.countries || {};

    return [
      {
        body: t.homeTestimonialBody,
        name: t.homeTestimonialName,
        origin: t.homeTestimonialOrigin,
        flags: [
          { code: 'th', label: countries.thailand || 'Thailand' },
          { code: 'il', label: countries.israel || 'Israel' }
        ]
      },
      {
        body: t.homeTestimonialBody2 || t.homeTestimonialBody,
        name: t.homeTestimonialName2 || t.homeTestimonialName,
        origin: t.homeTestimonialOrigin2 || t.homeTestimonialOrigin,
        flags: [
          { code: 'il', label: countries.israel || 'Israel' },
          { code: 'th', label: countries.thailand || 'Thailand' }
        ]
      }
    ];
  }, [t]);

  const currentTestimonial =
    testimonialSlides[activeTestimonial] ?? testimonialSlides[0];

  const displayedProductPresets = useMemo(
    () => (isMobile ? productPresets : productPresets.slice(0, 3)),
    [isMobile]
  );

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

  return (
    <div
      className="font-['Rubik',_sans-serif] text-[#03355c] bg-white min-h-screen overflow-x-hidden"
      style={{
        fontFamily: "'Rubik', sans-serif",
        width: '100%',
        maxWidth: isMobile ? '100%' : '1895px',
        margin: '0 auto'
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div
        className="relative max-w-[1895px] mx-auto w-full"
        style={{
          background: 'linear-gradient(to top, #22afe4 0%, #005490 100%)'
        }}
      >
        <img
          src={homepageDesktopHero}
          alt="Qmobile homepage hero"
          className="hidden min-[769px]:block w-full h-auto object-cover pointer-events-none select-none"
        />
        <div className={`${isMobile ? 'relative' : 'absolute inset-0'} flex flex-col`}>
          <HomepageHeader showTitle={false} backgroundStyle="transparent">
        <section
          className="relative w-full"
          style={{
            marginTop:
              'clamp(0px, calc(0px + (120px - 0px) * ((100vw - 505px) / 1390)), 120px)',
            paddingBottom:
              'clamp(0px, calc(0px + (180px - 0px) * ((100vw - 505px) / 1390)), 180px)',
            marginLeft: 'clamp(10px, calc(10px + (40px - 10px) * ((100vw - 505px) / 1390)), 40px)',
            ...(isRTL
              ? {
                  paddingRight: 'clamp(10px, 2.5vw, 80px)',
                  paddingLeft: 'clamp(20px, 4vw, 160px)'
                }
              : {
                  paddingLeft: 0,
                  paddingRight: 'clamp(20px, 4vw, 160px)'
                })
          }}
        >
          <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-[2]">
            <div
              className="flex-1 flex flex-col"
              style={{
                textAlign: 'left',
                alignItems: 'flex-start',
                alignSelf: 'flex-start',
                maxWidth: 'fit-content',
                marginLeft: isRTL
                  ? 0
                  : 'clamp(10px, calc(10px + (60px - 10px) * ((100vw - 505px) / 1390)), 60px)',
                marginRight: 0,
                gap: 'clamp(0.8rem, calc(0.8rem + (3.7rem - 0.8rem) * ((100vw - 768px) / 1127)), 3.7rem)',
                marginTop: isMobile
                  ? 'clamp(20px, 0px + 0vw, 0px)'
                  : 'clamp(0px, calc((100vw - 768px) * 0.0), 0px)',
                padding: isMobile
                  ? 'clamp(10px, 1.14907px + 3.10559vw, 60px)'
                  : 'clamp(25px, calc(25px + (100vw - 768px) * (35 / 1127)), 60px)'
              }}
            >
              <p
                className="uppercase font-semibold"
                style={{
                  fontSize: isMobile
                    ? mobileWelcomeFontSize
                    : 'clamp(18px, calc(18px + (67 - 18) * ((100vw - 505px) / 1390)), 67px)',
                  letterSpacing: isRTL ? '0.02rem' : '0.02rem',
                  color: '#67c9d6',
                  textAlign: isRTL ? 'right' : 'left'
                }}
              >
                {t.homeWelcome}
              </p>
              <div
                className="flex"
                style={{
                  justifyContent: isRTL ? 'flex-end' : 'flex-start',
                  gap: isMobile ? '0.5rem' : 0
                }}
              >
                <QKeepingText
                  style={{
                    aspectRatio: '1154.9 / 303.37',
                    width: isMobile
                      ? 'clamp(200px, 3.931px + 56.525vw, 444px)'
                      : 'clamp(210px, 44vw, 48rem)',
                    height: 'auto'
                  }}
                  aria-label={t.homeHeroHeadline}
                />
              </div>
              <button
                className="hidden min-[769px]:inline-flex px-10 py-3 rounded-full transition"
                style={{
                  width:
                    'clamp(150px, calc(150px + (600 - 150) * ((100vw - 505px) / 1390)), 600px)',
                  maxWidth:
                    'clamp(150px, calc(150px + (600 - 150) * ((100vw - 505px) / 1390)), 600px)',
                  minWidth: '150px',
                  paddingBlock:
                    'clamp(10px, calc(10px + (30 - 10) * ((100vw - 505px) / 1390)), 30px)',
                  paddingInline:
                    'clamp(24px, calc(24px + (180 - 24) * ((100vw - 505px) / 1390)), 180px)',
                  textTransform: 'uppercase',
                  fontWeight: 100,
                  fontSize:
                    'clamp(11px, calc(11px + (57 - 11) * ((100vw - 505px) / 1390)), 57px)',
                  textAlign: 'center',
                  marginTop:
                    'clamp(10px, calc(10px + (50 - 10) * ((100vw - 505px) / 1390)), 50px)',
                  backgroundColor: '#67c9d6',
                  color: '#000000'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(103, 202, 215, 0.75)';
                  e.currentTarget.style.color = '#03355c';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#67c9d6';
                  e.currentTarget.style.color = '#000000';
                }}
              >
                {t.joinUs.toUpperCase()}
              </button>
            </div>

          </div>

        </section>

        {isMobile && (
          <div
            className="min-[769px]:hidden"
            style={{
              marginTop: '-25px',
              width: '100vw',
              marginLeft: 'calc(50% - 50vw)'
            }}
          >
            <img
              src={homepageMobileHero}
              alt=""
              style={{
                width: '100%',
                display: 'block'
              }}
            />
          </div>
        )}

        <section
          className="relative z-[3] w-full hidden min-[769px]:block"
          style={{
            marginTop:
              'clamp(0px, calc(0px + (400px - 0px) * ((100vw - 505px) / 1390)), 400px)'
          }}
        >
          <div
            className="max-w-[1200px] mx-auto flex flex-col gap-10 text-white"
            style={{
              alignItems: 'center',
              textAlign: 'center',
              marginLeft: isRTL ? 0 : 'clamp(175px, calc(175px + (600px - 175px) * ((100vw - 505px) / 1390)), 600px)',
              marginRight: 0,
              paddingRight: isRTL ? 0 : 'clamp(8px, 3vw, 80px)',
              paddingLeft: isRTL ? 'clamp(8px, 3vw, 80px)' : 'clamp(181px, 32vw, 283px)',
              gap: '0.2rem',
              paddingTop: 'clamp(117px, -268.459px + 38.9608vw, 360px)'
            }}
          >
            <div>
              <h2
                className="font-bold uppercase"
                style={{
                  fontSize:
                    'clamp(19px, calc(19px + (70 - 19) * ((100vw - 505px) / 1390)), 70px)',
                  color: '#04365d',
                  textAlign: 'center'
                }}
              >
                {t.homeSupportHeading}
              </h2>
            </div>

            <div
              className="flex flex-wrap justify-center md:justify-end"
              style={{
                gap: '0.7rem clamp(1.5rem, 4vw, 3.5rem)'
              }}
            >
              {[
                { icon: '/Images/2x/chat_bold22@2x.png', label: t.chat },
                { icon: '/Images/2x/wa_bold22@2x.png', label: t.whatsapp },
                { icon: '/Images/2x/phone_bold22@2x.png', label: t.callUs }
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center"
                  style={{
                    gap: '0.2rem'
                  }}
                >
                  <img
                    src={icon}
                    alt={label}
                    style={{
                      width:
                        'clamp(40px, calc(40px + (120 - 40) * ((100vw - 505px) / 1390)), 120px)',
                      height: 'auto',
                      filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.2))'
                    }}
                  />
                  <span
                    className="text-white font-extrabold"
                    style={{
                      fontSize:
                        'clamp(10px, calc(10px + (28 - 10) * ((100vw - 505px) / 1390)), 28px)',
                      color: '#04365d',
                      letterSpacing: '0px',
                      textTransform: 'uppercase'
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <p
                className="uppercase font-semibold tracking-[0.3em] mt-2 text-white/80"
                style={{
                  fontSize:
                    'clamp(19px, calc(19px + (68 - 19) * ((100vw - 505px) / 1390)), 68px)',
                  letterSpacing: '0.03em',
                  color: '#04365d',
                  textAlign: isRTL ? 'left' : 'right'
                }}
              >
                {t.homeSupportSubheading}
              </p>
            </div>
          </div>
        </section>

          </HomepageHeader>
        </div>
      </div>

      {!isMobile && (
        <section
          className="w-full text-[#04365d]"
          style={{
            padding: 'clamp(30px, 4vw, 150px) clamp(24px, 7vw, 90px)',
            background: '#67cad7'
          }}
        >
          <div
            className="mx-auto flex flex-col gap-6 text-center"
            style={{ alignItems: 'center' }}
          >
            <p
              style={{
                fontSize: 'clamp(21px, 3vw, 54px)',
                whiteSpace: 'pre-line',
                padding: 0,
                direction: 'ltr',
                textAlign: 'center'
              }}
            >
              {t.homeSupportBody}
            </p>
            <button
              type="button"
              className="uppercase inline-flex items-center gap-4 font-semibold text-[#04365d] bg-transparent border-0 px-0 py-0 hover:opacity-80 transition"
              style={{
                fontSize: 'clamp(0.95rem, 1.5vw, 1.4rem)'
              }}
            >
              <span
                style={{
                  fontSize: 'clamp(15px, 1.8vw, 40px)'
                }}
              >
                {t.homeSupportLearnMore}
              </span>
              <img
                src="/Images/SVG/Q__.svg"
                alt="Q logo"
                className="h-auto"
                style={{
                  width: 'clamp(40px, 8vw, 133px)'
                }}
              />
            </button>
          </div>
        </section>
      )}

      <main className="bg-white text-[#03355c]">
        <section
          className="w-full"
          style={{
            padding: '30px 0px 0px 0px'
          }}
        >
          <div
            style={{
              maxWidth: '1260px',
              marginLeft: isRTL ? 'auto' : 0,
              marginRight: isRTL ? 0 : 'auto',
              paddingLeft: 'clamp(20px, 6vw, 80px)',
              paddingRight: 'clamp(20px, 6vw, 80px)'
            }}
          >
            <div
              className="flex flex-col"
              style={{
                alignItems: isRTL ? 'flex-end' : 'flex-start',
                textAlign: isRTL ? 'right' : 'left'
              }}
            >
              <h2
                className="font-bold uppercase text-[#03355c]"
                style={{
                  fontSize: '63px',
                  textAlign: isRTL ? 'right' : 'left'
                }}
                dangerouslySetInnerHTML={{
                  __html: isMobile
                    ? t.homeProductsHeading
                    : t.homeProductsHeadingDesktop || t.homeProductsHeading
                }}
              />
              {!isMobile && (
                <a
                  href="/marketplace"
                  className="flex items-center gap-4"
                  style={{
                    flexDirection: isRTL ? 'row-reverse' : 'row',
                    textDecoration: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    transition: 'opacity 0.2s ease'
                  }}
                  onMouseEnter={event => {
                    event.currentTarget.style.opacity = '0.7';
                  }}
                  onMouseLeave={event => {
                    event.currentTarget.style.opacity = '1';
                  }}
                >
                  <p
                    className="uppercase text-[#04365d]"
                    style={{
                      fontSize: '30px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textAlign: isRTL ? 'right' : 'left',
                      margin: 0
                    }}
                  >
                    {t.homeProductsSubheading}
                  </p>
                  <img
                    src="/Images/2x/underline@2x.png"
                    alt=""
                    style={{
                      width: '59px',
                      height: 'auto',
                      marginTop: '20px'
                    }}
                  />
                </a>
              )}
            </div>
          </div>
        </section>

        <section
          className="w-full"
          style={{
            padding: 'clamp(10px, 2vw, 25px) clamp(20px, 6vw, 80px) 170px'
          }}
        >
          <div className="max-w-[1895px] mx-auto">
            <style>{`
              @keyframes homepage-bubble {
                0% { transform: scale(0.99); }
                100% { transform: scale(1.03); }
              }
              .homepage-product-card:hover {
                animation: homepage-bubble 0.25s ease-out forwards;
              }
              .homepage-product-card {
                transition: transform 0.3s ease-out;
              }
              .homepage-product-card:not(:hover) {
                transform: scale(1);
              }
            `}</style>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {displayedProductPresets.map(product => (
                <div key={product.id} style={{ marginTop: '60px' }}>
                  <div className="bg-white homepage-product-card" style={{ cursor: 'pointer' }}>
                    <div className="w-[88%] mx-auto aspect-square mb-4 overflow-hidden">
                      {product.image ? (
                        <img src={product.image} alt={t.productTitle} className="w-full h-full object-cover" />
                      ) : (
                        <img
                          src="/Images/2x/product_placeholder@2x.png"
                          alt={t.productTitle}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="text-center">
                      <h3
                        className="font-bold"
                        style={{
                          fontSize: '36px',
                          color: '#000000',
                          direction: isRTL ? 'rtl' : 'ltr',
                          fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                        }}
                      >
                        {t.productTitle}
                      </h3>
                      <p
                        style={{
                          fontSize: '1.8rem',
                          color: '#000000',
                          marginTop: '20px',
                          direction: isRTL ? 'rtl' : 'ltr',
                          fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                        }}
                      >
                        {product.pricePerUnit} NIS x {product.quantity ?? product.installments}
                      </p>
                      <p
                        style={{
                          fontSize: '1.275rem',
                          color: '#767676',
                          direction: isRTL ? 'rtl' : 'ltr',
                          fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                        }}
                      >
                        ({t.total} {product.total} NIS)
                      </p>
                      <button
                        className="mx-auto text-white py-1 md:py-1.5 px-8 md:px-10 rounded-full font-medium hover:opacity-90 transition-opacity mt-4"
                        style={{
                          backgroundColor: '#005291',
                          fontSize: '1.4rem',
                          direction: isRTL ? 'rtl' : 'ltr',
                          fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                        }}
                      >
                        {t.addToCart}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {isMobile && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 'clamp(40px, 10vw, 120px)'
            }}
          >
            <a
              href="/marketplace"
              className="flex items-center gap-4"
              style={{
                flexDirection: isRTL ? 'row-reverse' : 'row',
                textDecoration: 'none',
                color: 'inherit',
                cursor: 'pointer',
                transition: 'opacity 0.2s ease'
              }}
              onMouseEnter={event => {
                event.currentTarget.style.opacity = '0.7';
              }}
              onMouseLeave={event => {
                event.currentTarget.style.opacity = '1';
              }}
            >
              <p
                className="uppercase text-[#04365d]"
                style={{
                  fontSize: '36px',
                  fontWeight: 700,
                  textAlign: 'center',
                  margin: 0
                }}
              >
                {t.homeProductsSubheading}
              </p>
              <img
                src="/Images/2x/underline@2x.png"
                alt=""
                style={{
                  width: '59px',
                  height: 'auto',
                  marginTop: '20px'
                }}
              />
            </a>
          </div>
        )}

        <section className="relative w-full overflow-hidden">
          <img
            src={isMobile ? homepageMobileBanner : t.homeHeroWave}
            alt=""
            className="w-full h-auto object-cover"
          />
        </section>

        {isMobile && (
          <section
            className="w-full flex justify-center"
            style={{
              padding: 'clamp(24px, 5vw, 60px) clamp(20px, 6vw, 80px)'
            }}
          >
            <div
              className="flex flex-row items-center justify-center gap-6 sm:gap-8 w-full max-w-[960px]"
              style={{
                flexDirection: isRTL ? 'row-reverse' : 'row',
                flexWrap: 'wrap'
              }}
            >
              <a
                href="/join-us"
                className="uppercase text-[#03355c] font-semibold transition"
                style={{
                  backgroundColor: '#67c9d6',
                  color: '#000000',
                  paddingBlock: 'clamp(14px, 2.8vw, 20px)',
                  paddingInline: '20px',
                  borderRadius: '9999px',
                  letterSpacing: '0.12em',
                  fontSize: '33px',
                  fontWeight: 100,
                  textDecoration: 'none',
                  boxShadow: '0 10px 30px rgba(3, 53, 92, 0.12)',
                  textAlign: 'center',
                  flex: '1 1 320px',
                  maxWidth: 'calc(50% - 12px)'
                }}
                onMouseEnter={event => {
                  event.currentTarget.style.backgroundColor = '#8ddbe3';
                }}
                onMouseLeave={event => {
                  event.currentTarget.style.backgroundColor = '#67c9d6';
                }}
              >
                {t.joinUs.toUpperCase()}
              </a>
              <a
                href="/support"
                className="uppercase text-[#03355c] font-semibold transition"
                style={{
                  border: '2px solid rgba(3, 53, 92, 0.3)',
                  paddingBlock: 'clamp(14px, 2.8vw, 20px)',
                  paddingInline: '20px',
                  borderRadius: '9999px',
                  letterSpacing: '0.12em',
                  fontSize: '33px',
                  fontWeight: 100,
                  textDecoration: 'none',
                  textAlign: 'center',
                  flex: '1 1 320px',
                  maxWidth: 'calc(50% - 12px)',
                  backgroundColor: '#005392',
                  color: '#ffffff'
                }}
                onMouseEnter={event => {
                  event.currentTarget.style.backgroundColor = '#03355c';
                  event.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={event => {
                  event.currentTarget.style.backgroundColor = '#005392';
                  event.currentTarget.style.color = '#ffffff';
                }}
              >
                {t.support.toUpperCase()}
              </a>
            </div>
          </section>
        )}

        <section
          className="relative overflow-hidden"
          style={{
            background: isMobile
              ? '#ffffff'
              : 'linear-gradient(135deg, #e3f5ff 0%, #ffffff 55%, #f0f9ff 100%)',
            padding: 'clamp(60px, 8vw, 120px) 0'
          }}
        >
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
                fontSize: isMobile ? '33px' : '40px',
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
                width: '40px',
                height: '40px',
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
                  width: '40px',
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
                  fontSize: '36px',
                  color: '#04365d',
                  letterSpacing: '0.1em'
                }}
              >
                  {currentTestimonial.name}
              </h4>
              <p
                className="text-center"
                style={{
                  fontSize: '20px',
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
                      width: '80px',
                      height: '80px',
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
                width: '40px',
                height: '40px',
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
                  width: '40px',
                  height: 'auto'
                }}
              />
            </button>
          </div>
        </section>
      </main>

      <MarketplaceFooter />
    </div>
  );
};

export default Homepage;

