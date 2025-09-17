<template>
  <header class="sticky top-0 z-10 h-(--header-height) px-2">
    <PanelContainer
      class="flex h-full items-center rounded-t-none border-t-0 px-4"
    >
      <NuxtLink to="/" class="flex items-center gap-2">
        <img
          src="/logo.webp"
          width="24"
          height="24"
          aria-hidden="true"
        >
        <h1
          class="text-base leading-tight font-black tracking-tight lg:text-lg"
        >
          Gradient Text
          <span class="ms-0.5 rounded-lg bg-inverted px-1 py-px text-inverted">Pro</span>
        </h1>
      </NuxtLink>

      <nav
        aria-label="Header Navigation"
        class="ms-auto flex shrink-0 items-center gap-2.5"
      >
        <DocSwitcher />

        <SocialShareButton />

        <GithubButton />
      </nav>
    </PanelContainer>
  </header>
</template>
