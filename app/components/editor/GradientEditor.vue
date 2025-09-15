<script setup lang="ts">
const gradientSettings = defineModel<GradientSettings>({ required: true });
const colorFormat = defineModel<ColorFormat>('colorFormat', { default: COLOR_FORMATS.hex });

defineProps<{
  presets: GradientPreset[];
}>();

defineEmits<{
  selectPreset: [preset: GradientPreset];
  removeStop: [id: string];
  addStop: [];
  randomize: [];
  distributeEvenly: [];
}>();

const enabledAngleSlider = computed(() =>
  gradientSettings.value.type === 'linear' || gradientSettings.value.type === 'conic');
</script>

<template>
  <section aria-label="Gradient settings">
    <BaseIconText
      as="h3"
      icon="i-lucide-palette"
      class="mb-2 font-semibold"
    >
      Gradient Settings
    </BaseIconText>

    <div class="space-y-5">
      <GradientPresetList
        :presets="presets"
        @select-preset="$emit('selectPreset', $event)"
      />

      <BaseTabsSelector
        v-model="gradientSettings.type"
        label="Gradient Type"
        label-icon="i-lucide-zap"
        :items="GRADIENT_TYPE_ITEMS"
      />

      <div class="space-y-2">
        <GradientStopList
          v-model:stops="gradientSettings.stops"
          @remove-stop="$emit('removeStop', $event)"
          @add-stop="$emit('addStop')"
        />
        <div class="grid grid-cols-2 gap-2">
          <UButton
            icon="i-lucide-shuffle"
            variant="outline"
            size="sm"
            block
            @click="$emit('randomize')"
          >
            Randomize
          </UButton>
          <UButton
            icon="i-lucide-align-horizontal-distribute-center"
            variant="outline"
            size="sm"
            block
            @click="$emit('distributeEvenly')"
          >
            Distribute Evenly
          </UButton>
        </div>
      </div>

      <BaseSlider
        v-model="gradientSettings.angle"
        label="Angle"
        v-bind="ANGLE_SLIDER_CONFIG"
        unit="°"
        :disabled="!enabledAngleSlider"
      />

      <div>
        <BaseRadioGroup
          v-model="colorFormat"
          label="Color Format"
          label-icon="i-lucide-swatch-book"
          :items="COLOR_FORMAT_ITEMS"
        />
        <p class="mt-1.5 text-xs text-muted">
          HEX is classic and widely supported. OKLCH gives smoother, more natural gradients.
        </p>
      </div>
    </div>
  </section>
</template>
