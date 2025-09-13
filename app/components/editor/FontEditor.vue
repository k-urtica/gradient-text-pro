<script setup lang="ts">
const fontSettings = defineModel<FontSettings>({ required: true });
</script>

<template>
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
        v-bind="FONT_SIZE_SLIDER_CONFIG"
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
            :items="FONT_FAMILY_ITEMS"
            size="sm"
            class="w-full"
          />
        </UFormField>
      </div>

      <BaseSlider
        v-model="fontSettings.letterSpacing"
        label="Letter Spacing"
        v-bind="LETTER_SPACING_SLIDER_CONFIG"
        unit="em"
      />

      <BaseSlider
        v-model="fontSettings.lineHeight"
        label="Line Height"
        v-bind="LINE_HEIGHT_SLIDER_CONFIG"
      />
    </div>
  </section>
</template>
