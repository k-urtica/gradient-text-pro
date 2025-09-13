<script setup lang="ts">
import type { GradientPreset } from '~/composables/useGradient';

defineProps<{
  presets: GradientPreset[];
}>();

const emit = defineEmits<{
  selectPreset: [preset: GradientPreset];
}>();

const { getPresetPreviewStyle } = useGradientPresets();

const handlePresetClick = (preset: GradientPreset) => {
  emit('selectPreset', preset);
};
</script>

<template>
  <div>
    <BaseIconText
      as="h4"
      icon="i-lucide-sparkles"
      class="mb-2 text-sm"
    >
      Presets
    </BaseIconText>

    <div class="overflow-hidden rounded-lg border border-default">
      <ul
        class="grid max-h-28 grid-cols-3 gap-2 overflow-auto p-2 pr-1.5"
        aria-label="Gradient presets"
      >
        <li
          v-for="preset in presets"
          :key="preset.id"
        >
          <UButton
            variant="soft"
            size="sm"
            class="flex size-full flex-col gap-1.5 ring-1 ring-muted/70"
            :aria-label="`Apply preset: ${preset.label}`"
            @click="handlePresetClick(preset)"
          >
            <div
              class="size-4 text-xs font-bold"
              :style="getPresetPreviewStyle(preset)"
            >
              Aa
            </div>
            <span class="text-xs leading-tight font-medium text-toned">
              {{ preset.label }}
            </span>
          </UButton>
        </li>
      </ul>
    </div>
  </div>
</template>
