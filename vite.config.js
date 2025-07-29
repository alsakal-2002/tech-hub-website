import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        contact: resolve(__dirname, 'contact.html'),
        blog: resolve(__dirname, 'blog.html'),
        whatILearned: resolve(__dirname, 'what-i-learned.html'),
        reactApp: resolve(__dirname, 'react-app.html'),
        reactMuiApp: resolve(__dirname, 'react-mui-app.html')
      }
    }
  }
})
