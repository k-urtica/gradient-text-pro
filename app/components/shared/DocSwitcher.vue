<script setup lang="ts">
const { isDocVisible, toggleDoc } = useDocToggle();

const tipText = computed(() => isDocVisible.value ? 'Hide documentation' : 'Show documentation');
</script>

<template>
  <UTooltip :text="tipText" arrow>
    <UButton
      variant="outline"
      size="sm"
      :color="isDocVisible ? 'primary' : 'neutral'"
      :icon="isDocVisible ? 'i-lucide-book-open' : 'i-lucide-book'"
      :aria-label="tipText"
      square
      class="rounded-full lg:px-2.5"
      @click="toggleDoc"
    >
      <span class="hidden lg:block">Docs</span>
    </UButton>
  </UTooltip>
</template>
