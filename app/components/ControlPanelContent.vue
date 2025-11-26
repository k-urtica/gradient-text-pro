<script setup lang="ts">
const {
  text,
  colorFormat,
  gradientSettings,
  fontSettings,
  fontToggles,
  addGradientStop,
  removeGradientStop,
  randomizeGradient,
  distributeStopsEvenly,
} = useGradient();

const { presets, applyPreset } = useGradientPresets();
</script>

<template>
  <div class="space-y-5 px-4 py-6">
    <TextEditor v-model="text" />

    <USeparator />

    <GradientEditor
      v-model="gradientSettings"
      v-model:color-format="colorFormat"
      :presets="presets"
      @select-preset="applyPreset"
      @add-stop="addGradientStop"
      @remove-stop="removeGradientStop"
      @randomize="randomizeGradient"
      @distribute-evenly="distributeStopsEvenly"
    />

    <USeparator />

    <FontEditor
      v-model:font-settings="fontSettings"
      v-model:font-toggles="fontToggles"
    />
  </div>
</template>
