import React, { useEffect, useMemo, useState, useRef } from 'react';
import HomepageHeader from '../Homepage/HomepageHeader';
import MarketplaceFooter from '../Marketplace/MarketplaceFooter';
import ProductCard from '../Marketplace/ProductCard';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import mainProductImage from './Assets/phoneImage.jpg';
import previewImage1 from './Assets/2.jpg';
import previewImage2 from './Assets/4.jpg';
import visaLogo from './Assets/visa.png';
import masterLogo from './Assets/master.png';
import americanExpLogo from './Assets/americanexp.png';
import './ProductPage.css';

const ProductPage = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const product = useMemo(
    () => ({
      name: `${(t.productPageMainProductName || 'MX1 Phone')
        .split(' ')
        .map((word, index, arr) =>
          index === arr.length - 1 ? word.toUpperCase() : word
        )
        .join(' ')}`,
      credits: 10,
      installments: 10,
      pricePerInstallment: 320,
      totalPrice: 3200,
      currency: 'NIS'
    }),
    [t]
  );

  const galleryImages = useMemo(
    () => [mainProductImage, previewImage1, previewImage2],
    []
  );

  const colorOptions = useMemo(
    () => [
      { id: 'black', label: t.productPageColorBlack },
      { id: 'white', label: t.productPageColorWhite },
      { id: 'silver', label: t.productPageColorSilver }
    ],
    [t]
  );

  const storageOptions = useMemo(
    () => [
      { id: '128', label: t.productPageStorage128 },
      { id: '256', label: t.productPageStorage256 },
      { id: '512', label: t.productPageStorage512 }
    ],
    [t]
  );

  const [selectedColor, setSelectedColor] = useState(colorOptions[0]?.id ?? '');
  const [selectedStorage, setSelectedStorage] = useState(
    storageOptions[0]?.id ?? ''
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [creditsInput, setCreditsInput] = useState(product.credits.toString());
  const inputRef = useRef(null);
  const [creditsPosition, setCreditsPosition] = useState(20);
  const [inputWidth, setInputWidth] = useState(200);

  useEffect(() => {
    setSelectedColor(colorOptions[0]?.id ?? '');
  }, [colorOptions]);

  useEffect(() => {
    setSelectedStorage(storageOptions[0]?.id ?? '');
  }, [storageOptions]);

  useEffect(() => {
    const updateInputWidthAndCreditsPosition = () => {
      if (inputRef.current) {
        const input = inputRef.current;
        // Создаем временный элемент для измерения ширины текста
        const measureElement = document.createElement('span');
        measureElement.style.visibility = 'hidden';
        measureElement.style.position = 'absolute';
        measureElement.style.whiteSpace = 'nowrap';
        measureElement.style.fontSize = '40px';
        measureElement.style.fontFamily = isRTL ? 'Arial, sans-serif' : getComputedStyle(input).fontFamily;
        measureElement.style.fontWeight = '600';
        measureElement.textContent = creditsInput || '0';
        document.body.appendChild(measureElement);
        const textWidth = measureElement.offsetWidth;
        document.body.removeChild(measureElement);
        
        const inputPaddingLeft = parseInt(getComputedStyle(input).paddingLeft) || 10;
        const inputPaddingRight = parseInt(getComputedStyle(input).paddingRight) || 10;
        const creditsWidth = 120; // примерная ширина слова "Credits" (29px шрифт)
        const minSpace = 20; // минимальный отступ между цифрами и Credits
        const minInputWidth = 200; // минимальная ширина input
        
        // Вычисляем необходимую ширину input
        // Текст + padding слева + padding справа + Credits + отступ
        const requiredWidth = textWidth + inputPaddingLeft + inputPaddingRight + creditsWidth + minSpace;
        const newInputWidth = Math.max(minInputWidth, requiredWidth);
        setInputWidth(newInputWidth);
        
        // Вычисляем позицию Credits
        const textStartPosition = inputPaddingLeft;
        const textEndPosition = textStartPosition + textWidth;
        const creditsStartPosition = textEndPosition + minSpace;
        
        // Для LTR используем left позиционирование от левого края input
        // Для RTL используем right позиционирование от правого края input
        if (isRTL) {
          const rightPosition = newInputWidth - creditsStartPosition - creditsWidth;
          setCreditsPosition(Math.max(minSpace, rightPosition));
        } else {
          setCreditsPosition(creditsStartPosition);
        }
      }
    };
    
    // Небольшая задержка для того, чтобы DOM обновился
    const timeoutId = setTimeout(updateInputWidthAndCreditsPosition, 0);
    window.addEventListener('resize', updateInputWidthAndCreditsPosition);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateInputWidthAndCreditsPosition);
    };
  }, [creditsInput, isRTL]);

  const recommendedProducts = useMemo(
    () =>
      Array.from({ length: 4 }).map((_, index) => ({
        id: `recommended-${index + 1}`,
        pricePerUnit: 320,
        quantity: 10,
        total: 3200,
        image: '/Images/2x/product_placeholder@2x.png',
        name: t.productTitle
      })),
    [t]
  );

  const formattedPayWithCredits = useMemo(() => {
    const template = t.productPagePayWithCredits || '';
    return template.replace('{credits}', product.credits);
  }, [product.credits, t]);

  const formattedPerMonth = useMemo(() => {
    const template = t.productPagePerMonthLabel || '';
    return template.replace('{count}', product.installments);
  }, [product.installments, t]);

  const goToPreviousImage = () => {
    setActiveImageIndex(prevIndex => {
      const nextIndex =
        (prevIndex - 1 + galleryImages.length) % galleryImages.length;
      return nextIndex;
    });
  };

  const goToNextImage = () => {
    setActiveImageIndex(prevIndex => {
      const nextIndex = (prevIndex + 1) % galleryImages.length;
      return nextIndex;
    });
  };

  return (
    <div
      className="font-['Rubik',_sans-serif] text-[#03355c] bg-white min-h-screen overflow-x-hidden product-page-769"
      style={{
        fontFamily: "'Rubik', sans-serif"
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div
        style={{
          background: 'linear-gradient(to right, #005490 0%, #32b1d7 100%)'
        }}
      >
        <HomepageHeader
          titleKey="marketplace"
          backgroundStyle="linear-gradient(to right, #005490 0%, #32b1d7 100%)"
        />
      </div>

      <main
        className="w-full px-5 pt-10 space-y-16 product-main-769"
        style={{ paddingBottom: 0 }}
      >
        <section className="flex flex-row gap-10 items-start justify-between">
          {/* Product details */}
          <div className="flex-1 space-y-6 px-6 py-7 lg:px-8 lg:py-9 product-main-block-769">
            <div className="space-y-2">
              <h2
                className="font-bold product-title-769"
                style={{
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                  fontSize: 'clamp(2.5rem, 4vw, 52px)',
                  color: '#03355c'
                }}
              >
                {product.name}
              </h2>
              <p
                className="product-installments-769"
                style={{
                  marginTop: '20px',
                  color: '#000000',
                  fontWeight: 100,
                  fontSize: '46px',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                }}
              >
                {product.pricePerInstallment} {product.currency} ×{' '}
                {product.installments}
              </p>
              <p
                className="product-total-769"
                style={{
                  marginTop: '10px',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                  fontSize: '46px',
                  color: '#5e5e5e'
                }}
              >
                ({t.total} {product.totalPrice} {product.currency})
              </p>
            </div>

            <button
              className="w-full md:w-auto inline-flex items-center justify-center font-semibold uppercase tracking-wide py-3 px-8 shadow hover:opacity-90 transition-opacity product-pay-credits-769"
              style={{
                fontSize: '2rem',
                borderRadius: '20px',
                backgroundColor: '#919191',
                color: '#ffffff',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
              }}
            >
              {formattedPayWithCredits}
            </button>

            <div className="space-y-6 rounded-3xl pr-5 pl-0 py-6 lg:pr-6 lg:pl-0 lg:py-7 product-options-block-769"
              style={{
                marginTop: '30px'
              }}
            >
              <div className="space-y-3">
                <p
                  className="font-semibold text-[#4f6076] product-color-label-769"
                  style={{
                    direction: isRTL ? 'rtl' : 'ltr',
                    fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                    fontSize: '37px',
                    marginBottom: '18px',
                    color: '#03355c'
                  }}
                >
                  {t.productPageColorLabel}:
                </p>
                <div className="flex flex-wrap gap-3 product-options-row-769">
                  {colorOptions.map(option => {
                    const isSelected = option.id === selectedColor;
                    return (
                      <button
                        key={option.id}
                        onClick={() => setSelectedColor(option.id)}
                        className="px-14 py-3 border transition-all font-semibold product-option-btn-769"
                        style={{
                          direction: isRTL ? 'rtl' : 'ltr',
                          fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                          fontSize: '30px',
                          borderRadius: '20px',
                          backgroundColor: isSelected ? '#66c8d5' : '#ffffff',
                          color: '#03355c',
                          borderColor: '#03355c',
                          fontWeight: 'bold'
                        }}
                        type="button"
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3">
                <p
                  className="font-semibold text-[#4f6076] product-storage-label-769"
                  style={{
                    direction: isRTL ? 'rtl' : 'ltr',
                    fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                    fontSize: '37px',
                    marginBottom: '18px',
                    color: '#03355c'
                  }}
                >
                  {t.productPageStorageLabel}:
                </p>
                <div className="flex flex-wrap gap-3 product-options-row-769">
                  {storageOptions.map(option => {
                    const isSelected = option.id === selectedStorage;
                    return (
                      <button
                        key={option.id}
                        onClick={() => setSelectedStorage(option.id)}
                        className="px-14 py-3 border transition-all font-semibold product-option-btn-769"
                        style={{
                          direction: isRTL ? 'rtl' : 'ltr',
                          fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                          fontSize: '30px',
                          borderRadius: '20px',
                          backgroundColor: isSelected ? '#66c8d5' : '#ffffff',
                          color: '#03355c',
                          borderColor: '#03355c',
                          fontWeight: 'bold'
                        }}
                        type="button"
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Product gallery */}
          <div className="w-full lg:flex-1 flex flex-col gap-4 lg:items-end px-6 py-7 lg:px-8 lg:py-9">
            <div className="w-full text-center mb-6">
              <span
                className="font-bold uppercase"
                style={{
                  color: '#005291',
                  fontSize: '33px',
                  marginRight: '0.4em'
                }}
              >
                GET IT
              </span>
              <span
                className="font-bold uppercase"
                style={{
                  color: '#03355c',
                  fontSize: '33px',
                  marginRight: '0.4em'
                }}
              >
                NOW PAY WITH
              </span>
              <span
                className="font-bold uppercase"
                style={{
                  color: '#005291',
                  fontSize: '33px'
                }}
              >
                CREDITS
              </span>
            </div>
            <div
              className="relative mx-auto mb-6 bg-white rounded-3xl flex flex-col items-center justify-start"
              style={{
                width: '712px',
                height: '755px',
                padding: '0 0 32px',
                gap: '32px'
              }}
            >
              <div
                className="relative flex items-center justify-center w-full"
                style={{ height: '520px' }}
              >
                <img
                  src={galleryImages[activeImageIndex]}
                  alt={product.name}
                  className="max-w-[80%] max-h-[95%] object-contain"
                />

                <button
                  type="button"
                  onClick={goToPreviousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center"
                  aria-label="Previous image"
                >
                  <img
                    src="/Images/2x/arrow_left@2x.png"
                    alt="Previous"
                    className="w-16 h-16 object-contain"
                  />
                </button>

                <button
                  type="button"
                  onClick={goToNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center"
                  aria-label="Next image"
                >
                  <img
                    src="/Images/2x/arrow_right@2x.png"
                    alt="Next"
                    className="w-16 h-16 object-contain"
                  />
                </button>
              </div>

              <div className="flex items-center justify-center gap-5">
                {[0, 1, 2].map(index => {
                  const isActive = index === activeImageIndex;
                  return (
                    <button
                      key={`preview-${index}`}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className="overflow-hidden rounded-2xl transition-transform"
                      style={{
                        width: '100px',
                        height: '100px',
                        transform: isActive ? 'scale(1.05)' : 'scale(1)',
                        backgroundColor: isActive ? '#e2f7fb' : '#f5f7fb'
                      }}
                    >
                      <img
                        src={galleryImages[index] || galleryImages[0]}
                        alt={`${product.name} preview ${index + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-center gap-3">
                {[0, 1, 2].map(index => {
                  const isActive = index === activeImageIndex;
                  return (
                    <button
                      key={`indicator-${index}`}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className="transition-transform"
                      style={{
                        width: '15px',
                        height: '15px',
                        borderRadius: '50%',
                        backgroundColor: isActive ? '#66c8d5' : '#d3d9e3',
                        transform: isActive ? 'scale(1.1)' : 'scale(1)',
                        border: 'none'
                      }}
                    >
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Total Block */}
        <section className="w-full" style={{ backgroundColor: '#f0f0f0', marginLeft: '-20px', marginRight: '-20px', width: 'calc(100% + 40px)', marginTop: '-30px' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4" style={{ maxWidth: '1895px', margin: '0 auto', padding: '20px clamp(16px, 2.6vw, 50px)' }}>
            <div className="flex flex-wrap items-center text-base text-[#2c3a4b]" style={{ gap: '1.75rem' }}>
              <span
                className="font-semibold"
                style={{
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                  fontSize: '37px',
                  color: '#03355c'
                }}
              >
                {t.total}:
              </span>
              <span 
                style={{
                  color: '#03355c',
                  fontWeight: 600,
                  fontFamily: 'inherit',
                  fontSize: '31px',
                  paddingLeft: '73px'
                }}
              >
                {product.totalPrice} ILS
              </span>
              <span
                style={{
                  fontSize: '30px',
                  fontWeight: 700,
                  color: '#03355c'
                }}
              >
                /
              </span>
              <div className="relative inline-flex items-center">
                <input
                  ref={inputRef}
                  type="number"
                  value={creditsInput}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Ограничиваем до 14 цифр
                    if (value === '' || (value.length <= 14 && /^\d+$/.test(value))) {
                      setCreditsInput(value);
                    }
                  }}
                  maxLength={14}
                  className="px-3 text-left font-semibold no-spinner"
                  style={{
                    width: `${inputWidth}px`,
                    height: '80px',
                    fontSize: '40px',
                    color: '#03355c',
                    border: '1px solid #03355c',
                    direction: isRTL ? 'rtl' : 'ltr',
                    fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                    paddingRight: isRTL ? '10px' : '10px',
                    paddingLeft: isRTL ? '10px' : '10px',
                    paddingTop: '15px',
                    paddingBottom: '15px',
                    WebkitAppearance: 'none',
                    MozAppearance: 'textfield',
                    borderRadius: '20px'
                  }}
                />
                <style>{`
                  .no-spinner::-webkit-inner-spin-button,
                  .no-spinner::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                  }
                `}</style>
                <span
                  className="absolute font-semibold pointer-events-none"
                  style={{
                    fontSize: '29px',
                    color: '#919191',
                    direction: isRTL ? 'rtl' : 'ltr',
                    fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                    left: isRTL ? 'auto' : `${creditsPosition}px`,
                    right: isRTL ? `${creditsPosition}px` : 'auto'
                  }}
                >
                  {t.productPageSummaryCredits || 'Credits'}
                </span>
              </div>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: '29px',
                  color: '#03355c'
                }}
              >
                =
              </span>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: '29px',
                  color: '#03355c'
                }}
              >
                {product.pricePerInstallment} {formattedPerMonth}
              </span>
            </div>
            <button
              className="inline-flex items-center justify-center shadow hover:opacity-90 transition-opacity"
              style={{
                fontWeight: 100,
                fontSize: '40px',
                borderRadius: '20px',
                backgroundColor: 'rgb(0, 82, 145)',
                color: 'rgb(255, 255, 255)',
                direction: 'ltr',
                fontFamily: 'inherit',
                padding: '10px 60px',
                height: 'auto'
              }}
            >
              {t.addToCart}
            </button>
          </div>
        </section>

        {/* Payment Support and Description Block */}
        <section className="w-full px-6 pb-7 lg:px-8 lg:pb-9" style={{ paddingTop: 0 }}>
          <div className="space-y-8 max-w-[1895px] mx-auto">
            <div className="space-y-3 text-sm text-[#4f6076] leading-relaxed">
              <div className="flex flex-wrap items-center gap-3">
                <p
                  style={{
                    fontWeight: 100,
                    direction: 'ltr',
                    fontFamily: 'inherit',
                    fontSize: '28px',
                    color: '#000000',
                    margin: 0
                  }}
                >
                  {t.productPagePaymentSupport}
                </p>
                {[
                  { name: 'VISA', logo: visaLogo },
                  { name: 'Mastercard', logo: masterLogo },
                  { name: 'American Express', logo: americanExpLogo }
                ].map(card => (
                  <img
                    key={card.name}
                    src={card.logo}
                    alt={card.name}
                    style={{
                      height: '100px',
                      width: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p
                className="font-semibold text-[#0a2c4a] tracking-wide"
                style={{
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                  fontSize: '40px'
                }}
              >
                {t.productPageDescriptionHeading}
              </p>
              <p
                style={{
                  fontWeight: 100,
                  direction: 'ltr',
                  fontFamily: 'inherit',
                  fontSize: '28px',
                  color: '#000000',
                  margin: 0
                }}
              >
                {t.productPageDescriptionText}
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8" style={{ backgroundColor: '#f0f0f0', paddingBottom: '40px', paddingLeft: 0, paddingRight: 0, marginLeft: '-20px', marginRight: '-20px', width: 'calc(100% + 40px)' }}>
          <div className="flex items-center justify-between flex-wrap gap-3" style={{ paddingTop: '50px', paddingLeft: '50px' }}>
            <h3
              className="font-bold text-[#0a2c4a]"
              style={{
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                fontSize: '50px'
              }}
            >
              {t.productPageInterestHeading}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 0 }}>
            {recommendedProducts.map(productItem => (
              <ProductCard key={productItem.id} product={productItem} />
            ))}
          </div>
        </section>
      </main>

      <MarketplaceFooter />
    </div>
  );
};

export default ProductPage;

