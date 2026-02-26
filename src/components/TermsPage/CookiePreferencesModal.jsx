import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const CookiePreferencesModal = ({ isOpen, onClose, onSave }) => {
  const { isRTL } = useLanguage();
  const [cookies, setCookies] = useState({
    strictlyNecessary: true, // mandatory, always true
    analytical: true,
    functionality: false,
    targeting: false
  });

  useEffect(() => {
    // Load saved preferences when modal opens
    if (isOpen) {
      const savedPreferences = localStorage.getItem('cookiePreferences');
      if (savedPreferences) {
        try {
          const parsed = JSON.parse(savedPreferences);
          setCookies({
            strictlyNecessary: true, // Always mandatory
            analytical: parsed.analytical !== undefined ? parsed.analytical : true,
            functionality: parsed.functionality !== undefined ? parsed.functionality : false,
            targeting: parsed.targeting !== undefined ? parsed.targeting : false
          });
        } catch (e) {
          console.error('Error parsing cookie preferences:', e);
        }
      }
    }
  }, [isOpen]);

  useEffect(() => {
    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSave = () => {
    if (onSave) {
      onSave(cookies);
    }
    if (onClose) {
      onClose();
    }
  };

  const handleCheckboxChange = (key) => {
    if (key !== 'strictlyNecessary') {
      setCookies(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        padding: '20px'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          padding: 'clamp(30px, 4vw, 50px)',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#333',
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}
        >
          ×
        </button>

        {/* Title */}
        <h2
          style={{
            fontSize: 'clamp(24px, 3vw, 32px)',
            fontWeight: 'bold',
            color: '#333333',
            marginBottom: 'clamp(20px, 3vw, 30px)',
            paddingRight: '40px',
            direction: isRTL ? 'rtl' : 'ltr',
            fontFamily: isRTL ? 'Arial, sans-serif' : "'Rubik', sans-serif"
          }}
        >
          YOUR COOKIES PREFERENCES
        </h2>

        {/* Description Text */}
        <p
          style={{
            fontSize: 'clamp(14px, 1.8vw, 18px)',
            color: '#666666',
            lineHeight: '1.6',
            marginBottom: 'clamp(20px, 3vw, 30px)',
            direction: isRTL ? 'rtl' : 'ltr',
            fontFamily: isRTL ? 'Arial, sans-serif' : "'Rubik', sans-serif"
          }}
        >
          Our website uses cookies. By clicking 'Accept all cookies' you consent to the site using all essential and non-essential cookies aiming to enhance site navigation, analyse site usage, and assist in our marketing efforts.
        </p>

        {/* Opt-out Text */}
        <p
          style={{
            fontSize: 'clamp(14px, 1.8vw, 18px)',
            color: '#333333',
            fontWeight: '600',
            marginBottom: 'clamp(15px, 2vw, 25px)',
            direction: isRTL ? 'rtl' : 'ltr',
            fontFamily: isRTL ? 'Arial, sans-serif' : "'Rubik', sans-serif"
          }}
        >
          You can opt-out of optional cookies:
        </p>

        {/* Cookie Categories */}
        <div style={{ marginBottom: 'clamp(30px, 4vw, 40px)' }}>
          {/* Strictly Necessary */}
          <label
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: 'clamp(15px, 2vw, 20px)',
              cursor: 'not-allowed',
              opacity: 0.6
            }}
          >
            <input
              type="checkbox"
              checked={cookies.strictlyNecessary}
              disabled
              readOnly
              style={{
                width: '20px',
                height: '20px',
                marginRight: '12px',
                marginTop: '2px',
                cursor: 'not-allowed'
              }}
            />
            <span
              style={{
                fontSize: 'clamp(14px, 1.8vw, 18px)',
                color: '#333333',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : "'Rubik', sans-serif"
              }}
            >
              Strictly necessary cookies (mandatory)
            </span>
          </label>

          {/* Analytical / Performance */}
          <label
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: 'clamp(15px, 2vw, 20px)',
              cursor: 'pointer'
            }}
          >
            <input
              type="checkbox"
              checked={cookies.analytical}
              onChange={() => handleCheckboxChange('analytical')}
              style={{
                width: '20px',
                height: '20px',
                marginRight: '12px',
                marginTop: '2px',
                cursor: 'pointer'
              }}
            />
            <span
              style={{
                fontSize: 'clamp(14px, 1.8vw, 18px)',
                color: '#333333',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : "'Rubik', sans-serif"
              }}
            >
              Analytical / Performance cookies
            </span>
          </label>

          {/* Functionality */}
          <label
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: 'clamp(15px, 2vw, 20px)',
              cursor: 'pointer'
            }}
          >
            <input
              type="checkbox"
              checked={cookies.functionality}
              onChange={() => handleCheckboxChange('functionality')}
              style={{
                width: '20px',
                height: '20px',
                marginRight: '12px',
                marginTop: '2px',
                cursor: 'pointer'
              }}
            />
            <span
              style={{
                fontSize: 'clamp(14px, 1.8vw, 18px)',
                color: '#333333',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : "'Rubik', sans-serif"
              }}
            >
              Functionality cookies
            </span>
          </label>

          {/* Targeting */}
          <label
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: 'clamp(15px, 2vw, 20px)',
              cursor: 'pointer'
            }}
          >
            <input
              type="checkbox"
              checked={cookies.targeting}
              onChange={() => handleCheckboxChange('targeting')}
              style={{
                width: '20px',
                height: '20px',
                marginRight: '12px',
                marginTop: '2px',
                cursor: 'pointer'
              }}
            />
            <span
              style={{
                fontSize: 'clamp(14px, 1.8vw, 18px)',
                color: '#333333',
                direction: isRTL ? 'rtl' : 'ltr',
                fontFamily: isRTL ? 'Arial, sans-serif' : "'Rubik', sans-serif"
              }}
            >
              Targeting cookies
            </span>
          </label>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          style={{
            width: '100%',
            padding: 'clamp(12px, 2vw, 16px)',
            backgroundColor: '#66c8d5',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            fontSize: 'clamp(16px, 2vw, 20px)',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            textTransform: 'uppercase',
            fontFamily: isRTL ? 'Arial, sans-serif' : "'Rubik', sans-serif"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#5ab8c4'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#66c8d5'}
        >
          SAVE PREFERENCES
        </button>
      </div>
    </div>
  );
};

export default CookiePreferencesModal;

