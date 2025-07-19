import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'CampusOrbit',
        short_name: 'CampusOrbit',
        description: 'Your all-in-one campus companion',
        theme_color: '#FF6B6B',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512x512.png',
            type: 'image/png',
            sizes: '512x512'
          }
        ]
      }
    })
  ]
})