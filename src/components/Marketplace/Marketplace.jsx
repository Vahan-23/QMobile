import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import MarketplaceHeader from './MarketplaceHeader';
import ProductGrid from './ProductGrid';
import MarketplaceFooter from './MarketplaceFooter';

const Marketplace = () => {
  const { isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div
      className="font-['Rubik',_sans-serif] text-[#333] w-full overflow-x-hidden overflow-y-visible bg-white min-h-screen"
      style={{
        fontFamily: "'Rubik', sans-serif"
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header - full width */}
      <MarketplaceHeader />

      {/* Categories Panel and Product Grid - with max-width inside */}
      <ProductGrid
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Footer - full width */}
      <MarketplaceFooter />
    </div>
  );
};

export default Marketplace;
