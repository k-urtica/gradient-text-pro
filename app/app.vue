<script setup lang="ts"></script>

<template>
  <UApp
    :tooltip="{ delayDuration: 300, skipDelayDuration: 200 }"
  >
    <div class="flex h-dvh flex-col overflow-hidden bg-base-0">
      <AppHeader class="shrink-0" />

      <div class="flex-1">
        <NuxtPage />
      </div>
    </div>
  </UApp>
</template>
