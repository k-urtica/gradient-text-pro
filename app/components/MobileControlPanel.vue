<script setup lang="ts">
const open = ref(false);
</script>

<template>
  <div
    class="flex items-center px-4 py-2"
  >
    <UDrawer
      v-model:open="open"
      handle-only
      :ui="{
        content: 'bg-default/85'
      }"
    >
      <UButton
        icon="i-lucide-settings-2"
        label="Controls"
        variant="subtle"
        block
      />

      <template #content>
        <div class="flex h-full min-h-0 flex-col overflow-y-auto">
          <div class="flex items-center justify-end gap-6 px-5 py-2">
            <ThemeSwitcher />
            <UButton
              color="neutral"
              variant="ghost"
              icon="i-lucide-x"
              aria-label="Close control panel"
              @click="open = false"
            />
          </div>
          <ControlPanelContent class="overflow-y-auto px-5 pb-10" />
        </div>
      </template>
    </UDrawer>
  </div>
</template>
