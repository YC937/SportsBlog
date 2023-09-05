import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 7574,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:7575',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
