import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// If you deploy to GitHub Pages at https://<user>.github.io/<repo>/, set base to '/<repo>/'.
// For user/organisation page (<user>.github.io) keep base as '/'.
// For Netlify / Vercel / S3+CloudFront keep base as '/'.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH ?? '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1200,
  },
})
