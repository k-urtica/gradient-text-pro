<script setup lang="ts">
const { isDocVisible } = useDocToggle();

useSeoMeta({
  title: 'CSS Gradient Text Generator',
  titleTemplate: '%s | Gradient Text Pro',
});
</script>

<template>
  <div class="flex h-(--viewport-content-height) flex-row gap-2.5 p-2">
    <main class="flex min-w-0 flex-1 flex-row gap-2.5">
      <ControlPanel class="hidden lg:block" />
      <div class="flex min-w-0 flex-1 flex-col gap-2 lg:block">
        <ContentPanel v-show="!isDocVisible" />
        <ToolDoc v-show="isDocVisible" />
        <MobileControlPanel class="lg:hidden" />
      </div>
    </main>

    <AsidePanel class="hidden shrink-0 xl:block" />
  </div>
</template>
