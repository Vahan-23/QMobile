import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import BlogInnerHeader from './BlogInnerHeader';
import BlogInnerFooter from './BlogInnerFooter';

// Import images from BlogPage Assets
import image1 from '../BlogPage/Assets/1.jpeg';
import image2 from '../BlogPage/Assets/2.png';
import image3 from '../BlogPage/Assets/3.jpeg';
import image4 from '../BlogPage/Assets/4.png';
import image5 from '../BlogPage/Assets/5.png';
import image6 from '../BlogPage/Assets/6.png';
import image7 from '../BlogPage/Assets/7.png';
import image8 from '../BlogPage/Assets/8.jpeg';
import image9 from '../BlogPage/Assets/9.jpeg';

const BlogInnerPage = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const { id } = useParams();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // All blog posts data (same as BlogPage)
  const allBlogPosts = [
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

  // Find current post by id
  const currentPostId = parseInt(id || '1', 10);
  const currentPost = allBlogPosts.find(post => post.id === currentPostId) || allBlogPosts[0];
  const heroImage = currentPost.image;
  const articleTitle = currentPost.title;
  const articleTitleKey = currentPost.titleKey;

  // Related posts data (exclude current post)
  const relatedPosts = allBlogPosts
    .filter(post => post.id !== currentPostId)
    .slice(0, 3);

  return (
    <div
      className="font-['Rubik',_sans-serif] text-[#333] w-full overflow-x-hidden overflow-y-visible bg-white min-h-screen"
      style={{
        fontFamily: "'Rubik', sans-serif"
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <BlogInnerHeader />

      {/* Article Title Banner */}
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
            className="text-center font-bold uppercase text-white"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 38px)',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
            }}
          >
            {t[articleTitleKey] || articleTitle}
          </h1>
        </div>
      </section>

      {/* Back to Blog Link */}
      <section
        className="w-full bg-white"
        style={{
          paddingTop: 'clamp(20px, 3vw, 40px)',
          paddingBottom: 'clamp(20px, 3vw, 40px)',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)'
        }}
      >
        <div className="max-w-[1895px] mx-auto w-full">
          <Link
            to="/blog"
            className="inline-block hover:opacity-70 transition-opacity"
            style={{
              fontSize: '28px',
              fontWeight: 600,
              color: '#03355c',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
              textDecoration: 'none'
            }}
          >
            {t.backToBlog || 'BACK TO BLOG'}
          </Link>
        </div>
      </section>

      {/* Hero Image Section */}
      <section
        className="w-full bg-white"
        style={{
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)',
          paddingBottom: 'clamp(40px, 6vw, 80px)'
        }}
      >
        <div className="max-w-[1895px] mx-auto w-full">
          <div
            className="relative w-full rounded-lg overflow-hidden"
            style={{
              borderRadius: '12px',
              height: isMobile ? 'auto' : 'clamp(300px, 40vw, 600px)',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row'
            }}
          >
            {/* Left side - Image */}
            <div
              className="relative"
              style={{
                flex: isMobile ? '0 0 auto' : '0 0 50%',
                width: isMobile ? '100%' : 'auto',
                height: isMobile ? 'clamp(200px, 50vw, 400px)' : '100%'
              }}
            >
              <img
                src={heroImage}
                alt={t[articleTitleKey] || articleTitle}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right side - Title overlay */}
            <div
              className="flex items-center justify-center p-8"
              style={{
                flex: isMobile ? '0 0 auto' : '0 0 50%',
                width: isMobile ? '100%' : 'auto',
                minHeight: isMobile ? 'clamp(150px, 30vw, 250px)' : 'auto',
                background: 'linear-gradient(to right, rgb(0, 84, 147), rgb(51, 177, 215))',
                padding: 'clamp(20px, 3vw, 60px)'
              }}
            >
              <h2
                className="text-white font-bold uppercase text-center"
                style={{
                  fontSize: 'clamp(16px, 2vw, 32px)',
                  lineHeight: '1.3',
                  direction: isRTL ? 'rtl' : 'ltr',
                  fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                }}
              >
                {t[articleTitleKey] || articleTitle}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Section */}
      <section
        className="w-full bg-white"
        style={{
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0
        }}
      >
        <div className="mx-auto w-full" style={{ width: '90%', maxWidth: '1895px' }}>
          {/* First paragraph - larger and colored */}
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 36px)',
              lineHeight: '1.6',
              color: '#03355c',
              marginBottom: 'clamp(20px, 3vw, 40px)',
              textAlign: 'justify',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae turpis euismod, pretium nisl et, placerat leo. Sed sit amet diam auctor, luctus velit vitae, facilisis sapien. Donec facilisis, nibh ac hendrerit rutrum, purus velit aliquet nunc, eu porta ligula nisl vitae orci. Integer euismod, purus quis vulputate facilisis, eros purus interdum justo, at luctus purus tellus sit amet purus. Cras sit amet vehicula nisl.
          </p>

          {/* Remaining paragraphs */}
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 36px)',
              lineHeight: '1.6',
              color: '#03355c',
              marginBottom: 'clamp(20px, 3vw, 40px)',
              textAlign: 'justify',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
            }}
          >
            Nulla facilisi. Proin non tortor eu felis cursus imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus vitae arcu nec lectus tincidunt interdum nec ac lectus. Aliquam erat volutpat. Vivamus maximus ultricies ex, vitae varius orci vulputate vitae. Quisque ultrices, mauris ac ultricies laoreet, mauris magna tempus est, sit amet vehicula nisl nunc sed orci.
          </p>

          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 36px)',
              lineHeight: '1.6',
              color: '#03355c',
              marginBottom: 'clamp(20px, 3vw, 40px)',
              textAlign: 'justify',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
            }}
          >
            Maecenas lobortis posuere purus, id egestas purus ullamcorper a. Morbi feugiat, justo at tincidunt vulputate, ipsum urna vestibulum elit, nec tincidunt neque dolor non velit. Aenean commodo, nunc vitae posuere tristique, risus mauris malesuada turpis, a facilisis elit sem quis turpis. Suspendisse potenti. Cras sit amet magna vitae elit interdum consequat. Praesent in odio vitae libero consequat ultricies at non tortor. Sed at mauris sit amet metus vehicula porta.
          </p>

          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 36px)',
              lineHeight: '1.6',
              color: '#03355c',
              marginBottom: 'clamp(20px, 3vw, 40px)',
              textAlign: 'justify',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
            }}
          >
            Etiam euismod, mi eget aliquet ultricies, urna urna tincidunt sapien, at consectetur mi odio et purus. Nulla bibendum nulla eu mi consequat, sit amet molestie libero euismod. Suspendisse sed tortor vel arcu dictum porta nec a odio. Vivamus id porta mauris. Aliquam ut posuere purus, vitae congue nunc. Sed vitae turpis quis magna hendrerit venenatis. Phasellus suscipit sagittis eros, vitae vulputate massa scelerisque sit amet.
          </p>
        </div>
      </section>

      {/* More to Read Section */}
      <section
        className="w-full bg-white"
        style={{
          paddingTop: 'clamp(40px, 6vw, 80px)',
          paddingBottom: 'clamp(60px, 10vw, 120px)',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)'
        }}
      >
        <div className="max-w-[1895px] mx-auto w-full">
          {/* Separator */}
          <div
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: '#e0e0e0',
              marginBottom: 'clamp(40px, 6vw, 80px)'
            }}
          />

          {/* Section Title */}
          <h2
            className="text-center font-bold uppercase mb-8"
            style={{
              fontSize: 'clamp(24px, 3vw, 48px)',
              color: '#03355c',
              marginBottom: 'clamp(40px, 6vw, 60px)',
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
            }}
          >
            {t.moreToRead || 'MORE TO READ'}
          </h2>

          {/* Related Posts Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            style={{
              gap: 'clamp(24px, 3vw, 48px)'
            }}
          >
            {relatedPosts.map((post) => (
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
                    height: 'clamp(200px, 25vw, 350px)',
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
                      fontSize: 'clamp(16px, 2vw, 22px)',
                      lineHeight: '1.4',
                      marginBottom: 'clamp(20px, 2.5vw, 32px)',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit'
                    }}
                  >
                    {t[post.titleKey] || post.title}
                  </h3>

                  {/* Read More Button */}
                  <Link
                    to={`/blog/${post.id}`}
                    className="w-full font-bold uppercase text-white py-3 px-6 rounded-lg transition-all duration-300 hover:opacity-90 text-center block"
                    style={{
                      fontSize: 'clamp(14px, 1.5vw, 18px)',
                      backgroundColor: 'rgb(0, 84, 147)',
                      paddingTop: 'clamp(12px, 1.5vw, 18px)',
                      paddingBottom: 'clamp(12px, 1.5vw, 18px)',
                      paddingLeft: 'clamp(20px, 2.5vw, 32px)',
                      paddingRight: 'clamp(20px, 2.5vw, 32px)',
                      borderRadius: '8px',
                      direction: isRTL ? 'rtl' : 'ltr',
                      fontFamily: isRTL ? 'Arial, sans-serif' : 'inherit',
                      textDecoration: 'none'
                    }}
                  >
                    {t.readMore || 'READ MORE'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <BlogInnerFooter />
    </div>
  );
};

export default BlogInnerPage;

