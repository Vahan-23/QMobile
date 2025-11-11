import React, { useEffect, useState } from 'react';
import HomepageHeader from './HomepageHeader';
import homepageDesktopHero from './HomePageHero.png';
import homepageMobileHero from './homePageMobilehero.png';
import { ReactComponent as QKeepingText } from './q_IS_keeping.svg';
import MarketplaceFooter from '../Marketplace/MarketplaceFooter';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
const productPresets = [
  { id: 1, pricePerUnit: 320, installments: 10, total: 3200 },
  { id: 2, pricePerUnit: 320, installments: 10, total: 3200 },
  { id: 3, pricePerUnit: 320, installments: 10, total: 3200 }
];

const Homepage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  return (
    <div
      className="font-['Rubik',_sans-serif] text-[#03355c] bg-white min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'Rubik', sans-serif" }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div
        className="relative max-w-[1895px] mx-auto w-full min-h-[640px] min-[769px]:min-h-0"
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
              className="flex-1 flex flex-col gap-6 lg:gap-8"
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
                marginTop: 'clamp(0px, calc((100vw - 768px) * 0.0), 0px)',
                padding: 'clamp(25px, calc(25px + (100vw - 768px) * (35 / 1127)), 60px)'
              }}
            >
              <p
                className="uppercase font-semibold"
                style={{
                  fontSize: isMobile
                    ? '46px'
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
                  justifyContent: isRTL ? 'flex-end' : 'flex-start'
                }}
              >
                <QKeepingText
                  style={{
                    aspectRatio: '1154.9 / 303.37',
                    width: isMobile ? '444px' : 'clamp(210px, 44vw, 48rem)',
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
              marginTop: '-100px',
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
              paddingTop: 'clamp(50px, -268.459px + 33.9608vw, 360px)'
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

      <section
        className="w-full text-[#03355c]"
        style={{
          padding: 'clamp(60px, 8vw, 140px) clamp(20px, 6vw, 80px)',
          background: '#f5fbff'
        }}
      >
        <div
          className="max-w-[900px] mx-auto flex flex-col gap-6 text-center"
          style={{ alignItems: 'center' }}
        >
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              whiteSpace: 'pre-line',
              direction: isRTL ? 'rtl' : 'ltr',
              textAlign: isRTL ? 'right' : 'center'
            }}
          >
            {t.homeSupportBody}
          </p>
          <button
            className="uppercase px-10 py-3 rounded-full font-semibold bg-[#005490] text-white hover:bg-[#004374] transition"
            style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.4rem)'
            }}
          >
            {t.homeSupportLearnMore}
          </button>
        </div>
      </section>

      <main className="bg-white text-[#03355c]">
        <section
          className="w-full"
          style={{
            padding: 'clamp(60px, 8vw, 120px) clamp(20px, 6vw, 80px)'
          }}
        >
          <div className="max-w-[1260px] mx-auto flex flex-col gap-12">
            <div
              className="flex flex-col gap-4 text-center"
              style={{ alignItems: 'center' }}
            >
              <h2
                className="font-bold uppercase text-[#03355c]"
                style={{
                  fontSize: 'clamp(1.8rem, 4vw, 3.8rem)'
                }}
              >
                {t.homeProductsHeading}
              </h2>
              <p
                className="uppercase tracking-[0.2em] text-[#3aa4d3]"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                  letterSpacing: isRTL ? '0.1em' : '0.2em'
                }}
              >
                {t.homeProductsSubheading}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {productPresets.map(product => (
                <div
                  key={product.id}
                  className="rounded-3xl shadow-lg bg-white border border-[#e3eef8] flex flex-col items-center text-center gap-4 px-8 py-10"
                >
                  <div className="w-full flex justify-center">
                    <img
                      src="/Images/2x/product_placeholder@2x.png"
                      alt={t.productTitle}
                      className="w-[70%] max-w-[220px] h-auto object-contain"
                    />
                  </div>
                  <h3
                    className="font-bold text-[#003b66]"
                    style={{
                      fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)'
                    }}
                  >
                    {t.productTitle}
                  </h3>
                  <p
                    className="text-[#03355c] font-semibold"
                    style={{
                      fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)'
                    }}
                  >
                    {product.pricePerUnit} NIS x {product.installments}
                  </p>
                  <p className="text-[#7b8aa0]" style={{ fontSize: '1rem' }}>
                    ({t.total} {product.total} NIS)
                  </p>
                  <button
                    className="mt-2 px-8 py-2 rounded-full bg-[#005490] text-white font-semibold uppercase tracking-[0.2em] hover:bg-[#004374] transition"
                    style={{
                      fontSize: 'clamp(0.9rem, 1.6vw, 1.1rem)'
                    }}
                  >
                    {t.addToCart}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full overflow-hidden">
          <img
            src={t.homeHeroWave}
            alt=""
            className="w-full h-auto object-cover"
          />
        </section>

        <section
          className="relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #e3f5ff 0%, #ffffff 55%, #f0f9ff 100%)',
            padding: 'clamp(60px, 8vw, 120px) clamp(20px, 6vw, 80px)'
          }}
        >
          <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-12 relative z-[2]">
            <div className="flex flex-col gap-6">
              <p
                className="uppercase text-[#2f9ed7] font-bold tracking-[0.3em]"
                style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)',
                  letterSpacing: isRTL ? '0.18em' : '0.3em'
                }}
              >
                {t.homeTestimonialDistance}
              </p>
              <h3
                className="text-[#03355c] font-bold uppercase"
                style={{
                  fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)'
                }}
              >
                {t.homeTestimonialHighlight}
              </h3>
              <p
                className="text-[#03355c]/80"
                style={{
                  fontSize: 'clamp(1rem, 2.1vw, 1.35rem)',
                  lineHeight: 1.8,
                  direction: isRTL ? 'rtl' : 'ltr',
                  textAlign: isRTL ? 'right' : 'left'
                }}
              >
                {t.homeTestimonialBody}
              </p>
              <div className="flex flex-col gap-2">
                <span
                  className="font-semibold text-[#03355c]"
                  style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
                >
                  {t.homeTestimonialName}
                </span>
                <span
                  className="text-[#2a84b4] uppercase tracking-[0.2em]"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1rem)',
                    letterSpacing: isRTL ? '0.12em' : '0.2em'
                  }}
                >
                  {t.homeTestimonialOrigin}
                </span>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative">
                <img
                  src="/Images/2x/man_v6@2x.png"
                  alt=""
                  className="w-full max-w-[420px] h-auto object-contain rounded-[40px]"
                />
              </div>
            </div>
          </div>

          <div
            className="absolute inset-y-0"
            style={{
              width: '45%',
              background: 'radial-gradient(circle at 20% 50%, rgba(73,160,227,0.35), transparent 65%)',
              [isRTL ? 'right' : 'left']: '-10%'
            }}
          />
        </section>
      </main>

      <MarketplaceFooter />
    </div>
  );
};

export default Homepage;

