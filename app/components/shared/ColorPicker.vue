<script setup lang="ts">
import { filterHexInput, normalizeHex } from '~/utils/color';

const color = defineModel<string>();

const inputValue = ref(color.value || '#000000');

watch(color, (newColor) => {
  if (newColor && newColor !== inputValue.value) {
    inputValue.value = newColor;
  }
});

const commitValue = (target: HTMLInputElement) => {
  const normalized = normalizeHex(target.value);
  inputValue.value = normalized;
  color.value = normalized;
};

const handleInput = (e: Event) => {
  if (e.target instanceof HTMLInputElement) {
    const filtered = filterHexInput(e.target.value);
    const withHash = filtered.startsWith('#') ? filtered : `#${filtered}`;
    inputValue.value = withHash;
    e.target.value = withHash; // DOM同期
  }
};

const handleBlur = (e: Event) => {
  if (e.target instanceof HTMLInputElement) {
    commitValue(e.target);
  }
};

const handleKeydownEnter = (e: Event) => {
  if (e.target instanceof HTMLInputElement) {
    commitValue(e.target);
  }
};
</script>

<template>
  <div class="space-y-2 p-2.5">
    <UColorPicker v-model="color" class="select-none" />
    <UFormField label="Hex" size="xs">
      <UInput
        variant="soft"
        size="md"
        :model-value="inputValue"
        class="w-24"
        maxlength="7"
        :ui="{ base: 'ring-1 ring-default tabular-nums' }"
        @input="handleInput"
        @blur="handleBlur"
        @keydown.enter.prevent="handleKeydownEnter"
      />
    </UFormField>
  </div>
</template>
