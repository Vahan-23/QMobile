import React from 'react';

const WelcomeFooter = () => {
  return (
    <footer className="text-white px-12 relative sm:px-8" style={{ backgroundColor: '#03355c', paddingTop: 'calc(3rem + 15px)', paddingBottom: 'calc(3rem + 15px)', height: '830px', overflow: 'hidden' }}>
      <div className="flex flex-row mb-12 relative z-[2] sm:flex-col sm:gap-8" style={{ flexDirection: 'row', gap: '20px' }}>
        {/* Колонка 1 */}
        <div className="flex-1" style={{ padding: '20px' }}>
          <h3 className="text-base font-semibold" style={{ fontSize: '1.8rem', marginBottom: '50px' }}>Our story</h3>
          <ul className="list-none" style={{ padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '50px' }}>
              <a href="#" className="text-white text-sm opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ fontSize: '1.8rem' }}>
                Marketplace
              </a>
            </li>
            <li style={{ marginBottom: '50px' }}>
              <a href="#" className="text-white text-sm opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ fontSize: '1.8rem' }}>
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Колонка 2 */}
        <div className="flex-1" style={{ padding: '20px' }}>
          <h3 className="text-base font-semibold" style={{ fontSize: '1.8rem', marginBottom: '50px' }}>Support</h3>
          <ul className="list-none" style={{ padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '50px' }}>
              <a href="#" className="text-white text-sm opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ fontSize: '1.8rem' }}>
                FAQs
              </a>
            </li>
            <li style={{ marginBottom: '50px' }}>
              <a href="#" className="text-white text-sm opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ fontSize: '1.8rem' }}>
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Колонка 3 */}
        <div className="flex-1" style={{ padding: '20px' }}>
          <h3 className="text-base font-semibold" style={{ fontSize: '1.8rem', marginBottom: '50px' }}>Terms & conditions</h3>
          <ul className="list-none" style={{ padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '50px' }}>
              <a href="#" className="text-white text-sm opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ fontSize: '1.8rem' }}>
                Privacy policy
              </a>
            </li>
            <li style={{ marginBottom: '50px' }}>
              <a href="#" className="text-white text-sm opacity-90 hover:opacity-100 transition-opacity no-underline" style={{ fontSize: '1.8rem' }}>
                Cookies policy
              </a>
            </li>
          </ul>
        </div>

        {/* Колонка 4 - Логотип */}
        <div className="flex-1 flex items-start" style={{ padding: '20px' }}>
          <img 
            src="/Qmobile_Logo.png" 
            alt="Qmobile Logo" 
            style={{ 
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className="flex justify-end items-end relative z-[2] sm:flex-col sm:gap-10 sm:items-center">
        {/* Контактная секция */}
        <div className="text-right sm:text-center">
          <div className="text-2xl font-bold" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>
            WE ARE HERE<br />FOR YOU
          </div>
          <div className="flex justify-end sm:justify-center" style={{ gap: '20px' }}>
            {/* Chat */}
            <div className="text-center cursor-pointer transition-transform hover:-translate-y-1">
              <div className="w-[70px] h-[70px] bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2.5 text-3xl">
                💬
              </div>
              <div className="text-sm font-bold" style={{ fontSize: '1.8rem' }}>CHAT</div>
            </div>

            {/* WhatsApp */}
            <div className="text-center cursor-pointer transition-transform hover:-translate-y-1">
              <div className="w-[70px] h-[70px] bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2.5 text-3xl">
                📱
              </div>
              <div className="text-sm font-bold" style={{ fontSize: '1.8rem' }}>WHATSAPP</div>
            </div>

            {/* Call */}
            <div className="text-center cursor-pointer transition-transform hover:-translate-y-1">
              <div className="w-[70px] h-[70px] bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2.5 text-3xl">
                📞
              </div>
              <div className="text-sm font-bold" style={{ fontSize: '1.8rem' }}>CALL US</div>
            </div>
          </div>
        </div>
      </div>

      {/* WhiteFacture изображение - половина за границей */}
      <div style={{ 
        position: 'absolute',
        bottom: '230px',
        left: '4%',
        right: '-6%',
        transform: 'translateY(calc(70% - 63px))',
        zIndex: 1
      }}>
        <img 
          src="/Images/whiteFacture.png" 
          alt="White Facture" 
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
