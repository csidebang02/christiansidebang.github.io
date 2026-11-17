import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// base './' supaya hasil build bisa dipasang di subfolder (mis. GitHub Pages)
export default defineConfig({ base: '/', plugins: [vue()] })
