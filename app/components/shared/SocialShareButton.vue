<script setup lang="ts">
const siteConfig = useSiteConfig();
const { copy, copied } = useClipboard();

const SHARE_URL = siteConfig.url;
const SHARE_TITLE = siteConfig.name;

const encodedUrl = encodeURIComponent(SHARE_URL);
const encodedTitle = encodeURIComponent(SHARE_TITLE);

const snsList = [
  {
    name: 'X',
    icon: 'i-ph-x-logo',
    to: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
  },
  {
    name: 'Facebook',
    icon: 'i-lucide-facebook',
    to: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
  },
  {
    name: 'Reddit',
    icon: 'i-ph-reddit-logo',
    to: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`
  }
] as const;
</script>

<template>
  <UPopover arrow :ui="{ content: 'rounded-xl' }">
    <UTooltip text="Share" arrow>
      <Motion as-child :while-press="{ scale: 0.93 }">
        <UButton
          icon="i-lucide-share-2"
          size="sm"
          color="neutral"
          variant="outline"
          class="rounded-full"
        />
      </Motion>
    </UTooltip>

    <template #content>
      <section class="space-y-5 px-4 py-5">
        <h3 class="font-semibold">✨ Share Gradient Text Pro</h3>

        <div class="flex justify-center gap-3">
          <UTooltip
            v-for="{ name, ...rest } in snsList"
            :key="name"
            :text="name"
            arrow
          >
            <UButton
              v-bind="rest"
              variant="outline"
              size="lg"
              target="_blank"
              :aria-label="`Share on ${name}`"
              class="rounded-full"
            />
          </UTooltip>
        </div>

        <UButtonGroup size="lg">
          <UInput
            :model-value="SHARE_URL"
            readonly
            color="neutral"
            variant="soft"
          />
          <UTooltip text="Copy URL">
            <UButton
              :icon="copied ? 'i-lucide-check' : 'i-lucide-copy'"
              :color="copied ? 'success' : 'neutral'"
              variant="soft"
              aria-label="Copy URL"
              @click="copy(SHARE_URL)"
            />
          </UTooltip>
        </UButtonGroup>
      </section>
    </template>
  </UPopover>
</template>
