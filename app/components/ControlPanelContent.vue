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
    <section aria-label="Text input settings">
      <BaseIconText
        as="h3"
        icon="i-lucide-type"
        class="mb-2 font-semibold"
      >
        Text Content
      </BaseIconText>

      <div class="space-y-4">
        <UFormField label="Text" hint="Enter your text to apply gradient">
          <UTextarea
            v-model="text"
            placeholder="Your text here..."
            :rows="3"
            resize
            class="w-full"
          />
        </UFormField>
      </div>
    </section>

    <USeparator />

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
          @preset-select="handlePresetSelect"
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
                  @remove="removeGradientStop"
                />
              </li>
            </ul>
          </fieldset>

          <UButton
            icon="i-lucide-plus"
            block
            variant="outline"
            size="sm"
            @click="addGradientStop"
          >
            Add Stop
          </UButton>

          <div class="grid grid-cols-2 gap-2">
            <UButton
              icon="i-lucide-shuffle"
              variant="outline"
              size="sm"
              block
              @click="randomizeGradient"
            >
              Randomize
            </UButton>
            <UButton
              icon="i-lucide-align-horizontal-distribute-center"
              variant="outline"
              size="sm"
              block
              @click="distributeStopsEvenly"
            >
              Distribute Evenly
            </UButton>
          </div>
        </div>

        <BaseSlider
          v-if="gradientSettings.type === 'linear' || gradientSettings.type === 'conic'"
          v-model="gradientSettings.angle"
          label="Angle"
          :min="0"
          :max="360"
          :step="1"
          unit="°"
        />
      </div>
    </section>

    <USeparator />

    <section aria-label="Font settings">
      <BaseIconText
        as="h3"
        icon="i-lucide-type"
        class="mb-2 font-semibold"
      >
        Font Settings
      </BaseIconText>

      <div class="space-y-4">
        <BaseSlider
          v-model="fontSettings.size"
          label="Font Size"
          :min="12"
          :max="120"
          :step="1"
          unit="px"
        />

        <div class="grid grid-cols-2 gap-2">
          <UFormField label="Font Weight">
            <USelect
              v-model="fontSettings.weight"
              :items="FONT_WEIGHT_ITEMS"
              size="sm"
              class="w-full"
            />
          </UFormField>

          <UFormField label="Font Family">
            <USelect
              v-model="fontSettings.family"
              :items="[
                { label: 'Inter', value: 'Inter, system-ui, sans-serif' },
                { label: 'System UI', value: 'system-ui, sans-serif' },
                { label: 'Arial', value: 'Arial, sans-serif' },
                { label: 'Helvetica', value: 'Helvetica, sans-serif' },
                { label: 'Georgia', value: 'Georgia, serif' },
                { label: 'Times', value: 'Times, serif' },
                { label: 'Courier', value: 'Courier, monospace' },
                { label: 'Monaco', value: 'Monaco, monospace' }
              ]"
              size="sm"
              class="w-full"
            />
          </UFormField>
        </div>

        <BaseSlider
          v-model="fontSettings.letterSpacing"
          label="Letter Spacing"
          :min="-0.1"
          :max="0.2"
          :step="0.01"
          unit="em"
        />

        <BaseSlider
          v-model="fontSettings.lineHeight"
          label="Line Height"
          :min="0.8"
          :max="2"
          :step="0.1"
        />
      </div>
    </section>
  </div>
</template>
