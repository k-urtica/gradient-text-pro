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
}

const model = defineModel<number>({ default: 0 });

const props = withDefaults(defineProps<BaseSliderProps>(), {
  min: 0,
  max: 100,
  step: 1,
  unit: '',
  size: 'xs'
});

const inputValue = ref<string>('');
const isInputFocused = ref(false);

const parseAndClampInput = (inputStr: string): number | undefined => {
  if (!inputStr) return undefined;

  const numValue = Number(inputStr);
  if (Number.isNaN(numValue)) return undefined;

  return Math.max(props.min, Math.min(props.max, numValue));
};

const handleInputChange = () => {
  const clampedValue = parseAndClampInput(inputValue.value);

  if (clampedValue === undefined) return;

  model.value = clampedValue;
};

const handleInputBlur = () => {
  isInputFocused.value = false;
  const clampedValue = parseAndClampInput(inputValue.value);

  if (clampedValue === undefined) {
    // display the last valid model value if input is invalid
    inputValue.value = String(model.value);
    return;
  }
  // Clamp the value to ensure it stays within the defined range
  model.value = clampedValue;
  inputValue.value = String(clampedValue);
};

const handleInputFocus = () => {
  isInputFocused.value = true;
};

watch(model, (newValue) => {
  // UX improvement: update input value only if input is not focused
  if (!isInputFocused.value) {
    inputValue.value = String(newValue);
  }
}, { immediate: true });
</script>

<template>
  <div class="flex items-center justify-between gap-2">
    <UFormField
      :ui="{ container: 'mt-1.5' }"
      class="flex-1"
    >
      <template #label>
        <span class="flex items-center gap-1">
          <UIcon v-if="labelIcon" :name="labelIcon" />
          <span>{{ label }}</span>
        </span>
      </template>

      <USlider
        v-model="model"
        :min="min"
        :max="max"
        :step="step"
        :size="size"
      />
      <template v-if="$slots.help" #help>
        <slot name="help" />
      </template>
    </UFormField>

    <div class="mt-2.5 self-start">
      <UInput
        v-model="inputValue"
        variant="soft"
        size="xs"
        inputmode="numeric"
        :class="[unit ? 'w-16' : 'w-14']"
        :ui="{ base: 'ring-1 ring-default/40' }"
        @focus="handleInputFocus"
        @input="handleInputChange"
        @blur="handleInputBlur"
      >
        <template v-if="unit" #trailing>
          <span class="text-xs text-muted">{{ unit }}</span>
        </template>
      </UInput>
    </div>
  </div>
</template>
