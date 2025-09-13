<script setup lang="ts">
const gradientSettings = defineModel<GradientSettings>({ required: true });

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
        @preset-select="$emit('selectPreset', $event)"
      />

      <BaseTabsSelector
        v-model="gradientSettings.type"
        label="Gradient Type"
        label-icon="i-lucide-zap"
        :items="GRADIENT_TYPE_ITEMS"
      />

      <div class="space-y-2">
        <fieldset class="max-h-60 overflow-y-scroll">
          <legend class="mb-1 text-sm font-medium">Gradient Stops</legend>
          <ul class="space-y-2">
            <li
              v-for="(stop, index) in gradientSettings.stops"
              :key="stop.id"
            >
              <GradientStopItem
                :model-value="stop"
                :display-index="index + 1"
                :removeable="gradientSettings.stops.length > 2"
                @update:model-value="(value) => gradientSettings.stops[index] = value"
                @remove="$emit('removeStop', $event)"
              />
            </li>
          </ul>
        </fieldset>

        <UButton
          icon="i-lucide-plus"
          block
          variant="outline"
          size="sm"
          @click="$emit('addStop')"
        >
          Add Stop
        </UButton>

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
        v-if="enabledAngleSlider"
        v-model="gradientSettings.angle"
        label="Angle"
        v-bind="ANGLE_SLIDER_CONFIG"
        unit="°"
      />
    </div>
  </section>
</template>
