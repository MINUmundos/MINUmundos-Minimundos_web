import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/Minimundos_web/' // 👈 Required for GitHub Pages
})
