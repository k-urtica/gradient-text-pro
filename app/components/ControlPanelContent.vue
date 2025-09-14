<script setup lang="ts">
const {
  text,
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
  <div class="space-y-5">
    <TextEditor v-model="text" />

    <USeparator />

    <GradientEditor
      v-model="gradientSettings"
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
