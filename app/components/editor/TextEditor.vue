<script setup lang="ts">
const text = defineModel<string>({ default: '' });
</script>

<template>
  <section aria-label="Text input settings">
    <BaseIconText
      as="h3"
      icon="i-lucide-type"
      class="mb-2 font-semibold"
    >
      Text Content
    </BaseIconText>

    <div class="space-y-4">
      <UFormField label="Text" hint="Enter your text to apply gradient">
        <UTextarea
          v-model="text"
          placeholder="Your text here..."
          :rows="3"
          resize
          class="w-full"
        />
      </UFormField>
    </div>
  </section>
</template>
