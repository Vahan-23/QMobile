import React, { useState, useMemo } from 'react';
import HomepageHeader from '../Homepage/HomepageHeader';
import MarketplaceFooter from '../Marketplace/MarketplaceFooter';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import visaLogo from '../ProductPage/Assets/visa.png';
import masterLogo from '../ProductPage/Assets/master.png';
import americanExpLogo from '../ProductPage/Assets/americanexp.png';
import phoneImage from '../ProductPage/Assets/phoneImage.jpg';
import './CartPage.css';

const CartPage = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  // Mock cart items data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'MX1 Phone',
      color: 'Black',
      storage: '128gb',
      image: phoneImage,
      totalPrice: 3200,
      quantity: 1,
      credits: 10,
      monthlyPayment: 320,
      months: 10
    },
    {
      id: 2,
      name: 'MX1 Phone',
      color: 'Black',
      storage: '128gb',
      image: phoneImage,
      totalPrice: 3200,
      quantity: 1,
      credits: 10,
      monthlyPayment: 320,
      months: 10
    },
    {
      id: 3,
      name: 'MX1 Phone',
      color: 'Black',
      storage: '128gb',
      image: phoneImage,
      totalPrice: 3200,
      quantity: 1,
      credits: 2,
      monthlyPayment: 1600,
      months: 2
    }
  ]);

  // Calculate totals
  const totals = useMemo(() => {
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.totalPrice * item.quantity), 0);
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    
    // Group monthly payments by months
    const monthlyPayments = {};
    cartItems.forEach(item => {
      const key = `${item.monthlyPayment} NIS x ${item.months}`;
      if (!monthlyPayments[key]) {
        monthlyPayments[key] = { amount: 0, months: item.months };
      }
      monthlyPayments[key].amount += item.monthlyPayment * item.quantity;
    });

    return {
      totalPrice,
      totalQuantity,
      monthlyPayments: Object.entries(monthlyPayments).map(([label, data]) => ({
        label: `${data.amount} NIS x ${data.months}`,
        amount: data.amount,
        months: data.months
      }))
    };
  }, [cartItems]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  return (
    <div
      className="font-['Rubik',_sans-serif] text-[#03355c] bg-white min-h-screen overflow-x-hidden cart-page"
      style={{
        fontFamily: "'Rubik', sans-serif"
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div
        style={{
          background: 'linear-gradient(to right, #005490 0%, #32b1d7 100%)'
        }}
      >
        <div className="max-w-[1895px] mx-auto w-full">
          <HomepageHeader
            titleKey="cart"
            backgroundStyle="linear-gradient(to right, #005490 0%, #32b1d7 100%)"
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full px-5 pt-10 pb-20 cart-main max-w-[1895px] mx-auto">
        {/* Your Order Section */}
        <section className="w-full">
          <h2
            className="font-bold cart-section-title"
            style={{
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              fontSize: 'clamp(2rem, 4vw, 52px)',
              color: '#03355c',
              marginBottom: 'clamp(20px, 3vw, 40px)'
            }}
          >
            {t.yourOrder || 'YOUR ORDER'}
          </h2>

          {/* Desktop Cart Table */}
          <div className="w-full overflow-x-auto hidden min-[769px]:block">
            <table className="w-full cart-table">
              <thead className="table-header-group">
                <tr className="cart-table-header">
                  <th
                    className="cart-table-header-cell"
                    style={{
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {t.product || 'Product'}
                  </th>
                  <th
                    className="cart-table-header-cell"
                    style={{
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {t.totalPrice || 'Total price'}
                  </th>
                  <th
                    className="cart-table-header-cell"
                    style={{
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {t.quantity || 'Quantity'}
                  </th>
                  <th
                    className="cart-table-header-cell"
                    style={{
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {t.credits || 'Credits'}
                  </th>
                  <th
                    className="cart-table-header-cell"
                    style={{
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {t.monthlyPayment || 'Monthly payment'}
                  </th>
                  <th className="cart-table-header-cell"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="cart-table-row">
                    <td className="cart-table-cell cart-product-cell">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="cart-product-image"
                        />
                        <div>
                          <div
                            className="font-bold cart-product-name"
                            style={{
                              direction: isRTL ? 'rtl' : 'ltr',
                              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                            }}
                          >
                            {item.name}
                          </div>
                          <div
                            className="cart-product-details"
                            style={{
                              direction: isRTL ? 'rtl' : 'ltr',
                              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                            }}
                          >
                            {item.color}, {item.storage}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="cart-table-cell">
                      <span
                        style={{
                          direction: isRTL ? 'rtl' : 'ltr',
                          fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                        }}
                      >
                        {item.totalPrice} NIS
                      </span>
                    </td>
                    <td className="cart-table-cell">
                      <span
                        style={{
                          direction: isRTL ? 'rtl' : 'ltr',
                          fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                        }}
                      >
                        {item.quantity}
                      </span>
                    </td>
                    <td className="cart-table-cell">
                      <span
                        style={{
                          direction: isRTL ? 'rtl' : 'ltr',
                          fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                        }}
                      >
                        {item.credits}
                      </span>
                    </td>
                    <td className="cart-table-cell">
                      <span
                        style={{
                          direction: isRTL ? 'rtl' : 'ltr',
                          fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                        }}
                      >
                        {item.monthlyPayment} NIS x {item.months}
                      </span>
                    </td>
                    <td className="cart-table-cell">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="cart-remove-button"
                        aria-label="Remove item"
                      >
                        <span style={{ color: '#ff0000', fontWeight: 'bold' }}>×</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* Total Row */}
              <tfoot>
                <tr className="cart-total-row">
                  <td className="cart-table-cell">
                    <span
                      className="font-bold"
                      style={{
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                      }}
                    >
                      {t.total || 'Total'}:
                    </span>
                  </td>
                  <td className="cart-table-cell">
                    <span
                      style={{
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                      }}
                    >
                      {totals.totalPrice} NIS
                    </span>
                  </td>
                  <td className="cart-table-cell">
                    <span
                      style={{
                        direction: isRTL ? 'rtl' : 'ltr',
                        fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                      }}
                    >
                      {totals.totalQuantity}
                    </span>
                  </td>
                  <td className="cart-table-cell"></td>
                  <td className="cart-table-cell">
                    <div className="flex flex-col">
                      {totals.monthlyPayments.map((payment, index) => (
                        <span
                          key={index}
                          style={{
                            direction: isRTL ? 'rtl' : 'ltr',
                            fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                          }}
                        >
                          {payment.label}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="cart-table-cell"></td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Mobile Cart Cards */}
          <div className="w-full max-[768px]:block min-[769px]:hidden">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-mobile-card">
                <button
                  onClick={() => removeItem(item.id)}
                  className="cart-mobile-remove"
                  aria-label="Remove item"
                >
                  <span className="cart-mobile-remove-icon">×</span>
                </button>
                <div className="cart-mobile-card-content">
                  <div className="cart-mobile-product-info">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-mobile-image"
                    />
                    <div className="cart-mobile-product-details">
                      <div
                        className="cart-mobile-product-name"
                        style={{
                          direction: isRTL ? 'rtl' : 'ltr',
                          fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                        }}
                      >
                        {item.name}
                      </div>
                      <div
                        className="cart-mobile-product-specs"
                        style={{
                          direction: isRTL ? 'rtl' : 'ltr',
                          fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                        }}
                      >
                        {item.color}, {item.storage}
                      </div>
                    </div>
                  </div>
                  <div className="cart-mobile-quantity-section">
                    <div className="cart-mobile-quantity-row">
                      <div className="cart-mobile-quantity-controls">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="cart-mobile-quantity-btn"
                          aria-label="Decrease quantity"
                        >
                          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>-</span>
                        </button>
                        <span
                          className="cart-mobile-quantity-value"
                          style={{
                            direction: isRTL ? 'rtl' : 'ltr',
                            fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                          }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="cart-mobile-quantity-btn"
                          aria-label="Increase quantity"
                        >
                          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>+</span>
                        </button>
                      </div>
                      <span
                        className="cart-mobile-quantity-label"
                        style={{
                          direction: isRTL ? 'rtl' : 'ltr',
                          fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                        }}
                      >
                        {t.quantity || 'Quantity'}
                      </span>
                    </div>
                    <div className="cart-mobile-details-below-quantity">
                      <div className="cart-mobile-detail-item-with-label">
                        <span
                          className="cart-mobile-detail-value"
                          style={{
                            direction: isRTL ? 'rtl' : 'ltr',
                            fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                          }}
                        >
                          {item.totalPrice} NIS
                        </span>
                        <span
                          className="cart-mobile-detail-label"
                          style={{
                            direction: isRTL ? 'rtl' : 'ltr',
                            fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                          }}
                        >
                          {t.totalPrice || 'Total price'}
                        </span>
                      </div>
                      <div className="cart-mobile-detail-item-with-label">
                        <span
                          className="cart-mobile-detail-value"
                          style={{
                            direction: isRTL ? 'rtl' : 'ltr',
                            fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                          }}
                        >
                          {item.credits}
                        </span>
                        <span
                          className="cart-mobile-detail-label"
                          style={{
                            direction: isRTL ? 'rtl' : 'ltr',
                            fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                          }}
                        >
                          {t.credits || 'Credits'}
                        </span>
                      </div>
                      <div className="cart-mobile-detail-item-with-label">
                        <span
                          className="cart-mobile-monthly-payment"
                          style={{
                            direction: isRTL ? 'rtl' : 'ltr',
                            fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                          }}
                        >
                          {item.monthlyPayment} NIS x {item.months}
                        </span>
                        <span
                          className="cart-mobile-detail-label"
                          style={{
                            direction: isRTL ? 'rtl' : 'ltr',
                            fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                          }}
                        >
                          {t.monthlyPayment || 'Monthly payment'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Mobile Total Summary */}
            <div className="cart-mobile-total">
              <div className="cart-mobile-total-grid">
                <div className="cart-mobile-total-item">
                  <span
                    className="cart-mobile-total-value"
                    style={{
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {totals.totalPrice} NIS
                  </span>
                  <span
                    className="cart-mobile-total-label"
                    style={{
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {t.totalPriceForOrder || 'Total price for order'}
                  </span>
                </div>
                <div className="cart-mobile-total-item">
                  <span
                    className="cart-mobile-total-value"
                    style={{
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {totals.totalQuantity}
                  </span>
                  <span
                    className="cart-mobile-total-label"
                    style={{
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {t.totalItems || 'Total items'}
                  </span>
                </div>
                <div className="cart-mobile-total-item">
                  <div className="cart-mobile-total-payments">
                    {totals.monthlyPayments.map((payment, index) => (
                      <span
                        key={index}
                        className="cart-mobile-total-value"
                        style={{
                          direction: isRTL ? 'rtl' : 'ltr',
                          fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                        }}
                      >
                        {payment.label}
                      </span>
                    ))}
                  </div>
                  <span
                    className="cart-mobile-total-label"
                    style={{
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {t.amountXMonths || 'Amount x Months'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-8 cart-payment-section">
            <div className="flex flex-wrap items-center gap-3">
              <p
                className="cart-payment-text"
                style={{
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                  margin: 0
                }}
              >
                {t.productPagePaymentSupport || 'We support secure payment with the following credit cards:'}
              </p>
              <div className="flex items-center gap-3 cart-payment-logos">
                <img
                  src={visaLogo}
                  alt="VISA"
                  className="cart-payment-logo"
                />
                <img
                  src={masterLogo}
                  alt="Mastercard"
                  className="cart-payment-logo"
                />
                <img
                  src={americanExpLogo}
                  alt="American Express"
                  className="cart-payment-logo"
                />
              </div>
            </div>
            <button
              className="cart-proceed-button"
              style={{
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
              }}
            >
              {t.proceedToPayment || 'PROCEED TO PAYMENT'}
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <div className="max-w-[1895px] mx-auto w-full">
        <MarketplaceFooter />
      </div>
    </div>
  );
};

export default CartPage;

