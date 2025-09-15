export const GRADIENT_TYPES = {
  linear: 'linear',
  radial: 'radial',
  conic: 'conic'
} as const;

export type GradientType = typeof GRADIENT_TYPES[keyof typeof GRADIENT_TYPES];

export const GRADIENT_TYPE_ITEMS = [
  { label: 'Linear', value: GRADIENT_TYPES.linear, icon: 'i-lucide-align-justify' },
  { label: 'Radial', value: GRADIENT_TYPES.radial, icon: 'i-lucide-target' },
  { label: 'Conic', value: GRADIENT_TYPES.conic, icon: 'i-lucide-pie-chart' }
];

export const ANGLE_SLIDER_CONFIG = {
  min: 0,
  max: 360,
  step: 1
} as const;

export const MAX_GRADIENT_STOPS = 8;

export const COLOR_FORMATS = {
  hex: 'hex',
  oklch: 'oklch'
} as const;

export type ColorFormat = typeof COLOR_FORMATS[keyof typeof COLOR_FORMATS];

export const COLOR_FORMAT_ITEMS = [
  { label: 'Hex', value: COLOR_FORMATS.hex },
  { label: 'OKLCH', value: COLOR_FORMATS.oklch }
];
