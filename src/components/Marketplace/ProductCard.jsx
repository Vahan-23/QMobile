import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';

const ProductCard = ({ product }) => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  return (
    <>
      <style>{`
        .product-card {
          /* Эффекты убраны */
        }
      `}</style>
      <div 
        className="product-card product-card-769"
        style={{ cursor: 'pointer', backgroundColor: 'transparent' }}
      >
      {/* Product Image */}
      <div className="w-[75%] mx-auto aspect-square mb-3 overflow-hidden">
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
            fontSize: '1.4rem', 
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
            fontSize: '1.5rem', 
            color: '#000000', 
            marginTop: '15px',
            direction: isRTL ? 'rtl' : 'ltr',
            fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
          }}
        >
          {product.pricePerUnit} NIS x {product.quantity}
        </p>

        {/* Total Price */}
        <p 
          style={{ 
            fontSize: '1.1rem', 
            color: '#767676',
            direction: isRTL ? 'rtl' : 'ltr',
            fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
          }}
        >
          ({t.total} {product.total} NIS)
        </p>

        {/* Add to Cart Button */}
        <button 
          className="mx-auto text-white py-1 md:py-1.5 px-6 md:px-8 rounded-full font-medium mt-3" 
          style={{ 
            backgroundColor: '#005291', 
            fontSize: '1.2rem',
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
