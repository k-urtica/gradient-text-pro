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
  <div class="flex items-center gap-3 rounded-lg border p-3 py-4">
    <input
      v-model="stop.color"
      type="color"
      class="size-7 cursor-pointer rounded-md ring ring-default"
    >
    <div class="flex-1">
      <BaseSlider
        v-model="stop.position"
        :label="`Stop ${displayIndex} Position`"
        unit="%"
        :min="0"
        :max="100"
        :step="1"
      />
    </div>

    <UTooltip text="Remove Stop" arrow>
      <UButton
        icon="i-lucide-trash-2"
        size="xs"
        variant="ghost"
        color="neutral"
        :disabled="!removeable"
        aria-label="Remove Stop"
        @click="$emit('remove', stop.id)"
      />
    </UTooltip>
  </div>
</template>
