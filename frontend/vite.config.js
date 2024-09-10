import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import react from '@vitejs/plugin-react-swc'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
     '/arts': { target: 'https://portfolio-arts.onrender.com/arts'},
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/arts/, '')
    }
  }
})
