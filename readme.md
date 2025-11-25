# QMobile

QMobile is a React single-page application that reproduces a mobile onboarding flow and a complete e-commerce marketplace experience. It ships with Tailwind CSS styling, localized UI copy, and an RTL/LTR language toggle.

## Highlights

- React Router navigation between multiple routes (Homepage, Welcome, Marketplace, Product, Cart, Payment, Thank You, Error).
- Complete e-commerce flow: product browsing, product details, shopping cart, payment processing, and order confirmation.
- Marketplace composed of reusable layout primitives (`MarketplaceHeader`, `MarketplaceHero`, `ProductGrid`, `ProductCard`, `MarketplaceFooter`).
- Welcome flow with modular subcomponents (`WelcomeHeader`, `WelcomeHero`, `WelcomeFooter`, `CountrySelection`).
- Homepage with responsive product grid, localized testimonial slider, and mobile-specific hero assets.
- Global `LanguageProvider` context to switch between Thai (LTR) and Arabic (RTL) layouts.
- Comprehensive translation system with centralized `translations` folder.
- Tailwind CSS utility styling with custom responsive helpers.

## Project Structure

```
QMobile/
├── public/
│   ├── Images/                      # Static assets referenced at runtime
│   │   ├── 01 - Welcome page/       # Welcome page images
│   │   ├── 2x/                      # High-resolution (@2x) PNG assets
│   │   ├── SVG/                     # SVG vector graphics
│   │   ├── footerBack.png
│   │   ├── msg.png
│   │   ├── phn.png
│   │   ├── whiteFacture.png
│   │   ├── whiteLayer.png
│   │   └── wtp.png
│   ├── index.html
│   ├── Qmobile_Logo.png
│   └── Website_Styleguide.txt
├── src/
│   ├── App.jsx                      # Route configuration
│   ├── components/
│   │   ├── Homepage/                # Main landing page
│   │   │   ├── Homepage.jsx
│   │   │   ├── HomepageHeader.jsx
│   │   │   ├── Assets/              # Homepage-specific images
│   │   │   └── index.js
│   │   ├── WelcomePage/             # Onboarding experience
│   │   │   ├── WelcomePage.jsx
│   │   │   ├── WelcomeHeader.jsx
│   │   │   ├── WelcomeHero.jsx
│   │   │   ├── WelcomeFooter.jsx
│   │   │   ├── MobileFooter.jsx
│   │   │   ├── CountrySelection.jsx
│   │   │   ├── utils/
│   │   │   │   ├── responsive.js    # Responsive helpers for Tailwind
│   │   │   │   └── README.md
│   │   │   ├── STRUCTURE.md
│   │   │   └── index.js
│   │   ├── Marketplace/             # Marketplace feature module
│   │   │   ├── Marketplace.jsx
│   │   │   ├── MarketplaceHeader.jsx
│   │   │   ├── MarketplaceHero.jsx
│   │   │   ├── ProductGrid.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── MarketplaceFooter.jsx
│   │   │   ├── Assets/              # Mock product imagery and PSDs
│   │   │   └── index.js
│   │   ├── ProductPage/             # Product details page
│   │   │   ├── ProductPage.jsx
│   │   │   ├── ProductPage.css
│   │   │   ├── Assets/              # Product images
│   │   │   └── index.js
│   │   ├── CartPage/                # Shopping cart
│   │   │   ├── CartPage.jsx
│   │   │   ├── CartPage.css
│   │   │   └── index.js
│   │   ├── PaymentPage/             # Payment processing
│   │   │   ├── PaymentPage.jsx
│   │   │   ├── PaymentPage.css
│   │   │   ├── Assets/
│   │   │   └── index.js
│   │   ├── ThankYouPage/            # Order confirmation
│   │   │   ├── ThankYouPage.jsx
│   │   │   └── index.js
│   │   ├── ErrorPage/               # Error handling page
│   │   │   ├── ErrorPage.jsx
│   │   │   └── index.js
│   │   └── README.md
│   ├── contexts/
│   │   └── LanguageContext.jsx      # RTL/LTR language state manager
│   ├── translations/
│   │   └── index.js                 # Centralized translation strings (Thai & Arabic)
│   ├── index.css                    # Tailwind layer declarations
│   └── index.js                     # React entry point
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Routes

The application includes the following routes (configured in `App.jsx`):

- `/` - Homepage (main landing page)
- `/welcome` - Welcome/Onboarding page
- `/marketplace` - Product marketplace
- `/product/mx1` - Product details page
- `/cart` - Shopping cart
- `/payment` - Payment processing page
- `/thank-you` - Order confirmation page
- `/error` - Error page

## Working With Assets

- Place images under `public/Images/[FolderName]/`.
- Reference them in JSX using `/Images/...` paths (e.g. `/Images/01 - Welcome page/welcome1.jpg`).
- High-resolution assets are stored in `public/Images/2x/` with `@2x` suffix.
- SVG assets are stored in `public/Images/SVG/`.
- Component-specific assets live in `src/components/[ComponentName]/Assets/`; these are imported directly into components.

## Creating a New Component Module

1. Create a folder under `src/components/` (for example `FeatureName/`).
2. Add a `FeatureName.jsx` file that exports the main component.
3. Add supporting JSX modules or hooks within the same folder.
4. Export the main component via `index.js`:
   ```js
   export { default } from './FeatureName';
   ```
5. Import the module elsewhere with:
   ```js
   import FeatureName from './components/FeatureName';
   ```

## Language Toggle & Translations

Wrap UI inside `LanguageProvider` (already done in `App.jsx`). Use the `useLanguage` hook to read or change the active language:
```js
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();
  // ...
};
```
Switching to Arabic automatically flips the document direction to RTL.

Translations are centralized in `src/translations/index.js` and support:
- **Thai (th)** - LTR layout
- **Arabic (ar)** - RTL layout

All UI strings, including product names, form labels, buttons, and error messages, are managed through this translation system.

## Scripts

```bash
npm install       # Install dependencies
npm start         # Launch the development server at http://localhost:3000
npm run build     # Create a production build in the build/ directory
npm test          # Run Jest tests (if/when added)
```

## Component Features

### Homepage
- Responsive product grid with interpolated typography and spacing
- Localized testimonial slider with arrow controls
- Mobile-specific hero/banner assets that swap automatically
- Support section with contact options (Chat, WhatsApp, Call)

### Marketplace
- Product grid with category filtering
- Reusable `ProductCard` components
- Header with language toggle and navigation

### Product Page
- Product details with color and storage options
- Credit-based payment system
- Product description and related products section
- Payment method information

### Cart Page
- Order summary with product details
- Quantity management
- Credit and monthly payment calculations
- Proceed to payment flow

### Payment Page
- Shipping address management
- Location finder
- Credit card management
- Payment schedule table
- Order review section

### Thank You Page
- Order confirmation
- Order number display
- Shipping address confirmation
- Email confirmation message

### Error Page
- Error handling UI
- Support contact information
- User-friendly error messaging

## Development Tips

- Tailwind classes can be extended in `tailwind.config.js`.
- Keep reusable logic in `src/components/[Feature]/utils/` or shared hooks.
- Update `App.jsx` routes when adding new feature modules.
- All translations should be added to `src/translations/index.js` for both Thai and Arabic.
- Component-specific CSS files (e.g., `ProductPage.css`, `CartPage.css`) are used alongside Tailwind for custom styling.
- Use responsive helpers from `WelcomePage/utils/responsive.js` for consistent breakpoint handling.