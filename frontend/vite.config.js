import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import react from '@vitejs/plugin-react-swc'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
     '/exercises': { target: 'http://localhost:3001'},
     '/arts':       { target: 'http://localhost:3002'}
    }
  }
})
