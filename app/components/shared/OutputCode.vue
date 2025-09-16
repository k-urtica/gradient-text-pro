<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';

const props = withDefaults(
  defineProps<{
    title?: string;
    code?: string;
  }>(),
  {
    code: '',
  }
);

const { copy, copied } = useClipboard({ legacy: true });

const buttonProps = computed<ButtonProps>(() => {
  return copied.value
    ? {
        label: 'Copied!',
        icon: 'i-lucide-check',
        color: 'success',
        variant: 'subtle',
      }
    : {
        label: 'Copy',
        icon: 'i-lucide-copy',
        color: 'neutral',
        variant: 'outline',
      };
});
</script>

<template>
  <section class="flex min-h-0 flex-col gap-1">
    <div class="flex items-center">
      <BaseIconText
        v-if="title"
        as="h3"
        icon="i-lucide-code"
        class="text-sm font-semibold"
      >
        {{ title }}
      </BaseIconText>

      <UButton
        v-bind="buttonProps"
        size="xs"
        aria-label="Copy code to clipboard"
        class="ms-auto"
        @click="copy(props.code)"
      />
    </div>
    <div
      role="group"
      :aria-label="`Code block${title ? ` for ${title}` : ''}`"
      class="flex min-h-0 flex-1 flex-col rounded-lg border bg-elevated"
    >
      <pre
        class="size-full overflow-auto px-3 py-4 font-mono text-sm whitespace-pre"
        aria-label="Generated code"
      ><code>{{ code }}</code></pre>
    </div>
  </section>
</template>
