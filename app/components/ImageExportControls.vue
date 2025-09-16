<script setup lang="ts">
const props = defineProps<{
  target: HTMLElement | null;
}>();

const { downloadAsImage } = useScreenshot();

const scaleItems = [
  { label: '1x', value: 1 },
  { label: '1.5x', value: 1.5 },
  { label: '2x', value: 2 },
  { label: '3x', value: 3 }
];

const formatItems = [
  { label: 'PNG', value: 'png' },
  { label: 'WEBP', value: 'webp' },
  { label: 'SVG', value: 'svg' },
] as const satisfies { label: string; value: ScreenshotFormat }[];

const scale = ref(1);
const format = ref<ScreenshotFormat>('png');

const handleExport = async () => {
  if (!props.target) return;

  await downloadAsImage(props.target, { format: format.value, scale: scale.value });
};
</script>

<template>
  <div class="flex items-center justify-end gap-2">
    <UTooltip text="Select image scale" arrow>
      <USelect
        v-model="scale"
        :items="scaleItems"
        size="sm"
        aria-label="Select image scale"
        class="w-20"
      />
    </UTooltip>

    <UTooltip text="Select image format" arrow>
      <USelect
        v-model="format"
        :items="formatItems"
        size="sm"
        aria-label="Select image format"
        class="w-24"
      />
    </UTooltip>

    <UButton
      label="Export as image"
      size="sm"
      icon="i-lucide-download"
      variant="outline"
      @click="handleExport"
    />
  </div>
</template>
