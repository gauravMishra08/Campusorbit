import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.png', 'icon-128x128.png', 'icon-512x512.png', 'astronaut.png', 'Gaurav.png', 'Rashmika.png', 'Saatvik.png', 'Utkarsh.png', 'resources.csv'],
      manifest: {
        name: 'CampusOrbit',
        short_name: 'CampusOrbit',
        description: 'Your all-in-one campus companion for resources, mess menus, events and more',
        theme_color: '#FF6B6B',
        background_color: '#000000',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        categories: ['education', 'productivity', 'social'],
        lang: 'en',
        icons: [
          {
            src: '/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,csv}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          },
          {
            urlPattern: /\.(png|jpg|jpeg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              }
            }
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})