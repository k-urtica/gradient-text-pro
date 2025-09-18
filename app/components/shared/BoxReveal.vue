<script lang="ts" setup>
import type { MotionProps } from 'motion-v';

interface BoxRevealProps {
  /** Whether the box is revealed or not */
  revealed?: boolean;
  /** The background style for the overlay box */
  background?: string;
  /** Duration of the transition in seconds */
  duration?: number;
  /** Delay before the transition starts in seconds */
  delay?: number;
}

const props = withDefaults(defineProps<BoxRevealProps>(), {
  duration: 0.5,
  delay: 0,
});

const CONTENT_MOTION = {
  visible: {
    initial: { opacity: 0, filter: 'blur(4px)' },
    animate: { opacity: 1, filter: 'blur(0px)' }
  },
  covered: {
    initial: { opacity: 1, filter: 'blur(4px)' },
    animate: { opacity: 0, filter: 'blur(4px)' }
  },
} as const satisfies Record<string, MotionProps>;

const OVERLAY_MOTION = {
  visible: {
    initial: { left: '0%', opacity: 1 },
    animate: { left: '100%', opacity: 0.5 },
  },
  covered: {
    initial: { left: '100%', opacity: 0.5 },
    animate: { left: '0%', opacity: 1 },
  },
} as const satisfies Record<string, MotionProps>;

const motionProps = computed(() => {
  return {
    content: {
      initial: props.revealed ? CONTENT_MOTION.visible.initial : CONTENT_MOTION.covered.initial,
      animate: props.revealed ? CONTENT_MOTION.visible.animate : CONTENT_MOTION.covered.animate,
    },
    overlay: {
      initial: props.revealed ? OVERLAY_MOTION.visible.initial : OVERLAY_MOTION.covered.initial,
      animate: props.revealed ? OVERLAY_MOTION.visible.animate : OVERLAY_MOTION.covered.animate,
    },
  };
});
</script>

<template>
  <div class="relative">
    <Motion
      v-bind="motionProps.content"
      :transition="{ duration, delay: delay + 0.1 }"
    >
      <slot />
    </Motion>

    <Motion
      v-bind="motionProps.overlay"
      :transition="{ duration, delay, type: 'spring', stiffness: 100, damping: 15, mass: 1 }"
      class="overlay-background absolute inset-0 rounded-sm"
    />
  </div>
</template>

<style scoped>
.overlay-background {
  background: v-bind(background);
}
</style>
