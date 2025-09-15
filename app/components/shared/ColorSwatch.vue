<script setup lang="ts">
const color = defineModel<string>();
</script>

<template>
  <UPopover arrow>
    <UTooltip :text="color" arrow>
      <UButton variant="outline" square aria-label="Select Color">
        <span :style="{ backgroundColor: color }" class="block size-5 rounded-sm ring ring-default" />
      </UButton>
    </UTooltip>

    <template #content>
      <ColorPicker v-model="color" />
    </template>
  </UPopover>
</template>
