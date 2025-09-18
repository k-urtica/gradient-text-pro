import type { SelectItem } from '@nuxt/ui';

export const FONT_SIZE_SLIDER_CONFIG = {
  min: 12,
  max: 120,
  step: 1
} as const;

export const FONT_WEIGHTS = {
  normal: { label: 'Normal', value: 400 },
  medium: { label: 'Medium', value: 500 },
  semibold: { label: 'Semibold', value: 600 },
  bold: { label: 'Bold', value: 700 },
  extrabold: { label: 'Extra Bold', value: 800 },
  black: { label: 'Black', value: 900 }
} as const;

export type FontWeight = typeof FONT_WEIGHTS[keyof typeof FONT_WEIGHTS]['value'];

export const FONT_WEIGHT_ITEMS = Object.values(FONT_WEIGHTS) satisfies SelectItem[];

export const FONT_FAMILIES = {
  inter: { label: 'Inter', value: 'Inter, sans-serif' },
  roboto: { label: 'Roboto', value: 'Roboto, sans-serif' },
  openSans: { label: 'Open Sans', value: '"Open Sans", sans-serif' },
  notoSans: { label: 'Noto Sans', value: '"Noto Sans", sans-serif' },
  notoSansJP: { label: 'Noto Sans JP', value: '"Noto Sans JP", sans-serif' },
  system: { label: 'System UI', value: 'system-ui, sans-serif' },
  helvetica: { label: 'Helvetica', value: 'Helvetica, sans-serif' },
  arial: { label: 'Arial', value: 'Arial, sans-serif' },
  verdana: { label: 'Verdana', value: 'Verdana, sans-serif' },
  trebuchet: { label: 'Trebuchet MS', value: '"Trebuchet MS", sans-serif' },
  georgia: { label: 'Georgia', value: 'Georgia, serif' },
  times: { label: 'Times New Roman', value: '"Times New Roman", serif' },
  meiryo: { label: 'Meiryo', value: 'Meiryo, sans-serif' },
  hiraginoKaku: { label: 'Hiragino Kaku Gothic ProN', value: '"Hiragino Kaku Gothic ProN", sans-serif' },
  yuGothic: { label: 'Yu Gothic', value: '"Yu Gothic", sans-serif' },
  courier: { label: 'Courier New', value: '"Courier New", monospace' },
  monaco: { label: 'Monaco', value: 'Monaco, monospace' }
} as const;

export type FontFamily = typeof FONT_FAMILIES[keyof typeof FONT_FAMILIES]['value'];

export const FONT_FAMILY_ITEMS = Object.values(FONT_FAMILIES) satisfies SelectItem[];

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
