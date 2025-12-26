import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import FAQHeader from './FAQHeader';
import FAQFooter from './FAQFooter';
import callIcon from '../SupportPage/Assets/call@2x.png';
import simIcon from '../SupportPage/Assets/sim@2x.png';
import internetIcon from '../SupportPage/Assets/internet@2x.png';
import billingIcon from '../SupportPage/Assets/billing@2x.png';
import userIcon from '../SupportPage/Assets/user@2x.png';
import settingsIcon from '../SupportPage/Assets/settings@2x.png';

const FAQPage = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  
  // State for expanded questions per category
  const [expandedQuestions, setExpandedQuestions] = useState({
    calls: [0], // First question expanded by default
    sim: [0],
    connectivity: [0],
    billing: [0],
    account: [0],
    settings: [0]
  });

  const categories = [
    { 
      id: 'calls', 
      icon: callIcon, 
      name: t.supportCalls || 'CALLS',
      questions: [
        { id: 0, question: t.faqCallsQ1 || 'QUESTION TITLE', answer: t.faqCallsA1 || 'Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti nulla at nisl augue eros dignissim suscipit bibendum lectus. Amet ornare facilisis eu facilisis phasellus. Ante rhoncus natoque posuere per vivamus magnis. Dis lacinia ut hac faucibus quisque fusce interdum. Cras ornare massa gravida pretium scelerisque mauris nisl.' },
        { id: 1, question: t.faqCallsQ2 || 'QUESTION TITLE', answer: t.faqCallsA2 || 'Answer text here...' },
        { id: 2, question: t.faqCallsQ3 || 'QUESTION TITLE', answer: t.faqCallsA3 || 'Answer text here...' },
        { id: 3, question: t.faqCallsQ4 || 'QUESTION TITLE', answer: t.faqCallsA4 || 'Answer text here...' },
        { id: 4, question: t.faqCallsQ5 || 'QUESTION TITLE', answer: t.faqCallsA5 || 'Answer text here...' },
        { id: 5, question: t.faqCallsQ6 || 'QUESTION TITLE', answer: t.faqCallsA6 || 'Answer text here...' },
        { id: 6, question: t.faqCallsQ7 || 'QUESTION TITLE', answer: t.faqCallsA7 || 'Answer text here...' }
      ]
    },
    { 
      id: 'sim', 
      icon: simIcon, 
      name: t.supportSim || 'SIM',
      questions: [
        { id: 0, question: t.faqSimQ1 || 'QUESTION TITLE', answer: t.faqSimA1 || 'Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti nulla at nisl augue eros dignissim suscipit bibendum lectus. Amet ornare facilisis eu facilisis phasellus. Ante rhoncus natoque posuere per vivamus magnis. Dis lacinia ut hac faucibus quisque fusce interdum. Cras ornare massa gravida pretium scelerisque mauris nisl.' },
        { id: 1, question: t.faqSimQ2 || 'QUESTION TITLE', answer: t.faqSimA2 || 'Answer text here...' },
        { id: 2, question: t.faqSimQ3 || 'QUESTION TITLE', answer: t.faqSimA3 || 'Answer text here...' },
        { id: 3, question: t.faqSimQ4 || 'QUESTION TITLE', answer: t.faqSimA4 || 'Answer text here...' },
        { id: 4, question: t.faqSimQ5 || 'QUESTION TITLE', answer: t.faqSimA5 || 'Answer text here...' },
        { id: 5, question: t.faqSimQ6 || 'QUESTION TITLE', answer: t.faqSimA6 || 'Answer text here...' },
        { id: 6, question: t.faqSimQ7 || 'QUESTION TITLE', answer: t.faqSimA7 || 'Answer text here...' }
      ]
    },
    { 
      id: 'connectivity', 
      icon: internetIcon, 
      name: t.supportConnectivity || 'CONNECTIVITY',
      questions: [
        { id: 0, question: t.faqConnectivityQ1 || 'QUESTION TITLE', answer: t.faqConnectivityA1 || 'Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti nulla at nisl augue eros dignissim suscipit bibendum lectus. Amet ornare facilisis eu facilisis phasellus. Ante rhoncus natoque posuere per vivamus magnis. Dis lacinia ut hac faucibus quisque fusce interdum. Cras ornare massa gravida pretium scelerisque mauris nisl.' },
        { id: 1, question: t.faqConnectivityQ2 || 'QUESTION TITLE', answer: t.faqConnectivityA2 || 'Answer text here...' },
        { id: 2, question: t.faqConnectivityQ3 || 'QUESTION TITLE', answer: t.faqConnectivityA3 || 'Answer text here...' },
        { id: 3, question: t.faqConnectivityQ4 || 'QUESTION TITLE', answer: t.faqConnectivityA4 || 'Answer text here...' },
        { id: 4, question: t.faqConnectivityQ5 || 'QUESTION TITLE', answer: t.faqConnectivityA5 || 'Answer text here...' },
        { id: 5, question: t.faqConnectivityQ6 || 'QUESTION TITLE', answer: t.faqConnectivityA6 || 'Answer text here...' },
        { id: 6, question: t.faqConnectivityQ7 || 'QUESTION TITLE', answer: t.faqConnectivityA7 || 'Answer text here...' }
      ]
    },
    { 
      id: 'billing', 
      icon: billingIcon, 
      name: t.supportBilling || 'BILLING AND ORDERS',
      questions: [
        { id: 0, question: t.faqBillingQ1 || 'QUESTION TITLE', answer: t.faqBillingA1 || 'Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti nulla at nisl augue eros dignissim suscipit bibendum lectus. Amet ornare facilisis eu facilisis phasellus. Ante rhoncus natoque posuere per vivamus magnis. Dis lacinia ut hac faucibus quisque fusce interdum. Cras ornare massa gravida pretium scelerisque mauris nisl.' },
        { id: 1, question: t.faqBillingQ2 || 'QUESTION TITLE', answer: t.faqBillingA2 || 'Answer text here...' },
        { id: 2, question: t.faqBillingQ3 || 'QUESTION TITLE', answer: t.faqBillingA3 || 'Answer text here...' },
        { id: 3, question: t.faqBillingQ4 || 'QUESTION TITLE', answer: t.faqBillingA4 || 'Answer text here...' },
        { id: 4, question: t.faqBillingQ5 || 'QUESTION TITLE', answer: t.faqBillingA5 || 'Answer text here...' },
        { id: 5, question: t.faqBillingQ6 || 'QUESTION TITLE', answer: t.faqBillingA6 || 'Answer text here...' },
        { id: 6, question: t.faqBillingQ7 || 'QUESTION TITLE', answer: t.faqBillingA7 || 'Answer text here...' }
      ]
    },
    { 
      id: 'account', 
      icon: userIcon, 
      name: t.supportAccount || 'ACCOUNT AND PRIVACY',
      questions: [
        { id: 0, question: t.faqAccountQ1 || 'QUESTION TITLE', answer: t.faqAccountA1 || 'Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti nulla at nisl augue eros dignissim suscipit bibendum lectus. Amet ornare facilisis eu facilisis phasellus. Ante rhoncus natoque posuere per vivamus magnis. Dis lacinia ut hac faucibus quisque fusce interdum. Cras ornare massa gravida pretium scelerisque mauris nisl.' },
        { id: 1, question: t.faqAccountQ2 || 'QUESTION TITLE', answer: t.faqAccountA2 || 'Answer text here...' },
        { id: 2, question: t.faqAccountQ3 || 'QUESTION TITLE', answer: t.faqAccountA3 || 'Answer text here...' },
        { id: 3, question: t.faqAccountQ4 || 'QUESTION TITLE', answer: t.faqAccountA4 || 'Answer text here...' },
        { id: 4, question: t.faqAccountQ5 || 'QUESTION TITLE', answer: t.faqAccountA5 || 'Answer text here...' },
        { id: 5, question: t.faqAccountQ6 || 'QUESTION TITLE', answer: t.faqAccountA6 || 'Answer text here...' },
        { id: 6, question: t.faqAccountQ7 || 'QUESTION TITLE', answer: t.faqAccountA7 || 'Answer text here...' }
      ]
    },
    { 
      id: 'settings', 
      icon: settingsIcon, 
      name: t.supportSettings || 'GENERAL SETTINGS',
      questions: [
        { id: 0, question: t.faqSettingsQ1 || 'QUESTION TITLE', answer: t.faqSettingsA1 || 'Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti nulla at nisl augue eros dignissim suscipit bibendum lectus. Amet ornare facilisis eu facilisis phasellus. Ante rhoncus natoque posuere per vivamus magnis. Dis lacinia ut hac faucibus quisque fusce interdum. Cras ornare massa gravida pretium scelerisque mauris nisl.' },
        { id: 1, question: t.faqSettingsQ2 || 'QUESTION TITLE', answer: t.faqSettingsA2 || 'Answer text here...' },
        { id: 2, question: t.faqSettingsQ3 || 'QUESTION TITLE', answer: t.faqSettingsA3 || 'Answer text here...' },
        { id: 3, question: t.faqSettingsQ4 || 'QUESTION TITLE', answer: t.faqSettingsA4 || 'Answer text here...' },
        { id: 4, question: t.faqSettingsQ5 || 'QUESTION TITLE', answer: t.faqSettingsA5 || 'Answer text here...' },
        { id: 5, question: t.faqSettingsQ6 || 'QUESTION TITLE', answer: t.faqSettingsA6 || 'Answer text here...' },
        { id: 6, question: t.faqSettingsQ7 || 'QUESTION TITLE', answer: t.faqSettingsA7 || 'Answer text here...' }
      ]
    }
  ];

  const toggleQuestion = (categoryId, questionId) => {
    setExpandedQuestions(prev => {
      const categoryQuestions = prev[categoryId] || [];
      if (categoryQuestions.includes(questionId)) {
        return {
          ...prev,
          [categoryId]: categoryQuestions.filter(id => id !== questionId)
        };
      } else {
        return {
          ...prev,
          [categoryId]: [...categoryQuestions, questionId]
        };
      }
    });
  };

  return (
    <div
      className="font-['Rubik',_sans-serif] text-[#333] w-full overflow-x-hidden overflow-y-visible bg-white min-h-screen"
      style={{
        fontFamily: "'Rubik', sans-serif"
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <FAQHeader />

      {/* FAQ Categories Section */}
      <section
        className="w-full"
        style={{
          backgroundColor: '#f5f5f5',
          paddingTop: 'clamp(60px, 10vw, 120px)',
          paddingBottom: 'clamp(60px, 10vw, 120px)',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)'
        }}
      >
        <div className="max-w-[1895px] mx-auto w-full">
          {categories.map((category) => (
            <div key={category.id} className="mb-12 md:mb-16">
              {/* Category Header */}
              <div
                className="flex items-center gap-4 mb-6"
                style={{
                  paddingTop: 'clamp(15px, 2vw, 25px)',
                  paddingBottom: 'clamp(15px, 2vw, 25px)',
                  paddingRight: isRTL ? 0 : 'clamp(20px, 3vw, 40px)',
                  paddingLeft: isRTL ? 'clamp(20px, 3vw, 40px)' : 0
                }}
              >
                <img
                  src={category.icon}
                  alt={category.name}
                  style={{
                    width: 'clamp(60px, 7vw, 100px)',
                    height: 'clamp(60px, 7vw, 100px)',
                    objectFit: 'contain'
                  }}
                />
                <h2
                  className="font-bold uppercase"
                  style={{
                    fontSize: 'clamp(1.5rem, 3.5vw, 48px)',
                    color: '#04365d',
                    direction: isRTL ? 'rtl' : 'ltr',
                    fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                  }}
                >
                  {category.name}
                </h2>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq) => {
                  const isExpanded = expandedQuestions[category.id]?.includes(faq.id) || false;
                  return (
                    <div
                      key={faq.id}
                      className="mb-4"
                      style={{
                        backgroundColor: '#fff',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        overflow: 'hidden'
                      }}
                    >
                      <button
                        onClick={() => toggleQuestion(category.id, faq.id)}
                        className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                        style={{
                          direction: isRTL ? 'rtl' : 'ltr',
                          fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                        }}
                      >
                        <span
                          className="font-semibold"
                          style={{
                            fontSize: 'clamp(1rem, 2.5vw, 33px)',
                            color: isExpanded ? '#005291' : '#5e5e5e',
                            flex: 1,
                            textAlign: isRTL ? 'right' : 'left'
                          }}
                        >
                          {faq.question}
                        </span>
                        <span
                          style={{
                            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                            color: '#005490',
                            fontWeight: 'bold',
                            marginLeft: isRTL ? '0' : '20px',
                            marginRight: isRTL ? '20px' : '0',
                            flexShrink: 0
                          }}
                        >
                          {isExpanded ? '×' : '+'}
                        </span>
                      </button>
                      {isExpanded && (
                        <div
                          className="p-6 pt-0"
                          style={{
                            fontSize: 'clamp(1rem, 2.5vw, 32px)',
                            color: '#666',
                            lineHeight: '1.6',
                            direction: isRTL ? 'rtl' : 'ltr',
                            fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                          }}
                        >
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <FAQFooter />
    </div>
  );
};

export default FAQPage;

