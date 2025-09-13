import type { GradientPreset } from './useGradient';

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
    presets: GRADIENT_PRESETS,
    applyPreset,
    getPresetPreviewStyle
  };
}
