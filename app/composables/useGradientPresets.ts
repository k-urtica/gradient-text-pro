import type { GradientPreset } from './useGradient';

export const gradientPresets: GradientPreset[] = [
  {
    id: 'ocean',
    label: 'Ocean',
    gradient: {
      type: 'linear',
      angle: 45,
      stops: [
        { id: 'stop1', color: '#0ea5e9', position: 0 },
        { id: 'stop2', color: '#3b82f6', position: 100 }
      ]
    }
  },
  {
    id: 'sunset',
    label: 'Sunset',
    gradient: {
      type: 'linear',
      angle: 90,
      stops: [
        { id: 'stop1', color: '#f97316', position: 0 },
        { id: 'stop2', color: '#ef4444', position: 50 },
        { id: 'stop3', color: '#ec4899', position: 100 }
      ]
    }
  },
  {
    id: 'forest',
    label: 'Forest',
    gradient: {
      type: 'linear',
      angle: 135,
      stops: [
        { id: 'stop1', color: '#22c55e', position: 0 },
        { id: 'stop2', color: '#16a34a', position: 100 }
      ]
    }
  },
  {
    id: 'purple-haze',
    label: 'Purple Haze',
    gradient: {
      type: 'linear',
      angle: 45,
      stops: [
        { id: 'stop1', color: '#8b5cf6', position: 0 },
        { id: 'stop2', color: '#a855f7', position: 50 },
        { id: 'stop3', color: '#ec4899', position: 100 }
      ]
    }
  },
  {
    id: 'golden',
    label: 'Golden',
    gradient: {
      type: 'radial',
      angle: 0,
      stops: [
        { id: 'stop1', color: '#fbbf24', position: 0 },
        { id: 'stop2', color: '#f59e0b', position: 100 }
      ]
    }
  },
  {
    id: 'midnight',
    label: 'Midnight',
    gradient: {
      type: 'linear',
      angle: 180,
      stops: [
        { id: 'stop1', color: '#1e293b', position: 0 },
        { id: 'stop2', color: '#475569', position: 100 }
      ]
    }
  },
  {
    id: 'rainbow',
    label: 'Rainbow',
    gradient: {
      type: 'linear',
      angle: 90,
      stops: [
        { id: 'stop1', color: '#ef4444', position: 0 },
        { id: 'stop2', color: '#f97316', position: 16 },
        { id: 'stop3', color: '#eab308', position: 33 },
        { id: 'stop4', color: '#22c55e', position: 50 },
        { id: 'stop5', color: '#3b82f6', position: 66 },
        { id: 'stop6', color: '#8b5cf6', position: 83 },
        { id: 'stop7', color: '#ec4899', position: 100 }
      ]
    }
  },
  {
    id: 'fire',
    label: 'Fire',
    gradient: {
      type: 'conic',
      angle: 0,
      stops: [
        { id: 'stop1', color: '#dc2626', position: 0 },
        { id: 'stop2', color: '#ea580c', position: 50 },
        { id: 'stop3', color: '#facc15', position: 100 }
      ]
    }
  }
];

export function useGradientPresets() {
  const { gradientSettings, fontSettings } = useGradient();

  const applyPreset = (preset: GradientPreset) => {
    // Apply gradient settings
    gradientSettings.value = {
      ...gradientSettings.value,
      ...preset.gradient
    };

    // Apply font settings if provided
    if (preset.font) {
      fontSettings.value = { ...fontSettings.value, ...preset.font };
    }
  };

  const getPresetPreviewStyle = (preset: GradientPreset) => {
    const { generateGradientCSS } = useGradient();
    const gradientCSS = generateGradientCSS(preset.gradient);

    return {
      background: gradientCSS,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent'
    };
  };

  return {
    presets: gradientPresets,
    applyPreset,
    getPresetPreviewStyle
  };
}
