import React, { useState, useMemo } from 'react';
import HomepageHeader from '../Homepage/HomepageHeader';
import MarketplaceFooter from '../Marketplace/MarketplaceFooter';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import masterLogo from '../ProductPage/Assets/master.png';
import phoneImage from '../ProductPage/Assets/phoneImage.jpg';
import locationIcon from './Assets/location_11080891.svg';
import './PaymentPage.css';

const PaymentPage = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const [isPaymentsTableExpanded, setIsPaymentsTableExpanded] = useState(true);

  // Mock order data - in real app, this would come from cart/order context
  const orderItems = useMemo(() => [
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
  ], []);

  // Mock shipping address
  const shippingAddress = {
    street: 'Rothchild 1, Tel Aviv',
    floor: 'Floor 5, entrance #2',
    postalCode: '720000',
    country: 'Israel'
  };

  // Mock credit card
  const creditCard = {
    type: 'Mastercard',
    lastFour: '2222',
    expiryMonth: '05',
    expiryYear: '29',
    logo: masterLogo
  };

  // Calculate totals
  const totals = useMemo(() => {
    const totalPrice = orderItems.reduce((sum, item) => sum + (item.totalPrice * item.quantity), 0);
    const totalQuantity = orderItems.reduce((sum, item) => sum + item.quantity, 0);
    const shippingCost = 35;
    
    // Group monthly payments by months
    const monthlyPayments = {};
    orderItems.forEach(item => {
      const key = `${item.monthlyPayment} NIS x ${item.months}`;
      if (!monthlyPayments[key]) {
        monthlyPayments[key] = { amount: 0, months: item.months };
      }
      monthlyPayments[key].amount += item.monthlyPayment * item.quantity;
    });

    return {
      totalPrice,
      totalQuantity,
      shippingCost,
      monthlyPayments: Object.entries(monthlyPayments).map(([label, data]) => ({
        label: `${data.amount} NIS x ${data.months}`,
        amount: data.amount,
        months: data.months
      }))
    };
  }, [orderItems]);

  // Generate payment schedule
  const paymentSchedule = useMemo(() => {
    const schedule = [];
    let currentMonth = 6; // June 2025 (06/2025)
    let currentYear = 2025;
    
    // Calculate payment amounts based on order items
    // Order: 2 items with 320 NIS x 10 months each = 640 NIS/month for 10 months
    //        1 item with 1600 NIS x 2 months = 1600 NIS/month for 2 months
    const monthly640 = orderItems
      .filter(item => item.monthlyPayment === 320 && item.months === 10)
      .reduce((sum, item) => sum + item.monthlyPayment * item.quantity, 0); // 640
    
    const monthly1600 = orderItems
      .filter(item => item.monthlyPayment === 1600 && item.months === 2)
      .reduce((sum, item) => sum + item.monthlyPayment * item.quantity, 0); // 1600
    
    // First payment includes shipping (640 + 1600 + 35 = 2275)
    schedule.push({
      paymentNumber: 1,
      month: `${String(currentMonth).padStart(2, '0')}/${currentYear}`,
      total: monthly640 + monthly1600 + totals.shippingCost
    });

    // Second payment (640 + 1600 = 2240)
    currentMonth++;
    schedule.push({
      paymentNumber: 2,
      month: `${String(currentMonth).padStart(2, '0')}/${currentYear}`,
      total: monthly640 + monthly1600
    });

    // Payments 3-10: only 640 NIS (the 1600 payment ends after 2 months)
    for (let i = 3; i <= 10; i++) {
      currentMonth++;
      if (currentMonth > 12) {
        currentMonth = 1;
        currentYear++;
      }
      
      schedule.push({
        paymentNumber: i,
        month: `${String(currentMonth).padStart(2, '0')}/${currentYear}`,
        total: monthly640
      });
    }

    return schedule;
  }, [orderItems, totals.shippingCost]);

  const handlePayForOrder = () => {
    // Integrate with Tranznila payment gateway
    // This is a placeholder - replace with actual Tranznila integration
    console.log('Processing payment with Tranznila...');
    
    // Example Tranznila integration structure:
    // const tranznilaConfig = {
    //   sum: totals.totalPrice + totals.shippingCost,
    //   currency: 'ILS',
    //   myid: 'order_' + Date.now(),
    //   // ... other Tranznila parameters
    // };
    // window.location.href = `https://secure5.tranzila.com/?sum=${tranznilaConfig.sum}&currency=${tranznilaConfig.currency}&myid=${tranznilaConfig.myid}`;
  };

  return (
    <div
      className="font-['Rubik',_sans-serif] text-[#03355c] bg-white min-h-screen overflow-x-hidden payment-page"
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
            titleKey="payForYourOrder"
            backgroundStyle="linear-gradient(to right, #005490 0%, #32b1d7 100%)"
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full pb-20 payment-main max-w-[1895px] mx-auto" style={{ paddingTop: '40px', paddingLeft: '3rem', paddingRight: '3rem' }}>
         {/* Shipping Address Section */}
         <section className="w-full mb-10 payment-section" style={{ display: 'flex', flexDirection: 'column', minHeight: '400px' }}>
           <div>
             <h2
               className="font-bold payment-section-title"
               style={{
                 direction: isRTL ? 'rtl' : 'ltr',
                 fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                 fontSize: '55px',
                 color: '#03355c',
                 marginBottom: 0,
                 paddingBottom: 0
               }}
             >
               {t.shippingAddress || 'SHIPPING ADDRESS'}
             </h2>
             
             <p
               className="payment-subtitle"
               style={{
                 direction: isRTL ? 'rtl' : 'ltr',
                 fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                 fontSize: '32px',
                 color: '#03355c',
                 fontWeight: 'bold',
                 marginBottom: 'clamp(10px, 1.5vw, 20px)'
               }}
             >
               {t.yourRegisteredBillingAddress || 'Your registered billing address:'}
             </p>

             <div
               className="payment-address-box"
               style={{
                 direction: isRTL ? 'rtl' : 'ltr',
                 fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                 fontSize: '30px',
                 color: '#03355c',
                 backgroundColor: '#f0f0f0',
                 padding: '20px',
                 borderRadius: '20px',
                 border: '1px solid #03355c',
                 marginBottom: 'clamp(15px, 2vw, 25px)',
                 width: '33.333%'
               }}
             >
               <div>{shippingAddress.street}</div>
               <div>{shippingAddress.floor}</div>
               <div>{shippingAddress.postalCode}</div>
               <div>{shippingAddress.country}</div>
             </div>
           </div>

           <div className="flex flex-col gap-3" style={{ marginTop: 'auto' }}>
            <a
              href="#"
              className="flex items-end gap-2 payment-link"
              style={{
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              <span
                style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: '#03355c'
                }}
              >
                {t.changeShippingAddress || 'CHANGE SHIPPING ADDRESS'}
              </span>
              <img
                src="/Images/2x/underline@2x.png"
                alt="Underline"
                style={{
                  width: 'auto',
                  height: 'clamp(2px, 0.3vw, 4px)',
                  objectFit: 'contain',
                  alignSelf: 'flex-end',
                  marginBottom: '8px'
                }}
              />
            </a>
            
            <a
              href="#"
              className="flex items-end gap-2 payment-link"
              style={{
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              <img
                src={locationIcon}
                alt="Location"
                className="payment-location-icon"
                style={{
                  width: 'clamp(20px, 2.5vw, 40px)',
                  height: 'clamp(20px, 2.5vw, 40px)',
                  alignSelf: 'flex-end'
                }}
              />
              <span
                style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: '#03355c'
                }}
              >
                {t.findMyCurrentLocation || 'FIND MY CURRENT LOCATION'}
              </span>
              <img
                src="/Images/2x/underline@2x.png"
                alt="Underline"
                style={{
                  width: 'auto',
                  height: 'clamp(2px, 0.3vw, 4px)',
                  objectFit: 'contain',
                  alignSelf: 'flex-end',
                  marginBottom: '8px'
                }}
              />
            </a>
          </div>
        </section>

        {/* Review Your Order Section */}
        <section className="w-full mb-10 payment-section">
          <h2
            className="font-bold payment-section-title"
            style={{
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              fontSize: 'clamp(1.5rem, 3vw, 36px)',
              color: '#03355c',
              marginBottom: 'clamp(15px, 2vw, 30px)'
            }}
          >
            {t.reviewYourOrder || 'REVIEW YOUR ORDER'}
          </h2>

          {/* Desktop Order Table */}
          <div className="w-full overflow-x-auto hidden min-[769px]:block">
            <table className="w-full payment-table">
              <thead>
                <tr className="payment-table-header">
                  <th className="payment-table-header-cell">{t.product || 'Product'}</th>
                  <th className="payment-table-header-cell">{t.totalPrice || 'Total price'}</th>
                  <th className="payment-table-header-cell">{t.quantity || 'Quantity'}</th>
                  <th className="payment-table-header-cell">{t.credits || 'Credits'}</th>
                  <th className="payment-table-header-cell">{t.monthlyPayment || 'Monthly payment'}</th>
                </tr>
              </thead>
              <tbody>
                {orderItems.map((item) => (
                  <tr key={item.id} className="payment-table-row">
                    <td className="payment-table-cell payment-product-cell">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="payment-product-image"
                        />
                        <div>
                          <div className="font-bold payment-product-name">{item.name}</div>
                          <div className="payment-product-details">
                            {item.color}, {item.storage}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="payment-table-cell">{item.totalPrice} NIS</td>
                    <td className="payment-table-cell">{item.quantity}</td>
                    <td className="payment-table-cell">{item.credits}</td>
                    <td className="payment-table-cell">
                      {item.monthlyPayment} NIS x {item.months} {t.months || 'months'}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="payment-total-row">
                  <td className="payment-table-cell font-bold">
                    {t.total || 'Total'}:
                  </td>
                  <td className="payment-table-cell">{totals.totalPrice} NIS</td>
                  <td className="payment-table-cell">{totals.totalQuantity}</td>
                  <td className="payment-table-cell"></td>
                  <td className="payment-table-cell">
                    <div className="flex flex-col">
                      {totals.monthlyPayments.map((payment, index) => (
                        <span key={index}>{payment.label}</span>
                      ))}
                    </div>
                  </td>
                </tr>
                <tr className="payment-shipping-row">
                  <td className="payment-table-cell font-bold">
                    {t.shipping || 'Shipping'}:
                  </td>
                  <td className="payment-table-cell">{totals.shippingCost} NIS</td>
                  <td className="payment-table-cell"></td>
                  <td className="payment-table-cell"></td>
                  <td className="payment-table-cell">
                    {t.doorToDoorCourier || 'Door to door courier'}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Mobile Order Cards */}
          <div className="w-full max-[768px]:block min-[769px]:hidden">
            {orderItems.map((item) => (
              <div key={item.id} className="payment-mobile-card">
                <div className="payment-mobile-card-content">
                  <div className="payment-mobile-product-info">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="payment-mobile-image"
                    />
                    <div className="payment-mobile-product-details">
                      <div className="payment-mobile-product-name">{item.name}</div>
                      <div className="payment-mobile-product-specs">
                        {item.color}, {item.storage}
                      </div>
                    </div>
                  </div>
                  <div className="payment-mobile-details-grid">
                    <div className="payment-mobile-detail-item">
                      <span className="payment-mobile-detail-label">{t.totalPrice || 'Total price'}</span>
                      <span className="payment-mobile-detail-value">{item.totalPrice} NIS</span>
                    </div>
                    <div className="payment-mobile-detail-item">
                      <span className="payment-mobile-detail-label">{t.quantity || 'Quantity'}</span>
                      <span className="payment-mobile-detail-value">{item.quantity}</span>
                    </div>
                    <div className="payment-mobile-detail-item">
                      <span className="payment-mobile-detail-label">{t.credits || 'Credits'}</span>
                      <span className="payment-mobile-detail-value">{item.credits}</span>
                    </div>
                    <div className="payment-mobile-detail-item">
                      <span className="payment-mobile-detail-label">{t.monthlyPayment || 'Monthly payment'}</span>
                      <span className="payment-mobile-detail-value">
                        {item.monthlyPayment} NIS x {item.months}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Mobile Total Summary */}
            <div className="payment-mobile-total">
              <div className="payment-mobile-total-item">
                <span className="payment-mobile-total-label">{t.total || 'Total'}:</span>
                <span className="payment-mobile-total-value">{totals.totalPrice} NIS</span>
              </div>
              <div className="payment-mobile-total-item">
                <span className="payment-mobile-total-label">{t.quantity || 'Quantity'}:</span>
                <span className="payment-mobile-total-value">{totals.totalQuantity}</span>
              </div>
              <div className="payment-mobile-shipping">
                <span className="payment-mobile-total-label">{t.shipping || 'Shipping'}:</span>
                <span className="payment-mobile-total-value">{totals.shippingCost} NIS</span>
                <span className="payment-mobile-shipping-method">
                  {t.doorToDoorCourier || 'Door to door courier'}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Your Credit Card Section */}
        <section className="w-full mb-10 payment-section">
          <h3
            className="payment-credit-card-title"
            style={{
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              fontSize: 'clamp(1.2rem, 2.5vw, 28px)',
              color: '#03355c',
              marginBottom: 'clamp(15px, 2vw, 25px)'
            }}
          >
            {t.yourCreditCard || 'Your credit card:'}
          </h3>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 payment-credit-card-section">
            <div className="flex items-center gap-4">
              <img
                src={creditCard.logo}
                alt={creditCard.type}
                className="payment-card-logo"
                style={{
                  width: 'clamp(40px, 5vw, 80px)',
                  height: 'auto'
                }}
              />
              <div>
                <div
                  className="payment-card-number"
                  style={{
                    direction: isRTL ? 'rtl' : 'ltr',
                    fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                    fontSize: 'clamp(16px, 2vw, 32px)',
                    color: '#03355c',
                    fontWeight: 'bold',
                    marginBottom: '5px'
                  }}
                >
                  **{creditCard.lastFour} {creditCard.expiryMonth}/{creditCard.expiryYear}
                </div>
                <a
                  href="#"
                  className="payment-link"
                  style={{
                    direction: isRTL ? 'rtl' : 'ltr',
                    fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                    fontSize: 'clamp(12px, 1.5vw, 20px)',
                    color: '#03355c',
                    textDecoration: 'underline',
                    textDecorationStyle: 'dashed',
                    cursor: 'pointer'
                  }}
                >
                  {t.addNewCreditCard || 'ADD NEW CREDIT CARD'}
                </a>
              </div>
            </div>
            
            <button
              onClick={handlePayForOrder}
              className="payment-pay-button"
              style={{
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                fontSize: 'clamp(14px, 2vw, 28px)',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                backgroundColor: '#005490',
                color: '#ffffff',
                border: 'none',
                padding: 'clamp(12px, 2vw, 20px) clamp(30px, 5vw, 60px)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'opacity 0.3s',
                whiteSpace: 'nowrap'
              }}
            >
              {t.payForMyOrder || 'PAY FOR MY ORDER'}
            </button>
          </div>
        </section>

        {/* Payments Table Section */}
        <section className="w-full payment-section">
          <div className="flex items-center justify-between mb-4">
            <h2
              className="font-bold payment-section-title"
              style={{
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                fontSize: 'clamp(1.5rem, 3vw, 36px)',
                color: '#03355c',
                margin: 0
              }}
            >
              {t.paymentsTable || 'PAYMENTS TABLE'}
            </h2>
            <button
              onClick={() => setIsPaymentsTableExpanded(!isPaymentsTableExpanded)}
              className="payment-toggle-button"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 'clamp(24px, 3vw, 48px)',
                color: '#03355c',
                padding: '5px'
              }}
            >
              {isPaymentsTableExpanded ? '−' : '+'}
            </button>
          </div>

          {isPaymentsTableExpanded && (
            <div className="w-full overflow-x-auto">
              <table className="w-full payment-schedule-table">
                <thead>
                  <tr className="payment-table-header">
                    <th className="payment-table-header-cell">{t.paymentNumber || 'PAYMENT #'}</th>
                    <th className="payment-table-header-cell">{t.month || 'MONTH'}</th>
                    <th className="payment-table-header-cell">{t.total || 'TOTAL'}</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentSchedule.map((payment) => (
                    <tr key={payment.paymentNumber} className="payment-table-row">
                      <td className="payment-table-cell">{payment.paymentNumber}</td>
                      <td className="payment-table-cell">{payment.month}</td>
                      <td className="payment-table-cell">{payment.total} ILS</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <div className="max-w-[1895px] mx-auto w-full">
        <MarketplaceFooter />
      </div>
    </div>
  );
};

export default PaymentPage;

