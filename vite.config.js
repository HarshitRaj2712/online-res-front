import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: 'localhost',  // You can also use '0.0.0.0' to make it accessible on your network
    port: 5173,         // Change to any port you want
    open: true,         // Automatically opens the browser
  },
})
