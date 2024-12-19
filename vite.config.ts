import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Exposes the server to your local network
    port: 3000, // The port to run your dev server on
    strictPort: true, // Ensures the port is fixed and doesn't fall back to another if unavailable
  },
})
