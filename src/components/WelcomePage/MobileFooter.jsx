import React from 'react';
import { pxToPosition, pxToResponsive } from './utils/responsive';

const MobileFooter = () => {
  return (
    <div className="lg:hidden">
      <footer 
        className="text-white relative" 
        style={{ 
          background: 'linear-gradient(to top, #005490 0%, #22afe4 100%)',
          paddingTop: pxToPosition(63, { minPx: 32, maxPx: 63 }),
          paddingBottom: pxToPosition(63, { minPx: 32, maxPx: 63 }),
          paddingLeft: pxToPosition(50, { minPx: 16, maxPx: 50 }),
          paddingRight: pxToPosition(50, { minPx: 16, maxPx: 50 }),
          overflow: 'hidden' 
        }}>
        <div 
          className="flex flex-col relative z-[2]"
          style={{
            gap: pxToPosition(5, { minPx: 25, maxPx: 5 })
          }}>
          {/* Logo */}
          <div 
            className="flex items-start flex-col" 
            style={{ 
              padding: 0
            }}>
            <img 
              src="/Qmobile_Logo.png" 
              alt="Qmobile Logo" 
              className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] h-auto"
              style={{ 
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Column 1 */}
          <div 
            style={{ 
              padding: 0
            }}>
            <h3 className="text-base font-semibold" style={{ 
              fontSize: '23px', 
              marginBottom: 'clamp(8px, 1.5vw, 50px)',
              fontFamily: 'math',
              color: '#e3f1f8'
            }}>
              Our story
            </h3>
            <ul className="list-none" style={{ padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 'clamp(5px, 1vw, 50px)' }}>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ 
                  fontSize: '23px',
                  color: '#e3f1f8'
                }}>
                  Marketplace
                </a>
              </li>
              <li style={{ marginBottom: 'clamp(5px, 1vw, 50px)' }}>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ 
                  fontSize: '23px',
                  color: '#e3f1f8'
                }}>
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div 
            style={{ 
              padding: 0
            }}>
            <h3 className="text-base font-semibold" style={{ 
              fontSize: '23px', 
              marginBottom: 'clamp(8px, 1.5vw, 50px)',
              fontFamily: 'math',
              color: '#e3f1f8'
            }}>
              Support
            </h3>
            <ul className="list-none" style={{ padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 'clamp(5px, 1vw, 50px)' }}>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ 
                  fontSize: '23px',
                  color: '#e3f1f8'
                }}>
                  FAQs
                </a>
              </li>
              <li style={{ marginBottom: 'clamp(5px, 1vw, 50px)' }}>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ 
                  fontSize: '23px',
                  color: '#e3f1f8'
                }}>
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div 
            style={{ 
              padding: 0
            }}>
            <h3 className="text-base font-semibold" style={{ 
              fontSize: '23px', 
              marginBottom: 'clamp(8px, 1.5vw, 50px)',
              fontFamily: 'math',
              color: '#e3f1f8'
            }}>
              Terms & conditions
            </h3>
            <ul className="list-none" style={{ padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 'clamp(5px, 1vw, 50px)' }}>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ 
                  fontSize: '23px',
                  color: '#e3f1f8'
                }}>
                  Privacy policy
                </a>
              </li>
              <li style={{ marginBottom: 'clamp(5px, 1vw, 50px)' }}>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ 
                  fontSize: '23px',
                  color: '#e3f1f8'
                }}>
                  Cookies policy
                </a>
              </li>
            </ul>
          </div>

          {/* WE ARE HERE FOR YOU - below Cookies policy */}
          <div className="text-center w-full relative" style={{ marginTop: pxToPosition(40, { minPx: 20, maxPx: 40 }), marginBottom: '90px' }}>
            <div className="text-2xl font-bold" style={{ 
              fontSize: '31px', 
              color: '#66c8d5',
              fontWeight: 900
            }}>
              WE ARE HERE FOR YOU
            </div>
          </div>
        </div>

        {/* Contact buttons section */}
        <div className="flex flex-col relative z-[2]" style={{ marginTop: pxToPosition(40, { minPx: 20, maxPx: 40 }) }}>
          {/* Background decorative element FooterBack positioned at the top */}
          <div 
            style={{ 
              position: 'absolute',
              top: pxToPosition(100, { minPx: 60, maxPx: 100 }),
              left: '50%',
              transform: 'translateX(-50%) scale(1.3)',
              width: '120vw',
              zIndex: 1
            }}
          >
            <img 
              src="/Images/footerBack.png" 
              alt="Footer Back" 
              className="w-full h-auto block"
              style={{ 
                display: 'block',
                height: 'auto',
                width: '100%'
              }}
            />
          </div>

          {/* Contact buttons in the center */}
          <div className="text-center w-full relative" style={{ marginTop: '80px', marginBottom: '30px' }}>
            {/* Buttons - positioned above decorative element */}
            <div className="flex justify-center flex-wrap relative" style={{ gap: pxToPosition(120, { minPx: 20, maxPx: 120 }), zIndex: 2 }}>
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
                  fontSize: 'clamp(16px, 2vw, 42px)',
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
                  fontSize: 'clamp(16px, 2vw, 42px)',
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
                  fontSize: 'clamp(16px, 2vw, 42px)',
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
      </footer>
    </div>
  );
};

export default MobileFooter;

