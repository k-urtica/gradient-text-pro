<script setup lang="ts">
const stops = defineModel<GradientStop[]>('stops', { required: true });

const emits = defineEmits<{
  removeStop: [id: string];
  addStop: [];
}>();

const reachedMaxStops = computed(() => stops.value.length >= MAX_GRADIENT_STOPS);

const stopEls = useTemplateRef('stopEls');

const handleAddStop = async () => {
  emits('addStop');

  await nextTick();
  const last = stopEls.value?.at(-1);
  last?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <fieldset class="max-h-60 overflow-y-scroll">
    <legend class="mb-1 flex w-full items-center justify-between gap-2 text-sm font-medium">
      Gradient Stops
      <UBadge
        :label="`${stops.length} / ${MAX_GRADIENT_STOPS}`"
        variant="soft"
        size="sm"
        class="tabular-nums"
      />
    </legend>
    <ul class="space-y-2 pb-2">
      <li
        v-for="(stop, index) in stops"
        ref="stopEls"
        :key="stop.id"
        :aria-label="`Gradient Stop ${index + 1}`"
      >
        <GradientStopListItem
          :model-value="stop"
          :display-index="index + 1"
          :removeable="stops.length > 2"
          @update:model-value="(value) => stops[index] = value"
          @remove="$emit('removeStop', $event)"
        />
      </li>
      <li aria-label="Add Gradient Stop">
        <UTooltip
          arrow
          :disabled="!reachedMaxStops"
          text="Maximum stops reached"
        >
          <UButton
            variant="soft"
            icon="i-lucide-plus"
            class="h-16 rounded-lg border border-dashed border-accented"
            block
            :disabled="reachedMaxStops"
            @click="handleAddStop"
          >
            Add Stop
          </UButton>
        </UTooltip>
      </li>
    </ul>
  </fieldset>
</template>
