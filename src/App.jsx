import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import WelcomePage from './components/WelcomePage';
import Homepage from './components/Homepage';
import Marketplace from './components/Marketplace';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import PaymentPage from './components/PaymentPage';
import ThankYouPage from './components/ThankYouPage';
import ErrorPage from './components/ErrorPage';
import JoinUs from './components/JoinUs';
import LoginPage from './components/LoginPage';
import General from './components/MyAccount/General';
import SupportPage from './components/SupportPage';
import FAQPage from './components/FAQpages';
import ContactUsPage from './components/ContactUsPage';
import BlogPage from './components/BlogPage';
import BlogInnerPage from './components/BlogInnerPage';
import AboutUsPage from './components/AboutUsPage';
import Page404 from './components/404Page';
import TermsPage from './components/TermsPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/product/mx1" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/faqs" element={<FAQPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogInnerPage />} />
            <Route path="/our-story" element={<AboutUsPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/terms-conditions" element={<TermsPage />} />
            <Route path="/privacy-policy" element={<TermsPage />} />
            <Route path="/cookies-policy" element={<TermsPage />} />
            <Route path="/account" element={<LoginPage />} />
            <Route path="/account/general" element={<General />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
