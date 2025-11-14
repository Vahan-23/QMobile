import React, { useEffect, useMemo, useState } from 'react';
import HomepageHeader from '../Homepage/HomepageHeader';
import MarketplaceFooter from '../Marketplace/MarketplaceFooter';
import ProductCard from '../Marketplace/ProductCard';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import mainProductImage from './Assets/phoneImage.jpg';
import previewImage1 from './Assets/2.jpg';
import previewImage2 from './Assets/4.jpg';

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

  useEffect(() => {
    setSelectedColor(colorOptions[0]?.id ?? '');
  }, [colorOptions]);

  useEffect(() => {
    setSelectedStorage(storageOptions[0]?.id ?? '');
  }, [storageOptions]);

  const recommendedProducts = useMemo(
    () =>
      Array.from({ length: 4 }).map((_, index) => ({
        id: `recommended-${index + 1}`,
        pricePerUnit: 320,
        quantity: 10,
        total: 3200,
        image: mainProductImage,
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
      className="font-['Rubik',_sans-serif] text-[#03355c] bg-white min-h-screen overflow-x-hidden"
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

      <main className="w-full px-5 py-10 space-y-16">
        <section className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Product details */}
          <div className="flex-1 space-y-6 px-6 py-7 lg:px-8 lg:py-9">
            <div className="space-y-2">
              <h2
                className="font-bold"
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
              className="w-full md:w-auto inline-flex items-center justify-center font-semibold uppercase tracking-wide py-3 px-8 shadow hover:opacity-90 transition-opacity"
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

            <div className="space-y-6 rounded-3xl pr-5 pl-0 py-6 lg:pr-6 lg:pl-0 lg:py-7"
              style={{
                marginTop: '30px'
              }}
            >
              <div className="space-y-3">
                <p
                  className="font-semibold text-[#4f6076]"
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
                <div className="flex flex-wrap gap-3">
                  {colorOptions.map(option => {
                    const isSelected = option.id === selectedColor;
                    return (
                      <button
                        key={option.id}
                        onClick={() => setSelectedColor(option.id)}
                        className="px-14 py-3 border transition-all font-semibold"
                        style={{
                          direction: isRTL ? 'rtl' : 'ltr',
                          fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                          fontSize: '30px',
                          borderRadius: '20px',
                          backgroundColor: isSelected ? '#66c8d5' : '#ffffff',
                          color: isSelected ? '#03355c' : '#2c3a4b',
                          borderColor: isSelected ? '#03355c' : '#03355c',
                          fontWeight: 400
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
                  className="font-semibold text-[#4f6076]"
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
                <div className="flex flex-wrap gap-3">
                  {storageOptions.map(option => {
                    const isSelected = option.id === selectedStorage;
                    return (
                      <button
                        key={option.id}
                        onClick={() => setSelectedStorage(option.id)}
                        className="px-14 py-3 border transition-all font-semibold"
                        style={{
                          direction: isRTL ? 'rtl' : 'ltr',
                          fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                          fontSize: '30px',
                          borderRadius: '20px',
                          backgroundColor: isSelected ? '#66c8d5' : '#ffffff',
                          color: isSelected ? '#03355c' : '#2c3a4b',
                          borderColor: isSelected ? '#03355c' : '#03355c',
                          fontWeight: 400
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

            <div className="flex flex-wrap items-center gap-3 text-base text-[#2c3a4b]">
              <span className="font-semibold uppercase tracking-wide">
                {t.total}
              </span>
              <span className="text-[#005490] font-bold">
                {product.totalPrice} {product.currency}
              </span>
              <span>/</span>
              <span className="font-semibold uppercase tracking-wide">
                {product.credits} {t.productPageSummaryCredits}
              </span>
              <span>=</span>
              <span>
                {product.pricePerInstallment} {formattedPerMonth}
              </span>
            </div>

            <div className="space-y-3 text-sm text-[#4f6076] leading-relaxed">
              <p
                className="font-semibold uppercase text-[#0a2c4a] tracking-wide"
                style={{
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                }}
              >
                {t.productPagePaymentSupport}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {['VISA', 'Mastercard', 'American Express'].map(card => (
                  <span
                    key={card}
                    className="px-4 py-2 rounded-full border border-[#d3d9e3] bg-white text-[#0a2c4a] text-sm font-semibold uppercase tracking-wide shadow-sm"
                    style={{
                      letterSpacing: '0.08em',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {card}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p
                className="font-semibold text-[#0a2c4a] uppercase tracking-wide"
                style={{
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                }}
              >
                {t.productPageDescriptionHeading}
              </p>
              <p
                className="text-base text-[#4f6076] leading-relaxed"
                style={{
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                }}
              >
                {t.productPageDescriptionText}
              </p>
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

        <section className="space-y-8">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h3
              className="text-2xl font-bold text-[#0a2c4a]"
              style={{
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
              }}
            >
              {t.productPageInterestHeading}
            </h3>
            <button
              className="text-[#005490] font-semibold hover:underline"
              type="button"
            >
              {t.marketplace}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

