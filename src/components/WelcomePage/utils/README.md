# Responsive Design Utilities

This utility module contains functions for converting pixel values from design to responsive units (base width 1895px) and creating adaptive layouts. All functions work with the design base width and create responsive values.

## Available Functions

### `pxToPosition(px, options)`
Converts pixel value to responsive value for positioning (top, left, right, bottom).

**Parameters:**
- `px` - Pixel value from design (for the design base width 1895px)
- `options` - Options:
  - `minPx` - Minimum responsive value in pixels for small screens
  - `maxPx` - Maximum responsive value in pixels for large screens (optional)

**Example:**
```javascript
style={{
  top: pxToPosition(260, { minPx: 80, maxPx: 260 }),
  left: pxToPosition(50, { minPx: 20, maxPx: 50 })
}}
```

### `pxToResponsive(px, minPercent)`
Converts pixel value to responsive value for sizes (width, height).

**Parameters:**
- `px` - Pixel value from design
- `minPercent` - Minimum percentage for very small screens (optional)

**Example:**
```javascript
style={{
  width: pxToResponsive(190, 15), // Minimum 15vw on small screens
  height: pxToResponsive(190, 15)
}}
```

### `pxToPercent(px)`
Converts pixel value to percentage relative to base width.

**Example:**
```javascript
style={{
  left: pxToPercent(50) // ~2.64% for 1895px
}}
```

## How to Use

1. Import the required functions:
```javascript
import { pxToPosition, pxToResponsive } from './utils/responsive';
```

2. Use responsive values for positions from design:
```javascript
// Position from design: top: 260px, left: 50px
<div style={{
  top: pxToPosition(260, { minPx: 80, maxPx: 260 }),
  left: pxToPosition(50, { minPx: 20, maxPx: 50 })
}}>
```

3. For sizes, use `pxToResponsive`:
```javascript
// Flag size: 190px
<div style={{
  width: pxToResponsive(190, 15),
  height: pxToResponsive(190, 15)
}}>
```

## Best Practices

- Use exact pixel values from design
- Set min/max values for better control on different screens
- Use clamp() for smooth scaling on different devices
- Test on mobile and desktop devices
- Adjust minimum values for better display on small screens

## Screen Breakpoints

The following breakpoints are typically used in the project:
- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

Small and medium screens use responsive values from `pxToPosition` which automatically scale, so you don't need to manually specify different values for different breakpoints.

