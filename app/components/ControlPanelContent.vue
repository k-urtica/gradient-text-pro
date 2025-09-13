<script setup lang="ts">
import type { GradientPreset } from '~/composables/useGradient';

const {
  text,
  gradientSettings,
  fontSettings,
  addGradientStop,
  removeGradientStop,
  randomizeGradient,
  distributeStopsEvenly,
} = useGradient();

const { presets, applyPreset } = useGradientPresets();

const handlePresetSelect = (preset: GradientPreset) => {
  applyPreset(preset);
};
</script>

<template>
  <div class="space-y-5">
    <TextEditor v-model="text" />

    <USeparator />

    <GradientEditor
      v-model="gradientSettings"
      :presets="presets"
      @select-preset="handlePresetSelect"
      @add-stop="addGradientStop"
      @remove-stop="removeGradientStop"
      @randomize="randomizeGradient"
      @distribute-evenly="distributeStopsEvenly"
    />

    <USeparator />

    <FontEditor v-model="fontSettings" />
  </div>
</template>
