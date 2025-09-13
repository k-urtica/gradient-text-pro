export default defineAppConfig({
  ui: {
    colors: {
      primary: 'indigo',
      neutral: 'zinc',
    },

    input: {
      slots: {
        base: 'rounded-lg'
      }
    },

    tooltip: {
      slots: {
        content: 'bg-inverted text-inverted ring-0 rounded-md',
        arrow: 'fill-inverted'
      }
    }
  },
});
