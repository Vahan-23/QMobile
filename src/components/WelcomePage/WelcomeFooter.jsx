import React from 'react';
import { pxToPosition, pxToResponsive } from './utils/responsive';
import MobileFooter from './MobileFooter';

const WelcomeFooter = () => {
  // Specific positions from design:
  // padding: 50px left and right
  // height: 830px
  // gap between columns: 20px
  // whiteFacture: bottom: 230px, left: 4%, right: -6%

  return (
    <>
      <MobileFooter />
      <div className="hidden lg:block">
      <footer 
        className="text-white relative" 
        style={{ 
          backgroundColor: '#03355c', 
          paddingTop: pxToPosition(63, { minPx: 32, maxPx: 63 }), // calc(3rem + 15px) = 48px + 15px
          paddingBottom: pxToPosition(63, { minPx: 32, maxPx: 63 }),
          paddingLeft: pxToPosition(50, { minPx: 16, maxPx: 50 }),
          paddingRight: pxToPosition(50, { minPx: 16, maxPx: 50 }),
          minHeight: 'clamp(320px, 39.6vw, 750px)',
          overflow: 'hidden' 
        }}>
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-[2]"
        style={{
          gap: pxToPosition(5, { minPx: 0, maxPx: 5 })
        }}>
        {/* Column 1 */}
        <div 
          className="flex-1" 
          style={{ 
            padding: 0
          }}>
          <h3 className="text-base font-semibold" style={{ 
            fontSize: 'clamp(12px, 1.5vw, 39px)', 
            marginBottom: 'clamp(8px, 1.5vw, 50px)',
            fontFamily: 'math'
          }}>
            Our story
          </h3>
          <ul className="list-none" style={{ padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 'clamp(5px, 1vw, 50px)' }}>
              <a href="#" className="text-white opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ 
                fontSize: 'clamp(10px, 1.3vw, 36px)' 
              }}>
                Marketplace
              </a>
            </li>
            <li style={{ marginBottom: 'clamp(5px, 1vw, 50px)' }}>
              <a href="#" className="text-white opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ 
                fontSize: 'clamp(10px, 1.3vw, 36px)' 
              }}>
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div 
          className="flex-1" 
          style={{ 
            padding: 0,
            marginLeft: pxToPosition(-60, { minPx: -30, maxPx: -60 })
          }}>
          <h3 className="text-base font-semibold" style={{ 
            fontSize: 'clamp(12px, 1.5vw, 39px)', 
            marginBottom: 'clamp(8px, 1.5vw, 50px)',
            fontFamily: 'math'
          }}>
            Support
          </h3>
          <ul className="list-none" style={{ padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 'clamp(5px, 1vw, 50px)' }}>
              <a href="#" className="text-white opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ 
                fontSize: 'clamp(10px, 1.3vw, 36px)' 
              }}>
                FAQs
              </a>
            </li>
            <li style={{ marginBottom: 'clamp(5px, 1vw, 50px)' }}>
              <a href="#" className="text-white opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ 
                fontSize: 'clamp(10px, 1.3vw, 36px)' 
              }}>
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div 
          className="flex-1" 
          style={{ 
            padding: 0,
            marginLeft: pxToPosition(-120, { minPx: -60, maxPx: -120 })
          }}>
          <h3 className="text-base font-semibold" style={{ 
            fontSize: 'clamp(12px, 1.5vw, 39px)', 
            marginBottom: 'clamp(8px, 1.5vw, 50px)',
            fontFamily: 'math'
          }}>
            Terms & conditions
          </h3>
          <ul className="list-none" style={{ padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 'clamp(5px, 1vw, 50px)' }}>
              <a href="#" className="text-white opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ 
                fontSize: 'clamp(10px, 1.3vw, 36px)' 
              }}>
                Privacy policy
              </a>
            </li>
            <li style={{ marginBottom: 'clamp(5px, 1vw, 50px)' }}>
              <a href="#" className="text-white opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ 
                fontSize: 'clamp(10px, 1.3vw, 36px)' 
              }}>
                Cookies policy
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Logo */}
        <div 
          className="flex-1 flex items-start flex-col" 
          style={{ 
            padding: 0,
            marginLeft: pxToPosition(-60, { minPx: -30, maxPx: -60 }),
            marginTop: pxToPosition(-30, { minPx: -15, maxPx: -30 })
          }}>
          <img 
            src="/Qmobile_Logo.png" 
            alt="Qmobile Logo" 
            className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] h-auto"
            style={{ 
              objectFit: 'contain'
            }}
          />
          <div className="text-2xl font-bold" style={{ 
            fontSize: 'clamp(20px, 2.5vw, 50px)', 
            lineHeight: pxToPosition(56, { minPx: 32, maxPx: 56 }),
            color: '#02284f',
            fontWeight: 900,
            textAlign: 'center',
            marginTop: pxToPosition(120, { minPx: 20, maxPx: 120 }),
            marginLeft: pxToPosition(-40, { minPx: -20, maxPx: -40 })
          }}>
            WE ARE HERE<br />FOR YOU
          </div>
        </div>
      </div>

      {/* Contact buttons section */}
      <div className="flex justify-end items-end relative z-[2] flex-col sm:flex-row sm:gap-10 sm:items-center">
        {/* Contact buttons */}
        <div className="text-center sm:text-right w-full sm:w-auto" style={{ marginTop: pxToPosition(80, { minPx: 10, maxPx: 80 }) }}>
          <div className="flex justify-start flex-wrap" style={{ gap: pxToPosition(120, { minPx: 20, maxPx: 120 }) }}>
            {/* Chat */}
            <div className="text-center cursor-pointer transition-transform hover:-translate-y-1" style={{ minWidth: pxToPosition(120, { minPx: 80, maxPx: 120 }) }}>
              <div 
                className="flex items-center justify-center overflow-hidden mx-auto"
                style={{ 
                  marginBottom: '15px',
                  width: 'clamp(80px, 8vw, 180px)', 
                  height: 'clamp(60px, 6vw, 135px)',
                  borderRadius: '53% / 60%',
                  background: 'linear-gradient(to left, #49A0E3 0%, #1977D1 100%)',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  transform: 'rotate(331deg)'
                }}
              >
                <img 
                  src="/Images/msg.png" 
                  alt="Chat" 
                  style={{ 
                    width: '80%', 
                    height: '80%',
                    objectFit: 'contain',
                    transform: 'rotate(-331deg)'
                  }}
                />
              </div>
              <div className="text-sm font-bold" style={{ 
                fontSize: 'clamp(14px, 1.8vw, 36px)',
                color: '#005291',
                textAlign: 'center',
                marginTop: 'clamp(20px, 2vw, 50px)',
                fontWeight: 900,
                fontFamily: 'sans-serif'
              }}>
                CHAT
              </div>
            </div>

            {/* WhatsApp */}
            <div className="text-center cursor-pointer transition-transform hover:-translate-y-1" style={{ minWidth: '120px' }}>
              <div 
                className="flex items-center justify-center overflow-hidden mx-auto"
                style={{ 
                  marginBottom: '15px',
                  width: 'clamp(80px, 8vw, 180px)', 
                  height: 'clamp(60px, 6vw, 135px)',
                  borderRadius: '53% / 60%',
                  background: 'linear-gradient(to top, #49A0E3 0%, #1977D1 100%)',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  transform: 'rotate(331deg)'
                }}
              >
                <img 
                  src="/Images/wtp.png" 
                  alt="WhatsApp" 
                  style={{ 
                    width: '80%', 
                    height: '80%',
                    objectFit: 'contain',
                    transform: 'rotate(-331deg)'
                  }}
                />
              </div>
              <div className="text-sm font-bold" style={{ 
                fontSize: 'clamp(14px, 1.8vw, 36px)',
                color: '#005291',
                textAlign: 'center',
                marginTop: 'clamp(20px, 2vw, 50px)',
                fontWeight: 900,
                fontFamily: 'sans-serif'
              }}>
                WHATSAPP
              </div>
            </div>

            {/* Call */}
            <div className="text-center cursor-pointer transition-transform hover:-translate-y-1" style={{ minWidth: '120px' }}>
              <div 
                className="flex items-center justify-center overflow-hidden mx-auto"
                style={{ 
                  marginBottom: '15px',
                  width: 'clamp(80px, 8vw, 180px)', 
                  height: 'clamp(60px, 6vw, 135px)',
                  borderRadius: '53% / 60%',
                  background: 'linear-gradient(to top, #49A0E3 0%, #1977D1 100%)',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  transform: 'rotate(331deg)'
                }}
              >
                <img 
                  src="/Images/phn.png" 
                  alt="Call" 
                  style={{ 
                    width: '80%', 
                    height: '80%',
                    objectFit: 'contain',
                    transform: 'rotate(-331deg)'
                  }}
                />
              </div>
              <div className="text-sm font-bold" style={{ 
                fontSize: 'clamp(14px, 1.8vw, 36px)',
                color: '#005291',
                textAlign: 'center',
                marginTop: 'clamp(20px, 2vw, 50px)',
                fontWeight: 900,
                fontFamily: 'sans-serif'
              }}>
                CALL US
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing at the bottom */}
      <div style={{ marginBottom: pxToPosition(-600, { minPx: -300, maxPx: -600 }) }}></div>

      {/* WhiteFacture decorative element - positioned at the bottom */}
      {/* Position from design: bottom: 230px, left: 4%, right: -6% */}
      <div style={{ 
        position: 'absolute',
        bottom: pxToPosition(200, { minPx: 0, maxPx: 200 }),
        left: '4%', // Fixed left position
        right: '-3%',
        transform: 'translateY(calc(70% - 63px))',
        zIndex: 1,
        overflow: 'hidden'
      }}>
        <img 
          src="/Images/whiteFacture.png" 
          alt="White Facture" 
          className="w-full h-auto block"
          style={{ 
            display: 'block',
            height: 'auto',
            width: '100%'
          }}
        />
      </div>
    </footer>
      </div>
    </>
  );
};

export default WelcomeFooter;
