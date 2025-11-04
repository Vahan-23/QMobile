import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white">
      {/* Product Image - Placeholder circle with Q icon */}
      <div className="w-full aspect-square bg-[#5bc0de] rounded-full flex items-center justify-center mb-4 overflow-hidden">
        {/* Если есть изображение продукта, используйте его, иначе показывайте Q иконку */}
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src="/Images/2x/Q__@2x.png"
            alt="Product"
            className="w-2/3 h-2/3 object-contain"
          />
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        {/* Product Title */}
        <h3 className="font-bold text-[#333] text-sm md:text-base lg:text-lg">
          Product title
        </h3>

        {/* Price per unit */}
        <p className="text-[#333] text-sm md:text-base">
          {product.pricePerUnit} NIS x {product.quantity}
        </p>

        {/* Total Price */}
        <p className="text-[#333] text-xs md:text-sm">
          (Total {product.total} NIS)
        </p>

        {/* Add to Cart Button */}
        <button className="w-full bg-[#03355c] text-white py-2 md:py-3 rounded-lg font-medium text-sm md:text-base hover:bg-[#003d7a] transition-colors mt-4">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
