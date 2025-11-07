import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base: '/Nomadly_travel-Itinerary-API-/',
=======
>>>>>>> 0817b53 (Initial commit)
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
