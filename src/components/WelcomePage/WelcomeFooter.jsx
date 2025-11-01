import React from 'react';
import { pxToPosition, pxToResponsive } from './utils/responsive';

const WelcomeFooter = () => {
  // Конкретные позиции из дизайна:
  // padding: 50px слева и справа
  // высота: 830px
  // gap между колонками: 20px
  // whiteFacture: bottom: 230px, left: 4%, right: -6%

  return (
    <footer 
      className="text-white relative" 
      style={{ 
        backgroundColor: '#03355c', 
        paddingTop: pxToPosition(63, { minPx: 32, maxPx: 63 }), // calc(3rem + 15px) = 48px + 15px
        paddingBottom: pxToPosition(63, { minPx: 32, maxPx: 63 }),
        paddingLeft: pxToPosition(50, { minPx: 16, maxPx: 50 }),
        paddingRight: pxToPosition(50, { minPx: 16, maxPx: 50 }),
        minHeight: pxToResponsive(830, 60),
        overflow: 'visible' // Изменено на visible чтобы не скрывать dropdown 
      }}>
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 sm:mb-10 md:mb-12 relative z-[2]"
        style={{
          gap: pxToPosition(20, { minPx: 16, maxPx: 20 })
        }}>
        {/* Колонка 1 */}
        <div 
          className="flex-1" 
          style={{ 
            padding: pxToPosition(20, { minPx: 10, maxPx: 20 })
          }}>
          <h3 className="text-base font-semibold" style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.8rem)', 
            marginBottom: 'clamp(20px, 4vw, 50px)' 
          }}>
            Our story
          </h3>
          <ul className="list-none" style={{ padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 'clamp(20px, 4vw, 50px)' }}>
              <a href="#" className="text-white opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ 
                fontSize: 'clamp(0.875rem, 2vw, 1.8rem)' 
              }}>
                Marketplace
              </a>
            </li>
            <li style={{ marginBottom: 'clamp(20px, 4vw, 50px)' }}>
              <a href="#" className="text-white opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ 
                fontSize: 'clamp(0.875rem, 2vw, 1.8rem)' 
              }}>
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Колонка 2 */}
        <div 
          className="flex-1" 
          style={{ 
            padding: pxToPosition(20, { minPx: 10, maxPx: 20 })
          }}>
          <h3 className="text-base font-semibold" style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.8rem)', 
            marginBottom: 'clamp(20px, 4vw, 50px)' 
          }}>
            Support
          </h3>
          <ul className="list-none" style={{ padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 'clamp(20px, 4vw, 50px)' }}>
              <a href="#" className="text-white opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ 
                fontSize: 'clamp(0.875rem, 2vw, 1.8rem)' 
              }}>
                FAQs
              </a>
            </li>
            <li style={{ marginBottom: 'clamp(20px, 4vw, 50px)' }}>
              <a href="#" className="text-white opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ 
                fontSize: 'clamp(0.875rem, 2vw, 1.8rem)' 
              }}>
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Колонка 3 */}
        <div 
          className="flex-1" 
          style={{ 
            padding: pxToPosition(20, { minPx: 10, maxPx: 20 })
          }}>
          <h3 className="text-base font-semibold" style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.8rem)', 
            marginBottom: 'clamp(20px, 4vw, 50px)' 
          }}>
            Terms & conditions
          </h3>
          <ul className="list-none" style={{ padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 'clamp(20px, 4vw, 50px)' }}>
              <a href="#" className="text-white opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ 
                fontSize: 'clamp(0.875rem, 2vw, 1.8rem)' 
              }}>
                Privacy policy
              </a>
            </li>
            <li style={{ marginBottom: 'clamp(20px, 4vw, 50px)' }}>
              <a href="#" className="text-white opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ 
                fontSize: 'clamp(0.875rem, 2vw, 1.8rem)' 
              }}>
                Cookies policy
              </a>
            </li>
          </ul>
        </div>

        {/* Колонка 4 - Логотип */}
        <div 
          className="flex-1 flex items-start" 
          style={{ 
            padding: pxToPosition(20, { minPx: 10, maxPx: 20 })
          }}>
          <img 
            src="/Qmobile_Logo.png" 
            alt="Qmobile Logo" 
            className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] h-auto"
            style={{ 
              objectFit: 'contain'
            }}
          />
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className="flex justify-end items-end relative z-[2] flex-col sm:flex-row sm:gap-10 sm:items-center">
        {/* Контактная секция */}
        <div className="text-center sm:text-right w-full sm:w-auto">
          <div className="text-2xl font-bold" style={{ 
            fontSize: 'clamp(1.25rem, 2.5vw, 1.8rem)', 
            marginBottom: 'clamp(15px, 3vw, 20px)' 
          }}>
            WE ARE HERE<br />FOR YOU
          </div>
          <div className="flex justify-center sm:justify-end gap-3 sm:gap-4 md:gap-5 lg:gap-[20px] flex-wrap">
            {/* Chat */}
            <div className="text-center cursor-pointer transition-transform hover:-translate-y-1">
              <div className="bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 text-xl sm:text-2xl md:text-3xl" 
                   style={{ 
                     width: 'clamp(50px, 6vw, 70px)', 
                     height: 'clamp(50px, 6vw, 70px)' 
                   }}>
                💬
              </div>
              <div className="text-sm font-bold" style={{ 
                fontSize: 'clamp(0.875rem, 2vw, 1.8rem)' 
              }}>
                CHAT
              </div>
            </div>

            {/* WhatsApp */}
            <div className="text-center cursor-pointer transition-transform hover:-translate-y-1">
              <div className="bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 text-xl sm:text-2xl md:text-3xl" 
                   style={{ 
                     width: 'clamp(50px, 6vw, 70px)', 
                     height: 'clamp(50px, 6vw, 70px)' 
                   }}>
                📱
              </div>
              <div className="text-sm font-bold" style={{ 
                fontSize: 'clamp(0.875rem, 2vw, 1.8rem)' 
              }}>
                WHATSAPP
              </div>
            </div>

            {/* Call */}
            <div className="text-center cursor-pointer transition-transform hover:-translate-y-1">
              <div className="bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 text-xl sm:text-2xl md:text-3xl" 
                   style={{ 
                     width: 'clamp(50px, 6vw, 70px)', 
                     height: 'clamp(50px, 6vw, 70px)' 
                   }}>
                📞
              </div>
              <div className="text-sm font-bold" style={{ 
                fontSize: 'clamp(0.875rem, 2vw, 1.8rem)' 
              }}>
                CALL US
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhiteFacture изображение - половина за границей */}
      {/* Точные позиции: bottom: 230px, left: 4%, right: -6% */}
      <div style={{ 
        position: 'absolute',
        bottom: pxToPosition(230, { minPx: 100, maxPx: 230 }),
        left: '4%', // Процент от ширины контейнера
        right: '-6%', // Отрицательный процент для выхода за границы
        transform: 'translateY(calc(70% - 63px))',
        zIndex: 1
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
  );
};

export default WelcomeFooter;
