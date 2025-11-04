import React from 'react';

const MarketplaceFooter = () => {
  return (
    <footer
      className="relative w-full bg-[#03355c] text-white overflow-hidden"
      style={{
        padding: 'clamp(30px, 4vw, 60px) clamp(16px, 2.6vw, 50px)',
        fontFamily: "'Rubik', sans-serif"
      }}
    >
      <div className="max-w-[1895px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Three Columns of Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {/* Column 1 */}
            <div>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a href="#" className="text-white hover:opacity-80 transition-opacity text-sm md:text-base">
                    Our story
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:opacity-80 transition-opacity text-sm md:text-base">
                    Marketplace
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:opacity-80 transition-opacity text-sm md:text-base">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a href="#" className="text-white hover:opacity-80 transition-opacity text-sm md:text-base">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:opacity-80 transition-opacity text-sm md:text-base">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:opacity-80 transition-opacity text-sm md:text-base">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a href="#" className="text-white hover:opacity-80 transition-opacity text-sm md:text-base">
                    Terms & conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:opacity-80 transition-opacity text-sm md:text-base">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:opacity-80 transition-opacity text-sm md:text-base">
                    Cookies policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Logo, Text, and Contact Icons */}
          <div className="flex flex-col items-start lg:items-end">
            {/* Logo */}
            <div className="mb-4 md:mb-6">
              <img
                src="/Images/2x/qmobile_logo_w@2x.png"
                alt="Qmobile Logo"
                className="h-8 md:h-10 lg:h-12 w-auto"
              />
            </div>

            {/* Text */}
            <div className="mb-6 md:mb-8">
              <p className="font-bold text-base md:text-lg lg:text-xl uppercase">
                WE ARE HERE FOR YOU
              </p>
            </div>

            {/* Contact Icons */}
            <div className="flex gap-4 md:gap-6">
              {/* Chat */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 md:w-14 md:h-14 border-2 border-white rounded-full flex items-center justify-center mb-2 bg-white bg-opacity-10">
                  <img
                    src="/Images/2x/chat@2x.png"
                    alt="Chat"
                    className="w-6 h-6 md:w-7 md:h-7 object-contain"
                  />
                </div>
                <span className="text-white text-xs md:text-sm">CHAT</span>
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 md:w-14 md:h-14 border-2 border-white rounded-full flex items-center justify-center mb-2 bg-white bg-opacity-10">
                  <img
                    src="/Images/2x/wa@2x.png"
                    alt="WhatsApp"
                    className="w-6 h-6 md:w-7 md:h-7 object-contain"
                  />
                </div>
                <span className="text-white text-xs md:text-sm">WHATSAPP</span>
              </div>

              {/* Call */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 md:w-14 md:h-14 border-2 border-white rounded-full flex items-center justify-center mb-2 bg-white bg-opacity-10">
                  <img
                    src="/Images/2x/phone@2x.png"
                    alt="Call"
                    className="w-6 h-6 md:w-7 md:h-7 object-contain"
                  />
                </div>
                <span className="text-white text-xs md:text-sm">CALL US</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative white element - placeholder */}
      <div
        className="absolute bottom-0 left-0 opacity-10 pointer-events-none"
        style={{
          width: '40%',
          height: '200px',
          background: 'white',
          borderRadius: '50% 50% 0 0'
        }}
      ></div>
    </footer>
  );
};

export default MarketplaceFooter;
