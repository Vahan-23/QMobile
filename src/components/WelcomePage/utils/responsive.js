/**
 * Хелпер для адаптивного позиционирования
 * Преобразует пиксели из дизайна (базовая ширина 1895px) в адаптивные значения
 */

// Базовая ширина дизайна
const BASE_WIDTH = 1895;

/**
 * Преобразует пиксели в проценты от базовой ширины для использования с left/right
 * @param {number} px - пиксели из дизайна
 * @returns {string} - процентное значение
 */
export const pxToPercent = (px) => {
  return `${(px / BASE_WIDTH) * 100}%`;
};

/**
 * Создает адаптивное процентное значение для background-position
 * @param {number} percent - базовый процент (например, 50 для center)
 * @param {number} offsetPx - смещение в пикселях (положительное = вправо/вниз)
 * @returns {string} - адаптивное процентное значение
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
 * Преобразует пиксели в адаптивное значение с clamp для width/height
 * @param {number} px - пиксели из дизайна
 * @param {number} minPercent - минимальный процент от ширины экрана (опционально)
 * @returns {string} - clamp значение
 */
export const pxToResponsive = (px, minPercent = null) => {
  const min = minPercent ? `${minPercent}vw` : `${px * 0.5}px`;
  return `clamp(${min}, ${(px / BASE_WIDTH) * 100}vw, ${px}px)`;
};

/**
 * Преобразует пиксели в vw единицы для абсолютного позиционирования
 * @param {number} px - пиксели из дизайна
 * @returns {string} - vw значение
 */
export const pxToVw = (px) => {
  return `${(px / BASE_WIDTH) * 100}vw`;
};

/**
 * Создает адаптивное значение для top/bottom/left/right позиций
 * Использует комбинацию vw и clamp для точного позиционирования
 * @param {number} px - пиксели из дизайна
 * @param {object} options - опции { minPx, maxPx, basePx }
 * @returns {string} - адаптивное значение
 */
export const pxToPosition = (px, options = {}) => {
  const { minPx, maxPx } = options;
  const vwValue = (px / BASE_WIDTH) * 100;
  
  if (minPx !== undefined && maxPx !== undefined) {
    return `clamp(${minPx}px, ${vwValue}vw, ${maxPx}px)`;
  }
  
  // Для мобильных делаем минимальный размер, для больших экранов - максимальный
  const min = minPx !== undefined ? minPx : px * 0.3;
  const max = maxPx !== undefined ? maxPx : px;
  
  return `clamp(${min}px, ${vwValue}vw, ${max}px)`;
};

/**
 * Создает стили для конкретного элемента с позиционированием
 * @param {object} positions - { top, right, bottom, left, width, height }
 * @returns {object} - объект стилей
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
 * Медиа-запросы для планшетов и мобильных
 * Возвращает значение в зависимости от размера экрана
 */
export const getResponsiveValue = (mobile, tablet, desktop) => {
  // Используется в сочетании с CSS или через useMediaQuery
  return {
    mobile,
    tablet,
    desktop,
  };
};

