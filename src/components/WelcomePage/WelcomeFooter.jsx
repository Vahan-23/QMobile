import React from 'react';

const WelcomeFooter = () => {
  return (
    <footer className="bg-[#003d7a] text-white px-12 py-12 relative overflow-hidden sm:px-8">
      {/* Декоративный элемент */}
      <div className="absolute bottom-0 left-0 w-2/5 h-[200px] bg-white/10 rounded-t-full"></div>

      <div className="grid grid-cols-3 gap-12 mb-12 relative z-[2] sm:grid-cols-1 sm:gap-8">
        {/* Колонка 1 */}
        <div>
          <h3 className="text-base mb-5 font-semibold">Our story</h3>
          <ul className="list-none">
            <li className="mb-3">
              <a href="#" className="text-white text-sm opacity-90 hover:opacity-100 transition-opacity no-underline">
                Marketplace
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-white text-sm opacity-90 hover:opacity-100 transition-opacity no-underline">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Колонка 2 */}
        <div>
          <h3 className="text-base mb-5 font-semibold">Support</h3>
          <ul className="list-none">
            <li className="mb-3">
              <a href="#" className="text-white text-sm opacity-90 hover:opacity-100 transition-opacity no-underline">
                FAQs
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-white text-sm opacity-90 hover:opacity-100 transition-opacity no-underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Колонка 3 */}
        <div>
          <h3 className="text-base mb-5 font-semibold">Terms & conditions</h3>
          <ul className="list-none">
            <li className="mb-3">
              <a href="#" className="text-white text-sm opacity-90 hover:opacity-100 transition-opacity no-underline">
                Privacy policy
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-white text-sm opacity-90 hover:opacity-100 transition-opacity no-underline">
                Cookies policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className="flex justify-between items-end relative z-[2] sm:flex-col sm:gap-10 sm:items-center">
        {/* Логотип */}
        <div className="flex items-center gap-1.5">
          <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-[#003d7a]">
            Q
          </div>
          <span className="text-3xl font-bold">mobile</span>
        </div>

        {/* Контактная секция */}
        <div className="text-right sm:text-center">
          <div className="text-2xl font-bold mb-8">
            WE ARE HERE<br />FOR YOU
          </div>
          <div className="flex gap-5 justify-end sm:justify-center">
            {/* Chat */}
            <div className="text-center cursor-pointer transition-transform hover:-translate-y-1">
              <div className="w-[70px] h-[70px] bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2.5 text-3xl">
                💬
              </div>
              <div className="text-sm font-bold">CHAT</div>
            </div>

            {/* WhatsApp */}
            <div className="text-center cursor-pointer transition-transform hover:-translate-y-1">
              <div className="w-[70px] h-[70px] bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2.5 text-3xl">
                📱
              </div>
              <div className="text-sm font-bold">WHATSAPP</div>
            </div>

            {/* Call */}
            <div className="text-center cursor-pointer transition-transform hover:-translate-y-1">
              <div className="w-[70px] h-[70px] bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2.5 text-3xl">
                📞
              </div>
              <div className="text-sm font-bold">CALL US</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WelcomeFooter;
