import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      /** path */
      { find: "@", replacement: "/src" },
      { find: "@type", replacement: "/src/type" },
      { find: "@page", replacement: "/src/page" },
      { find: "@libs", replacement: "/src/libs" },
      { find: "@components", replacement: "/src/components" },
    ],
  },
})
