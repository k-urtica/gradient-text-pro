export interface GradientStop {
  /** Unique identifier for the gradient stop */
  id: string;
  /** Color of the gradient stop */
  color: string;
  /** Position of the gradient stop (0-100) */
  position: number;
}
export interface GradientSettings {
  /** Type of gradient: linear, radial, or conic */
  type: GradientType;
  /** Angle of the gradient (for linear and conic gradients) */
  angle: number;
  /** Gradient stops */
  stops: GradientStop[];
}

export interface FontSettings {
  /** Font size */
  size: number;
  /** Font weight */
  weight: FontWeight;
  /** Font family */
  family: string;
  /** Letter spacing */
  letterSpacing: number;
  /** Line height */
  lineHeight: number;
}

export interface FontToggles {
  /** Toggle for letter spacing */
  letterSpacing: boolean;
  /** Toggle for line height */
  lineHeight: boolean;
}

export interface GradientPreset {
  /** Unique identifier for the gradient preset */
  id: string;
  /** Label of the gradient preset */
  label: string;
  /** Gradient settings */
  gradient: GradientSettings;
  /** Font settings */
  font?: Partial<FontSettings>;
}

export function useGradient() {
  const text = useState<string>('gradient-text', () => 'Gradient Text Pro');

  const gradientSettings = useState<GradientSettings>('gradient-settings', () => ({
    type: GRADIENT_TYPES.linear,
    angle: 135,
    stops: [
      { id: 'stop1', color: '#f59e42', position: 0 },
      { id: 'stop2', color: '#6366f1', position: 100 }
    ]
  }));

  const fontSettings = useState<FontSettings>('font-settings', () => ({
    size: 64,
    weight: FONT_WEIGHTS.bold,
    family: 'Inter, system-ui, sans-serif',
    letterSpacing: -0.02,
    lineHeight: 1.2
  }));

  const fontToggles = useState<FontToggles>('font-toggles', () => ({
    letterSpacing: false,
    lineHeight: false
  }));

  const generateGradientCSS = (settings: GradientSettings): string => {
    const sortedStops = [...settings.stops].sort((a, b) => a.position - b.position);
    const stopsString = sortedStops
      .map((stop) => `${stop.color} ${stop.position}%`)
      .join(', ');

    switch (settings.type) {
      case GRADIENT_TYPES.linear:
        return `linear-gradient(${settings.angle}deg, ${stopsString})`;
      case GRADIENT_TYPES.radial:
        return `radial-gradient(circle, ${stopsString})`;
      case GRADIENT_TYPES.conic:
        return `conic-gradient(from ${settings.angle}deg, ${stopsString})`;
      default:
        return `linear-gradient(${settings.angle}deg, ${stopsString})`;
    }
  };

  const gradientCSS = computed(() => generateGradientCSS(gradientSettings.value));

  const textStyle = computed(() => ({
    fontFamily: fontSettings.value.family,
    fontSize: `${fontSettings.value.size}px`,
    fontWeight: fontSettings.value.weight,
    ...(fontToggles.value.letterSpacing && { letterSpacing: `${fontSettings.value.letterSpacing}em` }),
    ...(fontToggles.value.lineHeight && { lineHeight: fontSettings.value.lineHeight }),
    background: gradientCSS.value,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent'
  }));

  const cssOutput = computed(() => {
    const properties = [
      `font-family: ${fontSettings.value.family}`,
      `font-size: ${fontSettings.value.size}px`,
      `font-weight: ${fontSettings.value.weight}`,
      ...(fontToggles.value.letterSpacing ? [`letter-spacing: ${fontSettings.value.letterSpacing}em`] : []),
      ...(fontToggles.value.lineHeight ? [`line-height: ${fontSettings.value.lineHeight}`] : []),
      `background: ${gradientCSS.value}`,
      `background-clip: text`,
      `-webkit-background-clip: text`,
      `-webkit-text-fill-color: transparent`,
      `color: transparent`
    ];

    return `.gradient-text {\n${properties.map((prop) => `  ${prop};`).join('\n')}\n}`;
  });

  const addGradientStop = () => {
    if (gradientSettings.value.stops.length >= MAX_GRADIENT_STOPS) return;

    const newPosition = gradientSettings.value.stops.length > 0
      ? Math.min(100, Math.max(...gradientSettings.value.stops.map((s) => s.position)) + 20)
      : 50;

    const newStop: GradientStop = {
      id: `stop${Date.now()}`,
      color: '#ff6b6b',
      position: newPosition
    };

    gradientSettings.value.stops.push(newStop);
  };

  const removeGradientStop = (id: string) => {
    if (gradientSettings.value.stops.length > 2) {
      const index = gradientSettings.value.stops.findIndex((stop) => stop.id === id);
      if (index > -1) {
        gradientSettings.value.stops.splice(index, 1);
      }
    }
  };

  const randomizeGradient = () => {
    const colors = ['#3b82f6', '#8b5cf6', '#ef4444', '#f59e0b', '#10b981', '#ec4899', '#6366f1'];
    const randomColors = colors.sort(() => 0.5 - Math.random()).slice(0, 2 + Math.floor(Math.random() * 2));

    gradientSettings.value.angle = Math.floor(Math.random() * 360);
    gradientSettings.value.stops = randomColors.map((color, index) => ({
      id: `stop${Date.now()}_${index}`,
      color,
      position: (index / (randomColors.length - 1)) * 100
    }));
  };

  const distributeStopsEvenly = () => {
    const count = gradientSettings.value.stops.length;
    if (count <= 1) {
      if (count === 1 && gradientSettings.value.stops[0]) {
        const firstStop = gradientSettings.value.stops[0];
        gradientSettings.value.stops = [
          { id: firstStop.id, color: firstStop.color, position: 50 }
        ];
      }
      return;
    }

    gradientSettings.value.stops = gradientSettings.value.stops.map((stop, index) => ({
      id: stop.id,
      color: stop.color,
      position: Math.round((index / (count - 1)) * 100)
    }));
  };

  return {
    text,
    gradientSettings,
    fontSettings,
    fontToggles,
    gradientCSS,
    textStyle,
    cssOutput,
    addGradientStop,
    removeGradientStop,
    randomizeGradient,
    distributeStopsEvenly,
    generateGradientCSS
  };
}
