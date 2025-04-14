import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,        // Exposes it on the local network (same as 0.0.0.0)
    port: 5173,        // Optional: you can change this if needed
  },
})
