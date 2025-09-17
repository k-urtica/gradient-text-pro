<script setup lang="ts">
import type { GradientPreset } from '~/composables/useGradient';

defineProps<{
  presets: GradientPreset[];
}>();

const emit = defineEmits<{
  selectPreset: [preset: GradientPreset];
}>();

const showSwatch = ref(false);

const { getPresetPreviewStyle } = useGradientPresets();

const handlePresetClick = (preset: GradientPreset) => {
  emit('selectPreset', preset);
};
</script>

<template>
  <div>
    <div class="mb-2 flex items-center justify-between">
      <BaseIconText
        as="h4"
        icon="i-lucide-sparkles"
        class="text-sm"
      >
        Presets
      </BaseIconText>

      <UTooltip text="Toggle preset preview: text or swatch" arrow>
        <span>
          <USwitch
            v-model="showSwatch"
            checked-icon="i-lucide-swatch-book"
            unchecked-icon="i-lucide-type"
            size="xs"
            aria-label="Toggle preset preview: text or swatch"
          />
        </span>
      </UTooltip>
    </div>

    <div class="overflow-hidden rounded-lg border border-default">
      <ul
        class="grid max-h-36 snap-y scroll-pt-2 grid-cols-3 gap-2 overflow-auto p-2 pr-1.5"
        aria-label="Gradient presets"
      >
        <li
          v-for="preset in presets"
          :key="preset.id"
          class="snap-start"
        >
          <UButton
            variant="soft"
            size="sm"
            class="flex size-full h-16 flex-col gap-1.5 ring-1 ring-muted/70"
            :aria-label="`Apply preset: ${preset.label}`"
            @click="handlePresetClick(preset)"
          >
            <div
              aria-hidden="true"
              class="text-xs font-bold"
              :class="[showSwatch ? 'h-4 w-full rounded-sm' : 'size-4']"
              :style="{ ...getPresetPreviewStyle(preset), ...(showSwatch ? NO_TEXT_CLIP : {}) }"
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
