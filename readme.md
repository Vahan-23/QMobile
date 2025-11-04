# QMobile

React application with Tailwind CSS

## Project Structure

```
QMobile/
├── public/
│   ├── Images/
│   │   └── 01 - Welcome page/    # Images for Welcome page
│   │       ├── WP.jpg            # Main Welcome Page image
│   │       ├── welcome1.jpg
│   │       ├── welcome2.jpg
│   │       ├── welcome3.jpg
│   │       └── ...
│   └── index.html
├── src/
│   ├── components/               # Application components
│   │   ├── WelcomePage/
│   │   │   ├── WelcomePage.js      # Main component
│   │   │   ├── WelcomeHeader.js    # Header with Skip button
│   │   │   ├── WelcomeHero.js      # Hero section with background image
│   │   │   ├── WelcomeButtons.js   # Navigation buttons
│   │   │   ├── PageIndicators.js   # Page indicators
│   │   │   ├── index.js
│   │   │   └── STRUCTURE.md         # Component structure
│   │   └── README.md            # Component documentation
│   ├── App.js                   # Main component
│   ├── index.js                 # Entry point
│   └── index.css                # Global styles (Tailwind)
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Where to Add Things

### 📁 **Images**
- **Path**: `public/Images/[Folder name]/`
- **Usage**: In components, path starts with `/Images/...`
- **Example**: `public/Images/01 - Welcome page/welcome1.jpg` → `/Images/01 - Welcome page/welcome1.jpg`

### 📁 **New Components**
- **Path**: `src/components/[ComponentName]/`
- **Structure**:
  ```
  ComponentName/
    ├── ComponentName.js    # Main component
    └── index.js            # Export
  ```
- **Import**: `import ComponentName from './components/ComponentName'`

### 📁 **Styles**
- **Global**: `src/index.css` (Tailwind directives)
- **Component**: You can create `ComponentName.css` next to the component

## Installation

```bash
npm install
```

## Running

```bash
npm start
```

The application will open in the browser at [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

The built application will be in the `build` folder

## Testing

```bash
npm test
```