import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/BioPackAI-V.1/',
  plugins: [react()],
})