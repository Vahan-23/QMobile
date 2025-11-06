# QMobile

QMobile is a React single-page application that reproduces a mobile onboarding flow and a marketplace experience. It ships with Tailwind CSS styling, localized UI copy, and an RTL/LTR language toggle.

## Highlights

- React Router navigation between onboarding and marketplace routes.
- Marketplace composed of reusable layout primitives (`MarketplaceHeader`, `MarketplaceHero`, `ProductGrid`, `ProductCard`, `MarketplaceFooter`).
- Welcome flow with modular subcomponents (`WelcomeHeader`, `WelcomeHero`, `WelcomeFooter`, `CountrySelection`).
- Global `LanguageProvider` context to switch between Thai (LTR) and Arabic (RTL) layouts.
- Tailwind CSS utility styling with custom responsive helpers.

## Project Structure

```
QMobile/
├── public/
│   ├── Images/                      # Static assets referenced at runtime
│   └── index.html
├── src/
│   ├── App.jsx                      # Route configuration
│   ├── components/
│   │   ├── Marketplace/             # Marketplace feature module
│   │   │   ├── Marketplace.jsx
│   │   │   ├── MarketplaceHeader.jsx
│   │   │   ├── MarketplaceHero.jsx
│   │   │   ├── ProductGrid.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── MarketplaceFooter.jsx
│   │   │   ├── Assets/              # Mock product imagery and PSDs
│   │   │   └── index.js             # Re-export for cleaner imports
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
│   │   └── README.md
│   ├── contexts/
│   │   └── LanguageContext.jsx      # RTL/LTR language state manager
│   ├── index.css                    # Tailwind layer declarations
│   └── index.js                     # React entry point
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Working With Assets

- Place images under `public/Images/[FolderName]/`.
- Reference them in JSX using `/Images/...` paths (e.g. `/Images/01 - Welcome page/welcome1.jpg`).
- Marketplace product assets live in `src/components/Marketplace/Assets/`; these are imported directly into components.

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

## Language Toggle

Wrap UI inside `LanguageProvider` (already done in `App.jsx`). Use the `useLanguage` hook to read or change the active language:
```js
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();
  // ...
};
```
Switching to Arabic automatically flips the document direction to RTL.

## Scripts

```bash
npm install       # Install dependencies
npm start         # Launch the development server at http://localhost:3000
npm run build     # Create a production build in the build/ directory
npm test          # Run Jest tests (if/when added)
```

## Development Tips

- Tailwind classes can be extended in `tailwind.config.js`.
- Keep reusable logic in `src/components/[Feature]/utils/` or shared hooks.
- Update `App.jsx` routes when adding new feature modules.