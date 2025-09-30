const SITE_NAME = 'Gradient Text Pro';
const DESCRIPTION = 'Free CSS Gradient Text Generator with OKLCH support - Create stunning gradient text effects with real-time preview and modern color technology.';
const SITE_URL = 'https://gradient-text-pro.web-toolbox.dev';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/scripts',
    'motion-v/nuxt',
    '@nuxtjs/mdc',
  ],

  $production: {
    scripts: {
      registry: {
        googleAdsense: {
          client: 'ca-pub-6155745382628091',
          autoAds: true,
          scriptInput: {
            defer: true,
          },
        },
      },
    },
  },

  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
  ],

  imports: {
    dirs: ['constants'],
  },

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      link: [{ rel: 'icon', href: '/favicon.ico', sizes: '48x48' }],
    },
  },

  css: ['@/assets/main.css'],

  site: {
    name: SITE_NAME,
    url: SITE_URL,
    description: DESCRIPTION,
    defaultLocale: 'en',
  },

  mdc: {
    remarkPlugins: {
      'remark-breaks': {},
    },
    rehypePlugins: {
      'rehype-external-links': {
        options: {
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
        },
      },
    },
  },

  ui: {
    colorMode: true,
    fonts: true,

    theme: {
      defaultVariants: {
        color: 'neutral',
      },
    },
  },

  compatibilityDate: '2025-07-15',

  nitro: {
    routeRules: {
      '*.webp': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    },
    preset: 'cloudflare-module',
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: true,
      routes: ['/', '/sitemap.xml', '/robots.txt'],
    },
  },

  vite: {
    optimizeDeps: {
      entries: ['pages/**/*.vue', 'components/**/*.vue'],
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  fonts: {
    defaults: {
      weights: [400, 500, 600, 700, 900],
    },
  },

  icon: {
    provider: 'iconify',
    clientBundle: {
      scan: true,
    },
    serverBundle: false,
  },

  linkChecker: {
    enabled: false,
  },

  ogImage: {
    enabled: false,
  },

  seo: {
    meta: {
      author: 'K',
      twitterCard: 'summary_large_image',
      ogType: 'website',
    },
    metaDataFiles: true,
  },

  sitemap: {
    autoLastmod: false,
    discoverImages: false,
    sitemaps: false,
  },
});
