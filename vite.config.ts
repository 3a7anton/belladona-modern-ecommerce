import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for React and related libraries
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          
          // Animation libraries chunk
          'animation-vendor': ['framer-motion', 'gsap'],
          
          // Smooth scrolling and utilities
          'utils-vendor': ['lenis', 'react-intersection-observer'],
        },
      },
    },
    // Increase chunk size warning limit to 1000kb
    chunkSizeWarningLimit: 1000,
    // Enable source maps for better debugging (optional)
    sourcemap: false,
    // Optimize for modern browsers
    target: 'esnext',
  },
})
