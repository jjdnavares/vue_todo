import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import frappeui from 'frappe-ui/vite'
import { lucideIcons } from 'frappe-ui/vite/lucideIcons'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    frappeui(),
    lucideIcons(),
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  optimizeDeps: {
		include: [
      'feather-icons',
      'highlight.js/lib/core',
      'interactjs'
    ],
	},
  build: {
    outDir: `../vue_todo/public/frontend`,
		emptyOutDir: true
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://buildwithhussain.com',
  //       changeOrigin: true,
  //       secure: true,
  //       followRedirects: true
  //     }
  //   }
  // }
})
