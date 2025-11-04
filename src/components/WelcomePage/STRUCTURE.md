# Welcome Page Structure

## Components

### WelcomePage (main component)
- Manages current page state
- Coordinates all child components
- Handles navigation between pages

### WelcomeHeader
- **Location**: Top of the page (absolute)
- **Contains**: Skip button
- **Function**: Allows to skip the welcome

### WelcomeHero
- **Location**: Center of the screen
- **Contains**: Background image (WP.jpg), title, subtitle
- **Function**: Main visual element of the page

### PageIndicators
- **Location**: Between Hero and buttons
- **Contains**: Dot indicators for current page
- **Function**: Shows which page the user is on

### WelcomeButtons
- **Location**: Bottom of the screen (fixed)
- **Contains**: Skip and Next/Start buttons
- **Function**: Navigation through welcome pages

## File Structure

```
WelcomePage/
├── WelcomePage.js       # Main component
├── WelcomeHeader.js     # Header with Skip button
├── WelcomeHero.js       # Hero section with image
├── WelcomeButtons.js    # Navigation buttons
├── PageIndicators.js    # Page indicators
├── index.js             # Exports
└── STRUCTURE.md         # This documentation
```

## How to Modify Design to Match Layout

1. **Background image**: Change `backgroundImage` in `WelcomeHero.js`
2. **Text**: Change title and subtitle in `WelcomeHero.js`
3. **Buttons**: Change styles and text in `WelcomeButtons.js`
4. **Indicators**: Change styles in `PageIndicators.js`
5. **Layout**: Change Tailwind classes in each component
