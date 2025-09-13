<script setup lang="ts">
import type { RadioGroupProps } from '@nuxt/ui';

const model = defineModel<RadioGroupProps['modelValue']>();

defineProps<{
  items: RadioGroupProps['items'];
  label?: string;
  labelIcon?: string;
}>();
</script>

<template>
  <URadioGroup
    v-model="model"
    :items="items"
    orientation="horizontal"
    indicator="hidden"
    variant="card"
    size="sm"
    :ui="{
      item: 'w-full py-1.5 has-data-[state=checked]:bg-elevated has-data-[state=checked]:border-inverted/40',
      legend: 'text-sm'
    }"
  >
    <template #legend>
      <BaseIconText :icon="labelIcon">
        {{ label }}
      </BaseIconText>
    </template>
  </URadioGroup>
</template>
