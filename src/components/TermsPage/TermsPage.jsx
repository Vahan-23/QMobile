import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import TermsHeader from './TermsHeader';
import TermsFooter from './TermsFooter';
import CookiePreferencesModal from './CookiePreferencesModal';

const TermsPage = () => {
  const { language, isRTL } = useLanguage();
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);

  useEffect(() => {
    // Check if user has already set cookie preferences
    const cookiePreferences = localStorage.getItem('cookiePreferences');
    if (!cookiePreferences) {
      // Show modal after a short delay
      const timer = setTimeout(() => {
        setIsCookieModalOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSaveCookiePreferences = (preferences) => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setIsCookieModalOpen(false);
  };

  const handleCloseCookieModal = () => {
    setIsCookieModalOpen(false);
  };

  const handleOpenCookieModal = () => {
    setIsCookieModalOpen(true);
  };

  return (
    <div
      className="font-['Rubik',_sans-serif] w-full overflow-x-hidden overflow-y-visible min-h-screen"
      style={{
        fontFamily: "'Rubik', sans-serif",
        background: '#e5e5e5'
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <TermsHeader showTitle={true} titleKey="termsConditions" />

      {/* Content Section */}
      <div className="max-w-[1895px] mx-auto w-full" style={{ paddingTop: 'clamp(40px, 6vw, 80px)', paddingBottom: 'clamp(40px, 6vw, 80px)', paddingLeft: 'clamp(20px, 5vw, 50px)', paddingRight: 'clamp(20px, 5vw, 50px)' }}>
        <section
          className="w-full"
          style={{
            background: '#ffffff',
            paddingTop: 'clamp(40px, 6vw, 80px)',
            paddingBottom: 'clamp(40px, 6vw, 80px)',
            paddingLeft: 'clamp(20px, 5vw, 100px)',
            paddingRight: 'clamp(20px, 5vw, 100px)',
            minHeight: '500px',
            borderRadius: '8px'
          }}
        >
          <div
            className="mx-auto"
            style={{
              width: '90%',
              color: '#333333',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : "'Rubik', sans-serif"
            }}
          >
            {/* Content Paragraphs */}
            <div style={{ marginBottom: 'clamp(20px, 3vw, 40px)' }}>
              <p
                style={{
                  fontSize: 'clamp(16px, 1.8vw, 30px)',
                  lineHeight: '1.8',
                  marginBottom: 'clamp(15px, 2vw, 25px)'
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p
                style={{
                  fontSize: 'clamp(16px, 1.8vw, 30px)',
                  lineHeight: '1.8',
                  marginBottom: 'clamp(15px, 2vw, 25px)'
                }}
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p
                style={{
                  fontSize: 'clamp(16px, 1.8vw, 30px)',
                  lineHeight: '1.8',
                  marginBottom: 'clamp(15px, 2vw, 25px)'
                }}
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p
                style={{
                  fontSize: 'clamp(16px, 1.8vw, 30px)',
                  lineHeight: '1.8',
                  marginBottom: 'clamp(15px, 2vw, 25px)'
                }}
              >
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
              <p
                style={{
                  fontSize: 'clamp(16px, 1.8vw, 30px)',
                  lineHeight: '1.8',
                  marginBottom: 'clamp(15px, 2vw, 25px)'
                }}
              >
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
              </p>
              <p
                style={{
                  fontSize: 'clamp(16px, 1.8vw, 30px)',
                  lineHeight: '1.8',
                  marginBottom: 'clamp(15px, 2vw, 25px)'
                }}
              >
                Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.
              </p>
            </div>

            {/* Last Update */}
            <div
              style={{
                marginTop: 'clamp(40px, 6vw, 80px)',
                paddingTop: 'clamp(20px, 3vw, 40px)',
                borderTop: '2px solid #e0e0e0'
              }}
            >
              <p
                style={{
                  fontSize: 'clamp(18px, 2vw, 24px)',
                  fontWeight: 'bold',
                  color: '#333333'
                }}
              >
                LAST UPDATE: 29/01/2025
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <TermsFooter onOpenCookieModal={handleOpenCookieModal} />

      {/* Cookie Preferences Modal */}
      <CookiePreferencesModal
        isOpen={isCookieModalOpen}
        onClose={handleCloseCookieModal}
        onSave={handleSaveCookiePreferences}
      />
    </div>
  );
};

export default TermsPage;

