import React, { useRef, useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ selectedCategory, setSelectedCategory }) => {
  const scrollContainerRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(true);
  const [showLeftScrollButton, setShowLeftScrollButton] = useState(false);

  // Categories as in the design
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'category1', name: 'Category 1' },
    { id: 'category2', name: 'Category 2' },
    { id: 'category3', name: 'Category 3' },
    { id: 'category4', name: 'Category 4' },
    { id: 'category5', name: 'Category 5' }
  ];

  // Sample products - replace with actual data
  const productsByCategory = {
    category1: [
      { id: 1, name: 'Product title', pricePerUnit: 320, quantity: 10, total: 3200, image: '/Images/Marketplace/prd1.png' },
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

  // Check scroll position
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowScrollButton(scrollLeft < scrollWidth - clientWidth - 10);
      setShowLeftScrollButton(scrollLeft > 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
      // Check again after a short delay to ensure DOM is ready
      setTimeout(checkScrollPosition, 100);
      return () => {
        container.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, []);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
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
        <div className="max-w-[1895px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-6 flex-1 min-w-0">
            <span className="font-bold flex-shrink-0" style={{ color: '#03355c', fontSize: '2.8rem' }}>
              CATEGORIES:
            </span>
                         <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0 relative">
                                                             {/* Left scroll button block */}
                 {showLeftScrollButton && (
                   <div
                     className="absolute left-0 z-10 flex items-center justify-center flex-shrink-0 cursor-pointer"
                     style={{
                       backgroundColor: '#ededed',
                       height: '100%',
                       width: 'auto',
                       padding: '0 0.5rem'
                     }}
                   >
                    <button
                      onClick={scrollLeft}
                      className="bg-transparent border-none p-0 cursor-pointer h-full flex items-center justify-center"
                      style={{ transform: 'scaleX(-1)' }}
                    >
                      <img
                        src="/Images/2x/arrow_right@2x.png"
                        alt="Scroll left"
                        className="h-full w-auto object-contain"
                      />
                    </button>
                  </div>
                )}
               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                {/* Categories container with fixed width - shows more categories */}
                      <div
                        ref={scrollContainerRef}
                        className="flex items-center gap-2 md:gap-3 scrollbar-hide"
                                                                              style={{
                            maxWidth: 'calc(4.3 * 320px)',
                            width: '100%',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            overflowX: 'auto',
                            boxSizing: 'border-box'
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
                            padding: '1.2rem 4.5rem',
                            fontWeight: 'bold',
                            fontSize: '1.9rem',
                            color: isSelected ? 'white' : '#03355c'
                          }}
                        >
                          {category.name}
                        </button>
                  );
                })}
              </div>
              <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

                                                                                                                                                                                                                                               {/* Right scroll button block */}
                  {showScrollButton && (
                    <div
                      className="absolute right-0 z-10 flex items-center justify-center flex-shrink-0 cursor-pointer"
                      style={{
                        backgroundColor: '#ededed',
                        height: '100%',
                        width: 'auto',
                        padding: '0 0.5rem'
                      }}
                    >
                     <button
                       onClick={scrollRight}
                       className="bg-transparent border-none p-0 cursor-pointer h-full flex items-center justify-center"
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
      </div>

      {/* Product Sections */}
      <div className="max-w-[1895px] mx-auto" style={{ padding: 'clamp(20px, 3vw, 50px) clamp(16px, 2.6vw, 50px)' }}>
        {categoriesToShow.map((categoryKey, index) => {
          const products = productsByCategory[categoryKey] || [];
          if (products.length === 0) return null;

          return (
            <div key={categoryKey} className={index > 0 ? 'mt-12 md:mt-16' : ''}>
              {/* Category Title */}
              <h2 className="font-bold text-[#333] text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 uppercase">
                {categoryKey === 'category1' ? 'CATEGORY 1' : 'CATEGORY 2'}
              </h2>

              {/* Products Grid - 4 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
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
