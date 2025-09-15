import { modeOklab, modeOklch, modeRgb, useMode } from 'culori/fn';

useMode(modeRgb);
useMode(modeOklab);
const oklch = useMode(modeOklch);

const MAX_HEX_VALUE = 16777215; // 0xFFFFFF

/**
 * Generate a random hex color string in the format '#RRGGBB'.
 * @return A random hex color string
 */
export const getRandomHex = (): string => {
  const hex = Math.floor(Math.random() * MAX_HEX_VALUE).toString(16).padStart(6, '0');
  return `#${hex}`;
};

/**
 * Generate an array of random hex color strings.
 * @param count Number of random colors to generate
 * @return An array of random hex color strings
 */
export const getRandomColors = (count: number): string[] => {
  return Array.from({ length: count }, getRandomHex);
};

/**
 * Gradient stop position (0-100) calculation helper function.
 * @param params Object containing the stop index and total number of stops
 * @param params.index Stop index
 * @param params.total Total number of stops
 * @returns Position (0-100 integer)
 */
export const getGradientStopPosition = (params: { index: number; total: number }): number => {
  const { index, total } = params;
  if (total <= 1) return 0;
  return Math.round((index / (total - 1)) * 100);
};

/**
 * Filter a string to contain only valid hex characters (0-9, a-f, A-F, #).
 * @param value String to filter
 * @return Filtered string containing only valid hex characters
 */
export const filterHexInput = (value: string): string => {
  return value.replace(/[^0-9a-f#]/gi, '');
};

/**
 * Normalize a hex color string to standard format (#rrggbb).
 * - Adds # prefix if missing
 * - Converts to lowercase
 * - Expands 3-digit hex to 6-digit (#abc -> #aabbcc)
 * - Truncates if longer than 6 hex digits
 * - Returns #000000 for empty/invalid input
 * @param value Hex color string to normalize
 * @return Normalized hex color string
 */
export const normalizeHex = (value: string): string => {
  const filtered = filterHexInput(value);
  const withoutHash = filtered.replace(/^#+/, '');

  if (!withoutHash) return '#000000';

  // #rgb → #rrggbb
  if (withoutHash.length === 3) {
    return `#${withoutHash.split('').map((c) => c + c).join('').toLowerCase()}`;
  }
  // Truncate to 6 digits if longer than 6
  return `#${withoutHash.slice(0, 6).toLowerCase()}`;
};

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
