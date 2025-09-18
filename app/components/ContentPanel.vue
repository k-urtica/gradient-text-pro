<script setup lang="ts">
const { text, textStyle, cssOutput } = useGradient();

const previewTextEl = useTemplateRef('previewText');
const showGradientBox = ref(false);
</script>

<template>
  <PanelContainer class="flex h-full flex-col gap-6 overflow-hidden p-4">
    <section aria-label="Gradient text preview panel" class="flex size-full min-h-0 flex-1 flex-col rounded-lg bg-elevated">
      <div class="flex size-full flex-col items-center justify-start overflow-y-auto p-3">
        <BoxReveal :revealed="!showGradientBox" :background="textStyle.background" class="my-auto">
          <span ref="previewText" :style="textStyle" class="inline-block text-center whitespace-pre-wrap">
            {{ text || 'Gradient Text Pro' }}
          </span>
        </BoxReveal>
      </div>

      <div class="flex items-center justify-end px-4 pb-2">
        <UTooltip text="Show gradient without text clipping" arrow>
          <span>
            <USwitch
              v-model="showGradientBox"
              label="Show Gradient Box"
              checked-icon="i-lucide-eye"
              unchecked-icon="i-lucide-eye-closed"
              size="sm"
            />
          </span>
        </UTooltip>
      </div>
    </section>

    <div class="space-y-3">
      <OutputCode title="CSS Output" :code="cssOutput" class="h-36 lg:h-44" />
      <ImageExportControls :target="previewTextEl" />
    </div>
  </PanelContainer>
</template>
