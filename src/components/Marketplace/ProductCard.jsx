import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';

const ProductCard = ({ product }) => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  return (
    <>
      <style>{`
        @keyframes bubble {
          0% { transform: scale(0.98); }
          40% { transform: scale(0.96); }
          100% { transform: scale(1.05); }
        }
        .product-card:hover {
          animation: bubble 0.4s ease-out forwards;
        }
        .product-card {
          transition: transform 0.3s ease-out;
        }
        .product-card:not(:hover) {
          transform: scale(1);
        }
      `}</style>
      <div 
        className="bg-white product-card"
        style={{ cursor: 'pointer' }}
      >
      {/* Product Image */}
      <div className="w-[88%] mx-auto aspect-square mb-4 overflow-hidden">
        {/* Если есть изображение продукта, используйте его, иначе показывайте placeholder */}
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src="/Images/2x/product_placeholder@2x.png"
            alt="Product"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Product Info */}
      <div className="text-center">
        {/* Product Title */}
        <h3 
          className="font-bold"
          style={{ 
            fontSize: '1.625rem', 
            color: '#000000',
            direction: isRTL ? 'rtl' : 'ltr',
            fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
          }}
        >
          {t.productTitle}
        </h3>

        {/* Price per unit */}
        <p 
          style={{ 
            fontSize: '1.8rem', 
            color: '#000000', 
            marginTop: '20px',
            direction: isRTL ? 'rtl' : 'ltr',
            fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
          }}
        >
          {product.pricePerUnit} NIS x {product.quantity}
        </p>

        {/* Total Price */}
        <p 
          style={{ 
            fontSize: '1.275rem', 
            color: '#767676',
            direction: isRTL ? 'rtl' : 'ltr',
            fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
          }}
        >
          ({t.total} {product.total} NIS)
        </p>

        {/* Add to Cart Button */}
        <button 
          className="mx-auto text-white py-1 md:py-1.5 px-8 md:px-10 rounded-full font-medium hover:opacity-90 transition-opacity mt-4" 
          style={{ 
            backgroundColor: '#005291', 
            fontSize: '1.4rem',
            direction: isRTL ? 'rtl' : 'ltr',
            fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
          }}>
          {t.addToCart}
        </button>
      </div>
    </div>
    </>
  );
};

export default ProductCard;
