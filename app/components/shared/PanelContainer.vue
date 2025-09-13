<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

withDefaults(defineProps<{
  as?: keyof HTMLElementTagNameMap;
  class?: HTMLAttributes['class'];
}>(), {
  as: 'div'
});
</script>

<template>
  <component :is="as" :class="cn('rounded-md border bg-surface', $props.class)">
    <slot />
  </component>
</template>
