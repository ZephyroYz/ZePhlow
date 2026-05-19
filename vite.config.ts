import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. IMPORTAMOS EL TRADUCTOR

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),       // 2. Este ya estaba: le enseña a Vite cómo procesar React
    tailwindcss(), // 3. ESTE ES EL NUEVO: le enseña a Vite cómo procesar Tailwind v4
  ],
})