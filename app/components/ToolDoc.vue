<script setup lang="ts">
import markdownContent from '@/docs/guide.mdc?raw';
import '@/assets/markdown.css';

const { toggleDoc } = useDocToggle();
</script>

<template>
  <PanelContainer class="h-full overflow-hidden">
    <article class="h-full overflow-y-auto p-5 lg:p-8">
      <nav class="mb-4 flex justify-end">
        <UButton
          variant="ghost"
          icon="i-lucide-chevron-left"
          size="sm"
          class="rounded-lg"
          @click="toggleDoc"
        >
          Back to Tool
        </UButton>
      </nav>

      <Motion v-bind="fade()">
        <MDC :value="markdownContent" tag="section" class="markdown-body" />
      </Motion>
    </article>
  </PanelContainer>
</template>
