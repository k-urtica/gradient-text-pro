export const FONT_WEIGHTS = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900'
} as const;

export type FontWeight = typeof FONT_WEIGHTS[keyof typeof FONT_WEIGHTS];

export const FONT_WEIGHT_ITEMS = [
  { label: 'Normal', value: FONT_WEIGHTS.normal },
  { label: 'Medium', value: FONT_WEIGHTS.medium },
  { label: 'Semibold', value: FONT_WEIGHTS.semibold },
  { label: 'Bold', value: FONT_WEIGHTS.bold },
  { label: 'Extra Bold', value: FONT_WEIGHTS.extrabold },
  { label: 'Black', value: FONT_WEIGHTS.black }
];
