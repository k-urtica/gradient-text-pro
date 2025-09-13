<script setup lang="ts">
const { text, textStyle, cssOutput } = useGradient();
</script>

<template>
  <PanelContainer class="flex h-full flex-col gap-8 overflow-hidden p-4">
    <div class="flex size-full flex-1 items-center-safe justify-center overflow-y-auto rounded-lg bg-elevated whitespace-pre-wrap">
      <span :style="textStyle" class="text-center">
        {{ text || 'Sample Text' }}
      </span>
    </div>

    <OutputCode title="CSS Output" :code="cssOutput" class="h-40 lg:h-52" />
  </PanelContainer>
</template>
