import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  },
  
  app: {
    head: {
      title: "RadinaFood - No Food No Yummy",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap",
        },
      ],
      script: [
        {
          src: 'https://www.gstatic.com/charts/loader.js',
        },
      ]
    },
  },

  devtools: { enabled: true },
  
  plugins: [
    { src: "~/plugins/apexCharts.js", mode: "client" },
    { src: "~/plugins/animate.js", mode: "client" },
    { src: "~/plugins/worldCloud.js", mode: "client" }, 
    { src: "~/plugins/masonry.js", mode: "client" }, 
    { src: "~/plugins/vuegraph.js", mode: "client" },
  ],
  
  css: ['vuetify/lib/styles/main.sass', '~/assets/main.css'],
  
  build: {
    transpile: ['vuetify'],
  },
  
  modules: [
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-icon'
  ],
  
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'RadinaFood - No Food No Yummy',
      short_name: 'RadinaFood',
      theme_color: '#03045Ef',
      icons: [
        {
          src: 'logo.svg',
          sizes: '192x192',
          type: 'image/svg',
        },
        {
          src: 'logo.svg',
          sizes: '512x512',
          type: 'image/svg',
        },
        {
          src: 'logo.svg',
          sizes: '512x512',
          type: 'image/svg',
          purpose: 'any maskable',
        },
      ],
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
  
  vite: {
    server: {
      fs: {
        allow: [".."]
      }
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    plugins: [
      vuetify({ autoImport: true })
    ],
  },
})
