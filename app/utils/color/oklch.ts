import { modeOklab, modeOklch, modeRgb, useMode } from 'culori/fn';

useMode(modeRgb);
useMode(modeOklab);
const oklch = useMode(modeOklch);

/**
 * Format a number to string, keeping integers without decimal points.
 * For decimal numbers, uses the specified number of digits.
 * @param value Number to format
 * @param digits Number of decimal places for non-integer values
 * @return Formatted number string
 */
export const formatNumberCompact = (value: number, digits: number): string =>
  Number.isInteger(value) ? String(value) : String(Number(value.toFixed(digits)));

/**
 * Convert hex color to OKLCH string format.
 * @param hex Hex color string (e.g., '#ff0000')
 * @return OKLCH CSS string (e.g., 'oklch(0.627 0.257 29.2)')
 */
export const hexToOklch = (hex: string): string => {
  const oklchColor = oklch(hex);
  if (!oklchColor) return hex;

  return `oklch(${formatNumberCompact(oklchColor.l, 3)} ${formatNumberCompact(oklchColor.c, 3)} ${oklchColor.h ? formatNumberCompact(oklchColor.h, 1) : 0})`;
};
