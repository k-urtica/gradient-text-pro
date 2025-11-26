<script setup lang="ts">
import type { SliderProps } from '@nuxt/ui';

export interface BaseSliderProps {
  label?: string;
  labelIcon?: string;
  min?: number;
  max?: number;
  step?: number;
  size?: SliderProps['size'];
  unit?: string;
  disabled?: boolean;
}

const model = defineModel<number>({ default: 0 });

withDefaults(defineProps<BaseSliderProps>(), {
  min: 0,
  max: 100,
  step: 1,
  unit: '',
  size: 'xs'
});
</script>

<template>
  <div class="flex items-center justify-between gap-2">
    <UFormField
      :ui="{ container: 'mt-1.5' }"
      class="flex-1"
    >
      <template #label>
        <slot v-if="label || !!$slots.label" name="label">
          <span class="flex items-center gap-1">
            <UIcon v-if="labelIcon" :name="labelIcon" />
            <span>{{ label }}</span>
          </span>
        </slot>
      </template>

      <USlider
        v-model="model"
        :min="min"
        :max="max"
        :step="step"
        :size="size"
        :disabled="disabled"
      />
      <template v-if="!!$slots.help" #help>
        <slot name="help" />
      </template>
    </UFormField>

    <div class="mt-2.5 self-start">
      <UInputNumber
        v-model="model"
        size="xs"
        :min="min"
        :max="max"
        :step="step"
        :decrement="false"
        :increment="false"
        variant="soft"
        class="w-14"
      />
      <span class="ms-0.5 text-xs text-muted">{{ unit }}</span>
    </div>
  </div>
</template>
