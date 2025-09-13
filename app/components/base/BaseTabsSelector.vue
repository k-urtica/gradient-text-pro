<script setup lang="ts">
import type { TabsProps } from '@nuxt/ui';

export interface BaseTabsSelectorProps {
  label?: string;
  labelIcon?: string;
  items: TabsProps['items'];
  size?: TabsProps['size'];
}

const model = defineModel<TabsProps['modelValue']>();

withDefaults(defineProps<BaseTabsSelectorProps>(), {
  size: 'sm',
});
</script>

<template>
  <UFormField>
    <template #label>
      <BaseIconText :icon="labelIcon">
        {{ label }}
      </BaseIconText>
    </template>

    <div class="rounded-lg p-1 ring-1 ring-default">
      <UTabs
        v-model="model"
        :items="items"
        :size="size"
        :content="false"
      />
    </div>
  </UFormField>
</template>
