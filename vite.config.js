import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: '0.0.0.0', // allows access from network and Vercel preview
    port: 5173,
    open: true,
    cors: {
      origin: [
        'http://localhost:5173',
        'https://online-res-front.vercel.app'
      ],
      credentials: true,
    },
   }
})
