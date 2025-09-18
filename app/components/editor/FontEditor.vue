<script setup lang="ts">
const fontSettings = defineModel<FontSettings>('fontSettings', { required: true });

const fontToggles = defineModel<FontToggles>('fontToggles', { required: true });
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

      <div class="grid grid-cols-5 gap-2">
        <UFormField label="Font Weight" class="col-span-2">
          <USelect
            v-model="fontSettings.weight"
            :items="FONT_WEIGHT_ITEMS"
            size="sm"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Font Family" class="col-span-3">
          <USelect
            v-model="fontSettings.family"
            :items="FONT_FAMILY_ITEMS"
            size="sm"
            class="w-full"
          >
            <template #item-label="{ item }">
              <span :style="{ fontFamily: item.value }">{{ item.label }}</span>
            </template>
          </USelect>
        </UFormField>
      </div>

      <div class="flex gap-3">
        <UTooltip text="Toggle letter spacing" arrow>
          <span class="self-end">
            <USwitch
              v-model="fontToggles.letterSpacing"
              size="xs"
              checked-icon="i-lucide-check"
              unchecked-icon="i-lucide-minus"
              aria-label="Toggle letter spacing"
            />
          </span>
        </UTooltip>
        <BaseSlider
          v-model="fontSettings.letterSpacing"
          label="Letter Spacing"
          v-bind="LETTER_SPACING_SLIDER_CONFIG"
          :disabled="!fontToggles.letterSpacing"
          unit="em"
          class="flex-1"
        />
      </div>

      <div class="flex gap-3">
        <UTooltip text="Toggle line height" arrow>
          <span class="self-end">
            <USwitch
              v-model="fontToggles.lineHeight"
              size="xs"
              checked-icon="i-lucide-check"
              unchecked-icon="i-lucide-minus"
              aria-label="Toggle line height"
            />
          </span>
        </UTooltip>
        <BaseSlider
          v-model="fontSettings.lineHeight"
          label="Line Height"
          v-bind="LINE_HEIGHT_SLIDER_CONFIG"
          :disabled="!fontToggles.lineHeight"
          class="flex-1"
        />
      </div>
    </div>
  </section>
</template>
