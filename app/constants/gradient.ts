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
