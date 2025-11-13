import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import ProductCard from './ProductCard';

const ProductGrid = ({ selectedCategory, setSelectedCategory }) => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const desktopScrollRef = useRef(null);
  const mobileScrollRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(true);
  const [showLeftScrollButton, setShowLeftScrollButton] = useState(false);

  // Categories as in the design
  const categories = [
    { id: 'all', name: t.all },
    { id: 'category1', name: t.category1 },
    { id: 'category2', name: t.category2 },
    { id: 'category3', name: t.category3 },
    { id: 'category4', name: t.category4 },
    { id: 'category5', name: t.category5 }
  ];

  // Sample products - replace with actual data
  const productsByCategory = {
    category1: [
      { id: 1, name: 'Product title', pricePerUnit: 320, quantity: 10, total: 3200, image: null },
      { id: 2, name: 'Product title', pricePerUnit: 320, quantity: 10, total: 3200, image: null },
      { id: 3, name: 'Product title', pricePerUnit: 320, quantity: 10, total: 3200, image: null },
      { id: 4, name: 'Product title', pricePerUnit: 320, quantity: 10, total: 3200, image: null }
    ],
    category2: [
      { id: 5, name: 'Product title', pricePerUnit: 320, quantity: 10, total: 3200, image: null },
      { id: 6, name: 'Product title', pricePerUnit: 320, quantity: 10, total: 3200, image: null },
      { id: 7, name: 'Product title', pricePerUnit: 320, quantity: 10, total: 3200, image: null },
      { id: 8, name: 'Product title', pricePerUnit: 320, quantity: 10, total: 3200, image: null },
      { id: 9, name: 'Product title', pricePerUnit: 320, quantity: 10, total: 3200, image: null },
      { id: 10, name: 'Product title', pricePerUnit: 320, quantity: 10, total: 3200, image: null },
      { id: 11, name: 'Product title', pricePerUnit: 320, quantity: 10, total: 3200, image: null },
      { id: 12, name: 'Product title', pricePerUnit: 320, quantity: 10, total: 3200, image: null }
    ]
  };

  const getNormalizedScroll = useCallback((container) => {
    if (!container) return { current: 0, max: 0 };
    const max = container.scrollWidth - container.clientWidth;
    const raw = container.scrollLeft;
    const current = Math.min(Math.abs(raw), Math.max(max, 0));
    return { current, max: Math.max(max, 0) };
  }, []);

  // Check scroll position
  const checkScrollPosition = useCallback(() => {
    // Check both desktop and mobile containers, use the visible one
    const desktopContainer = desktopScrollRef.current;
    const mobileContainer = mobileScrollRef.current;
    
    // Use desktop on md+ screens, mobile on smaller screens
    const isDesktop = window.innerWidth >= 768; // md breakpoint
    const container = isDesktop ? desktopContainer : mobileContainer;
    
    if (container && container.offsetParent !== null) {
      const { current, max } = getNormalizedScroll(container);
      setShowScrollButton(current < max - 10);
      setShowLeftScrollButton(current > 10);
    }
  }, [getNormalizedScroll]);

  useEffect(() => {
    const desktopContainer = desktopScrollRef.current;
    const mobileContainer = mobileScrollRef.current;
    
    const resetScroll = () => {
      if (desktopContainer) {
        desktopContainer.scrollLeft = isRTL ? desktopContainer.scrollWidth : 0;
      }
      if (mobileContainer) {
        mobileContainer.scrollLeft = isRTL ? mobileContainer.scrollWidth : 0;
      }
      checkScrollPosition();
    };
    
    resetScroll();
    
    if (desktopContainer) {
      desktopContainer.addEventListener('scroll', checkScrollPosition);
    }
    if (mobileContainer) {
      mobileContainer.addEventListener('scroll', checkScrollPosition);
    }
    window.addEventListener('resize', checkScrollPosition);
    
    // Check again after a short delay to ensure DOM is ready
    setTimeout(resetScroll, 100);
    
    return () => {
      if (desktopContainer) {
        desktopContainer.removeEventListener('scroll', checkScrollPosition);
      }
      if (mobileContainer) {
        mobileContainer.removeEventListener('scroll', checkScrollPosition);
      }
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, [isRTL, checkScrollPosition]);

  const scrollRight = () => {
    const desktopContainer = desktopScrollRef.current;
    const mobileContainer = mobileScrollRef.current;
    const isDesktop = window.innerWidth >= 768;
    const container = isDesktop ? desktopContainer : mobileContainer;
    if (container) {
      const amount = isRTL ? -200 : 200;
      container.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    const desktopContainer = desktopScrollRef.current;
    const mobileContainer = mobileScrollRef.current;
    const isDesktop = window.innerWidth >= 768;
    const container = isDesktop ? desktopContainer : mobileContainer;
    if (container) {
      const amount = isRTL ? 200 : -200;
      container.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const currentCategory = selectedCategory || 'all';
  const categoriesToShow = currentCategory === 'all'
    ? ['category1', 'category2']
    : [currentCategory];

  return (
    <div className="w-full bg-white">
      {/* Categories Panel */}
      <div
        className="border-b border-gray-200"
        style={{
          padding: 'clamp(16px, 2vw, 30px) clamp(16px, 2.6vw, 50px)',
          fontFamily: "'Rubik', sans-serif",
          backgroundColor: '#ededed'
        }}
      >
        <div className="max-w-[1895px] mx-auto">
          {/* Desktop Layout: horizontal */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center flex-1 min-w-0" style={{ gap: 'clamp(16px, 2vw, 24px)' }}>
              <span 
                className="font-bold flex-shrink-0" 
                style={{ 
                  color: '#03355c', 
                  fontSize: 'clamp(1.5rem, 3vw, 2.8rem)',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                }}>
                {t.categories}
              </span>
              <div className="flex items-center flex-1 min-w-0 relative" style={{ gap: 'clamp(8px, 1vw, 12px)' }}>
                {/* Left scroll button block - Desktop */}
                {showLeftScrollButton && (
                  <div
                    className="absolute z-10 flex items-center justify-center flex-shrink-0 cursor-pointer"
                    style={{
                      backgroundColor: '#ededed',
                      height: '100%',
                      width: 'auto',
                      padding: '0 0.5rem',
                      ...(isRTL ? { right: 0 } : { left: 0 })
                    }}
                  >
                    <button
                      onClick={scrollLeft}
                      className="bg-transparent border-none p-0 cursor-pointer h-full flex items-center justify-center"
                      style={{ transform: isRTL ? 'none' : 'scaleX(-1)' }}
                    >
                      <img
                        src="/Images/2x/arrow_right@2x.png"
                        alt="Scroll left"
                        className="h-full w-auto object-contain"
                      />
                    </button>
                  </div>
                )}
                
                {/* Categories container - Desktop */}
                <div
                  ref={desktopScrollRef}
                  className="flex items-center scrollbar-hide"
                  style={{
                    width: '100%',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    overflowX: 'auto',
                    boxSizing: 'border-box',
                    gap: 'clamp(8px, 1vw, 12px)',
                    ...(isRTL ? {
                      paddingRight: 'clamp(40px, 5vw, 60px)',
                      paddingLeft: 'clamp(40px, 5vw, 60px)'
                    } : {
                      paddingLeft: 'clamp(40px, 5vw, 60px)',
                      paddingRight: 'clamp(40px, 5vw, 60px)'
                    })
                  }}
                  onScroll={checkScrollPosition}
                >
                  {categories.map(category => {
                    const isSelected = category.id === currentCategory;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`rounded-full font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                          isSelected
                            ? 'bg-[#03355c] text-white'
                            : 'bg-[#66c8d5]'
                        }`}
                        style={{
                          padding: 'clamp(0.8rem, 1.5vw, 1.2rem) clamp(2rem, 4vw, 4.5rem)',
                          fontWeight: 'bold',
                          fontSize: 'clamp(1rem, 1.8vw, 1.9rem)',
                          color: isSelected ? 'white' : '#03355c',
                          direction: isRTL ? 'rtl' : 'ltr',
                          fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                        }}
                      >
                        {category.name}
                      </button>
                    );
                  })}
                </div>

                {/* Right scroll button block - Desktop */}
                {showScrollButton && (
                  <div
                    className="absolute z-10 flex items-center justify-center flex-shrink-0 cursor-pointer"
                    style={{
                      backgroundColor: '#ededed',
                      height: '100%',
                      width: 'auto',
                      padding: '0 0.5rem',
                      ...(isRTL ? { left: 0 } : { right: 0 })
                    }}
                  >
                    <button
                      onClick={scrollRight}
                      className="bg-transparent border-none p-0 cursor-pointer h-full flex items-center justify-center"
                      style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }}
                    >
                      <img
                        src="/Images/2x/arrow_right@2x.png"
                        alt="Scroll right"
                        className="h-full w-auto object-contain"
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Layout: vertical */}
          <div className="flex md:hidden flex-col" style={{ gap: 'clamp(16px, 4vw, 24px)' }}>
            {/* CATEGORIES label */}
            <span 
              className="font-bold text-center" 
              style={{ 
                color: '#03355c', 
                fontSize: 'clamp(1.5rem, 3vw, 2.8rem)',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
              }}>
              {t.categories}
            </span>
            
            {/* Categories container with arrows - Mobile */}
            <div className="flex items-center gap-2" style={{ gap: 'clamp(8px, 2vw, 16px)' }}>
              {/* Left scroll button - Mobile */}
              {showLeftScrollButton && (
                <button
                  onClick={scrollLeft}
                  className="bg-transparent border-none p-0 cursor-pointer flex items-center justify-center flex-shrink-0"
                  style={{ transform: isRTL ? 'none' : 'scaleX(-1)' }}
                >
                  <img
                    src="/Images/2x/arrow_right@2x.png"
                    alt="Scroll left"
                    className="w-8 h-8 object-contain"
                  />
                </button>
              )}
              
              {/* Categories container - Mobile */}
              <div
                ref={mobileScrollRef}
                className="flex items-center scrollbar-hide flex-1 min-w-0"
                style={{
                  width: '100%',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  overflowX: 'auto',
                  boxSizing: 'border-box',
                  gap: 'clamp(8px, 1vw, 12px)'
                }}
                onScroll={checkScrollPosition}
              >
                {categories.map(category => {
                  const isSelected = category.id === currentCategory;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`rounded-full font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                        isSelected
                          ? 'bg-[#03355c] text-white'
                          : 'bg-[#66c8d5]'
                      }`}
                        style={{
                          padding: 'clamp(0.8rem, 1.5vw, 1.2rem) clamp(2rem, 4vw, 4.5rem)',
                          fontWeight: 'bold',
                          fontSize: 'clamp(1rem, 1.8vw, 1.9rem)',
                          color: isSelected ? 'white' : '#03355c',
                          direction: isRTL ? 'rtl' : 'ltr',
                          fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                        }}
                      >
                        {category.name}
                      </button>
                  );
                })}
              </div>

              {/* Right scroll button - Mobile */}
              {showScrollButton && (
                <button
                  onClick={scrollRight}
                  className="bg-transparent border-none p-0 cursor-pointer flex items-center justify-center flex-shrink-0"
                  style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }}
                >
                  <img
                    src="/Images/2x/arrow_right@2x.png"
                    alt="Scroll right"
                    className="w-8 h-8 object-contain"
                  />
                </button>
              )}
            </div>
          </div>

          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </div>

      {/* Product Sections */}
      <div className="max-w-[1895px] mx-auto" style={{ padding: 'clamp(20px, 3vw, 50px) clamp(16px, 2.6vw, 50px)' }}>
        {categoriesToShow.map((categoryKey, index) => {
          const products = productsByCategory[categoryKey] || [];
          if (products.length === 0) return null;

          return (
            <div key={categoryKey} className={index > 0 ? 'mt-12 md:mt-16' : ''} style={{ padding: '45px' }}>
              {/* Category Title */}
              <h2 
                className="font-bold text-[#03355c] uppercase"
                style={{ 
                  fontSize: '2.475rem', 
                  paddingLeft: 'clamp(0%, 2%, 5%)',
                  direction: isRTL ? 'rtl' : 'ltr',
                  textAlign: isRTL ? 'right' : 'left',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                }}
              >
                {categoryKey === 'category1' ? t.category1.toUpperCase() : t.category2.toUpperCase()}
              </h2>

              {/* Products Grid - 4 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
                {products.map(product => (
                  <div key={product.id} style={{ marginTop: '60px' }}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGrid;
