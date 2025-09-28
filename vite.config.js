import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/frontend-casa-andina/'   // 👈 nombre EXACTO del repo
})
