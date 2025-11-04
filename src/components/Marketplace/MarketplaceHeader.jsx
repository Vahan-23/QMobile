import React from 'react';

const MarketplaceHeader = () => {
  return (
    <header
      className="w-full text-white overflow-x-hidden"
      style={{
        padding: '50px 40px',
        fontFamily: "'Rubik', sans-serif",
        background: 'linear-gradient(to right, rgb(0, 84, 147), rgb(51, 177, 215))'
      }}
    >
      <div className="max-w-[1895px] mx-auto w-full">
        {/* Navigation Row */}
        <div className="flex justify-between items-center w-full gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 min-w-0">
            <img
              src="/Qmobile_Logo.png"
              alt="Qmobile Logo"
              className="w-auto h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 2xl:h-32 max-h-full"
            />
          </div>

                     {/* Navigation Links */}
           <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 flex-nowrap justify-center flex-1 min-w-0">
                                                                                                       <a 
                 href="#" 
                 className="text-white hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink font-light"
                 style={{ fontSize: 'clamp(16px, 2vw, 36px)' }}
               >
                 Join us
               </a>
               <a 
                 href="#" 
                 className="text-white hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink font-light"
                 style={{ fontSize: 'clamp(16px, 2vw, 36px)' }}
               >
                 Our story
               </a>
               <a 
                 href="#" 
                 className="text-white hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink font-light"
                 style={{ fontSize: 'clamp(16px, 2vw, 36px)' }}
               >
                 Marketplace
               </a>
               <a 
                 href="#" 
                 className="text-white hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink font-light"
                 style={{ fontSize: 'clamp(16px, 2vw, 36px)' }}
               >
                 Support
               </a>
               <a 
                 href="#" 
                 className="text-white hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink font-light"
                 style={{ fontSize: 'clamp(16px, 2vw, 36px)' }}
               >
                 Blog
               </a>
               <a 
                 href="#" 
                 className="text-white hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink font-light"
                 style={{ fontSize: 'clamp(16px, 2vw, 36px)' }}
               >
                 My Account
               </a>

            {/* Language Switch */}
            <div className="flex items-center flex-shrink-0 ml-1 sm:ml-2">
              <button className="flex items-center text-white hover:opacity-80 transition-opacity">
                <img
                  src="/Images/2x/switch language icon@2x.png"
                  alt="Switch language"
                  className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24"
                  style={{
                    marginTop: 'clamp(10px, 2vw, 46px)'
                  }}
                />
              </button>
            </div>
          </div>
        </div>

                                                                       {/* MARKETPLACE Title */}
           <div className="w-full mt-24">
             <h1 
               className="text-center font-bold uppercase"
               style={{ marginBottom: '30px', fontSize: '4.7rem' }}
             >
               MARKETPLACE
             </h1>
           </div>
      </div>
    </header>
  );
};

export default MarketplaceHeader; 