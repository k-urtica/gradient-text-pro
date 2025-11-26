<script setup lang="ts">
import type { GradientStop } from '~/composables/useGradient';

const stop = defineModel<GradientStop>({ required: true });

defineProps<{
  displayIndex: number;
  removeable?: boolean;
}>();

defineEmits<{
  remove: [id: string];
}>();
</script>

<template>
  <div class="flex items-center gap-3 rounded-lg border py-4 pr-2 pl-3">
    <ColorSwatch v-model="stop.color" />

    <div class="flex-1">
      <BaseSlider
        v-model="stop.position"
        unit="%"
        :min="0"
        :max="100"
        :step="1"
      >
        <template #label>
          <span class="text-xs">{{ `Stop ${displayIndex} Position` }}</span>
        </template>
      </BaseSlider>
    </div>

    <UTooltip text="Remove Stop" arrow>
      <UButton
        icon="i-lucide-trash-2"
        size="xs"
        variant="link"
        color="neutral"
        :disabled="!removeable"
        aria-label="Remove Stop"
        @click="$emit('remove', stop.id)"
      />
    </UTooltip>
  </div>
</template>
