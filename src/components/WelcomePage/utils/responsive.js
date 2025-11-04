/**
 * Utility functions for responsive design
 * Converts pixel values from design to responsive units (base width 1895px) and creates adaptive layouts
 */

// Base width from design
const BASE_WIDTH = 1895;

/**
 * Converts pixel value to percentage value for width/height or left/right
 * @param {number} px - Pixel value from design
 * @returns {string} - Percentage value
 */
export const pxToPercent = (px) => {
  return `${(px / BASE_WIDTH) * 100}%`;
};

/**
 * Creates adaptive percentage value for background-position
 * @param {number} percent - Base percentage (e.g., 50 for center)
 * @param {number} offsetPx - Offset in pixels (negative = left/top, positive = right/bottom)
 * @returns {string} - Adaptive percentage value
 */
export const adaptivePercent = (percent, offsetPx = 0) => {
  const basePercent = percent;
  const offsetPercent = (offsetPx / BASE_WIDTH) * 100;
  const vwValue = ((basePercent / 100) * BASE_WIDTH + offsetPx) / BASE_WIDTH * 100;
  const min = Math.max(0, basePercent + offsetPercent * 0.5);
  const max = Math.min(100, basePercent + offsetPercent);
  return `clamp(${min}%, ${vwValue}vw, ${max}%)`;
};

/**
 * Converts pixel value to responsive value with clamp for width/height
 * @param {number} px - Pixel value from design
 * @param {number} minPercent - Minimum percentage for very small screens (optional)
 * @returns {string} - clamp value
 */
export const pxToResponsive = (px, minPercent = null) => {
  const min = minPercent ? `${minPercent}vw` : `${px * 0.5}px`;
  return `clamp(${min}, ${(px / BASE_WIDTH) * 100}vw, ${px}px)`;
};

/**
 * Converts pixel value to vw units for simple responsive sizing
 * @param {number} px - Pixel value from design
 * @returns {string} - vw value
 */
export const pxToVw = (px) => {
  return `${(px / BASE_WIDTH) * 100}vw`;
};

/**
 * Creates responsive value for top/bottom/left/right positions
 * Uses clamp with vw for adaptive positioning
 * @param {number} px - Pixel value from design
 * @param {object} options - Options { minPx, maxPx, basePx }
 * @returns {string} - Responsive value
 */
export const pxToPosition = (px, options = {}) => {
  const { minPx, maxPx } = options;
  const vwValue = (px / BASE_WIDTH) * 100;
  
  if (minPx !== undefined && maxPx !== undefined) {
    return `clamp(${minPx}px, ${vwValue}vw, ${maxPx}px)`;
  }
  
  // If min/max not specified, use defaults. For better scaling on small screens, use smaller min. For larger - increase
  const min = minPx !== undefined ? minPx : px * 0.3;
  const max = maxPx !== undefined ? maxPx : px;
  
  return `clamp(${min}px, ${vwValue}vw, ${max}px)`;
};

/**
 * Creates position styles object for absolute/relative positioning
 * @param {object} positions - { top, right, bottom, left, width, height }
 * @returns {object} - Styles object
 */
export const createPositionStyles = (positions) => {
  const styles = {};
  
  if (positions.top !== undefined) {
    styles.top = pxToPosition(positions.top, positions.topOptions);
  }
  if (positions.right !== undefined) {
    styles.right = pxToPosition(positions.right, positions.rightOptions);
  }
  if (positions.bottom !== undefined) {
    styles.bottom = pxToPosition(positions.bottom, positions.bottomOptions);
  }
  if (positions.left !== undefined) {
    styles.left = pxToPosition(positions.left, positions.leftOptions);
  }
  if (positions.width !== undefined) {
    if (typeof positions.width === 'number') {
      styles.width = pxToResponsive(positions.width, positions.widthMinPercent);
    } else {
      styles.width = positions.width;
    }
  }
  if (positions.height !== undefined) {
    if (typeof positions.height === 'number') {
      styles.height = pxToResponsive(positions.height, positions.heightMinPercent);
    } else {
      styles.height = positions.height;
    }
  }
  
  return styles;
};

/**
 * Helper function for responsive values
 * Currently returns object, values should be used with CSS media queries or useMediaQuery
 */
export const getResponsiveValue = (mobile, tablet, desktop) => {
  // Currently just returns object, should be used with CSS media queries or useMediaQuery
  return {
    mobile,
    tablet,
    desktop,
  };
};

