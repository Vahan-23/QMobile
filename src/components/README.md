# Component Structure

This folder contains all application components.

## Folder Structure

```
src/
  components/
    WelcomePage/
      WelcomePage.js    # Main component
      index.js          # Component export
      (optional) WelcomePage.css
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
