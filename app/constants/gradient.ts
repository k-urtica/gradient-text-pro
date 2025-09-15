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

export const GRADIENT_PRESETS: GradientPreset[] = [
  {
    id: 'ocean-depth',
    label: 'Ocean Depth',
    gradient: {
      type: 'linear',
      angle: 135,
      stops: [
        { id: 'stop1', color: '#06b6d4', position: 0 },
        { id: 'stop2', color: '#0891b2', position: 40 },
        { id: 'stop3', color: '#164e63', position: 100 }
      ]
    }
  },
  {
    id: 'sunset-glow',
    label: 'Sunset Glow',
    gradient: {
      type: 'linear',
      angle: 45,
      stops: [
        { id: 'stop1', color: '#fbbf24', position: 0 },
        { id: 'stop2', color: '#f97316', position: 30 },
        { id: 'stop3', color: '#dc2626', position: 70 },
        { id: 'stop4', color: '#7c2d12', position: 100 }
      ]
    }
  },
  {
    id: 'emerald-forest',
    label: 'Emerald Forest',
    gradient: {
      type: 'linear',
      angle: 120,
      stops: [
        { id: 'stop1', color: '#10b981', position: 0 },
        { id: 'stop2', color: '#059669', position: 60 },
        { id: 'stop3', color: '#064e3b', position: 100 }
      ]
    }
  },
  {
    id: 'cosmic-purple',
    label: 'Cosmic Purple',
    gradient: {
      type: 'linear',
      angle: 60,
      stops: [
        { id: 'stop1', color: '#c084fc', position: 0 },
        { id: 'stop2', color: '#8b5cf6', position: 40 },
        { id: 'stop3', color: '#6366f1', position: 80 },
        { id: 'stop4', color: '#1e1b4b', position: 100 }
      ]
    }
  },
  {
    id: 'golden-hour',
    label: 'Golden Hour',
    gradient: {
      type: 'radial',
      angle: 0,
      stops: [
        { id: 'stop1', color: '#fef3c7', position: 0 },
        { id: 'stop2', color: '#fbbf24', position: 50 },
        { id: 'stop3', color: '#92400e', position: 100 }
      ]
    }
  },
  {
    id: 'midnight-blue',
    label: 'Midnight Blue',
    gradient: {
      type: 'linear',
      angle: 180,
      stops: [
        { id: 'stop1', color: '#475569', position: 0 },
        { id: 'stop2', color: '#334155', position: 50 },
        { id: 'stop3', color: '#0f172a', position: 100 }
      ]
    }
  },
  {
    id: 'aurora',
    label: 'Aurora',
    gradient: {
      type: 'linear',
      angle: 90,
      stops: [
        { id: 'stop1', color: '#10b981', position: 0 },
        { id: 'stop2', color: '#06b6d4', position: 25 },
        { id: 'stop3', color: '#3b82f6', position: 50 },
        { id: 'stop4', color: '#8b5cf6', position: 75 },
        { id: 'stop5', color: '#ec4899', position: 100 }
      ]
    }
  },
  {
    id: 'volcano',
    label: 'Volcano',
    gradient: {
      type: 'conic',
      angle: 45,
      stops: [
        { id: 'stop1', color: '#dc2626', position: 0 },
        { id: 'stop2', color: '#ea580c', position: 30 },
        { id: 'stop3', color: '#facc15', position: 60 },
        { id: 'stop4', color: '#dc2626', position: 100 }
      ]
    }
  },
  {
    id: 'cherry-blossom',
    label: 'Cherry Blossom',
    gradient: {
      type: 'linear',
      angle: 45,
      stops: [
        { id: 'stop1', color: '#fdf2f8', position: 0 },
        { id: 'stop2', color: '#fce7f3', position: 30 },
        { id: 'stop3', color: '#f9a8d4', position: 70 },
        { id: 'stop4', color: '#ec4899', position: 100 }
      ]
    }
  },
  {
    id: 'neon-cyber',
    label: 'Neon Cyber',
    gradient: {
      type: 'linear',
      angle: 135,
      stops: [
        { id: 'stop1', color: '#06ffa5', position: 0 },
        { id: 'stop2', color: '#0ea5e9', position: 50 },
        { id: 'stop3', color: '#8b5cf6', position: 100 }
      ]
    }
  },
  {
    id: 'warm-sand',
    label: 'Warm Sand',
    gradient: {
      type: 'linear',
      angle: 45,
      stops: [
        { id: 'stop1', color: '#fef7cd', position: 0 },
        { id: 'stop2', color: '#fed7aa', position: 40 },
        { id: 'stop3', color: '#fdba74', position: 80 },
        { id: 'stop4', color: '#ea580c', position: 100 }
      ]
    }
  },
  {
    id: 'ice-crystal',
    label: 'Ice Crystal',
    gradient: {
      type: 'radial',
      angle: 0,
      stops: [
        { id: 'stop1', color: '#f0f9ff', position: 0 },
        { id: 'stop2', color: '#e0f2fe', position: 30 },
        { id: 'stop3', color: '#0ea5e9', position: 70 },
        { id: 'stop4', color: '#0369a1', position: 100 }
      ]
    }
  }
] as const;
