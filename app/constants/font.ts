import type { SelectItem } from '@nuxt/ui';

export const FONT_SIZE_SLIDER_CONFIG = {
  min: 12,
  max: 120,
  step: 1
} as const;

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
] as const satisfies SelectItem[];

export const FONT_FAMILY_ITEMS = [
  { label: 'Inter', value: 'Inter, system-ui, sans-serif' },
  { label: 'System UI', value: 'system-ui, sans-serif' },
  { label: 'Arial', value: 'Arial, sans-serif' },
  { label: 'Helvetica', value: 'Helvetica, sans-serif' },
  { label: 'Georgia', value: 'Georgia, serif' },
  { label: 'Times', value: 'Times, serif' },
  { label: 'Courier', value: 'Courier, monospace' },
  { label: 'Monaco', value: 'Monaco, monospace' }
];

export const LETTER_SPACING_SLIDER_CONFIG = {
  min: -0.1,
  max: 0.2,
  step: 0.01
} as const;

export const LINE_HEIGHT_SLIDER_CONFIG = {
  min: 0.8,
  max: 2,
  step: 0.1
} as const;
