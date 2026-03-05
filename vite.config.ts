import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react({
      babel: {
        plugins: [
          'react-dev-locator',
        ],
      },
    }),
    viteSingleFile()
  ],
  server: {
    open: '/dev.html', // Open dev.html by default when starting dev server
  },
  build: {
    sourcemap: 'hidden',
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'dev.html', // Use dev.html as the input for build
      },
    }
  }
})