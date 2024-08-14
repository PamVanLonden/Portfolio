import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
     '/movies':    { target: 'http://localhost:3000'},
     '/exercises': { target: 'http://localhost:3001'},
     '/arts':       { target: 'http://localhost:3002'}
    }
  }
})
