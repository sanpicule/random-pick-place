import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages (project pages) base path:
  // https://<user>.github.io/<repo>/
  base: '/random-pick-place/',
})
