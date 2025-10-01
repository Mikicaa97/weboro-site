import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vercel from 'vite-plugin-vercel' // ⬅ dodato

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vercel()], // ⬅ dodato u plugins niz
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ⬅ dodato
    },
  },
  server: {
    port: 5174,
    proxy: {
      '/api': {
        target: 'http://localhost:4242',
        changeOrigin: true,
      },
    }
  }
})
