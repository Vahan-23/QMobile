import React from 'react';
import HomepageHeader from './HomepageHeader';
import homepageDesktopHero from './HomePageHero.png';
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
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  return (
    <div
      className="font-['Rubik',_sans-serif] text-[#03355c] bg-white min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'Rubik', sans-serif" }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="relative max-w-[1895px] mx-auto w-full">
        <img
          src={homepageDesktopHero}
          alt="Qmobile homepage hero"
          className="w-full h-auto object-cover block pointer-events-none select-none"
        />
        <div className="absolute inset-0 flex flex-col">
          <HomepageHeader showTitle={false} backgroundStyle="transparent">
        <section
          className="relative w-full"
          style={{
            marginTop: 'clamp(40px, 6vw, 120px)',
            paddingBottom: 'clamp(60px, 8vw, 180px)',
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
                textAlign: isRTL ? 'right' : 'left',
                alignItems: isRTL ? 'flex-end' : 'flex-start',
                alignSelf: isRTL ? 'flex-end' : 'flex-start',
                maxWidth: 'fit-content',
                marginLeft: isRTL ? 0 : '40px',
                marginRight: isRTL ? 'clamp(10px, 4vw, 160px)' : 0
              }}
            >
              <p
                className="uppercase font-semibold"
                style={{
                  fontSize: '67px',
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
                    width: 'clamp(20rem, 44vw, 48rem)',
                    height: 'auto'
                  }}
                  aria-label={t.homeHeroHeadline}
                />
              </div>
              <button
                className="px-10 py-3 rounded-full font-semibold bg-white text-[#005490] hover:bg-white/90 transition"
                style={{
                  fontSize: 'clamp(1rem, 1.5vw, 1.5rem)'
                }}
              >
                {t.joinUs}
              </button>
            </div>

          </div>

        </section>

        <section className="relative z-[3] w-full">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-10 items-center text-center text-white">
            <div>
              <h2
                className="font-bold uppercase"
                style={{
                  fontSize: 'clamp(1.6rem, 3.5vw, 3.5rem)'
                }}
              >
                {t.homeSupportHeading}
              </h2>
              <p
                className="uppercase font-semibold tracking-[0.3em] mt-2 text-white/80"
                style={{
                  fontSize: 'clamp(0.95rem, 2.2vw, 1.7rem)',
                  letterSpacing: isRTL ? '0.15em' : '0.3em'
                }}
              >
                {t.homeSupportSubheading}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-10 md:gap-14 lg:gap-20">
              {[
                { icon: t.homeChatIcon, label: t.chat },
                { icon: t.homeWhatsappIcon, label: t.whatsapp },
                { icon: t.homePhoneIcon, label: t.callUs }
              ].map(({ icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-4">
                  <div
                    className="flex items-center justify-center rounded-full bg-white/10 border border-white/30 shadow-lg backdrop-blur"
                    style={{
                      width: 'clamp(90px, 8vw, 150px)',
                      height: 'clamp(90px, 8vw, 150px)'
                    }}
                  >
                    <img
                      src={icon}
                      alt={label}
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                  <span
                    className="text-white font-extrabold tracking-[0.2em]"
                    style={{
                      fontSize: 'clamp(1rem, 2vw, 1.7rem)'
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
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

