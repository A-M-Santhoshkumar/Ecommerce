// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Ecommerce/', // ✅ must match GitHub Pages path
  plugins: [react()],
})
