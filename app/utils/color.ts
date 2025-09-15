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
