import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import BlogHeader from './BlogHeader';
import BlogFooter from './BlogFooter';

// Import blog post images
import image1 from './Assets/1.jpeg';
import image2 from './Assets/2.png';
import image3 from './Assets/3.jpeg';
import image4 from './Assets/4.png';
import image5 from './Assets/5.png';
import image6 from './Assets/6.png';
import image7 from './Assets/7.png';
import image8 from './Assets/8.jpeg';
import image9 from './Assets/9.jpeg';

const BlogPage = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      image: image1,
      title: "5 ways to keep in touch with family when you're miles away",
      titleKey: 'blogPost1Title'
    },
    {
      id: 2,
      image: image2,
      title: "How to avoid surprise data charges on your first mobile bill",
      titleKey: 'blogPost2Title'
    },
    {
      id: 3,
      image: image3,
      title: "Emergency calling abroad: essential numbers and shortcuts",
      titleKey: 'blogPost3Title'
    },
    {
      id: 4,
      image: image4,
      title: "Our top communities information to get you started settling in",
      titleKey: 'blogPost4Title'
    },
    {
      id: 5,
      image: image5,
      title: "Stay connected with family in one tap using QMobile",
      titleKey: 'blogPost5Title'
    },
    {
      id: 6,
      image: image6,
      title: "When and where to find the best currency exchange rates",
      titleKey: 'blogPost6Title'
    },
    {
      id: 7,
      image: image7,
      title: "Hidden gems in town that make you feel like a local",
      titleKey: 'blogPost7Title'
    },
    {
      id: 8,
      image: image8,
      title: "Top local spots to explore on your weekends",
      titleKey: 'blogPost8Title'
    },
    {
      id: 9,
      image: image9,
      title: "Tips for crystal clear family video calls on low bandwidth",
      titleKey: 'blogPost9Title'
    }
  ];

  return (
    <div
      className="font-['Rubik',_sans-serif] text-[#333] w-full overflow-x-hidden overflow-y-visible bg-white min-h-screen"
      style={{
        fontFamily: "'Rubik', sans-serif"
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <BlogHeader />

      {/* Blog Hero Section */}
      <section
        className="w-full"
        style={{
          background: 'linear-gradient(to right, rgb(0, 84, 147), rgb(51, 177, 215))',
          paddingTop: 'clamp(30px, 5vw, 60px)',
          paddingBottom: 'clamp(20px, 3vw, 40px)',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)'
        }}
      >
        <div className="max-w-[1895px] mx-auto w-full">
          <h1
            className="text-center font-bold uppercase text-white mb-6"
            style={{
              fontSize: 'clamp(3rem, 8vw, 80px)',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              marginBottom: 'clamp(30px, 4vw, 60px)'
            }}
          >
            {t.blog?.toUpperCase() || 'BLOG'}
          </h1>
        </div>
      </section>

      {/* Blog Introduction Section */}
      <section
        className="w-full bg-white"
        style={{
          paddingTop: 'clamp(40px, 6vw, 80px)',
          paddingBottom: 'clamp(40px, 6vw, 80px)',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)'
        }}
      >
        <div className="max-w-[1895px] mx-auto w-full">
          <p
            className="text-center"
            style={{
              fontSize: 'clamp(16px, 2vw, 32px)',
              lineHeight: '1.6',
              color: '#03355c',
              maxWidth: '1200px',
              margin: '0 auto',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
            }}
          >
            {t.blogIntroduction || "Welcome to our blog, your go-to source for practical tips and advice on settling into your new home abroad. Here, you'll find easy ways to stay connected with your family and friends far away, so distance never feels like a barrier to your closest relationships."}
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section
        className="w-full bg-white"
        style={{
          paddingTop: 'clamp(20px, 4vw, 60px)',
          paddingBottom: 'clamp(60px, 10vw, 120px)',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)'
        }}
      >
        <div className="max-w-[1895px] mx-auto w-full">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
            style={{
              gap: 'clamp(24px, 3vw, 48px)'
            }}
          >
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Post Image */}
                <div
                  className="w-full overflow-hidden"
                  style={{
                    height: 'clamp(200px, 25vw, 400px)',
                    backgroundColor: '#f0f0f0'
                  }}
                >
                  <img
                    src={post.image}
                    alt={t[post.titleKey] || post.title}
                    className="w-full h-full object-cover"
                    style={{
                      transition: 'transform 0.3s ease-in-out'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>

                {/* Post Content */}
                <div
                  className="p-4 md:p-6 flex-1 flex flex-col"
                  style={{
                    padding: 'clamp(20px, 2.5vw, 40px)'
                  }}
                >
                  {/* Post Title */}
                  <h3
                    className="font-bold mb-4 text-gray-800 flex-1"
                    style={{
                      fontSize: 'clamp(18px, 2vw, 24px)',
                      lineHeight: '1.4',
                      marginBottom: 'clamp(20px, 2.5vw, 32px)',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {t[post.titleKey] || post.title}
                  </h3>

                  {/* Read More Button */}
                  <button
                    className="w-full font-bold uppercase text-white py-3 px-6 rounded-lg transition-all duration-300 hover:opacity-90"
                    style={{
                      fontSize: 'clamp(14px, 1.5vw, 18px)',
                      backgroundColor: 'rgb(0, 84, 147)',
                      paddingTop: 'clamp(12px, 1.5vw, 18px)',
                      paddingBottom: 'clamp(12px, 1.5vw, 18px)',
                      paddingLeft: 'clamp(20px, 2.5vw, 32px)',
                      paddingRight: 'clamp(20px, 2.5vw, 32px)',
                      borderRadius: '8px',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {t.readMore || 'READ MORE'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <BlogFooter />
    </div>
  );
};

export default BlogPage;

