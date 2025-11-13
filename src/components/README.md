# Component Structure

This folder contains all application components.

## Folder Structure

```
src/
  components/
    Homepage/
      Homepage.jsx          # Main responsive landing component
      HomepageHeader.jsx    # Header + navigation controls
      Assets/               # Homepage-only image assets
      index.js              # Component export
    WelcomePage/
      WelcomePage.js        # Main component
      index.js              # Component export
```

## How to Add New Components

1. Create a folder with the component name in `src/components/`
2. Create a file `ComponentName.js` inside the folder
3. Create an `index.js` file for easy import:
   ```js
   export { default } from './ComponentName';
   ```
4. Import the component in other files:
   ```js
   import ComponentName from './components/ComponentName';
   ```

## Images

Images should be located in the `public/Images/` folder and accessible via the path `/Images/...`

Example:
- File: `public/Images/01 - Welcome page/welcome1.jpg`
- Path in code: `/Images/01 - Welcome page/welcome1.jpg`

## Homepage Component Overview

`Homepage/Homepage.jsx` serves as the primary landing experience. It includes:

- **Responsive product grid** – products interpolate typography, spacing, and image sizes between 290 px and 768 px viewports using a shared `lerp` helper.
- **Localized testimonial slider** – arrow controls, testimonial copy, and flag badges adapt their sizes across the same breakpoint range; slider content is fed by the translations bundle.
- **Mobile-specific hero/banner assets** – desktop and mobile hero imagery swap automatically, with the post-hero CTA buttons (`JOIN US`, `SUPPORT`) rendered only for mobile layouts.
- **Interpolated typography** – key headings (`GET IT NOW, PAY WITH CREDITS`) and CTAs rely on calculated font sizes so that the layout scales smoothly from small screens to desktop.

When modifying the homepage, prefer updating the interpolation targets (e.g., sizes at 290 px vs. 768 px) rather than hard-coding new breakpoints. This keeps the design consistent across devices. 290<768
